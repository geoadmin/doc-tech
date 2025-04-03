# Uploading asset files

Asset files are uploaded via the STAC API using the API requests described in this chapter.

- [Authentication](./authentication)
- [Compression](#compression)
- [Example](#example)

::: warning

***IMPORTANT NOTES:***
*Files bigger than 10 MB should use compression, see [Compression](#section/Compression)*

:::

## Basic Steps to upload assets

To upload an assets file there are generally three steps involved:

- Create new upload process
- Upload parts/files
- Complete upload process

Any file that is larger than 5 GB must be split into multiple parts. A file part must be at
least 5 MB except for the last one and at most 5 GB, otherwise the complete operation will fail.
If the file is less that 5 GB, you will only upload a single part, but must still start and complete the process as with multiple parts.

(1) Use the [create new upload](#tag/Asset-Upload-Management/operation/createAssetUpload) request to start a new upload.
It will return a list of urls.

(2) Use the urls to [upload asset file part](#tag/Asset-Upload-Management/operation/uploadAssetFilePart). Do this for each file part. You may also upload multiple parts in parallel.

(3) Once all parts have been uploaded, execute the [complete the upload](#tag/Asset-Upload-Management/operation/completeMultipartUpload) request.
The new asset file be available to users after you have successfully completed the upload.

If any errors happen during the upload process, you can [abort the upload](#tag/Asset-Upload-Management/operation/abortMultipartUpload)
and restart the process.

Multiple parts (2) can be upload concurrently, but you cannot create a new upload (1) while another is still in progress.
If you wish to start a new upload you must first complete or abort any existing upload that is in progress.
Use [list uploads](#tag/Asset-Upload-Management/operation/getAssetUploads) to see if any uploads
are in progress.

## Detailed example of asset upload

This describes the process in more detail with focus on automated recurring uploads and error handling.

### Glossary

- Abort Upload: abort an upload in progress by sending an abort request to the service
- Cancel Upload: cancel the upload iteration without sending an abort request to the service

### Recurrent upload

If you have recurrent asset uploads, you need to have a proper error handling otherwise the uploads might get stuck. Asset uploads operation are not stateless but statefull therefore the error handling is important. Here below is a simple practical example on which errors to handle in case of recurrent asset upload.

Note this example is only recommended if the upload is recurrent (for example every hour). The number of retries below depends on the upload frequency, if the upload frequency is daily then you might want to have at least 3 retries with some exponential backoff time between each retries, in opposite if the upload is done at high frequency you might skip the retries and simply cancel the upload, using the next upload iteration as retry.

1. Create Asset Upload

    ```text
    POST https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads
    ```

    - `201 OK` => Continue to step 2.
    - `400 Bad Request`
        - Response is `{"description": "Upload already in progress", "code": 400}` => Abort the upload
            - To do so first get the `upload_id` of the `in-progress` upload via

                ```text
                GET https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads?status=in-progress
                ```

            - Then using this id abort the upload

                ```text
                POST https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads/{upload_id}/abort
                ```

            - Then restart the step 1.
        - Another `400 Bad Request` => Cancel upload

        Your request is not correct, analyze your request and correct it before retrying the step 1.

    - `500 Internal Server Error` => Cancel upload

        This is generally an application crash and should be notify to the service administrator, a retry would usually be useless, simply cancel the upload.
    - `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout` => Retry

        Service is momentarily not available, wait a short amount of time and retry step 1. the amount of time to wait and the number of retries depends on the upload rate, but a minimum wait time of 100ms is recommended.
2. Upload the parts via the presigned URL

    ```text
    PUT {presigned_url}
    ```

    - `200 OK` => Continue to step 3.
    - `400 Bad Request` => Abort upload

        Abort upload using the current `upload_id` and contact service administrator.

        ```text
        POST https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads/{upload_id}/abort
        ```

    - `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout` => Retry

        Retry step 2. with a short wait time (min 100ms).

3. Complete the upload

    ```text
    POST https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads/{upload_id}/complete
    ```

    - `200 OK` => Upload successful
    - `400 Bad Request` => Cancel upload

        Your request is invalid/incorrect, you need to cancel the upload script and verify its correctness.
    - `500 Internal Server Error` => Cancel upload

        This is generally an application crash and should be notify to the service administrator, a retry would usually be useless, simply cancel the upload.
    - `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout` => Retry

        Service is momentarily not available, wait a short moment (100ms), then retry the request.

The following figure shows the flow of a multipart upload process.
![diagram](https://data.geo.admin.ch/api/stac/static/assets/service-stac-upload-process.svg)


## Authentication

POST/PUT requests require authentication as described in [here](#tag/Authentication).

## Compression

Files between *1 MB* and *10 MB* are automatically compressed during download using *gzip* or
*br* based on the `Accept-Encoding` header of the request. But note that this compression is
only done for standard Media Type (see [File types that CloudFront compresses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html#compressed-content-cloudfront-file-types)).

<span style="color: red">It is highly recommended to upload files bigger than *10 MB* using
a compressed media type (see [Supported Media Type](#section/Supported-Media-Type)) !
If this not possible (as e.g. for json directly usd in a browser application), the file should
be either compressed upfront (see below) or split in smaller files.</span>

### Upfront Compression using `content_encoding`

In the case where you have a file bigger than 10 MB that you can't split into multiple files
or pack into a compressed media type, then you can use the upfront compression method together
with the `content_encoding` parameter.

For this you need to first compress the file using gzip or br compression algorithm and then
use the `content_encoding` parameter in the [Create Asset's multipart upload](#tag/Asset-Upload-Management/operation/createAssetUpload)

***NOTES:***
- In this case the file will be always delivered compressed, which means that the client that
download the file needs to be compatible with the HTTP Compression algorithm defined in
`Content-Encoding` header.

## Example

```python:line-numbers
import os
import hashlib
from base64 import b64encode

import requests
import multihash

# variables
scheme = 'https'
hostname = 'data.geo.admin.ch'
collection = 'ch.swisstopo.pixelkarte-farbe-pk200.noscale'
item = 'smr200-200-4-2016'
asset = 'smr200-200-4-2016-2056-kgrs-10.tiff'
asset_path = f'collections/{collection}/items/{item}/assets/{asset}'
user = os.environ.get('STAC_USER', 'unknown-user')
password = os.environ.get('STAC_PASSWORD', 'unknown-password')

with open('smr200-200-4-2016-2056-kgrs-10.tiff', 'rb') as fd:
data = fd.read()

checksum_multihash = multihash.to_hex_string(multihash.encode(hashlib.sha256(data).digest(), 'sha2-256'))
md5 = b64encode(hashlib.md5(data).digest()).decode('utf-8')

# 1. Create a multipart upload
response = requests.post(
f"{scheme}://{hostname}/api/stac/v1/{asset_path}/uploads",
auth=(user, password),
json={
    "number_parts": 1,
    "md5_parts": [{
    "part_number": 1,
    "md5": md5
    }],
    "file:checksum": checksum_multihash
}
)
upload_id = response.json()['upload_id']

# 2. Upload the part using the presigned url
response = requests.put(response.json()['urls'][0]['url'], data=data, headers={'Content-MD5': md5})
etag = response.headers['ETag']

# 3. Complete the upload
response = requests.post(
f"{scheme}://{hostname}/api/stac/v1/{asset_path}/uploads/{upload_id}/complete",
auth=(user, password),
json={'parts': [{'etag': etag, 'part_number': 1}]}
)
```

See https://aws.amazon.com/premiumsupport/knowledge-center/data-integrity-s3/ for other examples on how to compute the base64 MD5 of a part.
