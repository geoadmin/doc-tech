# Automated Item expiration

Items and their assets are by default stored forever or until they are actively deleted. However, it is sometimes desired that the data is only available for a limited amount of time (typically in the range of days). This is indicated with the `expires` property on the item metadata:

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

Items which have this property set are automatically deleted after that datatime, including all their assets. This allows to implement a "moving window" pattern of data.

The expiration datetime on the item can be set during creation of the item or with an update of its metadata. To keep a newly generated item for a week you would add the `expires` property and set the timestamp to one week after it's creation (assuming the item is created on 2025-08-12 at 13:20:00):

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

Full reference in [API Specs](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html#tag/Data/operation/getFeature).
