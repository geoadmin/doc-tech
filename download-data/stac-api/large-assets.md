# Downloading Large Assets (> 50 GB)

Assets larger than **50 GB** cannot be downloaded with a regular HTTP `GET` or `HEAD` request through CloudFront, which enforces a 50 GB object size limit and returns `HTTP 400` for objects above that threshold.

The workaround is to use **HTTP range requests**, which bypass the CloudFront limit by fetching the file in sequential chunks directly from the S3 origin.

The actual download is completed in this steps:

1. Probe the asset
2. Download the file in chunks
3. Optional: Verify SHA‑256 checksum

## Probe the asset

Send a `GET` request with the header `Range: bytes=0-0` to probe the asset.  
The S3 origin responds with `HTTP 206 Partial Content` and includes two useful headers:

| Header              | Value                                                             |
| ------------------- | ----------------------------------------------------------------- |
| `Content-Range`     | `bytes 0-0/<total_size>` — the total size of the object           |
| `x-amz-meta-sha256` | SHA-256 hex digest of the full object (when set by the publisher) |

Example to probe an asset manually with `curl` on Linux:

```bash
curl --silent --show-error --location \
    --header "Range: bytes=0-0" \
    --dump-header - \
    --output /dev/null \
    "https://data.geo.admin.ch/ch.swisstopo.pixelkarte-farbe/pixelkarte-farbe/ch.swisstopo.pixelkarte-farbe_3857_0.5.tar"
```

The response headers will contain the total size and checksum:

```
HTTP/2 206
content-range: bytes 0-0/102265118720
x-amz-meta-sha256: <hex>
...
```

::: tip
`HEAD` requests are **also blocked** by CloudFront for objects > 50 GB. Always use `GET` with a `Range` header to probe asset metadata.
:::

## Download

The script below requires **Python 3.6+ and no third-party packages** (stdlib only). It works on Linux, macOS, and Windows.

**Usage:**

```bash
# Basic usage (auto-detects size and checksum via range probe)
python3 range_download.py "https://data.geo.admin.ch/.../file.tar" /path/to/file.tar

# Custom chunk size 2GB (in MB, default is 20 GB)
python3 range_download.py "https://..." /path/to/file.tar --chunk-size 2048

# Skip the probe if you already know the total size
python3 range_download.py "https://..." /path/to/file.tar --total-size 102265118720
```

**Script (`range_download.py`):**

