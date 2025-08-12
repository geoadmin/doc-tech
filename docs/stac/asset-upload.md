---
outline: [2, 3]
---

# Asset Updload Management

Asset files are uploaded via the [STAC API](https://data.geo.admin.ch/api/stac/static/spec/v1/api.html) using the API requests described in this chapter.

- [Authentication](./authentication)
- [Compression](#compression)

::: warning
STAC API `v0.9` is being deprecated and will be turned off on 31.3.2026, [learm more](/docs/stac/migrate09-10.md).
:::

:::tip IMPORTANT NOTES

- Files bigger than 10 MB should use compression, see [Compression](/docs/stac/assetupload.html#compression).

- POST/PUT requests require authentication as described in [Authentication](/docs/stac/authentication).
  :::

## Steps to upload assets

Uploading an asset file via the STAC API involves three main steps:

1. **Start a new upload:**

   Use the [create new upload](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Data-Management/operation/putAsset) request. This returns a list of URLs for uploading file parts.

<ApiCodeBlock url="https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads" method="POST" />

<br/>

2. **Upload file parts:**

   Any file that is larger than 5 GB must be split into multiple parts.
   A file part must be at least 5 MB (except for the last one) and at most 5 GB, otherwise the complete operation will fail.
   If the file is less than 5 GB, you will upload it as a single part, but you must still initiate and complete the multipart upload process as described above.

   Use the url(s) returned in step 1 to [upload each part](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/uploadAssetFilePart). You may upload parts in parallel.

  <ApiCodeBlock url="/storage-prefix/{presignedUrl}" method="PUT" />

<br/>

3. **Complete the upload:**

   After all parts are uploaded, use the [complete upload](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/completeMultipartUpload) request to finalize the process. The asset will become available once this step succeeds.

  <ApiCodeBlock url="https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads/{upload_id}/complete" method="POST" />

#### Error Handling

- If an error occurs during upload, you can [abort the upload](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/abortMultipartUpload) and restart the process.

  <ApiCodeBlock url="https://data.geo.admin.ch/api/stac/v1/collections/{collection}/items/{item}/assets/{asset}/uploads/{upload_id}/abort" method="POST" />

- Only one upload can be in progress for a given asset at a time. To start a new upload, first complete or abort any existing upload.  
  Use [list uploads](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/getAssetUploads) to check for uploads in progress.

  <ApiCodeBlock url="http://data.geo.admin.ch/api/stac/v1/collections/{collectionId}/items/{featureId}/assets/{assetId}/uploads" method="GET" />

## Examples

### Multipart upload

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

### Recurrent uploads and error handling

This describes the process in more detail with focus on automated recurrent uploads and error handling.

#### Glossary

- Abort Upload: abort an upload in progress by sending an abort request to the service
- Cancel Upload: cancel the upload iteration without sending an abort request to the service

#### Recurrent upload

If you have recurrent asset uploads, you need to have a proper error handling otherwise the uploads might get stuck.
Asset uploads operation are not stateless but statefull therefore the error handling is important.
Here below is a simple practical example on which errors to handle in case of recurrent asset upload.

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

<img src="../../static/service-stac-upload-process.svg" />
