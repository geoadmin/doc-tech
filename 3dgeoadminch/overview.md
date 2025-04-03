
## Terrain Service

A RESTFul implementation of "[Cesium](http://cesiumjs.org/)" [Quantized
Mesh](https://github.com/AnalyticalGraphicsInc/quantized-mesh) terrain
service. Terrain tiles are served according to the [Tile Map Service
(TMS)](http://wiki.osgeo.org/wiki/Tile_Map_Service_Specification) layout
and global-geodetic profile.

### URL

<https://3d.geo.admin.ch>

### Metadata Service

The <span class="title-ref">layer.json</span> file determines which
terrain tiles are available.

-   <https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/layer.json>
    (alway most recent terrain tiles)
-   <https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/20201203/layer.json>
    (terrain tiles of the date 20201203)

### Parameters

A request is in the form:

    GET https://<ServerName>/ch.swisstopo.terrain.3d/<Version>/<Time>/<Zoom>/<X>/<Y>.<FormatExtension>

with the following parameters:

| Parameter       | Example                            | Explanation                                                          |
|-----------------|------------------------------------|----------------------------------------------------------------------|
| ServerName      | 3d.geo.admin.ch                    |                                                                      |
| Version         | v1                                 | v1 means terrain tiles generated with cesium tiles                   |
| Layername       | ch.swisstopo.terrain.3d (constant) | The name of the terrain layer. (only one terrain layer is available) |
| Time            | 20201203                           | Date of tile generation in (ISO-8601).                               |
| Zoom            | 12                                 | Zoom level (see below)                                               |
| X               | 4309                               | The longitue index                                                   |
| Y               | 3111                               | The latitude index                                                   |
| FormatExtension | terrain                            | The file extension (a gzipped binary terrain file)                   |

### Example

-   A [Terrain
    tile](https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/20201203/7/136/98.terrain?v=3924.0.0)

<div id="tiles3d_description">

------------------------------------------------------------------------

</div>

## 3D Tiles

A RESTFul implementation of "[Cesium](http://cesiumjs.org/)" [3D Tiles
specification](https://github.com/CesiumGS/3d-tiles).

### URL

-   <https://3d.geo.admin.ch>

### Metadata Service

The <span class="title-ref">tileset.json</span> file describes the
available set of tiles. In order to use this service you can use
[CesiumJS](https://github.com/CesiumGS/cesium).

Currently, 3 technical layers (ch.swisstopo.swisstlm3d.3d,
ch.swisstopo.swissnames3d.3d, ch.swisstopo.vegetation.3d) are available
and they contains all available 3D objects.

Most recent 3D tiles:

-   <https://3d.geo.admin.ch/ch.swisstopo.swissbuildings3d.3d/v1/tileset.json>
-   <https://3d.geo.admin.ch/ch.swisstopo.vegetation.3d/v1/tileset.json>

3D tiles of a specific date:

-   <https://3d.geo.admin.ch/ch.swisstopo.swissbuildings3d.3d/v1/20240501/tileset.json>
-   <https://3d.geo.admin.ch/ch.swisstopo.vegetation.3d/v1/20240412/tileset.json>
-   <https://3d.geo.admin.ch/3d-tiles/ch.swisstopo.swissnames3d.3d/20180716/tileset.json>

### Example

-   A [3D
    tile](https://3d.geo.admin.ch/ch.swisstopo.swissbuildings3d.3d/v1/20240501/7/54/21.b3dm)

<div id="vectortiles_description">

------------------------------------------------------------------------

</div>
