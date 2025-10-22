# Compression

This page explains how file compression is handled during download and upload with the STAC API.
Efficient compression reduces bandwidth usage and improves load times, especially when working with large assets.

## Compression During Download

To optimize transfer speeds, files between 1 MB and 10 MB are automatically compressed during download if the client supports it.
The compression format - either GZIP (`gzip`) or Brotli (`br`) - is determined by the `Accept-Encoding` header sent with the request.

Files that are already stored in a compressed format are not compressed again during download.

Compression is only applied to standard media types supported by Amazon CloudFront.
For details, refer to the CloudFront documentation on [serving compressed files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html#compressed-content-cloudfront-file-types).

## Compression Before Upload

For files larger than 10 MB, we recommended to use a [compressed media type](/docs/stac-api/supported-media).

If you cannot use a compressed media type, compress the file yourself with `gzip` or `br`.
To have the file delivered later in its compressed form, set the `content_encoding` parameter in the [multipart upload request](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/createAssetUpload) accordingly.
Client applications must support the selected compression format.

If the file remains too large after compression, split it into smaller parts.
