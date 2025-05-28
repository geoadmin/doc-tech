# Mapbox Vector Tiles

A RESTFul implementation of [Mapbox Vector
Tiles](https://www.mapbox.com/vector-tiles). See
[description](https://www.geo.admin.ch/en/geo-services/geo-services/portrayal-services-web-mapping/vector_tiles_service.html)

The service provides both _tiles_ and _styles_ that the customer can
use.

### GetStyle

A current (latest version) style request is in the following form:

    GET <Scheme>://<ServerName>/styles/<layername>/style.json

example of current maplibre styles of light base map and imagery base
map:

- <https://vectortiles.geo.admin.ch/styles/ch.swisstopo.basemap.vt/style.json>
- <https://vectortiles.geo.admin.ch/styles/ch.swisstopo.lightbasemap.vt/style.json>
- <https://vectortiles.geo.admin.ch/styles/ch.swisstopo.imagerybasemap.vt/style.json>

### GetTile

A tile request is in the following form:

    GET <Scheme>://<ServerName>/tiles/<LayerName>/<version>/<zoomlevel>/<x>/<y>.pbf

example of one pbf tile:

- <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/7/67/44.pbf>
- <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.relief.vt/v1.0.0/7/67/44.pbf>

### GetTileSets

MBTiles for storing tiled map data in SQLite databases for immediate or
offline usage and for efficient transfer. A MBtileSet request is in the
following form:

    GET <Scheme>://<ServerName>/tiles/<LayerName>/<version>/<LayerName>.mbtiles

example of the .mbtiles file:

- <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/ch.swisstopo.base.vt.mbtiles>
- <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.relief.vt/v1.0.0/ch.swisstopo.relief.vt.mbtiles>

### Available datasets and styles as mapbox vector tiles

The list of current datasets and styles is available visiting the
[official service
description](https://www.geo.admin.ch/en/vector-tiles-service-available-services-and-data)

### Metadata Service

Each tileset has a corresponding metatdata <span
class="title-ref">json</span> file that describes the available set of
tiles. The URL of the metadata <span class="title-ref">json</span> file
is :

    GET <Scheme>://<ServerName>/tiles/<LayerName>/<version>.json

example of tileset:

- <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/tiles.json>
- <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.relief.vt/v1.0.0/tiles.json>
