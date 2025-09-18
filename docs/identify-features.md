# Identify Features

Use this endpoint to discover features at a specific location.

<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer/identify" method="GET" />

::: warning
No more than 50 features can be retrieved per request.
:::

## Request Details

To interact with the `identify` endpoint, you need to provide specific parameters in your request.
This endpoint only has query parameters that modify the behavior of the request, some are required and some are optional.

### Query Parameters

| **Parameter**                        | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **geometry (required)**              | The geometry to identify on. The geometry is specified by the geometry type. This parameter is specified as a separated list of coordinates. The simple syntax (comma-separated list of coordinates) and the complex one can be used. ([ESRI syntax for geometries](https://developers.arcgis.com/rest/services-reference/enterprise/geometry-objects/))                                                                       |
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
| **layerDefs (optional)**             | Filter features with an expression. Syntax: `{ "<layerId>" : "<layerDef1>" }` where `<layerId>` must correspond to the layer specified in `layers`. See below for more details.                                                                                                                                                                                                                                                                            |
| **callback (optional)**              | The name of the callback function.                                                                                                                                                                                                                                                                                                                                                                                             |

### Tolerance, mapExtent and imageDisplay

The values of `imageDisplay` and `mapExtent` must be set for a `tolerance > 0`. This is because we need them to map the `tolerance` from pixels to meters. For a `tolerance=0`, however, we would only set `imageDisplay` and `mapExtent` for specific cases. One such case might be a scale dependant model that you display as points at smaller scales and as polygons at larger scales.

The following table summarize the various combinations:

| **Tolerance** | `imageDisplay=0,0,0` `mapExtent=0,0,0,0` | `imageDisplay=1,1,1` `mapExtent=1,1,1,1` |
| ------------- | ---------------------------------------- | ---------------------------------------- |
| `tolerance=0` | No buffer & no scale                     | No buffer, but scale                     |
| `tolerance>0` | Forbidden                                | Buffer & scale                           |

### Filtering

To filter features on a set of attributes, we can use the `layerDefs` parameter on "queryable" layers.

So-called "queryable" layers are:

```txt
ch.astra.unfaelle-personenschaeden_alle
ch.astra.unfaelle-personenschaeden_fahrraeder
ch.astra.unfaelle-personenschaeden_fussgaenger
ch.astra.unfaelle-personenschaeden_getoetete
ch.astra.unfaelle-personenschaeden_motorraeder
ch.bafu.landesforstinventar-vegetationshoehenmodell
ch.bafu.wrz-wildruhezonen_portal
ch.bfe.solarenergie-eignung-daecher
ch.bfe.solarenergie-eignung-fassaden
ch.swisstopo.amtliches-gebaeudeadressverzeichnis
ch.swisstopo.amtliches-strassenverzeichnis
```

Regarding the format of the `layerDefs` parameter:

- Use a JSON-like format: `{"<layername>":"<filter_expression>"}`.
- The `<filter_expression` is defined in the form `<attribute><operator><value>` where
  - `<attribute>` must be one of the queryable attributes listed by the [layer attribute endpoint](/docs/get-layer-attributes).
  - `<operator>` must be one of the following options:

   | **Operator** | **Operators**                                                                 | **Examples**                                                                    |
   | ------------ | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
   | `varchar`    | `=`, `+=`, `like`, `ilike`, `not like`, `not ilike`, `is null`, `is not null` | `toto = '3455 Kloten'`, `toto ilike '%SH%'`, `toto is null`, `toto ilike 'SH%'` |
   | `number`     | `=`, `<`, `>`, `>=`, `<=`, `!=`                                               | `tutu >= 2.4`, `tutu < 5`                                                       |
   | `boolean`    | `is` (true/false), `is not` (true/false)                                      | `tata is not false`                                                             |
  
  - `<value>` must correspond to the type of the queryable attribute.

In an example:

<ExampleCodeBlock 
request='curl "https://api3.geo.admin.ch/rest/services/all/MapServer/identify?"\
"geometryType=esriGeometryEnvelope&"\
"geometry=2548945.5,1147956,2549402,1148103.5&"\
"geometryFormat=geojson&"\
"imageDisplay=1367,949,96&"\
"lang=en&"\
"layers=all:ch.swisstopo.amtliches-strassenverzeichnis&"\
"mapExtent=2318250,952750,3001750,1427250&"\
"returnGeometry=false&"\
"sr=2056&"\
"tolerance=5&"\
"layerDefs={\"ch.swisstopo.amtliches-strassenverzeichnis\":\"stn_label+ilike+%27%Corniche%%27\"}"'
example='{
  "results": [
    {
      "layerBodId": "ch.swisstopo.amtliches-strassenverzeichnis",
      "layerName": "Official directory of streets",
      "featureId": 10035871,
      "id": 10035871,
      "properties": {
        "str_esid": 10035871,
        "stn_label": "Route de la Corniche",
        "zip_label": "1070 Puidoux, 1071 Chexbres, 1098 Epesses",
        "com_name": "Puidoux",
        "com_fosnr": 5607,
        "str_official": 1,
        "str_modified": "2024-10-15",
        "str_type": "Strasse",
        "str_children": null,
        "str_parent": null,
        "str_status": "bestehend",
        "label": "Route de la Corniche"
      }
    },
    {
      "layerBodId": "ch.swisstopo.amtliches-strassenverzeichnis",
      "layerName": "Official directory of streets",
      "featureId": 10048084,
      "id": 10048084,
      "properties": {
        "str_esid": 10048084,
        "stn_label": "Route de la Corniche",
        "zip_label": "1096 Cully, 1097 Riex, 1098 Epesses",
        "com_name": "Bourg-en-Lavaux",
        "com_fosnr": 5613,
        "str_official": 1,
        "str_modified": "2024-07-29",
        "str_type": "Strasse",
        "str_children": null,
        "str_parent": null,
        "str_status": "bestehend",
        "label": "Route de la Corniche"
      }
    },
    {
      "layerBodId": "ch.swisstopo.amtliches-strassenverzeichnis",
      "layerName": "Official directory of streets",
      "featureId": 10093805,
      "id": 10093805,
      "properties": {
        "str_esid": 10093805,
        "stn_label": "Route de la Corniche",
        "zip_label": "1071 Chexbres",
        "com_name": "Chexbres",
        "com_fosnr": 5601,
        "str_official": 1,
        "str_modified": "2024-07-29",
        "str_type": "Strasse",
        "str_children": null,
        "str_parent": null,
        "str_status": "bestehend",
        "label": "Route de la Corniche"
      }
    }
  ]
}'
/>

#### Correct Encoding

It's important that the parameters are correctly serialized and url-encoded.

To encode the layerDefs parameter in your URL using the right URL escape codes (%xx), you may want to make use of Python's [urllib.parse.quote()](https://docs.python.org/3/library/urllib.parse.html#urllib.parse.quote):

```python
import json
import urllib.parse

params = {
  "ch.swisstopo.amtliches-strassenverzeichnis": "zip_label = '8302 Kloten'"
}
print(f'&layerDefs={urllib.parse.quote(json.dumps(params))}')
## &layerDefs=%7B%22ch.swisstopo.amtliches-strassenverzeichnis%22%3A%20%22zip_label%20%3D%20%278302%20Kloten%27%22%7D
```

## Examples

Identify all the features belonging to `ch.bafu.nabelstationen` using a tolerance of 5 pixels around a point:

<ExampleCodeBlock
request='curl "https://api3.geo.admin.ch/rest/services/all/MapServer/identify?"\
"geometry=678250,213000&"\
"geometryFormat=geojson&"\
"geometryType=esriGeometryPoint&"\
"imageDisplay=1391,1070,96&"\
"lang=fr&"\
"layers=all:ch.bafu.nabelstationen&"\
"mapExtent=312250,-77500,1007750,457500&"\
"returnGeometry=true&"\
"tolerance=5"'
example='{
  "results": [
    {
      "type": "Feature",
      "featureId": "RIG",
      "bbox": [677835, 213440, 677835, 213440],
      "layerBodId": "ch.bafu.nabelstationen",
      "layerName": "Stations de mesure qualité de l`air",
      "id": "RIG",
      "geometry": {
        "type": "Point",
        "coordinates": [677835, 213440]
      },
      "properties": {
        "name": "Rigi-Seebodenalp",
        "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "label": "Rigi-Seebodenalp"
      }
    }
  ]
}'
/>

