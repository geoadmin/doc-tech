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

### Query Parameters

| Parameters                     | Description                                                                                                                                                                                                                                                             |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **geom (required)**            | A GeoJSON representation of a polyline (type = LineString). The LineString should not have more than <span class="title-ref">PROFILE_MAX_AMOUNT_POINTS</span>, generally 5'000 coordinates.                                                                             |
| **sr (optional)**              | The reference system to use (EPSG code). Valid value are 2056 (for LV95) and 21781 (for LV03). Strongly advised to set one, but if not given, trying to guess which one to use.                                                                                         |
| **nb_points (optional)**       | The number of points used for the polyline segmentation. Default "200".                                                                                                                                                                                                 |
| **offset (optional)**          | The offset value (INTEGER) in order to use the [exponential moving algorithm](http://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average) . For a given value the offset value specify the number of values before and after used to calculate the average. |
| **distinct_points (optional)** | If True, it will ensure the coordinates given to the service are part of the response. Possible values are True or False, default to False.                                                                                                                             |
| **callback (optional)**        | Only available for **profile.json**. The name of the callback function.                                                                                                                                                                                                 |

### Example

- A profile in JSON:
  [https://api3.geo.admin.ch/rest/services/profile.json?geom={"type"%3A"LineString"%2C"coordinates"%3A\[\[2550050%2C1206550\]%2C\[2556950%2C1204150\]%2C\[2561050%2C1207950\]\]}&sr=2056](../../../rest/services/profile.json?geom=%7B%22type%22%3A%22LineString%22%2C%22coordinates%22%3A%5B%5B2550050%2C1206550%5D%2C%5B2556950%2C1204150%5D%2C%5B2561050%2C1207950%5D%5D%7D)
- A profile in CSV:
  [https://api3.geo.admin.ch/rest/services/profile.csv?geom={"type"%3A"LineString"%2C"coordinates"%3A\[\[2550050%2C1206550\]%2C\[2556950%2C1204150\]%2C\[2561050%2C1207950\]\]}&sr=2056](../../../rest/services/profile.csv?geom=%7B%22type%22%3A%22LineString%22%2C%22coordinates%22%3A%5B%5B2550050%2C1206550%5D%2C%5B2556950%2C1204150%5D%2C%5B2561050%2C1207950%5D%5D%7D)
