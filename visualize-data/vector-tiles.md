# Vector Tiles

This service delivers vector map tiles and styles through a RESTful API, implementing the [Mapbox Vector Tiles specification](https://www.mapbox.com/vector-tiles).

::: tip
[The corresponding page on geo.admin.ch](https://www.geo.admin.ch/en/vector-tiles-service-available-services-and-data) lists the available datasets and styles.
:::

## GetStyle

To get the style of certain layer:

<ApiCodeBlock url="https://vectortiles.geo.admin.ch/styles/{layerName}/style.json" method="GET" />

| **Parameter** | **Description**              |
| ------------- | ---------------------------- |
| layerName     | Layer to perform the request |

A GetStyle request for the Light Base Map dataset:

<ExampleCodeBlock
request="curl https://vectortiles.geo.admin.ch/styles/ch.swisstopo.lightbasemap.vt/style.json"
example='{
  "version": 8,
  "id": "0197406a-5d2f-7168-bee5-f191641499b7",
  "name": "lightbasemap_v1.19.0",
  "sources": {
    "relief_v1.0.0": {
      "url": "https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.relief.vt/v1.0.0/tiles.json",
      "type": "vector"
    },
    "base_v1.0.0": {
      "url": "https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/tiles.json",
      "type": "vector"
    }
  },
  "layers": [...],
  "metadata": {...},
  "glyphs": "https://vectortiles.geo.admin.ch/fonts/{fontstack}/{range}.pbf",
  "sprite": "https://vectortiles.geo.admin.ch/styles/ch.swisstopo.lightbasemap.vt/sprite/sprite",
  "bearing": 0,
  "pitch": 0,
  "center": [8.349961425056108, 46.81133904939108],
  "zoom": 7.2512975045452235,
  "transition": {...}
}'
/>

## GetTile

A tile request is in the following form:

<ApiCodeBlock url="https://vectortiles.geo.admin.ch/tiles/{layerName}/{version}/{zoomLevel}/{x}/{y}.pbf" method="GET" />

| **Parameter** | **Example**          | **Description**                             |
| ------------- | -------------------- | ------------------------------------------- |
| layerName     | ch.swisstopo.base.vt | The technical name of the vector tile layer |
| version       | v1.0.0               | Version of the tileset                      |
| zoomLevel     | 7                    | Zoom level (integer)                        |
| x             | 67                   | Tile column (X coordinate in the tile grid) |
| y             | 44                   | Tile row (Y coordinate in the tile grid)    |

A GetTile request for one `.pbf` tile in the Relief dataset:

```http
curl -o demo.pbf https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.relief.vt/v1.0.0/7/67/44.pbf
```

## GetTileSets

MBTiles are used for storing tiled map data in SQLite databases for immediate or offline usage and for efficient transfer.

TileSet request is in the following form:

<ApiCodeBlock url="https://vectortiles.geo.admin.ch/tiles/{layerName}/{version}/{layerName}.mbtiles" method="GET" />

| **Parameter** | **Example**          | **Description**                             |
| ------------- | -------------------- | ------------------------------------------- |
| layerName     | ch.swisstopo.base.vt | The technical name of the vector tile layer |
| version       | v1.0.0               | Version of the tileset                      |

A GetTileSet request for a `.mbtiles` file in the Base Map dataset:

::: warning
The file that is being downloaded in the example below is approximately **900MB** in size.
:::

```http
curl -o demo.mbtiles https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/ch.swisstopo.base.vt.mbtiles
```

## Metadata

Each tileset has a corresponding metadata json file that describes the available set of tiles.
The URL of the metadata file is:

<!-- GET <Scheme>://<ServerName>/tiles/<LayerName>/<version>.json -->
<ApiCodeBlock url="https://vectortiles.geo.admin.ch/tiles/{layerName}/{version}/tiles.json" method="GET" />

| **Parameter** | **Example**          | **Description**                             |
| ------------- | -------------------- | ------------------------------------------- |
| layerName     | ch.swisstopo.base.vt | The technical name of the vector tile layer |
| version       | v1.0.0               | Version of the tileset                      |

A Metadata request for the Base Map dataset:

<ExampleCodeBlock
request="curl --compressed https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/tiles.json"
example='{
  "basename": "tiles/ch.swisstopo.base.vt/v1.0.0",
  "name": "Basiskarte_v1.0.0",
  "description": "A tileset showcasing all SwissTopo layers.",
  "attribution": "© swisstopo",
  "version": "v1.0.0",
  "format": "pbf",
  "minzoom": 0,
  "maxzoom": 14,
  "scale": 1,
  "vector_layers": [...],
  "profile": "mercator",
  "scheme": "xyz",
  "bounds": [...],
  "center": [...],
  "tilejson": "2.0.0",
  "tiles": [
    "https://vectortiles0.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/{z}/{x}/{y}.pbf",
    "https://vectortiles1.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/{z}/{x}/{y}.pbf",
    "https://vectortiles2.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/{z}/{x}/{y}.pbf",
    "https://vectortiles3.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/{z}/{x}/{y}.pbf",
    "https://vectortiles4.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/{z}/{x}/{y}.pbf"
  ]
}
'
/>

## Example: MapLibre

An example using MapLibre to display the Light Base Map:

<iframe src="https://codesandbox.io/embed/d5vm45?view=preview&module=%2Fsrc%2Findex.js&hidenavigation=1" style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;" title="Simple VectorTiles" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

## Example: OpenLayers

Another example that is using OpenLayers' [ol-mapbox-style](https://github.com/openlayers/ol-mapbox-style) library to display the Light Base Map.

<iframe src="https://codesandbox.io/embed/6twfj8?view=preview&module=%2Fsrc%2Findex.js&hidenavigation=1" style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;" title="VectorTiles in OpenLayers" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

The same example but using LV95 frame with OpenLayers:

<iframe src="https://codesandbox.io/embed/nlgnwp?view=preview&module=%2Fsrc%2Findex.js&hidenavigation=1" style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;" title="VectorTiles in OpenLayers in LV95" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
