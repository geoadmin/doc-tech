# Terrain Service

This service delivers multi-resolution 3D terrain data as quantized mesh tiles, fully compliant with the [Cesium Quantized Mesh 1.0 specification](https://github.com/AnalyticalGraphicsInc/quantized-mesh).
Tiles are organized and served following the [Tile Map Service (TMS) specification](http://wiki.osgeo.org/wiki/Tile_Map_Service_Specification) using a global-geodetic profile (latitude/longitude coordinates),

<ApiCodeBlock url="https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/<Version>/<Time>/<Zoom>/<X>/<Y>.terrain" method="GET" />

Use the following parameters to define your request:

| Parameter  | Example         | Description                                        |
| ---------- | --------------- | -------------------------------------------------- |
| ServerName | 3d.geo.admin.ch |                                                    |
| Version    | v1              | v1 means terrain tiles generated with cesium tiles |
| Time       | 20201203        | Date of tile generation in (ISO-8601).             |
| Zoom       | 12              | Zoom level                                         |
| X          | 4309            | The longitude index                                |
| Y          | 3111            | The latitude index                                 |

An example of a terrain tile request:

```http
curl -o demo.terrain https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/20201203/7/136/98.terrain?v=3924.0.0
```

## Metadata

The `layer.json` file provides metadata that describes the availability and structure of the terrain tiles at a given timestamp.

<ApiCodeBlock url="https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/<Time>/layer.json" method="GET" />

| Parameter       | Example  | Description                                                                                                               |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| Time (optional) | 20201203 | Date of tile generation in (ISO-8601). If no date is provided, it returns the metadata for the most recent terrain tiles. |

Example of a metadata request for the date `20201203`:

<ExampleCodeBlock
request="curl --compressed https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/20201203/layer.json"
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

## Example: Cesium

An example Cesium application using terrain tiles, 3D buildings and WMTS.

<iframe height="600" style="width: 100%;" scrolling="no" title="Geoadmin Terrain, Buildings and WMTS CesiumJS integration" src="https://codepen.io/geoadmin/embed/zBEYGE?default-tab=js%2Cresult&editable=true&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/geoadmin/pen/zBEYGE">
  Geoadmin Terrain, Buildings and WMTS CesiumJS integration</a> by geoadmin (<a href="https://codepen.io/geoadmin">@geoadmin</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
