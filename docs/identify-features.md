# Identify Features

This service can be used to discover features at a specific location.
Here is a [complete list of
layers](../../../api/faq/index.html#which-layers-have-a-tooltip) for
which this service is available.

<Suspense>
<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer/identify" method="GET" />
</Suspense>

::: tip
No more than 50 features can be retrieved per request.
:::

## Request Details

To interact with the Layers Attributes service, you need to provide specific parameters in your request.
This endpoint only has **Query Parameters** to modify the behavior of the request, some are required and some are optional.

### Query Parameters

| **Parameter**                        | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **geometry (required)**              | The geometry to identify on. The geometry is specified by the geometry type. This parameter is specified as a separated list of coordinates. The simple syntax (comma-separated list of coordinates) and the complex one can be used. ([ESRI syntax for geometries](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#//02r3000000n1000000))                                                                      |
| **geometryType (required)**          | The type of geometry to identify on. Supported values are: `esriGeometryPoint`, `esriGeometryPolyline`, `esriGeometryPolygon`, or `esriGeometryEnvelope`.                                                                                                                                                                                                                                                                      |
| **layers (optional)**                | The layers to perform the identify operation on. By default, query all the layers in the GeoAdmin API. Notation: `all:"comma-separated list of technical layer names"`.                                                                                                                                                                                                                                                        |
| **tolerance (required)**             | The tolerance in pixels around the specified geometry. This parameter is used to create a buffer around the geometry. Therefore, a tolerance of `0` deactivates the buffer creation.                                                                                                                                                                                                                                           |
| **mapExtent (required/optional)**    | The extent of the map (minx, miny, maxx, maxy). Optional if `tolerance=0`. Defaults to `0,0,0,0`. The `mapExtent` and the `imageDisplay` parameters are used by the server to calculate the resolution or scale.                                                                                                                                                                                                               |
| **imageDisplay (required/optional)** | The screen image display parameters (width, height, and dpi) of the map. The `mapExtent` and `imageDisplay` parameters are used by the server to calculate the distance on the map to search based on the tolerance in screen pixels. Optional if `tolerance=0`. Defaults to `0,0,0`. The combination of `mapExtent` and `imageDisplay` is used to compute a resolution or scale. Some layers have scale-dependent geometries. |
| **returnGeometry (optional)**        | This parameter defines whether the geometry is returned or not. Defaults to `true`.                                                                                                                                                                                                                                                                                                                                            |
| **geometryFormat (optional)**        | Returned geometry format. Defaults to ESRI geometry format. Supported values are: `esrijson` or `geojson`.                                                                                                                                                                                                                                                                                                                     |
| **offset (optional)**                | Offset for the first record (if more than 50 records).                                                                                                                                                                                                                                                                                                                                                                         |
| **sr (optional)**                    | The spatial reference. Supported values: `21781` (LV03), `2056` (LV95), `4326` (WGS84), and `3857` (Web Pseudo-Mercator). Defaults to `21781`.                                                                                                                                                                                                                                                                                 |
| **lang (optional)**                  | The language. Supported values: `de`, `fr`, `it`, `rm`, `en`. Defaults to `de`.                                                                                                                                                                                                                                                                                                                                                |
| **layerDefs (optional)**             | Filter features with an expression. Syntax: `{ "<layerId>" : "<layerDef1>" }` where `<layerId>` must correspond to the layer specified in `layers`.                                                                                                                                                                                                                                                                            |
| **callback (optional)**              | The name of the callback function.                                                                                                                                                                                                                                                                                                                                                                                             |

### Tolerance, mapExtent and imageDisplay

If `tolerance=0`, `imageDisplay` and `mapExtent` are generaly not needed, except to get models which are scale dependant, e.g. displaying points at smaller scales and polygons at larger one. If using `tolerance>0`, both `imageDisplay` and `mapExtent` must be set to meaningfull values. As the `tolerance` is in pixels, these value are used to convert it to map units, _i.e._ meters.

The following table summarize the various combinations:

| **Tolerance** | `imageDisplay=0,0,0` `mapExtent=0,0,0,0` | `imageDisplay=1,1,1` `mapExtent=1,1,1,1` |
| ------------- | ---------------------------------------- | ---------------------------------------- |
| `tolerance=0` | No buffer & no scale                     | No buffer, but scale                     |
| `tolerance>0` | Forbidden                                | Buffer & scale                           |

### Filters

You may filter by attributes with `layerDefs` on [queryable layers](../api/faq/index.html#which-layers-are-queryable).

To check which attributes are available, their types and examples values for a given searchable layer, you may use the [attributes services](/docs/layers-attributes).

For instance, the layer
**ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill** has the
following attributes:

::: details Layer attributes

```sh
$ curl http://api3.geo.admin.ch/rest/services/api/MapServer/ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill
```

<br>

```json
{
  "id": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill",
  "name": "Municipal boundaries",
  "fields": [
    {
      "name": "gde_hist_id",
      "type": "INTEGER",
      "alias": "Historicised number",
      "values": [11348, 11742, 11801, 16656, 16657]
    },
    {
      "name": "gemflaeche",
      "type": "FLOAT",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.gemflaeche",
      "values": [
        741.0293752097668, 790.3765148986257, 1014, 1060.9729429022232, 1917
      ]
    },
    {
      "name": "jahr",
      "type": "INTEGER",
      "alias": "Year",
      "values": [1850, 1851, 1852, 2024]
    },
    {
      "name": "link_it",
      "type": "VARCHAR",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.link_it",
      "values": [
        "https://www.agvchapp.bfs.admin.ch/it/communes/results?BfsNr=1&EntriesFrom=12.09.1848&EntriesTo=14.11.1976&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/it/communes/results?BfsNr=2&EntriesFrom=12.09.1848&EntriesTo=01.01.2023&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/it/communes/results?BfsNr=3&EntriesFrom=12.09.1848&EntriesTo=01.01.2023&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/it/communes/results?BfsNr=62&EntriesFrom=01.01.2024&EntriesTo=01.01.2024&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/it/communes/results?BfsNr=64&EntriesFrom=01.01.2024&EntriesTo=01.01.2024&IncludeUnassignedEntities=True"
      ]
    },
    {
      "name": "objektart_lookup",
      "type": "VARCHAR",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.objektart_lookup",
      "values": [
        "gemeindefreies_gebiet",
        "gemeindegebiet",
        "politische_gemeinde"
      ]
    },
    {
      "name": "id",
      "type": "VARCHAR",
      "alias": "BFS-Nummer",
      "values": ["11348-1850", "11742-1850", "11801-1850", "62-2024", "64-2024"]
    },
    {
      "name": "perimeter",
      "type": "FLOAT",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.perimeter",
      "values": [
        14587.478508754233, 15685.832546628937, 18345.287903557957,
        20889.64177023718, 27552.74730548829
      ]
    },
    {
      "name": "gde_nr",
      "type": "INTEGER",
      "alias": "SFSO municipality number",
      "values": [1, 2, 3, 62, 64]
    },
    {
      "name": "link_fr",
      "type": "VARCHAR",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.link_fr",
      "values": [
        "https://www.agvchapp.bfs.admin.ch/fr/communes/results?BfsNr=1&EntriesFrom=12.09.1848&EntriesTo=14.11.1976&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/fr/communes/results?BfsNr=2&EntriesFrom=12.09.1848&EntriesTo=01.01.2023&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/fr/communes/results?BfsNr=3&EntriesFrom=12.09.1848&EntriesTo=01.01.2023&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/fr/communes/results?BfsNr=62&EntriesFrom=01.01.2024&EntriesTo=01.01.2024&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/fr/communes/results?BfsNr=64&EntriesFrom=01.01.2024&EntriesTo=01.01.2024&IncludeUnassignedEntities=True"
      ]
    },
    {
      "name": "kanton",
      "type": "VARCHAR",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.kanton",
      "values": ["BE", "BL", "SO", "TI", "ZH"]
    },
    {
      "name": "gemname",
      "type": "VARCHAR",
      "alias": "Official name of the municipality",
      "values": [
        "Aeugst",
        "Affoltern am Albis",
        "Bonstetten",
        "Kloten",
        "Nürensdorf"
      ]
    },
    {
      "name": "is_current_jahr",
      "type": "BOOLEAN",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.is_current_jahr",
      "values": [false]
    },
    {
      "name": "link_de",
      "type": "VARCHAR",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.link_de",
      "values": [
        "https://www.agvchapp.bfs.admin.ch/de/communes/results?BfsNr=1&EntriesFrom=12.09.1848&EntriesTo=14.11.1976&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/de/communes/results?BfsNr=2&EntriesFrom=12.09.1848&EntriesTo=01.01.2023&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/de/communes/results?BfsNr=3&EntriesFrom=12.09.1848&EntriesTo=01.01.2023&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/de/communes/results?BfsNr=62&EntriesFrom=01.01.2024&EntriesTo=01.01.2024&IncludeUnassignedEntities=True",
        "https://www.agvchapp.bfs.admin.ch/de/communes/results?BfsNr=64&EntriesFrom=01.01.2024&EntriesTo=01.01.2024&IncludeUnassignedEntities=True"
      ]
    },
    {
      "name": "objektart",
      "type": "INTEGER",
      "alias": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill.objektart",
      "values": [0, 11, 12]
    }
  ]
}
```

:::

### layerDefs syntax

The syntax of the `layerDefs` parameter is a `json` with the layername as key and the filter expression as value: `{"<layername>":"<filter_expression>"}`

The filter expression can consist of a single expression of the form `<attribute><operator><value>` or several of these expressions combined with boolean operators `and` and `or`, e.g. `state='open' and startofconstruction>='2018-10'`

`<attribute>` must be one of the queryable attributes, the type of `<value>` must correspond the the type of the queryable attribute (see above) and `<operator>` can be one of

| **Operator** | **Operators**                                                                 | **Examples**                                                                    |
| ------------ | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `varchar`    | `=`, `+=`, `like`, `ilike`, `not like`, `not ilike`, `is null`, `is not null` | `toto = '3455 Kloten'`, `toto ilike '%SH%'`, `toto is null`, `toto ilike 'SH%'` |
| `number`     | `=`, `<`, `>`, `>=`, `<=`, `!=`                                               | `tutu >= 2.4`, `tutu < 5`                                                       |
| `boolean`    | `is` (true/false), `is not` (true/false)                                      | `tata is not false`                                                             |

### Correct encoding

It's important that the parameters are correctly serialized and url-encoded.

```python
import json
import urllib.parse

params = {
  "ch.swisstopo.amtliches-strassenverzeichnis": "zip_label = '8302 Kloten'"
}

print(json.dumps(params))
## {"ch.swisstopo.amtliches-strassenverzeichnis": "zip_label = '8302 Kloten'"}

print(urllib.parse.quote(json.dumps(params)))
## %7B%22ch.swisstopo.amtliches-strassenverzeichnis%22%3A%20%22zip_label%20%3D%20%278302%20Kloten%27%22%7D

print('&layerDefs={}'.format(urllib.parse.quote(json.dumps(params))))
## &layerDefs=%7B%22ch.swisstopo.amtliches-strassenverzeichnis%22%3A%20%22zip_label%20%3D%20%278302%20Kloten%27%22%7D
```

## Examples

Identify all the features belonging to `ch.bafu.nabelstationen` using a tolerance of 5 pixels around a point:

<Suspense>
<ExampleCodeBlock url="$ curl https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometry=678250,213000&geometryFormat=geojson&geometryType=esriGeometryPoint&imageDisplay=1391,1070,96&lang=fr&layers=all:ch.bafu.nabelstationen&mapExtent=312250,-77500,1007750,457500&returnGeometry=true&tolerance=5
"/>
</Suspense>

<br>

Identify all the features belonging to `ch.bfs.arealstatistik` intersecting an envelope (or bounding box):

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik
```

<br>

Identify all the features belonging to `ch.bafu.bundesinventare-bln` a polyline:

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry={"paths":\[\[\[675000,245000\],\[660000,260000\],\[620000,250000\]\]\]}&geometryType=esriGeometryPolyline&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln
```

<br>

Identify all the features belonging to `ch.bafu.bundesinventare-bln` intersecting a polygon:

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry={"rings":\[\[\[675000,245000\],\[670000,255000\],\[680000,260000\],\[690000,255000\],\[685000,240000\],\[675000,245000\]\]\]}&geometryType=esriGeometryPolygon&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln
```

<br>

Same request for `ch.bfs.arealstatistik` as above but returned geometry format is GeoJSON:

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&geometryFormat=geojson
```

<br>

Same request for `ch.bfs.arealstatistik` as above but geometry is not returned:

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&returnGeometry=false
```

<br>

Filter features with `layerDefs`:

```sh
$ curl https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=2548945.5,1147956,2549402,1148103.5&geometryFormat=geojson&imageDisplay=1367,949,96&lang=en&layers=all:ch.swisstopo.amtliches-strassenverzeichnis&mapExtent=2318250,952750,3001750,1427250&returnGeometry=false&sr=2056&tolerance=5&layerDefs={"ch.swisstopo.amtliches-strassenverzeichnis":"stn_label+ilike+'%Corniche%'"}
```

<br>

### Reverse Geocoding Examples

The service identify can be used for Reverse Geocoding operations. Here is a [list of all the available layers](../../../api/faq/index.html#which-layers-are-available).

<br>

Perform an identify request to find the districts intersecting a given envelope geometry (no buffer):

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill&returnGeometry=false
```

<br>

Perform an identify request to find the municipal boundaries and ZIP (PLZ or NPA) intersecting with a point (no buffer):

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryPoint&geometry=548945.5,147956&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,ch.swisstopo-vd.ortschaftenverzeichnis_plz&returnGeometry=false
```

<br>

Reverse geocoding an <span class="title-ref">address</span> with a point (no buffer):

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?mapExtent=0,0,100,100&imageDisplay=100,100,100&tolerance=1&geometryType=esriGeometryPoint&geometry=600968.625,197426.921875&layers=all:ch.bfs.gebaeude_wohnungs_register&returnGeometry=false
```

<br>

### Simulate a search radius

Equation:

```
SearchRadius = Max(MapWidthInMeters / ScreenWidthInPx, MapHeightInMeters / ScreenHeightInPx) * toleranceInPx
```

For instance if one wants a radius of 5 meters:

```
Max(100 / 100, 100 / 100) * 5 = 5
```

So, to perform an identify request with a search radius of 5 meters around a given point, you would set:

`mapExtent=0,0,100,100&imageDisplay=100,100,100&tolerance=5&geometryType=esriGeometryPoint&geometry=548945,147956`

<div id="find_description">

---

</div>
