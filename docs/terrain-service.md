# Terrain Service

A RESTFul implementation of [Cesium Quantized Mesh](https://github.com/AnalyticalGraphicsInc/quantized-mesh) terrain service.
Terrain tiles are served according to the [Tile Map Service (TMS)](http://wiki.osgeo.org/wiki/Tile_Map_Service_Specification) layout and global-geodetic profile.

<ApiCodeBlock url="https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/<Version>/<Time>/<Zoom>/<X>/<Y>.terrain" method="GET" />

## Request Details

### Path Parameters

| Parameter  | Example         | Description                                        |
| ---------- | --------------- | -------------------------------------------------- |
| ServerName | 3d.geo.admin.ch |                                                    |
| Version    | v1              | v1 means terrain tiles generated with cesium tiles |
| Time       | 20201203        | Date of tile generation in (ISO-8601).             |
| Zoom       | 12              | Zoom level                                         |
| X          | 4309            | The longitue index                                 |
| Y          | 3111            | The latitude index                                 |

## Metadata Service

The `layer.json` file determines which terrain tiles are available.

<ApiCodeBlock url="https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/<Time>/layer.json" method="GET" />

| Parameter       | Example  | Description                            |
| --------------- | -------- | -------------------------------------- |
| Time (optional) | 20201203 | Date of tile generation in (ISO-8601). |

## Examples

A terrain tile:

```http
https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/20201203/7/136/98.terrain?v=3924.0.0
```

<br/>

Metadata for the date `20201203`:
<ExampleCodeBlock
request="curl https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/20201203/layer.json"
example='{
  "attribution": "Put something there",
  "available": [...],
  "bounds": [-180, -90, 180, 90],
  "description": "Nice terrains",
  "format": "quantized-mesh-1.0",
  "minzoom": 0,
  "projection": "EPSG:4326",
  "scheme": "tms",
  "tilejson": "2.1.0",
  "tiles": ["{z}/{x}/{y}.terrain?v={version}"],
  "version": "3924.0.0"
}'
/>

## Examples: Cesium

Example Geoadmin Terrain, Buildings and WMTS implementation using Cesium.

<iframe height="600" style="width: 100%;" scrolling="no" title="Geoadmin Terrain, Buildings and WMTS CesiumJS integration" src="https://codepen.io/geoadmin/embed/zBEYGE?default-tab=js%2Cresult&editable=true&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/geoadmin/pen/zBEYGE">
  Geoadmin Terrain, Buildings and WMTS CesiumJS integration</a> by geoadmin (<a href="https://codepen.io/geoadmin">@geoadmin</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
