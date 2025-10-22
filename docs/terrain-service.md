# Terrain Service

This service delivers multi-resolution 3D terrain data as quantized mesh tiles, fully compliant with the [Cesium Quantized Mesh 1.0 specification](https://github.com/AnalyticalGraphicsInc/quantized-mesh).
Tiles are organized and served following the [Tile Map Service (TMS) specification](http://wiki.osgeo.org/wiki/Tile_Map_Service_Specification) using a global-geodetic profile (latitude/longitude coordinates),

<ApiCodeBlock url="https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/<Version>/<Time>/<Zoom>/<X>/<Y>.terrain" method="GET" />

Use the following parameters to define your request:

| Parameter       | Example         | Description                                        |
| ----------------| --------------- | -------------------------------------------------- |
| ServerName      | 3d.geo.admin.ch |                                                    |
| Version         | v1              | v1 means terrain tiles generated with cesium tiles |
| Time (optional) | 20250101        | Date of tile generation in ISO-8601 (YYYYMMDD). If you omit this parameter, the most recent tile is returned.   |
| Zoom            | 12              | Zoom level                                         |
| X               | 4309            | The longitude index                                |
| Y               | 3111            | The latitude index                                 |

An example of a terrain tile request:

```http
curl -o demo.terrain https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/20250101/11/2130/1550.terrain?v=1.43646.0
```

## Metadata

The `layer.json` file provides metadata that describes the availability and structure of the terrain tiles at a given timestamp.

<ApiCodeBlock url="https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/<Time>/layer.json" method="GET" />



| Parameter       | Example  | Description                                                                                                               |
| --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| Time (optional) | 20250101  | Date of tile generation in ISO-8601 (YYYYMMDD). If you omit this parameter, the most recent metadata is returned. |

Example of a metadata request for the date `20250101`:

<ExampleCodeBlock
request="curl --compressed https://3d.geo.admin.ch/ch.swisstopo.terrain.3d/v1/20250101/layer.json"
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

An example of a Cesium application using terrain tiles, 3D buildings and a WMTS layer.

<iframe height="600" style="width: 100%;" scrolling="no" src="https://codepen.io/geoadmin/embed/NPGLwVO?default-tab=js%2Cresult&editable=true&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