Identify all the features belonging to `ch.bfs.arealstatistik` intersecting an envelope (or bounding box):

<ExampleCodeBlock 
request='curl "https://api3.geo.admin.ch/rest/services/api/MapServer/identify?"\
"geometryType=esriGeometryEnvelope&"\
"geometry=548945.5,147956,549402,148103.5&"\
"imageDisplay=500,600,96&"\
"mapExtent=548945.5,147956,549402,148103.5&"\
"tolerance=1&"\
"layers=all:ch.bfs.arealstatistik"'
example='{
  "results": [
    {
      "featureId": "54901480-1980",
      "bbox": [549000.0, 148000.0, 549000.0, 148000.0],
      "layerBodId": "ch.bfs.arealstatistik",
      "layerName": "Arealstatistik Standard",
      "id": "54901480-1980",
      "geometry": {
        "x": 549000.0,
        "y": 148000.0,
        "spatialReference": { "wkid": 21781 }
      },
      "attributes": {
        "as_72": 8,
        "survey": "1979/85",
        "year": 1980,
        "fj": 1980,
        "desc_as_72_en": "Surroundings of blocks of flats",
        "label": "54901480-1980"
      }
    }
    (...more features...)
  ]
}'
/>

Identify all the features belonging to `ch.bafu.bundesinventare-bln` a polyline:

