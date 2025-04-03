## XYZ

XYZ tile layers are layers comprised of multiple tiles. The XYZ tile
service provides tiles based on a URL template with values substituted
in for Zoom Level and X and Y counts of the tile. Unlike WMTS that
follow the OGC standard, the XYZ tile service is often used in Web
Mapping Context and is therefore a de facto standard. The XYZ tile
service is provided with a fixed projection ( EPSG:3857).

> [!TIP]
> We encourage users to use WMTS layer service which provides predefined
> tiles (like an XYZ service) with an option to use a RESTful templated
> URL or a KVP request and with a variety of projections and grids.
> Moreover, using WMTS GetCapabilities provides an up to date Metadata
> Service for the available layers.

### GetTile

```bash
GET <Scheme>://<ServerName>/<ProtocoleVersion>/<LayerName>/<Stylename>/<Time>/<TileMatrixSet>/{z}/{x}/{y}.<FormatExtension>
```

with the following parameters:

| Parameter                 | Example                        | Explanation                                                                                                                                                                                                                                                                                                                                                               |
|---------------------------|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Scheme ServerName         | https wmts\[0-9\].geo.admin.ch | The scheme type                                                                                                                                                                                                                                                                                                                                                           |
| Version                   | 1.0.0                          | WMTS protocol version                                                                                                                                                                                                                                                                                                                                                     |
| Layername                 | ch.bfs.arealstatistik-1997     | See the WMTS [GetCapabilities](//wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml) document.                                                                                                                                                                                                                                                                                  |
| StyleName                 | default                        | Only **default** is supported.                                                                                                                                                                                                                                                                                                                                            |
| Time                      | 2010, 2010-01                  | Date of tile generation in (ISO-8601) or logical value like **current**. A list of available values is provided in the [GetCapabilities](//wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml) document under the \<Dimension\> tag. We recommend to use the value under the \<Default\> tag. Note that these values might change frequently - **check for updates regularly**. |
| TileMatrixSet {z} {x} {y} | 3857 (constant) {z} {x} {y}    | EPSG code for Webmercator                                                                                                                                                                                                                                                                                                                                                 |
| FormatExtension           | png                            | Mostly png, except for some raster layer (pixelkarte and swissimage)                                                                                                                                                                                                                                                                                                      |

::: warning

The tiles of a given layer might be updated **without** resulting in
a new \<Time\> dimension. In case your application is caching tiles
locally, you need to invalidate your local cache for this layer. To
check the latest change of any layer, use the [Cache
Update](#cache-update) service.

:::

### Result

Access to ch.swisstopo.swissimage.

<https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/%7Bz%7D/%7Bx%7D/%7By%7D.jpeg>

### Supported projections

Unlike WMTS that follow the OGC standard, the XYZ tile service are often
used in Web Mapping Context and therefore one projection is supported.

-   WGS84/Pseudo-Mercator (EPSG:3857, as used in OSM, Bing, Google Map)  
    <https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/>**3857**/{z}/{x}/{y}.jpeg

