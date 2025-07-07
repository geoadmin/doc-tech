# Find

This service is used to search the attributes of features. Each result
include a feature ID, a layer ID, a layer name, a geometry (optionally)
and attributes in the form of name-value pair. Here is a [complete list
of layers](../../../api/faq/index.html#which-layers-have-a-tooltip) for
which this service is available.

<Suspense>
<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer/find/{uuid}" method="GET" />
</Suspense>

::: tip
One layer, one search text and one attribute.
:::

## Request Details

### Query Parameters

| Parameters                    | Description                                                                                                                                                                                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **layer (required)**          | A layer ID (only one layer at a time can be specified).                                                                                                                                                                                                  |
| **searchText (required)**     | The text to search for (one can use numerical values as well).                                                                                                                                                                                           |
| **searchField (required)**    | The name of the field to search (only one search field can be searched at a time).                                                                                                                                                                       |
| **contains (optional)**       | If false, the operation searches for an exact match of the searchText string. An exact match is case sensitive. Otherwise, it searches for a value that contains the searchText string provided. This search is not case sensitive. The default is true. |
| **geometryFormat (optional)** | Returned geometry format. Default to ESRI geometry format. Supported values are: "esrijson" or "geojson".                                                                                                                                                |
| **returnGeometry (optional)** | This parameter defines whether the geometry is returned or not. Default to "true".                                                                                                                                                                       |
| **sr (optional)**             | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781".                                                                                                                    |
| **lang (optional)**           | The language. Supported values: de, fr, it , rm, en. Defaults to "de".                                                                                                                                                                                   |
| **layerDefs (optional)**      | Filter features with an expression (see [identify](../../../services/sdiservices.html#identify-features)) Syntax: <span class="title-ref">{ "\<layerId\>" : "\<layerDef1\>"}</span>                                                                      |
| **callback (optional)**       | The name of the callback function.                                                                                                                                                                                                                       |

## Examples

Search for “Lavaux” in the field `bln_name` of the layer `ch.bafu.bundesinventare-bln` (infix match):

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bafu.bundesinventare-bln&searchText=Lavaux&searchField=bln_name&returnGeometry=false
```

<br>

Search for `12316` in the field `egid` of the layer `ch.bfs.gebaeude_wohnungs_register` (infix match):

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=123164&searchField=egid&returnGeometry=false
```

<br>

Search for `123164` in the field `egid` of the layer `ch.bfs.gebaeude_wohnungs_register` (exact match):

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=1231641&searchField=egid&returnGeometry=false&contains=false
```

<br>

Search for the `Talstrasse` in Commune `Full-Reuenthal`

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.swisstopo.amtliches-strassenverzeichnis&searchText=Talstrasse&searchField=stn_label&returnGeometry=false&contains=false&layerDefs={"ch.swisstopo.amtliches-strassenverzeichnis":"com_fosnr=4307"}
```
