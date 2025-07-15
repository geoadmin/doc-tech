<script setup>
import { 
  identifyFeatures01, 
  identifyFeatures02, 
  identifyFeatures03, 
  identifyFeatures04, 
  identifyFeatures05, 
  identifyFeatures06, 
  identifyFeatures07, 
  identifyFeatures08, 
  identifyFeatures09, 
  identifyFeatures10
} from './examples.js'
</script>

# Identify Features

Use this service to discover features at a specific location.
Here is a **complete list of layers**
for which this service is available.

<!-- FIX ME: (../../../api/faq/index.html#which-layers-have-a-tooltip) -->

<Suspense>
<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer/identify" method="GET" />
</Suspense>

::: tip
No more than 50 features can be retrieved per request.
:::

## Request Details

To interact with the Identify Features service, you need to provide specific parameters in your request.
This endpoint only has **Query Parameters** that modify the behavior of the request, some are required and some are optional.

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

#### layerDefs syntax

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

<ExampleCodeBlock :request="identifyFeatures01.request" :example="identifyFeatures01.response"/>

Identify all the features belonging to `ch.bfs.arealstatistik` intersecting an envelope (or bounding box):

<ExampleCodeBlock :request="identifyFeatures02.request" :example="identifyFeatures02.response"/>

<!-- FIX ME: curl not working -->

Identify all the features belonging to `ch.bafu.bundesinventare-bln` a polyline:

<ExampleCodeBlock :request="identifyFeatures03.request" :example="identifyFeatures03.response"/>

Identify all the features belonging to `ch.bafu.bundesinventare-bln` intersecting a polygon:

<ExampleCodeBlock :request="identifyFeatures04.request" :example="identifyFeatures04.response"/>

Same request for `ch.bfs.arealstatistik` as above but returned geometry format is GeoJSON:

<ExampleCodeBlock :request="identifyFeatures05.request" :example="identifyFeatures05.response"/>

Same request for `ch.bfs.arealstatistik` as above but geometry is not returned:

<ExampleCodeBlock :request="identifyFeatures06.request" :example="identifyFeatures06.response"/>

Filter features with `layerDefs`:

<ExampleCodeBlock :request="identifyFeatures07.request" :example="identifyFeatures07.response"/>

### Reverse Geocoding Examples

The service identify can be used for Reverse Geocoding operations. Here is a [list of all the available layers](../../../api/faq/index.html#which-layers-are-available).

Perform an identify request to find the districts intersecting a given envelope geometry (no buffer):

<ExampleCodeBlock :request="identifyFeatures08.request" :example="identifyFeatures08.response"/>

Perform an identify request to find the municipal boundaries and ZIP (PLZ or NPA) intersecting with a point (no buffer):

<ExampleCodeBlock :request="identifyFeatures09.request" :example="identifyFeatures09.response"/>

Reverse geocoding an <span class="title-ref">address</span> with a point (no buffer):

<ExampleCodeBlock :request="identifyFeatures10.request" :example="identifyFeatures10.response"/>

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
