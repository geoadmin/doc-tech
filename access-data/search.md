# Search

Search for locations, layers or features using text or a bounding box.

<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/SearchServer" method="GET" />

::: tip The search service is separated in 3 categories or types:

- The **location search** which is composed of the following geocoded
  locations:
  - Cantons, Cities and communes
  - All names as printed on the national map
    ([SwissNames](https://www.swisstopo.admin.ch/en/geodata/landscape/names3d.html))
  - The districts
  - The ZIP codes
  - The addresses
  - The cadastral parcels
- The **layer search** wich enables the search of layers belonging to
  the GeoAdmin API.
- The **feature search** which is used to search through features
  descriptions. Note: you can also specify a bounding box to filter
  the features.

:::

## Request Details

To interact with the search service, you need to provide specific parameters in your request.
This endpoint only has query parameters that modify the behavior of the request, some are required and some are optional.

### Query Parameters

#### Location Search

| Parameters                         | Description                                                                                                                                                                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **searchText (required/optional)** | Must be provided if the `bbox` is not. The text to search for. Maximum of 10 words.                                                                                                                                                                                                               |
| **type (required)**                | The type of performed search. Specify `locations` to perform a location search.                                                                                                                                                                                                                   |
| **bbox (required/optional)**       | Must be provided if the `searchText` is not. A comma separated list of 4 coordinates representing the bounding box on which features should be filtered (SRID: 21781 or 2056).                                                                                                                    |
| **sortbbox (optional)**            | When `bbox` is specified and this parameter is "true", then the ranking of the results is performed according to the distance between the locations and the center of the bounding box. Default to "true".                                                                                        |
| **returnGeometry (optional)**      | This parameter defines whether the geometry is returned or not. Default to "true".                                                                                                                                                                                                                |
| **origins (optional)**             | A comma separated list of origins. Possible origins are: zipcode,gg25,district,kantone,gazetteer,address,parcel A description of the origins can be found hereunder. Per default all origins are used.                                                                                            |
| **limit (optional)**               | The maximum number of results to retrive per request (Max and default limit=50)                                                                                                                                                                                                                   |
| **sr (optional)**                  | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". When a _returnGeometry_ is set, its coordiantes will be returned in this _sr_. When setting a _bbox_, its coordinates have to be in the corresponding _sr_. |
| **geometryFormat (optional)**      | Set to _geojson_ if you want the service to return a GeoJSON `FeatureCollection`. Geometries will be returned in the _sr_ projection.                                                                                                                                                             |
| **callback (optional)**            | The name of the callback function.                                                                                                                                                                                                                                                                |

#### Layer Search

| Parameters                    | Description                                                                                                                                                                                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **searchText (required)**     | The text to search for. Maximum of 10 words allowed.                                                                                                                                                                                      |
| **type (required)**           | The type of performed search. Specify `layers` to perform a layer search.                                                                                                                                                                 |
| **lang (optional)**           | The language metadata. Supported values: de (default), fr, it, rm, en.                                                                                                                                                                    |
| **limit (optional)**          | The maximum number of results to retrive per request (Max and default limit=30)                                                                                                                                                           |
| **sr (optional)**             | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". When setting _geometryFormat_ to _geosjon_, the coordinates are returned in the corresponding _sr_. |
| **geometryFormat (optional)** | Set to _geojson_ if you want the service to return a GeoJSON `FeatureCollection`. Geometries will be returned in the _sr_ projection.                                                                                                     |
| **callback (optional)**       | The name of the callback function.                                                                                                                                                                                                        |

#### Feature Search

| Parameters                    | Description                                                                                                                                                                                                |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **searchText (required)**     | The text to search for (in features detail field). Maximum of 10 words allowed.                                                                                                                            |
| **type (required)**           | The type of performed search. Specify `featuresearch` to perform a feature search.                                                                                                                         |
| **bbox (optional)**           | A comma separated list of 4 coordinates representing the bounding box according to which features should be ordered (SRID: 21781 or 2056).                                                                 |
| **sortbbox (optional)**       | When `bbox` is specified and this parameter is "true", then the ranking of the results is performed according to the distance between the locations and the center of the bounding box. Default to "true". |
| **features (required)**       | A comma separated list of technical layer names.                                                                                                                                                           |
| **limit (optional)**          | The maximum number of results to retrive per request (Max and default limit=20)                                                                                                                            |
| **sr (optional)**             | The spatial reference. Supported values: 21781 (LV03) and 2056 (LV95) Defaults to "21781".                                                                                                                 |
| **geometryFormat (optional)** | Set to _geojson_ if you want the service to return a GeoJSON `FeatureCollection`. Geometries will be returned in the _sr_ projection.                                                                      |
| **callback (optional)**       | The name of the callback function.                                                                                                                                                                         |

## Response Details

The results are presented as a list of object literals.
Here is a description of the response's data.

| **Field** | **Description**                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`      | This is an internal value and therefore shouldn't be used.                                                                                                         |
| `weight`  | The `weight` is dynamically computed according to the `searchText` that is provided. It informs the user about how close an entry is to the provided `searchText`. |

**Attributes:**
| **Field** | **Description** |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `origin` | This attribute refers to the type of data an entry stands for. |
| `layerBodId` | The ID of the associated layer (if any). |
| `featureId` | If available, the object's ID can be combined with the `layerBodId` to collect more information about a feature. |
| `detail` | The search field. |
| `rank` | A different `rank` is associated to each origin. Results are always ordered in ascending ranks. |
| `geom_st_box2d` | This attribute is in CH1903 / LV03 (EPSG:21781) reference system and represents the bounding box of the associated geometry. |
| `num` | This attribute is only valid for locations with `address` `origin`. It refers to the street number. |
| `x` and `y` | These attributes represent the coordinates of an entry. If an object's entry is a line or a polygon, those coordinates will always be on the underlying geometry. |
| `label` | The HTML label for an entry. |

Here is a list of possible origins sorted in ascending ranking order:

- **zipcode** (ch.swisstopo-vd.ortschaftenverzeichnis_plz)
- **gg25** (ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill)
- **district** (ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill)
- **kantone** (ch.swisstopo.swissboundaries3d-kanton-flaeche.fill)
- **gazetteer** (ch.swisstopo.swissnames3d, ch.bav.haltestellen-oev)
- **address** (ch.bfs.gebaeude_wohnungs_register with EGID or use prefix 'addresse', 'adresse', 'indirizzo', 'address' without EGID)
- **parcel** (use prefix "parcel", "parzelle", "parcelle" or "parcella" in your requests to filter out other origins)

Prefix filtering cannot be combined with parameter <span
class="title-ref">origins</span>.

## Examples

Search for locations matching the word “wabern”:

<ExampleCodeBlock
request="$ curl https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=wabern&type=locations"
example='{
  "results": [
    {
      "attrs": {
        "detail": "wabern koeniz",
        "geom_quadindex": "021300220302121113110",
        "geom_st_box2d": "BOX(601112.8374564094 197515.61386168728,601112.8374564094 197515.61386168728)",
        "label": "<i>Populated Place</i> <b>Wabern</b> (BE) - Köniz",
        "lat": 46.928733825683594,
        "lon": 7.453245639801025,
        "num": 1,
        "objectclass": "TLM_SIEDLUNGSNAME",
        "origin": "gazetteer",
        "rank": 5,
        "x": 197515.609375,
        "y": 601112.8125,
        "zoomlevel": 10
      },
      "id": 357116,
      "weight": 100
    },
  (...more results...)
  ]
}'
/>

Search for locations of type "parcel" and "district" (the origins):

<ExampleCodeBlock 
request="$ curl https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=bern&origins=parcel,district&type=locations" 
example='{
  "results": [
    {
      "attrs": {
        "detail": "Bern-Mittelland",
        "featureId": "246",
        "geom_quadindex": "021",
        "geom_st_box2d": "BOX(575209.9836898939 168848.72527490254,622384.0411650916 219079.463898759)",
        "label": "<b>Bern-Mittelland</b>",
        "lat": 46.896873474121094,
        "lon": 7.495893478393555,
        "num": 1,
        "objectclass": "",
        "origin": "district",
        "rank": 3,
        "x": 193975.1875,
        "y": 604363.3125,
        "zoomlevel": 4294967295
      },
      "id": 246,
      "weight": 1
    },
    (...more results...)
  ]
}'
/>

Search for locations within a given map extent the `bbox`:

<ExampleCodeBlock 
request="$ curl https://api3.geo.admin.ch/rest/services/api/SearchServer?bbox=551306.5625,167918.328125,551754.125,168514.625&type=locations"
example='{
  "results": [
    {
      "attrs": {
        "@geodist": 5062.0673828125,
        "detail": "1260 moudon 5678 ch974590888353",
        "geom_quadindex": "0212203",
        "geom_st_box2d": "BOX(551183.7976385716 167969.01602065412,551736.9309022687 168560.51228044872)",
        "label": "<b>Moudon</b> 1260 (CH 9745 9088 8353)",
        "lat": 46.663848876953125,
        "lon": 6.8045806884765625,
        "num": 1260,
        "objectclass": "",
        "origin": "parcel",
        "rank": 10,
        "x": 168265.375,
        "y": 551474.125,
        "zoomlevel": 10
      },
      "id": 1172427,
      "weight": 1514
    },
    (...more results...)
  ]
}'
/>

- Search for layers in French matching the word “géoïde” in their description:

<ExampleCodeBlock 
request="$ curl https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=géoïde&type=layers&lang=fr"
example='{
  "results": [
    {
      "attrs": {
        "detail": "modele de geoide chgeo2004 en ch1903 | modele du geoide de la suisse de la version de 2004 _chgeo2004_ dans le systeme de reference ch1903. le modele forme la surface zero de reference _proche du niveau moyen des mers_ pour la determination des altitudes. il permet la transformation entre des hauteurs ellipsoidales et des altitudes orthometriques _ran95_. les altitudes du geoide sont enregistrees sur une grille de resolution 1 x 1 km et sont interpolees par la methode biquadratique. le modele est disponible en plusieurs systemes de reference et en differents formats. | modele de geoide | swisstopo | office federal de topographie swisstopo | office federal de topographie swisstopo",
        "label": "<b>Géoïde en CH1903</b>",
        "lang": "fr",
        "layer": "ch.swisstopo.geoidmodell-ch1903",
        "origin": "layer",
        "staging": "prod",
        "title": "geoide en ch1903",
        "topics": "api,ech,geodesy,geol,inspire,service-wms,swisstopo"
      },
      "id": 101,
      "weight": 48
    },
    (...more results...)
  ]
}'
/>

Search for features matching word "433" in their description:

<ExampleCodeBlock 
request="$ curl https://api3.geo.admin.ch/rest/services/api/SearchServer?features=ch.bafu.hydrologie-gewaesserzustandsmessstationen&type=featuresearch&searchText=433"
example='{
  "results": [
    {
      "attrs": {
        "detail": "4330 ob rbk, zinggen aeaecheli",
        "featureId": "1821",
        "feature_id": "1821",
        "geom_quadindex": "030111222231132003303",
        "geom_st_box2d": "BOX(765885.282632635 255374.66946989714,765885.282632635 255374.66946989714)",
        "label": "Ob RBK, Zinggen",
        "lat": 47.428253173828125,
        "layer": "ch.bafu.hydrologie-gewaesserzustandsmessstationen",
        "lon": 9.637541770935059,
        "origin": "feature"
      },
      "id": 4330,
      "weight": 5
    },
    (...more results...)
  ]
}'
/>

Get a GeoJSON for locations matching the word “wabern”:

<ExampleCodeBlock 
request="$ curl https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=wabern&type=locations&geometryFormat=geojson"
example='{
  "bbox": [
    601112.8374564094, 197515.61386168728, 601112.8374564094, 197515.61386168728
  ],
  "features": [
    {
      "bbox": [
        601112.8374564094, 197515.61386168728, 601112.8374564094,
        197515.61386168728
      ],
      "geometry": {
        "coordinates": [197515.609375, 601112.8125],
        "type": "Point"
      },
      "id": 357116,
      "properties": {
        "detail": "wabern koeniz",
        "geom_quadindex": "021300220302121113110",
        "geom_st_box2d": "BOX(601112.8374564094 197515.61386168728,601112.8374564094 197515.61386168728)",
        "id": 357116,
        "label": "<i>Populated Place</i> <b>Wabern</b> (BE) - Köniz",
        "lat": 46.928733825683594,
        "lon": 7.453245639801025,
        "num": 1,
        "objectclass": "TLM_SIEDLUNGSNAME",
        "origin": "gazetteer",
        "rank": 5,
        "weight": 100,
        "x": 197515.609375,
        "y": 601112.8125,
        "zoomlevel": 10
      },
      "type": "Feature"
    },
    (...more features...)
  ],
  "type": "FeatureCollection"
}'
/>

Get a Webmercator GeoJSON:

<ExampleCodeBlock 
request="$ curl https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=wabern&type=locations&geometryFormat=geojson"
example='{
  "bbox": [829691.4, 5930449.5, 829691.4, 5930449.5],
  "features": [
    {
      "bbox": [829691.4, 5930449.5, 829691.4, 5930449.5],
      "geometry": {
        "coordinates": [829691.4128918657, 5930449.4601289565],
        "type": "Point"
      },
      "id": 357116,
      "properties": {
        "detail": "wabern koeniz",
        "geom_quadindex": "021300220302121113110",
        "geom_st_box2d": "BOX(829691.4 5930449.5,829691.4 5930449.5)",
        "id": 357116,
        "label": "<i>Populated Place</i> <b>Wabern</b> (BE) - Köniz",
        "lat": 46.928733825683594,
        "lon": 7.453245639801025,
        "num": 1,
        "objectclass": "TLM_SIEDLUNGSNAME",
        "origin": "gazetteer",
        "rank": 5,
        "weight": 100,
        "x": 829691.4128918657,
        "y": 5930449.4601289565,
        "zoomlevel": 10
      },
      "type": "Feature"
    },
    (...more features...)
  ],
  "type": "FeatureCollection"
}'
/>

Input `bbox` may also be in `LV95`:

<ExampleCodeBlock 
request="$ curl https://api3.geo.admin.ch/rest/services/api/SearchServer?bbox=2551306.5625,1167918.328125,2551754.125,1168514.625&type=locations&sr=2056"
example='{
  "results": [
    {
      "attrs": {
        "@geodist": 5062.0673828125,
        "detail": "1260 moudon 5678 ch974590888353",
        "geom_quadindex": "0212203",
        "geom_st_box2d": "BOX(2551183.522999998 1167969.4200000018,2551736.6559999995 1168560.9329999983)",
        "label": "<b>Moudon</b> 1260 (CH 9745 9088 8353)",
        "lat": 46.663848876953125,
        "lon": 6.8045806884765625,
        "num": 1260,
        "objectclass": "",
        "origin": "parcel",
        "rank": 10,
        "x": 1168265.375,
        "y": 2551474,
        "zoomlevel": 10
      },
      "id": 1172427,
      "weight": 1514
    },
    {
      "attrs": {
        "@geodist": 8227.7900390625,
        "detail": "1261 moudon 5678 ch988883459063",
        "geom_quadindex": "0212203300",
        "geom_st_box2d": "BOX(2551598.715 1168200.6110000014,2551676.7859999985 1168281.811999999)",
        "label": "<b>Moudon</b> 1261 (CH 9888 8345 9063)",
        "lat": 46.663612365722656,
        "lon": 6.806742191314697,
        "num": 1261,
        "objectclass": "",
        "origin": "parcel",
        "rank": 10,
        "x": 1168238,
        "y": 2551639.25,
        "zoomlevel": 10
      },
      "id": 1158964,
      "weight": 1517
    },
    (...more results...)
  ]
}'
/>

### Example of feature search usage with other services

First: search for addresses using the feature search service:

<ExampleCodeBlock 
request="$ curl https://api3.geo.admin.ch/rest/services/api/SearchServer?features=ch.bfs.gebaeude_wohnungs_register&type=featuresearch&searchText=isabelle"
example='{
  "results": [
    {
      "attrs": {
        "detail": "chemin isabelle/isabellenweg 5 2503 biel/bienne biel/bienne _be_ 1755615",
        "featureId": "1755615_0",
        "feature_id": "1755615_0",
        "geom_quadindex": "021032131313212301232",
        "geom_st_box2d": "BOX(584843.5447093162 219913.35458627177,584843.5447093162 219913.35458627177)",
        "label": "Chemin Isabelle/Isabellenweg 5 Biel/Bienne",
        "lat": 47.13003158569336,
        "layer": "ch.bfs.gebaeude_wohnungs_register",
        "lon": 7.238868713378906,
        "origin": "feature"
      },
      "id": 153560,
      "weight": 14
    },
    {
      "attrs": {
        "detail": "chemin isabelle/isabellenweg 21 2503 biel/bienne biel/bienne _be_ 1755625",
        "featureId": "1755625_1",
        "feature_id": "1755625_1",
        "geom_quadindex": "021032131313300211230",
        "geom_st_box2d": "BOX(584895.0572512916 219943.13782199132,584895.0572512916 219943.13782199132)",
        "label": "Chemin Isabelle/Isabellenweg 21 Biel/Bienne",
        "lat": 47.13030242919922,
        "layer": "ch.bfs.gebaeude_wohnungs_register",
        "lon": 7.239546775817871,
        "origin": "feature"
      },
      "id": 512588,
      "weight": 14
    },
    (...more results...)
  ]
}'
/>

Then: use "feature_id" found in "attrs" to get detailed information about a feature:

<ExampleCodeBlock 
request="$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bfs.gebaeude_wohnungs_register/880711_0?returnGeometry=false"
example='{
  "feature": {
    "layerBodId": "ch.bfs.gebaeude_wohnungs_register",
    "layerName": "RBD: building status",
    "featureId": "880711_0",
    "id": "880711_0",
    "attributes": {
      "egid": "880711",
      "strname_deinr": "Chemin Isabelle-de-Montolieu 109",
      "plz_plz6": "1010/101000",
      "ggdename": "Lausanne",
      "ggdenr": 5586,
      "gexpdat": "14.07.2025",
      "gdekt": "VD",
      "egrid": "CH367583455638",
      "lgbkr": 0,
      "lparz": "3244",
      "lparzsx": null,
      "ltyp": null,
      "gebnr": "16091a",
      "gbez": "",
      "gkode": 2539319,
      "gkodn": 1155036,
      "gksce": 905,
      "gstat": 1004,
      "gkat": 1030,
      "gklas": 1122,
      "gbauj": 1981,
      "gbaum": null,
      "gbaup": 8016,
      "gabbj": null,
      "garea": 721,
      "gvol": null,
      "gvolnorm": null,
      "gvolsce": null,
      "gastw": 5,
      "ganzwhg": 8,
      "gazzi": null,
      "gschutzr": null,
      "gebf": null,
      "gwaerzh1": 7460,
      "genh1": 7580,
      "gwaersceh1": 860,
      "gwaerdath1": "29.11.2001",
      "gwaerzh2": null,
      "genh2": null,
      "gwaersceh2": null,
      "gwaerdath2": "-",
      "gwaerzw1": 7660,
      "genw1": 7580,
      "gwaerscew1": 860,
      "gwaerdatw1": "29.11.2001",
      "gwaerzw2": 7600,
      "genw2": 7500,
      "gwaerscew2": 860,
      "gwaerdatw2": "29.11.2001",
      "edid": "0",
      "egaid": 100568438,
      "deinr": "109",
      "esid": 10076072,
      "strname": ["Chemin Isabelle-de-Montolieu"],
      "strnamk": ["Ch. I.-de-Montolieu"],
      "strindx": ["Isa"],
      "strsp": ["FR"],
      "stroffiziel": "1",
      "dplz4": 1010,
      "dplzz": 0,
      "dplzname": "Lausanne",
      "dkode": 2539322.105,
      "dkodn": 1155041.598,
      "doffadr": 1,
      "dexpdat": "14.07.2025",
      "ewid": ["1", "2", "3", "4", "5", "6", "7", "8"],
      "whgnr": [null, null, null, null, null, null, null, null],
      "wstwk": [3101, 3102, 3102, 3103, 3103, 3104, 3104, 3101],
      "wmehrg": [0, 0, 0, 0, 0, 0, 0, 0],
      "weinr": ["33", "43", "44", "53", "54", "63", "64", "34"],
      "wbez": [
        "4984931",
        "1617476",
        "3960320",
        "6298132",
        "6505999",
        "8001802",
        "5209936",
        "2752108"
      ],
      "wstat": [3004, 3004, 3004, 3004, 3004, 3004, 3004, 3004],
      "wexpdat": [
        "2025-07-14T00:00:00",
        "2025-07-14T00:00:00",
        "2025-07-14T00:00:00",
        "2025-07-14T00:00:00",
        "2025-07-14T00:00:00",
        "2025-07-14T00:00:00",
        "2025-07-14T00:00:00",
        "2025-07-14T00:00:00"
      ],
      "wbauj": [1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999],
      "wabbj": [null, null, null, null, null, null, null, null],
      "warea": [86, 86, 97, 86, 97, 86, 97, 97],
      "wazim": [4, 4, 4, 4, 4, 4, 4, 4],
      "wkche": [1, 1, 1, 1, 1, 1, 1, 1],
      "label": "Chemin Isabelle-de-Montolieu 109"
    }
  }
}'
/>
