---
outline: [2, 3]
---

# Changes and Migration from `v0.9` to `v1`

The new major release `v1` of the STAC API brings a number of additional features and fields and a few breaking changes with respect to `v0.9`.
In order to highlight the changes we'll use the following example `item` and `asset` JSON objects to illustrate the differences.

::: details Example `item` JSON

```json
{
  "id": "smr200-200-4-2019",
  "links": [{}, {}, {}, {}],
  "assets": {
    "smr50-263-2016-2056-kgrs-2.5.tiff": {},
    "smr50-263-2016-2056-komb-2.5.tiff": {},
    "smr50-263-2016-2056-krel-2.5.tiff": {}
  },
  "bbox": [7.0906249, 45.9160584, 7.1035698, 45.925093],
  "geometry": {
    "type": "Point",
    "coordinates": []
  },
  "properties": {
    "created": "2018-02-12T23:20:50Z",
    "datetime": "2018-02-12T23:20:50Z",
    "start_datetime": "2018-02-12T23:20:50Z",
    "end_datetime": "2018-02-12T23:20:50Z",
    "expires": "2018-02-12T23:20:50Z",
    "updated": "2018-02-12T23:20:50Z",
    "title": "Feature title",
    "forecast:reference_datetime": "2018-02-12T23:20:50Z",
    "forecast:horizon": "P3DT6H",
    "forecast:duration": "P3DT6H",
    "forecast:variable": "air_temperature",
    "forecast:perturbed": true
  },
  "stac_version": "0.9.0",
  "stac_extensions": ["https://stac-extensions.github.io/forecast/v0.2.0/schema.json"],
  "type": "Feature"
}
```

:::
::: details Example `asset` JSON

```json
{
  "id": "smr50-263-2016-2056-kgrs-2.5.tiff",
  "title": "Thumbnail",
  "description": "string",
  "type": "image/tiff; application=geotiff",
  "href": "http://data.geo.admin.ch/ch.swisstopo.swissimage/collections/cs/items/CS3-20160503_132130_04/thumb.png",
  "file:checksum": "90e402107a7f2588a85362b9beea2a12d4514d45",
  "roles": ["thumbnail"],
  "geoadmin:variant": "komb",
  "geoadmin:lang": "de",
  "proj:epsg": 2056,
  "gsd": 2.5,
  "created": "2018-02-12T23:20:50Z",
  "updated": "2018-02-12T23:20:50Z",
  "links": [
    {
      "href": "https://data.geo.admin.ch/api/stac/v0.9/collections/ch.swisstopo.pixelkarte-farbe-pk50.noscale/items/smr200-200-4-2019/assets/smr50-263-2016-2056-kgrs-2.5.tiff",
      "rel": "self",
      "hreflang": "de"
    },
    {
      "href": "https://data.geo.admin.ch/api/stac/v0.9/",
      "rel": "root"
    }
  ]
}
```

:::

Along with the changes at the API level, `v1` comes with a new authentication mechanism. These changes are described in detail [here](./authentication).

## Breaking changes

Overall, there are very few breaking changes between `v0.9` and `v1` of the STAC API.
The following fields of the `asset` object have changed:

```json
{
    "href": "http://data.geo.admin.ch/ch.swisstopo.swissimage/collections/cs/items/CS3-20160503_132130_04/thumb.png",
    "checksum:multihash": "90e402107a7f2588a85362b9beea2a12d4514d45",       // [!code --]
    "file:checksum": "90e402107a7f2588a85362b9beea2a12d4514d45",            // [!code ++]
    ...
    "proj:epsg": 2056,
    "eo:gsd": 2.5,                                                          // [!code --]
    "gsd": 2.5,                                                             // [!code ++]
    "created": "2018-02-12T23:20:50Z",
}
```

## New fields and functionality

We have extended the functionality of collections and added new fields to items and assets.

### Collection object

Collections can now have assets as well, using the same structure and fields as item assets. For details, see the [API Specs](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Data/operation/describeCollection).

### Item object

##### Item Expiration

It is now possible to set an expiry date for an item. Items with an `expires` date in the past will automatically be deleted.

```json
{
    ...
    "end_datetime": "2018-02-12T23:20:50Z",
    "expires": "2018-02-12T23:20:50Z",                  // [!code ++]
    "updated": "2018-02-12T23:20:50Z",
    ...
}
```

##### Forecast Extension

For the specific use case of [weather forecast data](https://github.com/MeteoSwiss/opendata-forecast-data) we have developed and implemented the [STAC Forecast Extension](https://github.com/stac-extensions/forecast/pull/12) with the following new fields.

```json
{
    ...
    "updated": "2018-02-12T23:20:50Z",
    "title": "Feature title",
    "forecast:reference_datetime": "2018-02-12T23:20:50Z",  // [!code ++]
    "forecast:horizon": "P3DT6H",                           // [!code ++]
    "forecast:duration": "P3DT6H",                          // [!code ++]
    "forecast:variable": "air_temperature",                 // [!code ++]
    "forecast:perturbed": true                              // [!code ++]
    ...
}
```

##### Item geometry

The item geometry can now be any valid GeoJSON geometry. Below is the relevant part of the spec instead of an example:

```json
itemGeometry:
    $ref: "#/components/schemas/geoJsonPolygon"         // [!code --]
    oneOf:                                              // [!code ++]
    - $ref: "#/components/schemas/geoJsonPoint"         // [!code ++]
    - $ref: "#/components/schemas/geoJsonLineString"    // [!code ++]
    - $ref: "#/components/schemas/geoJsonPolygon"       // [!code ++]
    - $ref: "#/components/schemas/geoJsonMultiPoint"    // [!code ++]
    - $ref: "#/components/schemas/geoJsonMultiLineString" // [!code ++]
    - $ref: "#/components/schemas/geoJsonMultiPolygon"  // [!code ++]
```

### Asset object

##### Language Information About the Referenced Asset

You can now specify the language of a `link` target using the `hreflang` parameter from the [Language Extension](https://github.com/stac-extensions/language?tab=readme-ov-file#fields-for-links-and-assets).

```json
{
  "links": [
    {
      "href": "https://data.geo.admin.ch/api/stac/v0.9/collections/ch.swisstopo.pixelkarte-farbe-pk50.noscale/items/smr200-200-4-2019/assets/smr50-263-2016-2056-kgrs-2.5.tiff",
      "rel": "self",
      "hreflang": "de" // [!code ++]
    },
    {
      "href": "https://data.geo.admin.ch/api/stac/v0.9/",
      "rel": "root"
    }
  ]
}
```

##### Asset roles

Assets can now have roles that define the purpose of the asset (e.g. `thumbnail`).

```json
{
    ...
    "file:checksum": "90e402107a7f2588a85362b9beea2a12d4514d45",
    "roles": [              // [!code ++]
        "thumbnail"         // [!code ++]
    ],                      // [!code ++]
    "geoadmin:variant": "komb",
}
```
