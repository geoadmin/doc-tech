# Compression

Files between **1 MB** and **10 MB** are automatically compressed during download using `gzip` or `br` based on the `Accept-Encoding` header of the request.
But note that this compression is only done for standard Media Type (see [File types that CloudFront compresses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html#compressed-content-cloudfront-file-types)).

:::warning Files bigger than 10 MB
It is highly recommended to upload files bigger than **10 MB** using a compressed media type (see [Supported Media Type](#section/Supported-Media-Type)).
If this not possible (as e.g. for json directly usd in a browser application), the file should be either compressed upfront (see below) or split in smaller files.
:::

## Upfront compression using `Content-Encoding`

In the case where you have a file bigger than 10 MB that you can't split into multiple files or pack into a compressed media type, then you can use the upfront compression method together
with the `Content-Encoding` parameter.

For this, you need to first compress the file using the gzip or br compression algorithm, and then use the `Content-Encoding` parameter in the [Create Asset's multipart upload](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Asset-Upload-Management/operation/createAssetUpload).

:::tip
In this case the file will be always delivered compressed, which means that the client that download the file needs to be compatible with the HTTP Compression algorithm defined in `Content-Encoding` header.
:::
