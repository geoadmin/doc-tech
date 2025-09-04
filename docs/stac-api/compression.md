# Compression

This page explains how file compression is handled during download and upload with the STAC API.
Efficient compression reduces bandwidth usage and improves load times, especially when working with large assets.

## Compression During Download

To optimize transfer speeds, files between 1 MB and 10 MB are automatically compressed during download.
The compression format - either GZIP (`gzip`) or Brotli (`br`) - is determined by the `Accept-Encoding` header sent with the request.

Compression is only applied to standard media types supported by Amazon CloudFront.
For details, refer to the CloudFront documentation on [serving compressed files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html#compressed-content-cloudfront-file-types).

## Compression Before Upload

For files larger than 10 MB, it's recommended to use a [compressed media type](/docs/stac-api/supported-media).
If that is not an option, you can either split the file into smaller parts or compress it manually.

If you compress the file manually using `gzip` or `br`, you must set the `content_encoding` parameter inf the [multipart upload request](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/createAssetUpload) accordingly.
The file will then be delivered in its compressed form, as indicated by the `Content-Encoding` header.
Client applications must be able to handle this compression format.
