# Vector Tiles

This service delivers vector map tiles and styles through a RESTful API. The vector tiles are provided according to the [Mapbox Vector Tile Specification](https://mapbox.github.io/vector-tile-spec/) while the map styles implement the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/), ensuring compatibility with MapLibre-based clients and other applications supporting the specification.

## Styles

Use the following endpoint to get a certain style:

<ApiCodeBlock url="https://vectortiles.geo.admin.ch/styles/{layerName}/style.json" method="GET" />

where `layerName` is one of the following values:

- Base Map: `ch.swisstopo.basemap.vt`
- Base Map Winter: `ch.swisstopo.basemap-winter.vt`
- Light Base Map: `ch.swisstopo.lightbasemap.vt`
- Imagery Base Map: `ch.swisstopo.imagerybasemap.vt`

::: tip
See the [corresponding page on geo.admin.ch](https://www.geo.admin.ch/en/vector-tiles-service-available-services-and-data) for more details on the available vector styles.
:::

An example request to get the Light Base Map:

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

## Tiles

Vector tiles and their meta data can be retrieved by specifying the right `layerName` parameter at the endpoints below.
Possible values for `layerName` are:

- Base: `ch.swisstopo.base.vt`
- Relief: `ch.swisstopo.relief.vt`

::: tip
See the [corresponding page on geo.admin.ch](https://www.geo.admin.ch/en/vector-tiles-service-available-services-and-data) for more details on the available vector tilesets.
:::

### Get a Tile

Use the following endpoint to get a specific tile:

<ApiCodeBlock url="https://vectortiles.geo.admin.ch/tiles/{layerName}/{version}/{zoomLevel}/{x}/{y}.pbf" method="GET" />

| **Parameter** | **Example**          | **Description**                             |
| ------------- | -------------------- | ------------------------------------------- |
| layerName     | ch.swisstopo.base.vt | The technical name of the vector tile layer |
| version       | v1.0.0               | Version of the tileset                      |
| zoomLevel     | 7                    | Zoom level (integer)                        |
| x             | 67                   | Tile column (X coordinate in the tile grid) |
| y             | 44                   | Tile row (Y coordinate in the tile grid)    |

An example request for one `.pbf` tile in the Relief tileset:

```http
curl -o demo.pbf https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.relief.vt/v1.0.0/7/67/44.pbf
```

### Get a Tileset

MBTiles are used for storing tiled map data in SQLite databases for immediate or offline usage and for efficient transfer.

A request to get a tileset follows the following pattern:

<ApiCodeBlock url="https://vectortiles.geo.admin.ch/tiles/{layerName}/{version}/{layerName}.mbtiles" method="GET" />

| **Parameter** | **Example**          | **Description**                             |
| ------------- | -------------------- | ------------------------------------------- |
| layerName     | ch.swisstopo.base.vt | The technical name of the vector tile layer |
| version       | v1.0.0               | Version of the tileset                      |

An example request for a `.mbtiles` file in the Base Map dataset:

::: warning
The file in the example below is approximately **900MB** in size.
:::

```http
curl -o demo.mbtiles https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/ch.swisstopo.base.vt.mbtiles
```

### Metadata

Each tileset has a corresponding metadata json file that describes the available set of tiles.

A request to the metadata file looks like this:

<!-- GET <Scheme>://<ServerName>/tiles/<LayerName>/<version>.json -->
<ApiCodeBlock url="https://vectortiles.geo.admin.ch/tiles/{layerName}/{version}/tiles.json" method="GET" />

| **Parameter** | **Example**          | **Description**                             |
| ------------- | -------------------- | ------------------------------------------- |
| layerName     | ch.swisstopo.base.vt | The technical name of the vector tile layer |
| version       | v1.0.0               | Version of the tileset                      |

An example request to get the metadata for the Base tileset:

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

## Examples

### MapLibre

An example using MapLibre to display the Light Base Map:

<iframe src="https://codesandbox.io/embed/d5vm45?view=preview&module=%2Fsrc%2Findex.js&hidenavigation=1" style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;" title="Simple VectorTiles" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

### OpenLayers

Another example that is using OpenLayers' [ol-mapbox-style](https://github.com/openlayers/ol-mapbox-style) library to display the Light Base Map.

<iframe src="https://codesandbox.io/embed/6twfj8?view=preview&module=%2Fsrc%2Findex.js&hidenavigation=1" style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;" title="VectorTiles in OpenLayers" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

The same example but using LV95 frame with OpenLayers:

<iframe src="https://codesandbox.io/embed/nlgnwp?view=preview&module=%2Fsrc%2Findex.js&hidenavigation=1" style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;" title="VectorTiles in OpenLayers in LV95" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