<ExampleCodeBlock
request='curl "https://api3.geo.admin.ch/rest/services/api/MapServer/identify?"\
"geometry={\"paths\":[[[675000,245000],[660000,260000],[620000,250000]]]}&"\
"geometryType=esriGeometryPolyline&"\
"imageDisplay=500,600,96&"\
"mapExtent=548945.5,147956,549402,148103.5&"\
"tolerance=5&"\
"layers=all:ch.bafu.bundesinventare-bln"'
example='{
  "results": [
    {
      "featureId": 1239,
      "bbox": [658884.4, 259457.7, 661405, 263367.1],
      "layerBodId": "ch.bafu.bundesinventare-bln",
      "layerName": "ILNM",
      "id": 1239,
      "geometry": {
        "rings": [
          [
            [661321.9, 259738.9],
            [660783.5, 259457.7],
            [660773.1, 259516.4],
            (...more points...)
            [661178.1, 263167.2],
            [661188.7, 263146],
            [661198, 263120.3]
          ]
        ],
        "spatialReference": {
          "wkid": 21781
        }
      },
      "attributes": {
        "bln_name": "Wasserschloss beim Zusammenfluss von Aare, Reuss und Limmat",
        "bln_obj": 1019,
        "bln_fl": 392.078,
        "subareanumber": 0,
        "subareaname": null,
        "linkurldescription": "https://data.geo.admin.ch/ch.bafu.bundesinventare-bln/objectsheets/2017revision/nr1019.pdf",
        "label": "Wasserschloss beim Zusammenfluss von Aare, Reuss und Limmat"
      }
    }
    (...more features...)
  ]
}'
/>

Identify all the features belonging to `ch.bafu.bundesinventare-bln` intersecting a polygon:

