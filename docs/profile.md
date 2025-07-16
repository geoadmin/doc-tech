# Profile

This service allows to obtain elevation information for a polyline in CSV format. See [Height models](https://www.swisstopo.admin.ch/en/geodata/height/alti3d.html) for more details about data used by this service.

<Suspense>
<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/profile.json" method="GET / POST" />
</Suspense>
<Suspense>
<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/profile.csv" method="GET / POST" />
</Suspense>

::: tip
For large datasets, use `POST` to send the payload in the request body
:::

## Request Details

To interact with the Profile service, you need to provide specific parameters in your request.
This endpoint only has **Query Parameters** that modify the behavior of the request, some are required and some are optional.

### Query Parameters

| Parameters                     | Description                                                                                                                                                                                                                                                             |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **geom (required)**            | A GeoJSON representation of a polyline (type = LineString). The LineString should not have more than <span class="title-ref">PROFILE_MAX_AMOUNT_POINTS</span>, generally 5'000 coordinates.                                                                             |
| **sr (optional)**              | The reference system to use (EPSG code). Valid value are 2056 (for LV95) and 21781 (for LV03). Strongly advised to set one, but if not given, trying to guess which one to use.                                                                                         |
| **nb_points (optional)**       | The number of points used for the polyline segmentation. Default "200".                                                                                                                                                                                                 |
| **offset (optional)**          | The offset value (INTEGER) in order to use the [exponential moving algorithm](http://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average) . For a given value the offset value specify the number of values before and after used to calculate the average. |
| **distinct_points (optional)** | If True, it will ensure the coordinates given to the service are part of the response. Possible values are True or False, default to False.                                                                                                                             |
| **callback (optional)**        | Only available for **profile.json**. The name of the callback function.                                                                                                                                                                                                 |

## Examples

<ExampleCodeBlock
request='$ curl https://api3.geo.admin.ch/rest/services/profile.json?geom={%22type%22:%22LineString%22,%22coordinates%22:[[2550050,1206550],[2556950,1204150],[2561050,1207950]]}'
example='[
  {
    "alts": {
      "COMB": 1121.9,
      "DTM2": 1121.9,
      "DTM25": 1121.9
    },
    "dist": 0,
    "easting": 2550050,
    "northing": 1206550
  },
  {
    "alts": {
      "COMB": 1143.5,
      "DTM2": 1143.5,
      "DTM25": 1143.5
    },
    "dist": 64.7,
    "easting": 2550111.062,
    "northing": 1206528.761
  },
  {
    "alts": {
      "COMB": 1158.4,
      "DTM2": 1158.4,
      "DTM25": 1158.4
    },
    "dist": 129.3,
    "easting": 2550172.124,
    "northing": 1206507.522
  },
  (...more results...)
]'
/>

<ExampleCodeBlock
request='$ curl https://api3.geo.admin.ch/rest/services/profile.csv?geom={"type":"LineString","coordinates":[[2550050,1206550],[2556950,1204150],[2561050,1207950]]}'
example='profile.csv'
/>
