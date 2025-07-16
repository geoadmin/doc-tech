# Find

This service is used to search the attributes of features.
Each result includes a feature ID, a layer ID, a layer name, a geometry (optionally) and attributes in the form of name-value pair.
Here is a **complete list of layers** which this service is available.

<!-- FIX ME: (../../../api/faq/index.html#which-layers-have-a-tooltip) for -->

<Suspense>
<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer/find" method="GET" />
</Suspense>

::: tip
One layer, one search text and one attribute.
:::

## Request Details

To interact with the Find service, you need to provide specific parameters in your request.
This endpoint only has **Query Parameters** that modify the behavior of the request, some are required and some are optional.

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

<ExampleCodeBlock 
request='$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bafu.bundesinventare-bln&searchText=Lavaux&searchField=bln_name&returnGeometry=false'
example='{
  "results": [
    {
      "layerBodId": "ch.bafu.bundesinventare-bln",
      "layerName": "ILNM",
      "featureId": 1255,
      "id": 1255,
      "attributes": {
        "bln_name": "Lavaux",
        "bln_obj": 1202,
        "bln_fl": 715.466,
        "subareanumber": 0,
        "subareaname": null,
        "linkurldescription": "https://data.geo.admin.ch/ch.bafu.bundesinventare-bln/objectsheets/2017revision/nr1202.pdf",
        "label": "Lavaux"
      }
    }
  ]
}'
/>

Search for `12316` in the field `egid` of the layer `ch.bfs.gebaeude_wohnungs_register` (infix match):

<ExampleCodeBlock 
request='$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=123164&searchField=egid&returnGeometry=false' 
example='{
  "results": [
    {
      "layerBodId": "ch.bfs.gebaeude_wohnungs_register",
      "layerName": "RBD: building status",
      "featureId": "3123164_0",
      "id": "3123164_0",
      "attributes": {
        "egid": "3123164",
        "strname_deinr": "Via Arboi 15",
        "plz_plz6": "6534/653400",
        "ggdename": "San Vittore",
        "ggdenr": 3835,
        "gexpdat": "13.07.2025",
        "gdekt": "GR",
        "egrid": "CH167876918122",
        "lgbkr": 0,
        "lparz": "1109",
        "lparzsx": null,
        "ltyp": null,
        "gebnr": "168E",
        "gbez": "",
        "gkode": 2728519.025,
        "gkodn": 1122066.665,
        "gksce": 901,
        "gstat": 1004,
        "gkat": 1020,
        "gklas": 1110,
        "gbauj": null,
        "gbaum": null,
        "gbaup": 8019,
        "gabbj": null,
        "garea": 92,
        "gvol": null,
        "gvolnorm": null,
        "gvolsce": null,
        "gastw": 2,
        "ganzwhg": 1,
        "gazzi": null,
        "gschutzr": null,
        "gebf": null,
        "gwaerzh1": 7450,
        "genh1": 7560,
        "gwaersceh1": 860,
        "gwaerdath1": "29.11.2001",
        "gwaerzh2": null,
        "genh2": null,
        "gwaersceh2": null,
        "gwaerdath2": "-",
        "gwaerzw1": 7650,
        "genw1": 7560,
        "gwaerscew1": 860,
        "gwaerdatw1": "29.11.2001",
        "gwaerzw2": 7600,
        "genw2": 7500,
        "gwaerscew2": 860,
        "gwaerdatw2": "29.11.2001",
        "edid": "0",
        "egaid": 102249110,
        "deinr": "15",
        "esid": 10197717,
        "strname": ["Via Arboi"],
        "strnamk": ["Via Arboi"],
        "strindx": ["Arb"],
        "strsp": ["IT"],
        "stroffiziel": "1",
        "dplz4": 6534,
        "dplzz": 0,
        "dplzname": "S. Vittore",
        "dkode": 2728516.143,
        "dkodn": 1122068.893,
        "doffadr": 0,
        "dexpdat": "13.07.2025",
        "ewid": ["1"],
        "whgnr": [null],
        "wstwk": [3100],
        "wmehrg": [1],
        "weinr": [null],
        "wbez": [null],
        "wstat": [3004],
        "wexpdat": ["2025-07-13T00:00:00"],
        "wbauj": [1999],
        "wabbj": [null],
        "warea": [180],
        "wazim": [3],
        "wkche": [1],
        "label": "Via Arboi 15"
      }
    }
    (...more features...)
  ]
}'
/>

Search for `123164` in the field `egid` of the layer `ch.bfs.gebaeude_wohnungs_register` (exact match):

