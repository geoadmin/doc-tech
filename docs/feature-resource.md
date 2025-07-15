<script setup>
import { 
    featureResource01,
    featureResource02,
    featureResource03,
} from './examples.js'
</script>

# Feature Resource

Retrieve a Feature Resource using a Feature ID (or several in a comma separated list) and a layer ID (technical name).
Here is a **complete list of layers** which this service is available.

<!-- FIX ME: (../../../api/faq/index.html#which-layers-have-a-tooltip) for -->

<Suspense>
<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/{featureId},{featureId}" method="GET" />
</Suspense>

## Request Details

To interact with the Feature Resource service, you need to provide specific parameters in your request.
These parameters are divided into **Path Parameters**, which are required and part of the URL, and **Query Parameters**, which are optional and modify the behavior of the request.

### Path Parameters

| Parameters                | Description                                               |
| ------------------------- | --------------------------------------------------------- |
| **layerBodId (required)** | The id of the layer                                       |
| **featureId (required)**  | The object’s Id (separated by comma for multiple objects) |

### Query Parameters

| Parameters                    | Description                                                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **geometryFormat (optional)** | Returned geometry format. Default to ESRI geometry format. Supported values are: "esrijson" or "geojson".                             |
| **returnGeometry (optional)** | This parameter defines whether the geometry is returned or not. Default to "true".                                                    |
| **sr (optional)**             | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". |
| **lang (optional)**           | The language. Supported values: de, fr, it , rm, en. Defaults to "de".                                                                |
| **callback (optional)**       | The name of the callback function.                                                                                                    |

## Examples

Get the feature with the ID `RIG` belonging to the layer `ch.bafu.nabelstationen`:

<ExampleCodeBlock :request="featureResource01.request" :example="featureResource01.response"/>

Get several features with IDs `RIG` and `LAU` belonging to the layer `ch.bafu.nabelstationen`:

<ExampleCodeBlock :request="featureResource02.request" :example="featureResource02.response"/>

A `GeoJSON` in `EPSG:4326`:

<ExampleCodeBlock :request="featureResource03.request" :example="featureResource03.response"/>