<ExampleCodeBlock 
request='curl "https://api3.geo.admin.ch/rest/services/api/MapServer/identify?"\
"geometry={\"rings\":[[[675000,245000],[670000,255000],[680000,260000],[690000,255000],[685000,240000],[675000,245000]]]}&"\
"geometryType=esriGeometryPolygon&"\
"imageDisplay=500,600,96&"\
"mapExtent=548945.5,147956,549402,148103.5&"\
"tolerance=5&"\
"layers=all:ch.bafu.bundesinventare-bln"'
example='{
  "results": [
    {
      "featureId": 1231,
      "bbox": [665368.5, 256785.7, 676411.1, 261506.4],
      "layerBodId": "ch.bafu.bundesinventare-bln",
      "layerName": "ILNM",
      "id": 1231,
      "geometry": {
        "rings": [
          [
            [670779.3, 261171.1],
            [670779.9, 261158.7],
            [670775.6, 261132.1],
            [670775.6, 261114.8],
            [670778.6, 261091.6],
            [670783.6, 261077],
            [670790.7, 261056.9],
            [670799.1, 261038.2],
            [670808.7, 261016.7],
            [670818.2, 260999.4],
            [670829.4, 260985.2],
            (...more points...)
            [670779.3, 261171.1]
            [670779, 261310.9],
            [670766.3, 261305],
            [670770, 261294.5],
            [670770.9, 261275.3],
            [670771.8, 261258.6],
            [670772.8, 261245],
            [670774, 261222.7],
            [670774.6, 261205.1],
            [670776.8, 261194],
            [670779.3, 261171.1]
          ]
        ],
        "spatialReference": {
          "wkid": 21781
        }
      },
      "attributes": {
        "bln_name": "Lägerngebiet",
        "bln_obj": 1011,
        "bln_fl": 2465.705,
        "subareanumber": 0,
        "subareaname": null,
        "linkurldescription": "https://data.geo.admin.ch/ch.bafu.bundesinventare-bln/objectsheets/2017revision/nr1011.pdf",
        "label": "Lägerngebiet"
      }
    }
    (...more features...)
  ]
}'
/>

Same request for `ch.bfs.arealstatistik` as above but returned geometry format is GeoJSON:

<ExampleCodeBlock 
request='curl "https://api3.geo.admin.ch/rest/services/api/MapServer/identify?"\
"geometryType=esriGeometryEnvelope&"\
"geometry=548945.5,147956,549402,148103.5&"\
"imageDisplay=500,600,96&"\
"mapExtent=548945.5,147956,549402,148103.5&"\
"tolerance=1&"\
"layers=all:ch.bfs.arealstatistik&"\
"geometryFormat=geojson"'
example='{
  "results": [
    {
      "type": "Feature",
      "featureId": "54901480-1980",
      "bbox": [549000, 148000, 549000, 148000],
      "layerBodId": "ch.bfs.arealstatistik",
      "layerName": "Land use statistics standard",
      "id": "54901480-1980",
      "geometry": {
        "type": "Point",
        "coordinates": [549000, 148000]
      },
      "properties": {
        "as_72": 8,
        "survey": "1979/85",
        "year": 1980,
        "fj": 1980,
        "desc_as_72_de": "Umschwung von Mehrfamilienhäusern",
        "desc_as_72_fr": "Terrains attenants aux immeubles résidentiels",
        "desc_as_72_it": "Terreno annesso a case plurifamiliari",
        "desc_as_72_rm": "Umschwung von Mehrfamilienhäusern",
        "desc_as_72_en": "Surroundings of blocks of flats",
        "label": "54901480-1980"
      }
    }
    (...more features...)
  ]
}'
/>

Same request for `ch.bfs.arealstatistik` as above but geometry is not returned:

<ExampleCodeBlock 
request='curl "https://api3.geo.admin.ch/rest/services/api/MapServer/identify?"\
"geometryType=esriGeometryEnvelope&"\
"geometry=548945.5,147956,549402,148103.5&"\
"imageDisplay=500,600,96&"\
"mapExtent=548945.5,147956,549402,148103.5&"\
"tolerance=1&"\
"layers=all:ch.bfs.arealstatistik&"\
"returnGeometry=false"'
example='{
  "results": [
    {
      "layerBodId": "ch.bfs.arealstatistik",
      "layerName": "Land use statistics standard",
      "featureId": "54901480-1980",
      "id": "54901480-1980",
      "attributes": {
        "as_72": 8,
        "survey": "1979/85",
        "year": 1980,
        "fj": 1980,
        "desc_as_72_de": "Umschwung von Mehrfamilienhäusern",
        "desc_as_72_fr": "Terrains attenants aux immeubles résidentiels",
        "desc_as_72_it": "Terreno annesso a case plurifamiliari",
        "desc_as_72_rm": "Umschwung von Mehrfamilienhäusern",
        "desc_as_72_en": "Surroundings of blocks of flats",
        "label": "54901480-1980"
      }
    }
    (...more features...)
  ]
}'
/>