```python
#!/usr/bin/env python3
"""Download large assets via HTTP range requests, bypassing CDN size limits.

Usage:
    python3 range_download.py <URL> <OUTPUT_FILE> [--chunk-size MB] [--total-size BYTES]

Examples:
    python3 range_download.py "https://data.geo.admin.ch/.../file.tar" /path/to/file.tar
    python3 range_download.py "https://..." /path/to/file.tar --chunk-size 2048
    python3 range_download.py "https://..." /path/to/file.tar --total-size 102265118720
"""

import argparse
import hashlib
import os
import sys
import time
import urllib.error
import urllib.request

DEFAULT_CHUNK_MB = 20 * 1024  # 20 GB
READ_BUFFER = 16 * 1024 * 1024  # 16 MB read buffer for streaming to disk
MAX_ATTEMPTS = 3


def format_size(n):
    for unit in ('B', 'KB', 'MB', 'GB', 'TB'):
        if n < 1024:
            return f'{n:.1f} {unit}'
        n /= 1024
    return f'{n:.1f} PB'


def format_eta(secs):
    secs = int(secs)
    if secs >= 3600:
        return f'{secs // 3600}h {(secs % 3600) // 60}m'
    if secs >= 60:
        return f'{secs // 60}m {secs % 60}s'
    return f'{secs}s'


def probe_asset(url):
    """Probe asset size and checksum via a Range: bytes=0-0 GET request.

    Uses GET (not HEAD) because CloudFront blocks HEAD for objects > 50 GB.
    The S3 origin returns HTTP 206 with:
      Content-Range: bytes 0-0/<total>
      x-amz-meta-sha256: <hex>
    Returns (total_size, sha256_hex_or_None).
    """
    print('Probing asset via range request...')
    req = urllib.request.Request(url, headers={'Range': 'bytes=0-0'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        content_range = resp.headers.get('Content-Range', '')
        sha256 = resp.headers.get('x-amz-meta-sha256', '')

    total_size = None
    if '/' in content_range:
        try:
            total_size = int(content_range.split('/')[-1].strip())
        except ValueError:
            pass

    if total_size is None:
        print(f'ERROR: Could not detect total size from Content-Range header.', file=sys.stderr)
        print(f'       Content-Range received: "{content_range}"', file=sys.stderr)
        print(f'       Use --total-size to provide it manually.', file=sys.stderr)
        sys.exit(1)

    print(f'Total size: {format_size(total_size)} ({total_size} bytes)')
    if sha256:
        print(f'SHA256:     {sha256}')
    else:
        print('SHA256:     (not available in headers)')

    return total_size, sha256 or None


def download_chunk(url, file_handle, offset, end, label):
    chunk_bytes = end - offset + 1
    print(f'  Chunk {label}: bytes {offset}-{end} ({format_size(chunk_bytes)}) ... ',
          end='', flush=True)

    for attempt in range(1, MAX_ATTEMPTS + 1):
        req = urllib.request.Request(url, headers={'Range': f'bytes={offset}-{end}'})
        try:
            with urllib.request.urlopen(req, timeout=300) as resp:
                file_handle.seek(offset)
                while True:
                    data = resp.read(READ_BUFFER)
                    if not data:
                        break
                    file_handle.write(data)
            file_handle.flush()
            return
        except Exception as exc:  # pylint: disable=broad-except
            if attempt < MAX_ATTEMPTS:
                delay = 2 ** attempt
                print(f'\n    Attempt {attempt} failed ({exc}). Retrying in {delay}s...',
                      end=' ', flush=True)
                file_handle.seek(offset)
                file_handle.truncate()
                time.sleep(delay)
            else:
                print(f'\n    All {MAX_ATTEMPTS} attempts failed: {exc}', file=sys.stderr)
                sys.exit(1)


def download_loop(url, output, total_size, chunk_size):
    total_chunks = -(-total_size // chunk_size)  # ceiling division

    print(f'Output:       {output}')
    print(f'Chunk size:   {format_size(chunk_size)}')
    print(f'Total chunks: {total_chunks}')
    print()

    session_start = time.monotonic()
    downloaded = 0

    with open(output, 'wb') as fh:
        for chunk_num in range(1, total_chunks + 1):
            offset = (chunk_num - 1) * chunk_size
            end = min(offset + chunk_size - 1, total_size - 1)
            chunk_bytes = end - offset + 1

            chunk_start = time.monotonic()
            download_chunk(url, fh, offset, end, f'{chunk_num}/{total_chunks}')
            chunk_elapsed = max(time.monotonic() - chunk_start, 0.001)

            speed = chunk_bytes / chunk_elapsed
            downloaded += chunk_bytes

            session_elapsed = max(time.monotonic() - session_start, 0.001)
            overall_speed = downloaded / session_elapsed
            remaining_bytes = total_size - downloaded
            eta = remaining_bytes / overall_speed if overall_speed > 0 else 0
            progress = downloaded * 100 // total_size

            print(
                f'{format_size(speed)}/s | '
                f'{format_size(downloaded)}/{format_size(total_size)} ({progress}%) | '
                f'ETA {format_eta(eta)}'
            )

    print()
    total_elapsed = max(time.monotonic() - session_start, 0.001)
    avg_speed = downloaded / total_elapsed
    print(f'Download complete in {format_eta(total_elapsed)} ({format_size(avg_speed)}/s average)')


def verify_download(output, expected):
    final_size = os.path.getsize(output)
    print(f'Final size: {format_size(final_size)} ({final_size} bytes)')
    if final_size != expected:
        print(f'ERROR: final size {final_size} != expected {expected}.', file=sys.stderr)
        sys.exit(1)
    print('Size OK.')


def verify_checksum(output, expected):
    if not expected:
        print('Checksum: skipped (not available).')
        return

    print('Computing SHA256 (this may take a moment for large files)...')
    sha256 = hashlib.sha256()
    with open(output, 'rb') as fh:
        while True:
            data = fh.read(READ_BUFFER)
            if not data:
                break
            sha256.update(data)
    actual = sha256.hexdigest()

    if actual == expected:
        print(f'SHA256 OK: {actual}')
    else:
        print('ERROR: SHA256 mismatch!', file=sys.stderr)
        print(f'  expected: {expected}', file=sys.stderr)
        print(f'  actual:   {actual}', file=sys.stderr)
        sys.exit(1)


def get_args():
    parser = argparse.ArgumentParser(
        description='Download large assets via HTTP range requests, '
                    'bypassing CDN size limits (e.g. CloudFront 50 GB cap).'
    )
    parser.add_argument('url', help='URL of the asset to download')
    parser.add_argument('output', help='Local output file path')
    parser.add_argument(
        '--chunk-size',
        type=int,
        default=DEFAULT_CHUNK_MB,
        metavar='MB',
        dest='chunk_size_mb',
        help=f'Chunk size in MB (default: {DEFAULT_CHUNK_MB} = 20 GB)'
    )
    parser.add_argument(
        '--total-size',
        type=int,
        default=None,
        metavar='BYTES',
        dest='total_size',
        help='Known total size in bytes (skips range probe)'
    )
    return parser.parse_args()


def main():
    args = get_args()

    if os.path.exists(args.output):
        print(f"ERROR: Output file '{args.output}' already exists. Delete it first.",
              file=sys.stderr)
        sys.exit(1)

    chunk_size = args.chunk_size_mb * 1024 * 1024

    if args.total_size is not None:
        total_size = args.total_size
        sha256 = None
        print(f'Total size (provided): {format_size(total_size)} ({total_size} bytes)')
    else:
        total_size, sha256 = probe_asset(args.url)

    print()
    download_loop(args.url, args.output, total_size, chunk_size)
    print()
    verify_download(args.output, total_size)
    verify_checksum(args.output, sha256)


if __name__ == '__main__':
    main()
```

::: tip Parallel Downloads
The script above downloads chunks sequentially, which is simple and reliable. For faster downloads on high-bandwidth connections, you can parallelize by downloading multiple chunks simultaneously using threads or asyncio.

Since each chunk has a specific byte range and the script uses `file_handle.seek(offset)` before writing, chunks can be written to their correct positions in the file regardless of the order they complete. This allows multiple chunks to download in parallel and write to different parts of the file safely.
:::
