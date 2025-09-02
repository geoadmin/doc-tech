# Compression

Files between **1 MB** and **10 MB** are automatically compressed during download using `gzip` or `br` based on the `Accept-Encoding` header of the request.
Note that this compression is only done for standard media types (see [File types that CloudFront compresses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html#compressed-content-cloudfront-file-types)).

:::warning Files larger than 10 MB
It is highly recommended to upload files larger than **10 MB** using a compressed media type (see [Supported Media Type](/docs/stac-api/supported-media)).
If this is not possible (e.g., for JSON directly used in a browser application), the file should be either compressed upfront (see below) or split into smaller files.

:::

## Upfront compression using `Content-Encoding`

In the case where you have a file larger than 10 MB that you can't split into multiple files or pack into a compressed media type, then you can use the upfront compression method together with the `Content-Encoding` parameter.

For this, you need to first compress the file using the `gzip` or the `br` compression algorithms, and then use the `Content-Encoding` parameter in the [Create Asset's multipart upload](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/createAssetUpload).

:::tip
In this case the file will always be delivered compressed, which means that the client that downloads the file needs to be compatible with the HTTP compression algorithm specified in the `Content-Encoding` header.
:::
