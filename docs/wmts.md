# WMTS

A RESTFul implementation of the
[WMTS](http://www.opengeospatial.org/standards/wmts)
[OGC](http://www.opengeospatial.org/) standard. For detailed
information, see [WMTS OGC
standard](http://www.opengeospatial.org/standards/wmts)

<div class="note">

<div class="title">

Note

</div>

Only the RESTFul request encoding to <span
class="title-ref">GetTile</span> is implemented, not the <span
class="title-ref">GetLegend</span> and <span
class="title-ref">GetFeatureInfo</span>. No KVP and SOAP request
encoding is supported.

</div>

### GetCapabilities

The GetCapabilites document provides informations about the service,
along with layer description, both in german and french.

<https://wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml>

<https://wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml?lang=fr>

### GetTile

    GET <Scheme>://<ServerName>/<ProtocoleVersion>/<LayerName>/<Stylename>/<Time>/<TileMatrixSet>/<TileSetId>/<TileRow>/<TileCol>.<FormatExtension>

with the following parameters:

| Parameter                 | Example                        | Explanation                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme ServerName         | https wmts\[0-9\].geo.admin.ch | The scheme type                                                                                                                                                                                                                                                                                                                                                           |
| Version                   | 1.0.0                          | WMTS protocol version                                                                                                                                                                                                                                                                                                                                                     |
| Layername                 | ch.bfs.arealstatistik-1997     | See the WMTS [GetCapabilities](//wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml) document.                                                                                                                                                                                                                                                                                  |
| StyleName                 | default                        | Only **default** is supported.                                                                                                                                                                                                                                                                                                                                            |
| Time                      | 2010, 2010-01                  | Date of tile generation in (ISO-8601) or logical value like **current**. A list of available values is provided in the [GetCapabilities](//wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml) document under the \<Dimension\> tag. We recommend to use the value under the \<Default\> tag. Note that these values might change frequently - **check for updates regularly**. |
| TileMatrixSet             | 2056 (constant)                | EPSG code for LV03/CH1903                                                                                                                                                                                                                                                                                                                                                 |
| TileSetId TileRow TileCol | 22 236 284                     | Zoom level (see below)                                                                                                                                                                                                                                                                                                                                                    |
| FormatExtension           | png                            | Mostly png, except for some raster layer (pixelkarte and swissimage)                                                                                                                                                                                                                                                                                                      |

The _\<TileMatrixSet\>_ **21781** is as follow defined:

    MinX              420000
    MaxX              900000
    MinY               30000
    MaxY              350000
    TileWidth            256

With the _\<tileOrigin\>_ in the top left corner of the bounding box.

<table>
<thead>
<tr class="header">
<th>Resolution [m]</th>
<th>Zoomlevel</th>
<th>Map zoom</th>
<th>Tile width m</th>
<th>Tiles X</th>
<th>Tiles Y</th>
<th>Tiles</th>
<th>Approx. scale at 96 dpi per zoom level</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><blockquote>
<p>4000 3750 3500 3250 3000 2750 2500 2250 2000 1750 1500 1250 1000
750</p>
</blockquote></td>
<td><blockquote>
<p>0 1 2 3 4 5 6 7 8 9 10 11 12 13</p>
</blockquote></td>
<td></td>
<td><blockquote>
<dl>
<dt>1024000</dt>
<dd>
<p>960000 896000 832000 768000 704000 640000 576000 512000 448000 384000
320000 256000 192000</p>
</dd>
</dl>
</blockquote></td>
<td><blockquote>
<p>1 1 1 1 1 1 1 1 1 2 2 2 2 3</p>
</blockquote></td>
<td><blockquote>
<p>1 1 1 1 1 1 1 1 1 1 1 1 2 2</p>
</blockquote></td>
<td><blockquote>
<p>1 1 1 1 1 1 1 1 1 2 2 2 4 6</p>
</blockquote></td>
<td></td>
</tr>
<tr class="even">
<td><blockquote>
<p>650</p>
</blockquote></td>
<td><blockquote>
<p>14</p>
</blockquote></td>
<td><blockquote>
<p>0</p>
</blockquote></td>
<td><blockquote>
<p>166400</p>
</blockquote></td>
<td><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>6</p>
</blockquote></td>
<td><blockquote>
<p>1 : 2'456'694</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>500</p>
</blockquote></td>
<td><blockquote>
<p>15</p>
</blockquote></td>
<td><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>128000</p>
</blockquote></td>
<td><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>12</p>
</blockquote></td>
<td><blockquote>
<p>1 : 1'889'765</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>250</p>
</blockquote></td>
<td><blockquote>
<p>16</p>
</blockquote></td>
<td><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>64000</p>
</blockquote></td>
<td><blockquote>
<p>8</p>
</blockquote></td>
<td><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>40</p>
</blockquote></td>
<td><blockquote>
<p>1 : 944'882</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>100</p>
</blockquote></td>
<td><blockquote>
<p>17</p>
</blockquote></td>
<td><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>25600</p>
</blockquote></td>
<td><blockquote>
<p>19</p>
</blockquote></td>
<td><blockquote>
<p>13</p>
</blockquote></td>
<td><blockquote>
<p>247</p>
</blockquote></td>
<td><blockquote>
<p>1 : 377'953</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>50</p>
</blockquote></td>
<td><blockquote>
<p>18</p>
</blockquote></td>
<td><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>12800</p>
</blockquote></td>
<td><blockquote>
<p>38</p>
</blockquote></td>
<td><blockquote>
<p>25</p>
</blockquote></td>
<td><blockquote>
<p>950</p>
</blockquote></td>
<td><blockquote>
<p>1 : 188'976</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>20</p>
</blockquote></td>
<td><blockquote>
<p>19</p>
</blockquote></td>
<td><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>5120</p>
</blockquote></td>
<td><blockquote>
<p>94</p>
</blockquote></td>
<td><blockquote>
<p>63</p>
</blockquote></td>
<td><blockquote>
<p>5'922</p>
</blockquote></td>
<td><blockquote>
<p>1 : 75'591</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>10</p>
</blockquote></td>
<td><blockquote>
<p>20</p>
</blockquote></td>
<td><blockquote>
<p>6</p>
</blockquote></td>
<td><blockquote>
<p>2560</p>
</blockquote></td>
<td><blockquote>
<p>188</p>
</blockquote></td>
<td><blockquote>
<p>125</p>
</blockquote></td>
<td><blockquote>
<p>23'500</p>
</blockquote></td>
<td><blockquote>
<p>1 : 37'795</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>21</p>
</blockquote></td>
<td><blockquote>
<p>7</p>
</blockquote></td>
<td><blockquote>
<p>1280</p>
</blockquote></td>
<td><blockquote>
<p>375</p>
</blockquote></td>
<td><blockquote>
<p>250</p>
</blockquote></td>
<td><blockquote>
<p>93'750</p>
</blockquote></td>
<td><blockquote>
<p>1 : 18'898</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>2.5</p>
</blockquote></td>
<td><blockquote>
<p>22</p>
</blockquote></td>
<td><blockquote>
<p>8</p>
</blockquote></td>
<td><blockquote>
<p>640</p>
</blockquote></td>
<td><blockquote>
<p>750</p>
</blockquote></td>
<td><blockquote>
<p>500</p>
</blockquote></td>
<td><blockquote>
<p>375'000</p>
</blockquote></td>
<td><blockquote>
<p>1 : 9'449</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>2 1.5</p>
</blockquote></td>
<td><blockquote>
<p>23 24</p>
</blockquote></td>
<td><blockquote>
<p>9</p>
</blockquote></td>
<td><blockquote>
<p>512 384</p>
</blockquote></td>
<td><blockquote>
<p>938 1250</p>
</blockquote></td>
<td><blockquote>
<p>625 834</p>
</blockquote></td>
<td><blockquote>
<p>586'250 1'042'500</p>
</blockquote></td>
<td><blockquote>
<p>1 : 7'559</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>25</p>
</blockquote></td>
<td><blockquote>
<p>10</p>
</blockquote></td>
<td><blockquote>
<p>256</p>
</blockquote></td>
<td><blockquote>
<p>1875</p>
</blockquote></td>
<td><blockquote>
<p>1250</p>
</blockquote></td>
<td><blockquote>
<p>2'343'750</p>
</blockquote></td>
<td><blockquote>
<p>1 : 3'780</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>0.5</p>
</blockquote></td>
<td><blockquote>
<p>26</p>
</blockquote></td>
<td><blockquote>
<p>11</p>
</blockquote></td>
<td><blockquote>
<p>128</p>
</blockquote></td>
<td><blockquote>
<p>3750</p>
</blockquote></td>
<td><blockquote>
<p>2500</p>
</blockquote></td>
<td><blockquote>
<p>9'375'000</p>
</blockquote></td>
<td><blockquote>
<p>1 : 1'890</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>0.25</p>
</blockquote></td>
<td><blockquote>
<p>27</p>
</blockquote></td>
<td><blockquote>
<p>12</p>
</blockquote></td>
<td><blockquote>
<p>64</p>
</blockquote></td>
<td><blockquote>
<p>7500</p>
</blockquote></td>
<td><blockquote>
<p>5000</p>
</blockquote></td>
<td><blockquote>
<p>37'500'000</p>
</blockquote></td>
<td><blockquote>
<p>1 : 945</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>0.1</p>
</blockquote></td>
<td><blockquote>
<p>28</p>
</blockquote></td>
<td><blockquote>
<p>13</p>
</blockquote></td>
<td><blockquote>
<p>25.6</p>
</blockquote></td>
<td><blockquote>
<p>18750</p>
</blockquote></td>
<td><blockquote>
<p>12500</p>
</blockquote></td>
<td><blockquote>
<p>234'375'000</p>
</blockquote></td>
<td><blockquote>
<p>1 : 378</p>
</blockquote></td>
</tr>
</tbody>
</table>

**Notes**

1.  The projection for the tiles is **LV95** (EPSG:2056). Other
    projection are supported, see further down.
2.  The tiles are generated on-the-fly and stored in a cache (hundreds
    of requests per second)
3.  The zoom level 24 (resolution 1.5m) has been generated, but is not
    currently used in the API.
4.  The zoom levels 27 and 28 (resolution 0.25m and 0.1m) are only
    available for a few layers, e.g. swissimage or cadastral web map.
    For the others layers it is only a client zoom (tiles are
    stretched).
5.  You **have** to use the <span
    class="title-ref">\<ResourceURL\></span> to construct the <span
    class="title-ref">GetTile</span> request.
6.  **Axis order**: for historical reasons, EPSG:21781 WMTS tiles use
    the non-standard **row/col** order, while all other projections use
    the usual **col/row** order. However, most desktop GIS allow you to
    either use the advertized order or to override it.
7.  The tiles of a given layer might be updated **withtout** resulting
    in a new \<Time\> dimension in the GetCapabilities dimension. In
    case your application is caching tiles locally, you need to
    invalidate your local cache for this layer. To check the latest
    change of any layer, use the [Cache Update](#cache-update) service.

### Result

A tile.

<http://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/21781/20/58/70.jpeg>

or
<https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/21781/20/58/70.jpeg>

## Cache Update

As noted in the `wmts_description` service, the Tiles of a given
\<Time\> dimension might be updated for technical reasons. If you are
caching Tiles locally, this might result in your cache being outdated.
Use the Cache Update service to query the Date of the last update for a
given layer. If your cache is older than the returned Date, you have to
clear your local cache.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/cacheUpdate

### Example

- The the latest Cache Update for SwissImage Product:
  **https://api3.geo.admin.ch/rest/services/api/MapServer/ch.swisstopo.swissimage-product/cacheUpdate**

## Supported projections

Four projections are supported. The same tiles are offered in four other
_tilematrixsets/projection_.

- LV95/CH1903+ (EPSG:2056)  
  <https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml>

- LV03/CH1903 (EPSG:21781)  
  <https://wmts.geo.admin.ch/EPSG/21781/1.0.0/WMTSCapabilities.xml>

- Plate-Carrée WGS1984 (EPSG:4326, in **lat/lon order**)  
  <https://wmts.geo.admin.ch/EPSG/4326/1.0.0/WMTSCapabilities.xml>

- WGS84/Pseudo-Mercator (EPSG:3857, as used in OSM, Bing, Google Map)  
  <https://wmts.geo.admin.ch/EPSG/3857/1.0.0/WMTSCapabilities.xml>

Note:

- Partly due to a limitation of the WTMS 1.0.0 recommendations, each
  _projection_ has its own _GetCapabilities_ document.
- The same <span class="title-ref">timestamps</span> are available in
  all projection. New <span class="title-ref">timestamp</span> are
  added to the former ones.
- The layer _ch.kantone.cadastralwebmap-farbe_ uses a WMS service as
  its source.
- Note that all layers are available at all scales. You have to check
  for which **tileMatrixSets** a particuliar layer is defined. Your
  WMTS client may either stretch the tiles from the last available
  level or display nothing.

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
| ------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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

- WGS84/Pseudo-Mercator (EPSG:3857, as used in OSM, Bing, Google Map)  
  <https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/>**3857**/{z}/{x}/{y}.jpeg

## Examples

## Fetch a single tile

```bash
curl -o demo.jpg https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/9/266/180.jpeg
display demo.jpg
```

Will display the following image

<img src="https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/9/266/180.jpeg" />

## Using WMTS in OpenLayers

- An OpenLayers3 application using the [pseudo-Mercator
  projection](http://codepen.io/geoadmin/pen/pyzwwL?editors=0010)
- An OpenLayers3 example showing the [Cadastralwebmap as
  WMTS](http://codepen.io/geoadmin/pen/xVKLdV?editors=0010)
- Switzerland is now adopting the new [LV95
  frame](http://codepen.io/geoadmin/pen/GZKEam?editors=0010).
- All [available layers as
  WMTS](http://codepen.io/geoadmin/pen/MyYYXR?editors=0010).

### Example

- An OpenLayers example showing the [Swissimage as
  XYZ](https://codepen.io/geoadmin/pen/xxYEwjQ)
