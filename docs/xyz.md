# XYZ

The XYZ tile service provides tiles based on a URL template with values substituted in for zoom level and X and Y counts of the tile.
Unlike WMTS that follow the OGC standard, the XYZ tile service is often used in Web Mapping Context and is therefore a de facto standard.

<ApiCodeBlock url="https://wmts.geo.admin.ch/1.0.0/{LayerName}/{StyleName}/{Time}/3857/{z}/{x}/{y}.{FormatExtension}" method="GET" />

:::tip
We encourage users to use WMTS layer service which provides predefined tiles (like an XYZ service) with an option to use a RESTful templated URL or a KVP request and with a variety of projections and grids.
Moreover, using WMTS GetCapabilities provides an up to date Metadata Service for the available layers.
:::

### Supported projections

Unlike WMTS that follow the OGC standard, the XYZ tile service is often used in Web Mapping Context (OSM, Bing, Google Map) and therefore only the WGS84/Pseudo-Mercator (EPSG:3857) is supported.

## Request details

with the following parameters:

| Parameter                 | Example                     | Explanation                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Layername                 | ch.bfs.arealstatistik-1997  | See the WMTS [GetCapabilities](//wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml) document.                                                                                                                                                                                                                                                                                  |
| StyleName                 | default                     | Only **default** is supported.                                                                                                                                                                                                                                                                                                                                            |
| Time                      | 2010, 2010-01               | Date of tile generation in (ISO-8601) or logical value like **current**. A list of available values is provided in the [GetCapabilities](//wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml) document under the \<Dimension\> tag. We recommend to use the value under the \<Default\> tag. Note that these values might change frequently - **check for updates regularly**. |
| TileMatrixSet {z} {x} {y} | 3857 (constant) {z} {x} {y} | EPSG code for Webmercator                                                                                                                                                                                                                                                                                                                                                 |
| FormatExtension           | png                         | Mostly png, except for some raster layer (pixelkarte and swissimage)                                                                                                                                                                                                                                                                                                      |

::: warning

The tiles of a given layer might be updated **without** resulting in a new `<Time\>` dimension.
In case your application is caching tiles locally, you need to invalidate your local cache for this layer.
To check the latest change of any layer, use the [Cache Update](/docs/wmts#cache-update) service.

:::

## Examples

Fetch a single tile:

```bash
curl -o demo.jpg https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/9/266/180.jpeg
display demo.jpg
```

The request will display the following image:

<img src="https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/9/266/180.jpeg" />

## Examples: OpenLayers

An OpenLayers3 application using the pseudo-Mercator projection:

<iframe height="600" style="width: 100%;" scrolling="no" title="WMTS layer (EPSG:3857)" src="https://codepen.io/geoadmin/embed/pyzwwL?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/geoadmin/pen/pyzwwL">
  WMTS layer (EPSG:3857)</a> by geoadmin (<a href="https://codepen.io/geoadmin">@geoadmin</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<br/>

An OpenLayers example showing the Swissimage as XYZ:

<iframe height="600" style="width: 100%;" scrolling="no" title="xyz example" src="https://codepen.io/geoadmin/embed/xxYEwjQ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/geoadmin/pen/xxYEwjQ">
  xyz example</a> by geoadmin (<a href="https://codepen.io/geoadmin">@geoadmin</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
