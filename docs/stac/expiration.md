# Item expiration

By default, items and their assets are valid and stored indefinitely unless deleted explicitly.
However, it is sometimes desired that the data is only available for a limited amount of time (typically in the range of days).
This is indicated with the `expires` property on the item metadata:

```json
{

...
  "properties":
  {
    "created": "2025-08-12T13:20:00Z",
    "updated": "2025-08-12T13:20:00Z",
    "datetime": "2025-08-12T13:00:00Z",
    "expires": "2025-08-19T13:20:00Z",          // [!code highlight]
  }
...

```

Items which have this property set are automatically deleted after that datatime, including all their assets.
This enables implementing a "moving window" data retention pattern.

The expiration timestamp on the item can be set during creation of the item or with an update of its metadata.
For example, to keep a newly generated item for one week, add the `expires` property and set the timestamp to one week after the creation date.
For an item created on 2025-08-12 13:20:00:

```json
{

...
  "properties":
  {
    "datetime": "2025-08-12T13:00:00Z",
    "expires": "2025-08-19T13:20:00Z",          // [!code ++]
  }
...

```

Full reference in the [API Specs](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Data/operation/getFeature).
