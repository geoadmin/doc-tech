# Search

The search service can be used to search for locations, layers or
features.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/SearchServer

### Description

The search service is separated in 3 various categories or types:

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
  the features. ([Searchable
  layers](../../../api/faq/index.html#which-layers-are-searchable))

### Input parameters

Only RESTFul interface is available.

**Location Search**

| Parameters                         | Description                                                                                                                                                                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **searchText (required/optional)** | Must be provided if the <span class="title-ref">bbox</span> is not. The text to search for. Maximum of 10 words.                                                                                                                                                                                  |
| **type (required)**                | The type of performed search. Specify <span class="title-ref">locations</span> to perform a location search.                                                                                                                                                                                      |
| **bbox (required/optional)**       | Must be provided if the <span class="title-ref">searchText</span> is not. A comma separated list of 4 coordinates representing the bounding box on which features should be filtered (SRID: 21781 or 2056).                                                                                       |
| **sortbbox (optional)**            | When <span class="title-ref">bbox</span> is specified and this parameter is "true", then the ranking of the results is performed according to the distance between the locations and the center of the bounding box. Default to "true".                                                           |
| **returnGeometry (optional)**      | This parameter defines whether the geometry is returned or not. Default to "true".                                                                                                                                                                                                                |
| **origins (optional)**             | A comma separated list of origins. Possible origins are: zipcode,gg25,district,kantone,gazetteer,address,parcel A description of the origins can be found hereunder. Per default all origins are used.                                                                                            |
| **limit (optional)**               | The maximum number of results to retrive per request (Max and default limit=50)                                                                                                                                                                                                                   |
| **sr (optional)**                  | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". When a _returnGeometry_ is set, its coordiantes will be returned in this _sr_. When setting a _bbox_, its coordinates have to be in the corresponding _sr_. |
| **geometryFormat (optional)**      | Set to _geojson_ if you want the service to return a GeoJSON <span class="title-ref">FeatureCollection</span>. Geometries will be returned in the _sr_ projection.                                                                                                                                |
| **callback (optional)**            | The name of the callback function.                                                                                                                                                                                                                                                                |

**Layer Search**

| Parameters                    | Description                                                                                                                                                                                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **searchText (required)**     | The text to search for. Maximum of 10 words allowed.                                                                                                                                                                                      |
| **type (required)**           | The type of performed search. Specify <span class="title-ref">layers</span> to perform a layer search.                                                                                                                                    |
| **lang (optional)**           | The language metadata. Supported values: de (default), fr, it, rm, en.                                                                                                                                                                    |
| **limit (optional)**          | The maximum number of results to retrive per request (Max and default limit=30)                                                                                                                                                           |
| **sr (optional)**             | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". When setting _geometryFormat_ to _geosjon_, the coordinates are returned in the corresponding _sr_. |
| **geometryFormat (optional)** | Set to _geojson_ if you want the service to return a GeoJSON <span class="title-ref">FeatureCollection</span>. Geometries will be returned in the _sr_ projection.                                                                        |
| **callback (optional)**       | The name of the callback function.                                                                                                                                                                                                        |

**Feature Search**

| Parameters                    | Description                                                                                                                                                                                                                             |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **searchText (required)**     | The text to search for (in features detail field). Maximum of 10 words allowed.                                                                                                                                                         |
| **type (required)**           | The type of performed search. Specify <span class="title-ref">featuresearch</span> to perform a feature search.                                                                                                                         |
| **bbox (optional)**           | A comma separated list of 4 coordinates representing the bounding box according to which features should be ordered (SRID: 21781 or 2056).                                                                                              |
| **sortbbox (optional)**       | When <span class="title-ref">bbox</span> is specified and this parameter is "true", then the ranking of the results is performed according to the distance between the locations and the center of the bounding box. Default to "true". |
| **features (required)**       | A comma separated list of technical layer names.                                                                                                                                                                                        |
| **limit (optional)**          | The maximum number of results to retrive per request (Max and default limit=20)                                                                                                                                                         |
| **sr (optional)**             | The spatial reference. Supported values: 21781 (LV03) and 2056 (LV95) Defaults to "21781".                                                                                                                                              |
| **geometryFormat (optional)** | Set to _geojson_ if you want the service to return a GeoJSON <span class="title-ref">FeatureCollection</span>. Geometries will be returned in the _sr_ projection.                                                                      |
| **callback (optional)**       | The name of the callback function.                                                                                                                                                                                                      |

### Response syntax

The results are presented as a list of object literals. Here is an
example of response for location search.

```javascript
results: [
  {
    id: 206,
    weight: 12,
    attrs: {
      origin: "gg25",
      layerBodId: "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill",
      featureId: "351",
      detail: "bern be",
      rank: 2,
      geom_st_box2d: "BOX(589008 196443.046875,604334.3125 204343.5)",
      num: 1,
      y: 598637.3125,
      x: 200393.28125,
      label: "<b>Bern (BE)</b>",
    },
  },
];
```

or a valid <span class="title-ref">GeoJSON</span> <span
class="title-ref">FeatureCollection</span> if parameter <span
class="title-ref">geometryFormat=geojson</span> is present

```javascript
{
 "type": "FeatureCollection",
 "bbox": [
  601612,
  197186.8,
  601612,
  197186.8
 ],
 "features": [{
  "geometry": {
   "type": "Point",
   "coordinates": [
    197186.8125,
    601612.0625
   ]
  },
  "properties": {
   "origin": "gazetteer",
   "geom_quadindex": "021300220330313020221",
   "weight": 1,
   "zoomlevel": 10,
   "lon": 7.459799289703369,
   "detail": "wabern koeniz",
   "rank": 5,
   "lat": 46.925777435302734,
   "num": 1,
   "y": 601612.0625,
   "x": 197186.8125,
   "label": "<i>Populated Place</i> <b>Wabern</b> (BE) - Köniz",
   "id": 215754
  },
  "type": "Feature",
  "id": 215754,
  "bbox": [
   601612,
   197186.8,
   601612,
   197186.8
  ]
 }]
}
```

Here is a description of the data one can find in the above response.

- **id**: This is an internal value and therefore shouldn't be used.
- **weight**: The <span class="title-ref">weight</span> is dynamically
  computed according to the <span class="title-ref">searchText</span>
  that is provided. It informs the user about how close an entry is to
  the provided <span class="title-ref">searchText</span>.
- **attrs**: The attributes associated to a given entry.
  - **origin**: This attribute refers to the type of data an entry
    stands for.
  - **layerBodId**: The id of the associated layer (if any)
  - **featureId**: If available the object's Id can be combined with
    the <span class="title-ref">layerBodId</span> to collect more
    information about a feature.
  - **detail**: The search field
  - **rank**: A different <span class="title-ref">rank</span> is
    associated to each origin. Results are always ordered in
    ascending ranks.
  - **geom_st_box2d**: This attribute is in is in CH1903 / LV03
    (EPSG:21781) reference system and represents the bounding box of
    the associated geometry.
  - **num**: This attribute is only valid for locations with
    **address** <span class="title-ref">origin</span>. It refers to
    the street number.
  - **x and y**: These attributes represent the coordinates of an
    entry. If an object's entry is a line or a polygon, those
    coordinates will always be on the underlying geometry.
  - **label**: The html label for an entry.

Here is a list of possible origins sorted in ascending ranking order:

- zipcode (ch.swisstopo-vd.ortschaftenverzeichnis_plz)
- gg25 (ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill)
- district (ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill)
- kantone (ch.swisstopo.swissboundaries3d-kanton-flaeche.fill)
- gazetteer (ch.swisstopo.swissnames3d, ch.bav.haltestellen-oev)
- address (ch.bfs.gebaeude_wohnungs_register with EGID or use prefix
  'addresse', 'adresse', 'indirizzo', 'address' without EGID)
- parcel (use prefix "parcel", "parzelle", "parcelle" or "parcella" in
  your requests to filter out other origins)

Prefix filtering cannot be combined with parameter <span
class="title-ref">origins</span>.

### Examples

- Search for locations matching the word “wabern”:
  [https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=wabern&type=locations](../../../rest/services/api/SearchServer?searchText=wabern&type=locations)
- Search for locations of type "parcel" and "district" (the origins):
  [https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=bern&origins=parcel,district&type=locations](../../../rest/services/api/SearchServer?searchText=bern&origins=parcel,district&type=locations)
- Search for locations within a given map extent (the <span
  class="title-ref">bbox</span>):
  [https://api3.geo.admin.ch/rest/services/api/SearchServer?bbox=551306.5625,167918.328125,551754.125,168514.625&type=locations](../../../rest/services/api/SearchServer?bbox=551306.5625,167918.328125,551754.125,168514.625&type=locations)
- Search for layers in French matching the word “géoïde” in their
  description:
  [https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=géoïde&type=layers&lang=fr](../../../rest/services/api/SearchServer?searchText=géoïde&type=layers&lang=fr)
- Search for features matching word "433" in their description:
  [https://api3.geo.admin.ch/rest/services/api/SearchServer?features=ch.bafu.hydrologie-gewaesserzustandsmessstationen&type=featuresearch&searchText=433](../../../rest/services/api/SearchServer?features=ch.bafu.hydrologie-gewaesserzustandsmessstationen&type=featuresearch&searchText=433)
- Get a GeoJSON for locations matching the word “wabern”:
  [https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=wabern&type=locations&geometryFormat=geojson](../../../rest/services/api/SearchServer?searchText=wabern&type=locations&geometryFormat=geojson)
- Get a Webmercator GeoJSON:
  [https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=wabern&type=locations&geometryFormat=geojson&sr=3857](../../../rest/services/api/SearchServer?searchText=wabern&type=locations&geometryFormat=geojson&sr=3857)
- Input <span class="title-ref">bbox</span> may also be in \`LV95\`:
  [https://api3.geo.admin.ch/rest/services/api/SearchServer?bbox=2551306.5625,1167918.328125,2551754.125,1168514.625&type=locations&sr=2056](../../../rest/services/api/SearchServer?bbox=2551306.5625,1167918.328125,2551754.125,1168514.625&type=locations&sr=2056)

### Example of feature search usage with other services

- First: search for addresses using the feature search service:
  [https://api3.geo.admin.ch/rest/services/api/SearchServer?features=ch.bfs.gebaeude_wohnungs_register&type=featuresearch&searchText=isabelle](../../../rest/services/api/SearchServer?features=ch.bfs.gebaeude_wohnungs_register&type=featuresearch&searchText=isabelle)
- Then: use "feature_id" found in "attrs" to get detailed information
  about a feature:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bfs.gebaeude_wohnungs_register/880711_0?returnGeometry=false](../../../rest/services/api/MapServer/ch.bfs.gebaeude_wohnungs_register/880711_0?returnGeometry=false)
