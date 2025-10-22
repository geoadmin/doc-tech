# 3D Tiles

This service provides 3D tiles through a RESTful API, implementing the [Cesium 3D Tiles specification](https://github.com/CesiumGS/3d-tiles).

<ApiCodeBlock url="https://3d.geo.admin.ch/<LayerName>/<Version>/<Time>/<Z>/<X>/<Y>.b3dm" method="GET" />

Use the following parameters to define your request:

| Parameter | Example                          | Description                                                                                                                                                                             |
| --------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| layerName | ch.swisstopo.swissbuildings3d.3d | The technical name of the 3D layer. Possible values are: `ch.swisstopo.swissbuildings3d.3d`, `ch.swisstopo.swisstlm3d.3d`, `ch.swisstopo.swissnames3d.3d`, `ch.swisstopo.vegetation.3d` |
| Version   | v1                               | API version. `v1` means tiles generated with 3D Tiles                                                                                                                                   |
| Time (optional)      | 20250501                         | Date of tileset generation in ISO-8601 (YYYYMMDD). If you omit this parameter, the most recent tile is returned.                                                                                                                                |
| Z         | 7                                | Zoom level                                                                                                                                                                              |
| X         | 54                               | Tile column index                                                                                                                                                                       |
| Y         | 21                               | Tile row index                                                                                                                                                                          |

A 3D tile request for swissBUILDINGS3D dataset:

```http
curl -o demo.b3dm https://3d.geo.admin.ch/ch.swisstopo.swissbuildings3d.3d/v1/20250501/11/799/503.b3dm
```

## Metadata

The `tileset.json` file describes the available set of tiles.
It can be used directly by [CesiumJS](https://github.com/CesiumGS/cesium).

<ApiCodeBlock url="https://3d.geo.admin.ch/<LayerName>/<Version>/<Time>/tileset.json" method="GET" />


| Parameter       | Example                          | Description                                                                                                                                                                             |
| --------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Time (optional) | 20250728                         | Date of tile generation in ISO-8601 (YYYYMMDD). If you omit this parameter, the most recent tile is returned.                                                                                                                                               |
| layerName       | ch.swisstopo.swissbuildings3d.3d | The technical name of the 3D layer. Possible values are: `ch.swisstopo.swissbuildings3d.3d`, `ch.swisstopo.swisstlm3d.3d`, `ch.swisstopo.swissnames3d.3d`, `ch.swisstopo.vegetation.3d` |

A metadata request for the Vegetation dataset:

<ExampleCodeBlock
request="curl https://3d.geo.admin.ch/ch.swisstopo.vegetation.3d/v1/tileset.json"
example='{
  "asset": {
    "version": "1.0",
    "extras": {
      "ion": {
        "georeferenced": true,
        "movable": false
      }
    }
  },
  "geometricError": 54.7213621044866,
  "root": {
    "boundingVolume": {
      "region": [
        0.10395173048091878, 0.799669540091651, 0.18307746929258154,
        0.83441919811829, -10003.500000067055, 2799.070391970873
      ]
    },
    "geometricError": 54.7213621044866,
    "refine": "ADD",
    "children": [...]
  }
}'
/>

## Example: Cesium

An example of a Cesium application using terrain tiles, 3D buildings and a WMTS layer.

<iframe height="600" style="width: 100%;" scrolling="no" src="https://codepen.io/geoadmin/embed/NPGLwVO?default-tab=js%2Cresult&editable=true&zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