## Examples: Reverse Geocoding

The `identify` endpoint can be used for reverse geocoding operations.

Perform an identify request to find the districts intersecting a given envelope geometry (no buffer):

<ExampleCodeBlock 
request='curl "https://api3.geo.admin.ch/rest/services/api/MapServer/identify?"\
"geometryType=esriGeometryEnvelope&"\
"geometry=548945.5,147956,549402,148103.5&"\
"imageDisplay=0,0,0&"\
"mapExtent=0,0,0,0&"\
"tolerance=0&"\
"layers=all:ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill&"\
"returnGeometry=false"'
example='{
  "results": [
    {
      "layerBodId": "ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill",
      "layerName": "District boundaries",
      "featureId": 2226,
      "id": 2226,
      "attributes": {
        "name": "Lavaux-Oron",
        "flaeche": 19791,
        "label": "Lavaux-Oron"
      }
    }
  ]
}'
/>

Perform an identify request to find the municipal boundaries and ZIP (PLZ or NPA) intersecting with a point (no buffer):

<ExampleCodeBlock 
request='curl "https://api3.geo.admin.ch/rest/services/api/MapServer/identify?"\
"geometryType=esriGeometryPoint&"\
"geometry=548945.5,147956&"\
"imageDisplay=0,0,0&"\
"mapExtent=0,0,0,0&"\
"tolerance=0&"\
"layers=all:ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,ch.swisstopo-vd.ortschaftenverzeichnis_plz&"\
"returnGeometry=false"'
example='{
  "results": [
    {
      "layerBodId": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill",
      "layerName": "Municipal boundaries",
      "featureId": "13096-1850",
      "id": "13096-1850",
      "attributes": {
        "gemname": "Puidoux",
        "gemflaeche": 2286.0973335532985,
        "gde_hist_id": 13096,
        "gde_nr": 5607,
        "jahr": 1850,
        "perimeter": 30580.136077557163,
        "kanton": "VD",
        "objektart": 11,
        "is_current_jahr": false,
        "objektart_lookup": "politische_gemeinde",
        "link_de": "https://www.agvchapp.bfs.admin.ch/de/communes/results?BfsNr=5607&EntriesFrom=12.09.1848&EntriesTo=31.08.2006&IncludeUnassignedEntities=True",
        "link_fr": "https://www.agvchapp.bfs.admin.ch/fr/communes/results?BfsNr=5607&EntriesFrom=12.09.1848&EntriesTo=31.08.2006&IncludeUnassignedEntities=True",
        "link_it": "https://www.agvchapp.bfs.admin.ch/it/communes/results?BfsNr=5607&EntriesFrom=12.09.1848&EntriesTo=31.08.2006&IncludeUnassignedEntities=True",
        "label": "Puidoux"
      }
    }
    (...more features...)
  ]
}'
/>

Reverse geocoding an <span class="title-ref">address</span> with a point (no buffer):

