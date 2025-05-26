# Feature Resource

With an ID (or several in a comma separated list) and a layer ID
(technical name), this service can be used to retrieve a feature
resource. Here is a [complete list of
layers](../../../api/faq/index.html#which-layers-have-a-tooltip) for
which this service is available.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/{featureId},{featureId}

### Input Parameters

RESTFul interface is available.

| Parameters                    | Description                                                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **geometryFormat (optional)** | Returned geometry format. Default to ESRI geometry format. Supported values are: "esrijson" or "geojson".                             |
| **returnGeometry (optional)** | This parameter defines whether the geometry is returned or not. Default to "true".                                                    |
| **sr (optional)**             | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". |
| **lang (optional)**           | The language. Supported values: de, fr, it , rm, en. Defaults to "de".                                                                |
| **callback (optional)**       | The name of the callback function.                                                                                                    |

### Example

- Get the feature with the ID RIG belonging to ch.bafu.nabelstationen:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/RIG)
- Get several features with IDs RIG and LAU belonging to
  ch.bafu.bundesinventar-bln:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU)
- A <span class="title-ref">GeoJSON</span> in \`EPSG:4326\`:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU?sr=4326&geometryFormat=geojson](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU?sr=4326&geometryFormat=geojson)
