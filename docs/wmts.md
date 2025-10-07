---
outline: [2, 3]
---

# Web Map Tile Service (WMTS)

A RESTful implementation of the [WMTS OGC Standard](http://www.opengeospatial.org/standards/wmts).

:::warning
We only support the `GetCapabilities` and `GetTile` operation through a RESTful API endpoint. KVP and SOAP encodings are not not available.
:::

## GetCapabilities

The GetCapabilities document provides information about the service, along with layer description, both in German and French.

<ApiCodeBlock url="https://wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml?lang=<Lang>" method="GET" />

| **Parameter**   | **Description**                                               |
| --------------- | ------------------------------------------------------------- |
| Lang (optional) | Specifies the language for the service response. Supported values: `de` (German), `fr` (French), `it` (Italian), `rm` (Rumantsch), `en` (English). Defaults to `de` if not specified. |

### Supported Projections

Tiles are available in four supported projections:

- LV95/CH1903+ (EPSG:2056)  
  <https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml>

- LV03/CH1903 (EPSG:21781)  
  <https://wmts.geo.admin.ch/EPSG/21781/1.0.0/WMTSCapabilities.xml>

- Plate-Carrée WGS1984 (EPSG:4326, in **lat/lon order**)  
  <https://wmts.geo.admin.ch/EPSG/4326/1.0.0/WMTSCapabilities.xml>

- WGS84/Pseudo-Mercator (EPSG:3857, as used in OSM, Bing, Google Map)  
  <https://wmts.geo.admin.ch/EPSG/3857/1.0.0/WMTSCapabilities.xml>

Notes:

- Partly due to a limitation of the WMTS 1.0.0 recommendations, each _projection_ has its own `GetCapabilities` document.
- The same timestamps are available in all projections. New timestamps are added to the former ones.
- The layer _ch.kantone.cadastralwebmap-farbe_ is sourced from a WMS service. For optimal quality and accuracy, use this layer only in EPSG:2056 and EPSG:21781. Using other projections may result in reduced quality due to reprojection limitations.
- All layers are available at all scales. You have to check
  for which **tileMatrixSets** a particular layer is defined. Your
  WMTS client may either stretch the tiles from the last available
  level or display nothing.

## GetTile

<ApiCodeBlock url="http://wmts.geo.admin.ch/<Version>/<LayerBodId>/<StyleName>/<Time>/<TileMatrixSet>/<TileSetId>/<TileRow>/<TileCol>.<FormatExtension>" method="GET" />

Use the following parameters to define your request:

| **Parameter**   | **Example**                | **Description**                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version         | 1.0.0                      | WMTS protocol version                                                                                                                                                                                                                                                                                                                                                  |
| Layername       | ch.bfs.arealstatistik-1997 | The technical layer name. See the `<ows:Identifier>` tag of the layer in the [WMTS GetCapabilities document](#getcapabilities).                                                                                                                                                                                                                                        |
| StyleName       | default                    | Only `default` is supported.                                                                                                                                                                                                                                                                                                                                           |
| Time            | 2010, 2010-01              | Date of tile generation in (ISO-8601) or logical value like `current`. A list of available values is provided in the [GetCapabilities](//wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml) document under the `<Dimension` tag. We recommend to use the value under the \<Default\> tag. Note that these values might change frequently - **check for updates regularly**. |
| TileMatrixSet   | 2056 (constant)            | EPSG code for LV03/CH1903                                                                                                                                                                                                                                                                                                                                              |
| TileSetId       | 22                         | Zoom level (see table below)                                                                                                                                                                                                                                                                                                                                           |
| TileRow         | 236                        |                                                                                                                                                                                                                                                                                                                                                                        |
| TileCol         | 284                        |                                                                                                                                                                                                                                                                                                                                                                        |
| FormatExtension | png                        | Mostly png, except for some raster layer (pixelkarte and SWISSIMAGE)                                                                                                                                                                                                                                                                                                   |

With the `tileOrigin` in the top left corner of the bounding box:

| **Resolution [m]** | **Zoom Level** | **Map zoom** | **Tile width [m]** | **Tiles X** | **Tiles Y** | **Tiles**   | **Approx. scale at 96 dpi per zoom level** |
| ------------------ | -------------- | ------------ | ------------------ | ----------- | ----------- | ----------- | ------------------------------------------ |
| 4000               | 0              | 1024000      | 1                  | 1           | 1           | 1           |                                            |
| 3750               | 1              | 960000       | 1                  | 1           | 1           | 1           |                                            |
| 3500               | 2              | 896000       | 1                  | 1           | 1           | 1           |                                            |
| 3250               | 3              | 832000       | 1                  | 1           | 1           | 1           |                                            |
| 3000               | 4              | 768000       | 1                  | 1           | 1           | 1           |                                            |
| 2750               | 5              | 704000       | 1                  | 1           | 1           | 1           |                                            |
| 2500               | 6              | 640000       | 1                  | 1           | 1           | 1           |                                            |
| 2250               | 7              | 576000       | 1                  | 1           | 1           | 1           |                                            |
| 2000               | 8              | 512000       | 1                  | 1           | 1           | 1           |                                            |
| 1750               | 9              | 448000       | 2                  | 1           | 2           | 2           |                                            |
| 1500               | 10             | 384000       | 2                  | 1           | 2           | 2           |                                            |
| 1250               | 11             | 320000       | 2                  | 1           | 2           | 2           |                                            |
| 1000               | 12             | 256000       | 2                  | 2           | 4           | 4           |                                            |
| 750                | 13             | 192000       | 3                  | 2           | 6           | 6           |                                            |
| 650                | 14             | 0            | 166400             | 3           | 2           | 6           | 1 : 2’456’694                              |
| 500                | 15             | 1            | 128000             | 4           | 3           | 12          | 1 : 1’889’765                              |
| 250                | 16             | 2            | 64000              | 8           | 5           | 40          | 1 : 944’882                                |
| 100                | 17             | 3            | 25600              | 19          | 13          | 247         | 1 : 377’953                                |
| 50                 | 18             | 4            | 12800              | 38          | 25          | 950         | 1 : 188’976                                |
| 20                 | 19             | 5            | 5120               | 94          | 63          | 5’922       | 1 : 75’591                                 |
| 10                 | 20             | 6            | 2560               | 188         | 125         | 23’500      | 1 : 37’795                                 |
| 5                  | 21             | 7            | 1280               | 375         | 250         | 93’750      | 1 : 18’898                                 |
| 2.5                | 22             | 8            | 640                | 750         | 500         | 375’000     | 1 : 9’449                                  |
| 2                  | 23             | 9            | 512                | 938         | 625         | 586’250     | 1 : 7’559                                  |
| 1.5                | 24             |              | 384                | 1250        | 834         | 1’042’500   |                                            |
| 1                  | 25             | 10           | 256                | 1875        | 1250        | 2’343’750   | 1 : 3’780                                  |
| 0.5                | 26             | 11           | 128                | 3750        | 2500        | 9’375’000   | 1 : 1’890                                  |
| 0.25               | 27             | 12           | 64                 | 7500        | 5000        | 37’500’000  | 1 : 945                                    |
| 0.1                | 28             | 13           | 25.6               | 18750       | 12500       | 234’375’000 | 1 : 378                                    |

<small>
Notes:

1.  The projection for the tiles is **LV95** (EPSG:2056). Other projection are available, see [Supported Projections](/docs/wmts.html#supported-projections).
2.  The tiles are generated on-the-fly and stored in a cache.
3.  Zoom level 24, with a resolution of 1.5m, is available in the tile pyramid but it is not currently made available through the API.
4.  The zoom levels 27 and 28 (resolution 0.25m and 0.1m) are only
    available for a few layers, e.g. SWISSIMAGE or cadastral web map.
    For the other layers it is only a client zoom (tiles are
    stretched).
5.  You **have** to use the `ResourceURL` to construct the `GetTile` request.
6.  **Axis order**: for historical reasons, EPSG:21781 WMTS tiles use
    the non-standard **row/col** order, while all other projections use
    the usual **col/row** order. However, most desktop GIS allow you to
    either use the advertised order or to override it.
7.  The tiles of a given layer might be updated **without** resulting
    in a new `<Time>` dimension in the GetCapabilities dimension.
    If your application caches tiles locally, you need to invalidate your local cache for this layer.
    To check the latest change of any layer, use the [Cache Update](#cache-update) service.

</small>

Example of a GetTile request:

```bash
curl -o demo.jpg https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/21781/20/58/70.jpeg
```

The output image:

<img src="https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/21781/20/58/70.jpeg" />

## Cache Update

As noted in the `GetTile` section, the tiles of a given `<Time>` dimension might be updated for technical reasons.
If you are caching tiles locally, this might result in your cache being outdated.
Use the Cache Update service to query the date of the last update for a given layer.
If your cache is older than the returned date, you have to clear your local cache.

<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer/<LayerBodId>/cacheUpdate" method="GET" />

The latest cache update for the product SWISSIMAGE:

<ExampleCodeBlock
request="curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.swisstopo.swissimage-product/cacheUpdate"
example='{
  "cache_type": "wmts_native",
  "cache_update": "2025-06-12T08:44:38"
}'
/>

## Examples: OpenLayers

This OpenLayers example shows how the CadastralWebMap appears differently when loaded using a WMTS compared to a tiled WMS.

<iframe height="600" style="width: 100%;" scrolling="no" src="https://codepen.io/geoadmin/embed/ogjMOay?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

<br/>

Using geo.admin.ch WMTS tiles in the new LV95 frame (EPSG:2056).

<iframe height="600" style="width: 100%;" scrolling="no" src="https://codepen.io/geoadmin/embed/xbwJoMO?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
