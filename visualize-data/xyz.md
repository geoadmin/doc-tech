---
outline: [2, 3]
---

# XYZ

The XYZ service provides map tiles based on specified (X, Y) coordinates and a chosen zoom level (Z).

<ApiCodeBlock url="https://wmts.geo.admin.ch/1.0.0/{LayerName}/{StyleName}/{Time}/3857/{z}/{x}/{y}.{FormatExtension}" method="GET" />

:::tip
We recommend using the WMTS over the XYZ service. A WMTS provides predefined tiles like an XYZ service but a WMTS offers more functionality, like additional projections. While XYZ services are supported by most web mapping applications, WMTS is an official OGC standard.
:::

### Supported projections

The XYZ service only offers the WGS84/Pseudo-Mercator projection (EPSG:3857). This is the most commonly used projection in web mapping applications like OSM, Bing or Google Maps.

## Request details

Use the following parameters to define your request:

| Parameter       | Example                    | Explanation                                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Layername       | ch.bfs.arealstatistik-1997 | The technical layer name. See the `<ows:Identifier>` tag of the layer in the [WMTS GetCapabilities document](/visualize-data/wmts.md#getcapabilities).                                                                                                                                                                                                                            |
| StyleName       | default                    | Only `default` is supported.                                                                                                                                                                                                                                                                                                                                                      |
| Time            | 2010, 2010-01              | Date of tile generation in (ISO-8601) or logical value like `current`. A list of available values is provided in the [GetCapabilities](//wmts.geo.admin.ch/EPSG/3857/1.0.0/WMTSCapabilities.xml) document under the \<Dimension\> tag. We recommend to use the value under the \<Default\> tag. Note that these values might change frequently - **check for updates regularly**. |
| z               | 10                         | Zoom level                                                                                                                                                                                                                                                                                                                                                                        |
| x               | 266                        | Tile column (X coordinate in the tile grid)                                                                                                                                                                                                                                                                                                                                       |
| y               | 180                        | Tile row (Y coordinate in the tile grid)                                                                                                                                                                                                                                                                                                                                          |
| FormatExtension | png                        | The image format of the returned tiles. Most layers are provided as "png", only a few exceptions like the raster layers `ch.swisstopo.pixelkarte-*` and `ch.swisstopo.swissimage*` use FormatExtension "jpeg". See the `<Format>` tag in the [GetCapabilities document of the WMTS](https://wmts.geo.admin.ch/EPSG/3857/1.0.0/WMTSCapabilities.xml).                              |

::: warning

The tiles of a given layer might be updated **without** resulting in a new `<Time>` dimension.
If your application caches tiles locally, you need to invalidate your local cache for this layer.
To check the latest change of any layer, use the [Cache Update](/visualize-data/wmts#cache-update) service.

:::

## Examples

### Get a Single Tile

Fetch a single tile for the `ch.swisstopo.pixelkarte-farbe` layer:

```bash
curl -o demo.jpg https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/9/266/180.jpeg
```

The output image:

<img src="https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/9/266/180.jpeg" />

### OpenLayers

An OpenLayers 10 example showing the Base Map layer as XYZ tiles:

<iframe height="600" style="width: 100%;" scrolling="no" src="https://codepen.io/geoadmin/embed/GgpXMyg?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

<br/>

An OpenLayers 10 example showing the SWISSIMAGE layer as XYZ tiles:

<iframe height="600" style="width: 100%;" scrolling="no" src="https://codepen.io/geoadmin/embed/YPyOxoR?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
