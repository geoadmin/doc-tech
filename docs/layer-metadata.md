# Layer Metadata

This service provides metadata for all the available layers in the
GeoAdmin API.

<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer" method="GET" />

## Request Details

To interact with the Layers Attributes service, you need to provide specific parameters in your request.
This endpoint only has **Query Parameters**, which are optional and modify the behavior of the request.

### Query Parameters

| Parameters                | Description                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **searchText (optional)** | The text to search for in the layer description.                                                                                      |
| **lang (optional)**       | The language. Supported values: de, fr, it , rm, en. Defaults to "de".                                                                |
| **sr (optional)**         | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". |
| **callback (optional)**   | The name of the callback function.                                                                                                    |

## Response Details

A request to the Layer Metadata service returns a **JSON** composed by a list of object literals representing the **layers** and a set of metadata **attributes** associated to each layer.

Here is a description of the data one can find in the above response.

| Field        | Description                                                                             |
| ------------ | --------------------------------------------------------------------------------------- |
| `name`       | The name of the layer (short name, less than 30 characters).                            |
| `fullName`   | The layer's full name (not necessarily different from `name`).                          |
| `idGeoCat`   | The associated metadata ID in [GeoCat](http://www.geocat.ch/geonetwork/srv/eng/geocat). |
| `layerBodId` | The technical name or BOD ID.                                                           |

**Attributes:** Metadata attributes associated with a given layer.
| Field | Description |
| ------------ | --------------------------------------------------------------------------------------- |
| `wmsResource` | The WMS resource of the layer. |
| `scaleLimit` | The scale at which the layer is valid. |
| `inspireUpperAbstract` | The abstract of the [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html) category (first level). |
| `inspireName` | The name of the [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html) category. |
| `urlDetails` | Link to the official details page. |
| `bundCollectionNumber` | The collection number. |
| `dataOwner` | The data owner. |
| `inspireAbstract` | The abstract of the [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html) category the layer belongs to. |
| `abstract` | The layer abstract. |
| `wmsContactAbbreviation` | The abbreviation contact for the WMS resource. |
| `downloadUrl` | The link where the data can be downloaded. |
| `maps` | The projects in which this layer is accessible. |
| `wmsContactName` | The contact name for the WMS resource. |
| `dataStatus` | The date of the latest data update. |
| `bundCollectionName` | The collection name. |
| `inspireUpperName` | The name of the [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html) category (first level). |
| `urlApplication` | The application where this layer is published. |
| `tileInfo` | WMTS general information in JSON format. Note that this section is always identical and is not tied to a particular "map" like in ESRI specifications. |

## Examples

List all the layers available in the GeoAdmin API:

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer
```

<br>

Using searchText parameter to list all the layers available in the GeoAdmin API where the word "wasser" is found in their description:

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer?searchText=wasser
```

<br>

Find a layer by [geocat ID](http://www.geocat.ch/geonetwork/srv/eng/geocat):

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer?searchText=f198f6f6-8efa-4235-a55f-99767ea0206c
```
