# Feature Resource

With a Feature ID (or several in a comma separated list) and a layer ID
(technical name), this service can be used to retrieve a feature
resource. Here is a [complete list of
layers](../../../api/faq/index.html#which-layers-have-a-tooltip) for
which this service is available.

```http
https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/{featureId},{featureId}
```

## Request Details

RESTFul interface is available.

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

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG
```

<br>

Get several features with IDs `RIG` and `LAU` belonging to the layer `ch.bafu.nabelstationen`:

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU
```

<br>

A `GeoJSON` in `EPSG:4326`:

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU?sr=4326&geometryFormat=geojson
```