<ExampleCodeBlock 
request='$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=1231641&searchField=egid&returnGeometry=false&contains=false' 
example='{
  "results": [
    {
      "layerBodId": "ch.bfs.gebaeude_wohnungs_register",
      "layerName": "RBD: building status",
      "featureId": "1231641_0",
      "id": "1231641_0",
      "attributes": {
        "egid": "1231641",
        "strname_deinr": "Beaulieustrasse 2",
        "plz_plz6": "3012/301200",
        "ggdename": "Bern",
        "ggdenr": 351,
        "gexpdat": "13.07.2025",
        "gdekt": "BE",
        "egrid": "CH251146763508",
        "lgbkr": 2,
        "lparz": "2091",
        "lparzsx": null,
        "ltyp": null,
        "gebnr": "",
        "gbez": "",
        "gkode": 2599407.817,
        "gkodn": 1200797.593,
        "gksce": 904,
        "gstat": 1004,
        "gkat": 1020,
        "gklas": 1122,
        "gbauj": null,
        "gbaum": null,
        "gbaup": 8012,
        "gabbj": null,
        "garea": 174,
        "gvol": null,
        "gvolnorm": null,
        "gvolsce": null,
        "gastw": 4,
        "ganzwhg": 10,
        "gazzi": null,
        "gschutzr": null,
        "gebf": null,
        "gwaerzh1": 7460,
        "genh1": 7580,
        "gwaersceh1": 865,
        "gwaerdath1": "11.02.2025",
        "gwaerzh2": 7400,
        "genh2": 7500,
        "gwaersceh2": 860,
        "gwaerdath2": "29.11.2001",
        "gwaerzw1": 7660,
        "genw1": 7580,
        "gwaerscew1": 865,
        "gwaerdatw1": "11.02.2025",
        "gwaerzw2": 7600,
        "genw2": 7500,
        "gwaerscew2": 860,
        "gwaerdatw2": "29.11.2001",
        "edid": "0",
        "egaid": 100774486,
        "deinr": "2",
        "esid": 10084832,
        "strname": ["Beaulieustrasse"],
        "strnamk": ["Beaulieustr."],
        "strindx": ["Bea"],
        "strsp": ["DE"],
        "stroffiziel": "1",
        "dplz4": 3012,
        "dplzz": 0,
        "dplzname": "Bern",
        "dkode": 2599409.699,
        "dkodn": 1200794.829,
        "doffadr": 1,
        "dexpdat": "13.07.2025",
        "ewid": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        "whgnr": [null, null, null, null, null, null, null, null, null, null],
        "wstwk": [3100, 3102, 3102, 3101, 3103, 3101, 3104, 3103, 3104, 3104],
        "wmehrg": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "weinr": [null, null, null, null, null, null, null, null, null, null],
        "wbez": [
          null,
          "Rechts",
          "Links",
          "Rechts",
          "Rechts",
          "Links",
          "Mitte",
          "Links",
          "Links",
          "Rechts"
        ],
        "wstat": [3004, 3004, 3004, 3004, 3004, 3004, 3004, 3004, 3004, 3004],
        "wexpdat": [
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00"
        ],
        "wbauj": [1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999],
        "wabbj": [null, null, null, null, null, null, null, null, null, null],
        "warea": [95, 97, 65, 97, 97, 65, 48, 65, 20, 20],
        "wazim": [3, 4, 2, 4, 3, 2, 1, 5, 1, 1],
        "wkche": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "label": "Beaulieustrasse 2"
      }
    }
  ]
}'
/>

Search for the `Talstrasse` in Commune `Full-Reuenthal`

<ExampleCodeBlock 
request='$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.swisstopo.amtliches-strassenverzeichnis&searchText=Talstrasse&searchField=stn_label&returnGeometry=false&contains=false&layerDefs={"ch.swisstopo.amtliches-strassenverzeichnis":"com_fosnr=4307"}' 
example='{
  "results": [
    {
      "layerBodId": "ch.swisstopo.amtliches-strassenverzeichnis",
      "layerName": "Official directory of streets",
      "featureId": 10094530,
      "id": 10094530,
      "attributes": {
        "str_esid": 10094530,
        "stn_label": "Talstrasse",
        "zip_label": "5324 Full-Reuenthal",
        "com_name": "Full-Reuenthal",
        "com_fosnr": 4307,
        "str_official": 1,
        "str_modified": "2024-07-23",
        "str_type": "Strasse",
        "str_children": null,
        "str_parent": null,
        "str_status": "bestehend",
        "label": "Talstrasse"
      }
    }
  ]
}'
/>