<ExampleCodeBlock 
request='curl "https://api3.geo.admin.ch/rest/services/api/MapServer/identify?"\
"geometryType=esriGeometryPoint&"\
"geometry=548945.5,147956&"\
"imageDisplay=0,0,0&"\
"mapExtent=0,0,0,0&"\
"tolerance=0&"\
"layers=all:ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,ch.swisstopo-vd.ortschaftenverzeichnis_plz&"\
"returnGeometry=false"'
example='{
  "results": [
    {
      "layerBodId": "ch.bfs.gebaeude_wohnungs_register",
      "layerName": "RBD: building status",
      "featureId": "1272199_0",
      "id": "1272199_0",
      "attributes": {
        "egid": "1272199",
        "strname_deinr": "Seftigenstrasse 264",
        "plz_plz6": "3084/308400",
        "ggdename": "Köniz",
        "ggdenr": 355,
        "gexpdat": "12.07.2025",
        "gdekt": "BE",
        "egrid": "CH669746359158",
        "lgbkr": 0,
        "lparz": "212",
        "lparzsx": null,
        "ltyp": null,
        "gebnr": "",
        "gbez": "",
        "gkode": 2600983.546,
        "gkodn": 1197396.177,
        "gksce": 901,
        "gstat": 1004,
        "gkat": 1060,
        "gklas": null,
        "gbauj": null,
        "gbaum": null,
        "gbaup": 8011,
        "gabbj": null,
        "garea": 3143,
        "gvol": null,
        "gvolnorm": null,
        "gvolsce": null,
        "gastw": 4,
        "ganzwhg": null,
        "gazzi": null,
        "gschutzr": null,
        "gebf": null,
        "gwaerzh1": 7430,
        "genh1": 7542,
        "gwaersceh1": 865,
        "gwaerdath1": "14.03.2023",
        "gwaerzh2": null,
        "genh2": null,
        "gwaersceh2": null,
        "gwaerdath2": "-",
        "gwaerzw1": 7630,
        "genw1": 7530,
        "gwaerscew1": 869,
        "gwaerdatw1": "29.11.2001",
        "gwaerzw2": null,
        "genw2": null,
        "gwaerscew2": null,
        "gwaerdatw2": "-",
        "edid": "0",
        "egaid": 100718281,
        "deinr": "264",
        "esid": 10006665,
        "strname": ["Seftigenstrasse"],
        "strnamk": ["Seftigenstr."],
        "strindx": ["Sef"],
        "strsp": ["DE"],
        "stroffiziel": "1",
        "dplz4": 3084,
        "dplzz": 0,
        "dplzname": "Wabern",
        "dkode": 2600968.668,
        "dkodn": 1197426.954,
        "doffadr": 1,
        "dexpdat": "12.07.2025",
        "ewid": null,
        "whgnr": null,
        "wstwk": null,
        "wmehrg": null,
        "weinr": null,
        "wbez": null,
        "wstat": null,
        "wexpdat": null,
        "wbauj": null,
        "wabbj": null,
        "warea": null,
        "wazim": null,
        "wkche": null,
        "label": "Seftigenstrasse 264"
      }
    }
  ]
}'
/>

## Examples: Search Radius

To search within a specified radius at a given location:

1. Specify the location with `geometry` and set the `geometryType` to `esriGeometryPoint`.

2. Set `mapExtent`, `imageDisplay` and `tolerance` such that you get the desired search radius in meters according to this relation:

```
searchRadius = max(mapExtent.maxx / imageDisplay.width, mapExtent.maxy / imageDisplay.height) * tolerance toleranceInPx
```

For example, if you want a search radius of 5 meters, you could set `tolerance=5` for a `mapExtent=0,0,100,100` and a `imageDisplay=100,100,100`:

```
searchRadius = max(mapExtent.maxx / imageDisplay.width, mapExtent.maxy / imageDisplay.height) * tolerance toleranceInPx
             = max(100 / 100, 100 / 100) * 5
             = 5
```

So, to perform an identify request with a search radius of 5 meters around a given point, you would set:
<ExampleCodeBlock 
request='curl "https://api3.geo.admin.ch/rest/services/api/MapServer/identify?"\
"mapExtent=0,0,100,100&"\
"imageDisplay=100,100,100&"\
"tolerance=5&"\
"geometryType=esriGeometryPoint&"\
"geometry=548945,147956"'
example='{
  "results": [
    {
      "layerBodId": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill",
      "layerName": "Municipal boundaries",
      "featureId": "13096-1850",
      "id": "13096-1850",
      "attributes": {
        "gemname": "Puidoux",
        "gemflaeche": 2286.0973335532985,
        "gde_hist_id": 13096,
        "gde_nr": 5607,
        "jahr": 1850,
        "perimeter": 30580.136077557163,
        "kanton": "VD",
        "objektart": 11,
        "is_current_jahr": false,
        "objektart_lookup": "politische_gemeinde",
        "link_de": "https://www.agvchapp.bfs.admin.ch/de/communes/results?BfsNr=5607&EntriesFrom=12.09.1848&EntriesTo=31.08.2006&IncludeUnassignedEntities=True",
        "link_fr": "https://www.agvchapp.bfs.admin.ch/fr/communes/results?BfsNr=5607&EntriesFrom=12.09.1848&EntriesTo=31.08.2006&IncludeUnassignedEntities=True",
        "link_it": "https://www.agvchapp.bfs.admin.ch/it/communes/results?BfsNr=5607&EntriesFrom=12.09.1848&EntriesTo=31.08.2006&IncludeUnassignedEntities=True",
        "label": "Puidoux"
      }
    }
    (...more results...)
  ]
}
'
/>

