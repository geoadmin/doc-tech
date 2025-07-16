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

<ExampleCodeBlock 
request='$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG' 
example='{
  "feature": {
    "featureId": "RIG",
    "bbox": [677835, 213440, 677835, 213440],
    "layerBodId": "ch.bafu.nabelstationen",
    "layerName": "Monitoring stations air quality",
    "id": "RIG",
    "geometry": {
      "x": 677835,
      "y": 213440,
      "spatialReference": {
        "wkid": 21781
      }
    },
    "attributes": {
      "name": "Rigi-Seebodenalp",
      "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
      "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
      "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
      "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
      "label": "Rigi-Seebodenalp"
    }
  }
}'
/>

Get several features with IDs `RIG` and `LAU` belonging to the layer `ch.bafu.nabelstationen`:

<ExampleCodeBlock 
request='$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU' 
example='{
  "type": "FeatureCollection",
  "features": [
    {
      "featureId": "RIG",
      "bbox": [677835, 213440, 677835, 213440],
      "layerBodId": "ch.bafu.nabelstationen",
      "layerName": "Monitoring stations air quality",
      "id": "RIG",
      "geometry": {
        "x": 677835,
        "y": 213440,
        "spatialReference": {
          "wkid": 21781
        }
      },
      "attributes": {
        "name": "Rigi-Seebodenalp",
        "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "label": "Rigi-Seebodenalp"
      }
    },
    {
      "featureId": "LAU",
      "bbox": [538695, 152615, 538695, 152615],
      "layerBodId": "ch.bafu.nabelstationen",
      "layerName": "Monitoring stations air quality",
      "id": "LAU",
      "geometry": {
        "x": 538695,
        "y": 152615,
        "spatialReference": {
          "wkid": 21781
        }
      },
      "attributes": {
        "name": "Lausanne",
        "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "label": "Lausanne"
      }
    }
  ]
}'
/>

A `GeoJSON` in `EPSG:4326`:

<ExampleCodeBlock 
request='$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU?sr=4326&geometryFormat=geojson' 
example='{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "featureId": "RIG",
      "bbox": [8.46333, 47.06741, 8.46333, 47.06741],
      "layerBodId": "ch.bafu.nabelstationen",
      "layerName": "Monitoring stations air quality",
      "id": "RIG",
      "geometry": {
        "type": "Point",
        "coordinates": [8.46333, 47.06741]
      },
      "properties": {
        "name": "Rigi-Seebodenalp",
        "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "label": "Rigi-Seebodenalp"
      }
    },
    {
      "type": "Feature",
      "featureId": "LAU",
      "bbox": [6.639701, 46.522018, 6.639701, 46.522018],
      "layerBodId": "ch.bafu.nabelstationen",
      "layerName": "Monitoring stations air quality",
      "id": "LAU",
      "geometry": {
        "type": "Point",
        "coordinates": [6.639701, 46.522018]
      },
      "properties": {
        "name": "Lausanne",
        "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "label": "Lausanne"
      }
    }
  ]
}'
/>
