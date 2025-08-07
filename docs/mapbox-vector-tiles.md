# Mapbox Vector Tiles

A RESTFul implementation of [Mapbox Vector Tiles](https://www.mapbox.com/vector-tiles).

The service provides both tiles and styles with the following operations:

::: tip Available datasets and styles as Mapbox Vector Tiles

The list of current datasets and styles is available visiting the [official service description](https://www.geo.admin.ch/en/vector-tiles-service-available-services-and-data).
:::

## GetStyle

A current (latest version) style request is in the following form:

<ApiCodeBlock url="https://vectortiles.geo.admin.ch/styles/{layerName}/style.json" method="GET" />

| **Parameter**            | **Description**              |
| ------------------------ | ---------------------------- |
| **layerName (optional)** | Layer to perform the request |

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

## GetTileSets

MBTiles for storing tiled map data in SQLite databases for immediate or offline usage and for efficient transfer.
A MBtileSet request is in the following form:

<ApiCodeBlock url="https://vectortiles.geo.admin.ch/tiles/{layerName}/{version}/{layerName}.mbtiles" method="GET" />

| **Parameter** | **Example**          | **Description**                             |
| ------------- | -------------------- | ------------------------------------------- |
| layerName     | ch.swisstopo.base.vt | The technical name of the vector tile layer |
| version       | v1.0.0               | Version of the tileset                      |

## Metadata Service

Each tileset has a corresponding metatdata json file that describes the available set of tiles.
The URL of the metadata file is :

<!-- GET <Scheme>://<ServerName>/tiles/<LayerName>/<version>.json -->
<ApiCodeBlock url="https://vectortiles.geo.admin.ch/tiles/{layerName}/{version}/tiles.json" method="GET" />

| **Parameter** | **Example**          | **Description**                             |
| ------------- | -------------------- | ------------------------------------------- |
| layerName     | ch.swisstopo.base.vt | The technical name of the vector tile layer |
| version       | v1.0.0               | Version of the tileset                      |

## Examples

**GetStyle** example for light base map:

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

**GetTile** request example for one `.pbf` tile in relief layer:

```http
https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.relief.vt/v1.0.0/7/67/44.pbf
```

<br/>

**GetTileSet** example for `.mbtiles` file in base layer:

```http
https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/ch.swisstopo.base.vt.mbtiles
```

<br/>

**Metadata** example for base layer:

<ExampleCodeBlock
request="curl https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/tiles.json"
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

## Examples: MapLibre

Light Base Map example using MapLibre

<iframe height="300" style="width: 100%;" scrolling="no" title="Maplibre Vector Tiles" src="https://codepen.io/geoadmin/embed/GvgLvj?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/geoadmin/pen/GvgLvj">
  Maplibre Vector Tiles</a> by geoadmin (<a href="https://codepen.io/geoadmin">@geoadmin</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