## Download as INTERLIS

For a limited set of "ÖREB" layers, features can be retrieved in the INTERLIS format (XML) with `geometryFormat=interlis`.
"ÖREB" is the German accronym for the [Cadastre of public-law restrictions on landownership](https://www.swisstopo.admin.ch/en/plr-cadastre).

:::warning
The INTERLIS format is designed for specialized applications and may not be suitable for general use.
For most users, we recommend using one of the following formats instead:

- `geometryFormat=geojson`
- `geometryFormat=esrijson`

::: 

The following layers are based on the [ÖREB model V2_0](https://models.geo.admin.ch/V_D/OeREB/OeREBKRMtrsfr_V2_0.ili) and offer features in the INTERLIS format:

- Layers with data:
  
  ```txt
  ch.astra.baulinien-nationalstrassen_v2_0.oereb
  ch.bazl.projektierungszonen-flughafenanlagen_v2_0.oereb
  ch.bazl.sicherheitszonenplan_v2_0.oereb
  ch.vbs.kataster-belasteter-standorte-militaer_v2_0.oereb
  ch.bazl.kataster-belasteter-standorte-zivilflugplaetze_v2_0.oereb
  ch.bav.kataster-belasteter-standorte-oev_v2_0.oereb
  ```

- Layers without data:

  ```txt
  ch.astra.projektierungszonen-nationalstrassen_v2_0.oereb
  ch.bav.projektierungszonen-eisenbahnanlagen_v2_0.oereb
  ch.bav.baulinien-eisenbahnanlagen_v2_0.oereb
  ch.bazl.baulinien-flughafenanlagen_v2_0.oereb
  ch.bfe.projektierungszonen-starkstromanlagen_v2_0.oereb
  ch.bfe.baulinien-starkstromanlagen_v2_0.oereb
  ```

### Example ÖREB Queries

Look for all the features of `ch.bazl.projektierungszonen-flughafenanlagen_v2_0.oereb` using a point:

https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry=2682414.312,1257059.381&geometryType=esriGeometryPoint&layers=all:ch.bazl.projektierungszonen-flughafenanlagen_v2_0.oereb&mapExtent=2480000,1070000,2840000,1310000&imageDisplay=3600,2400,96&tolerance=0&geometryFormat=interlis&sr=2056

Look for all the features of `ch.bav.kataster-belasteter-standorte-oev_v2_0.oereb` using a polygon:

https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry={"rings":[[[2675000,1245000],[2670000,1255000],[2680000,1260000],[2690000,1255000],[2685000,1240000],[2675000,1245000]]]}&geometryType=esriGeometryPolygon&layers=all:ch.bav.kataster-belasteter-standorte-oev_v2_0.oereb&mapExtent=2480000,1070000,2840000,1310000&imageDisplay=3600,2400,96&tolerance=0&geometryFormat=interlis&sr=2056

Look for all the features of `ch.bazl.sicherheitszonenplan_v2_0.oereb` using a bounding box (envelope):  

https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry=2575000,1109000,2610000,1127000&geometryType=esriGeometryEnvelope&layers=all:ch.bazl.sicherheitszonenplan_v2_0.oereb&mapExtent=2480000,1070000,2840000,1310000&imageDisplay=3600,2400,96&tolerance=0&geometryFormat=interlis&sr=2056

Look for all the features of `ch.astra.baulinien-nationalstrassen_v2_0.oereb` using a bounding box (envelope):

https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry=2599000,1200000,2604000,1203000&geometryType=esriGeometryEnvelope&layers=all:ch.astra.baulinien-nationalstrassen_v2_0.oereb&mapExtent=2480000,1070000,2840000,1310000&imageDisplay=3600,2400,96&tolerance=0&geometryFormat=interlis&sr=2056
