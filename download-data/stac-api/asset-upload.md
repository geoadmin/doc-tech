---
outline: [2, 3]
---

# Asset Upload

To upload an asset file, you need to follow a multi-step process:

1. Create a new upload session
2. Upload the file (in parts)
3. Finalize the upload

The following sections describe each step in detail, including how to set up a recurring upload and common pitfalls to watch out for.

:::tip IMPORTANT NOTES

- POST/PUT requests require [authentication](/download-data/stac-api/authentication).
  :::

## File Splitting

Files smaller than 5 GB can be uploaded as a single part; however, you must still initiate and complete the multipart upload process as described in the example section.

If the file exceeds 5 GB, it must be split into multiple parts. Each part must be at least 5 MB in size - except for the final part- and no part can be larger than 5 GB. Uploads that do not follow these size constraints will fail.

Additionally, files larger than 10 MB should be compressed before uploading; see [Compression](/download-data/stac-api/compression) for guidance.

## Basic Steps

Uploading an asset file via the STAC API involves three main steps:

1. **Start a new upload:**

   Use the [create new upload](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/createAssetUpload) request. This returns a list of URLs for uploading file parts.

    <ApiCodeBlock url="https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads" method="POST" />

<br/>

2. **Upload file parts:**

   Use the presigned URLs returned in step 1 to [upload each part](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/uploadAssetFilePart). You may upload parts in parallel.

    <ApiCodeBlock url="/storage-prefix/{presignedUrl}" method="PUT" />

<br/>

3. **Complete the upload:**

   After all parts are uploaded, use the [complete upload](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/completeMultipartUpload) request to finalize the process. The asset will become available once this step succeeds.

    <ApiCodeBlock url="https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads/{upload_id}/complete" method="POST" />

### Error Handling

- If an error occurs during upload, you can [abort the upload](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/abortMultipartUpload) and restart the process.

  <ApiCodeBlock url="https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads/{upload_id}/abort" method="POST" />

- Only one upload can be in progress for a given asset at a time. To start a new upload, first complete or abort any existing upload.  
  Use [list uploads](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/getAssetUploads) to check for uploads in progress.

  <ApiCodeBlock url="https://data.geo.admin.ch/api/stac/v1/collections/{collectionId}/items/{featureId}/assets/{assetId}/uploads" method="GET" />

### Example: Multipart Upload

An implementation of the above steps in Python:

```python
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

For other examples on how to compute the base64 MD5 of a part, see [AWS examples](https://aws.amazon.com/premiumsupport/knowledge-center/data-integrity-s3/).

## Recurrent Upload

If you have recurrent asset uploads, you need to have proper error handling to prevent uploads from getting stuck, as asset upload operations are stateful and require careful management.

The number of retries should be adjusted based on the upload frequency.

- For low-frequency uploads (e.g., daily), it is advisable to implement at least 3 retries, using exponential backoff time between retries.
- For high-frequency uploads, you may choose to skip retries and instead cancel the current upload, relying on the next scheduled upload as a fallback.

:::tip GLOSSARY

- Abort Upload: abort an upload in progress by sending an abort request to the service
- Cancel Upload: cancel the upload iteration without sending an abort request to the service
  :::

The following example illustrates best practices for handling errors during repeated asset uploads.

1.  **Create Asset Upload**

     <ApiCodeBlock url="https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads" method="POST" />

    Possible Responses:

    | HTTP Response                                                       | Action Required                                                         |
    | ------------------------------------------------------------------- | ----------------------------------------------------------------------- |
    | `201 OK`                                                            | Continue to step 2.                                                     |
    | `400 Bad Request - "Upload already in progress"`                    | Abort the existing upload (see below), then restart step 1.             |
    | `400 Bad Request - other errors`                                    | Cancel upload. Analyze and correct your request before retrying.        |
    | `500 Internal Server Error`                                         | Cancel upload. Report to service administrator (retry usually useless). |
    | `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout` | Retry later. Adjust wait time based on upload rate (minimum 100ms).     |

    If the response is `{"description": "Upload already in progress", "code": 400}`, you should abort the upload.

    **a.** Get the `upload_id` of the upload marked in progress via:

      <ApiCodeBlock url="https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads?status=in-progress" method="GET" />

    **b.** Abort the upload:

     <ApiCodeBlock url="https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads/{upload_id}/abort" method="POST" />

    **c.** Restart the asset upload.

2.  **Upload the parts via the presigned URL from step 1**

      <ApiCodeBlock url="{presigned_url}" method="PUT" />

    Possible Responses:

    | HTTP Response                                                       | Action Required                                                         |
    | ------------------------------------------------------------------- | ----------------------------------------------------------------------- |
    | `200 OK`                                                            | Continue to step 3.                                                     |
    | `400 Bad Request`                                                   | Abort upload                                                            |
    | `500 Internal Server Error`                                         | Cancel upload. Report to service administrator (retry usually useless). |
    | `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout` | Retry step 2 after a short wait (minimum 100ms).                        |

3.  **Complete the upload**

    <ApiCodeBlock url="https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads/{upload_id}/complete" method="POST" />

    Possible Responses:

    | HTTP Response                                                       | Action Required                                                                    |
    | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
    | `200 OK`                                                            | Upload successful.                                                                 |
    | `400 Bad Request`                                                   | Cancel upload                                                                      |
    | `500 Internal Server Error`                                         | Cancel upload. Report to service administrator (retry usually useless).            |
    | `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout` | Service is momentarily not available, wait a short moment, then retry the request. |

    The following figure shows the flow of a multipart upload process.

    <img src="../../static/service-stac-upload-process.svg" />
