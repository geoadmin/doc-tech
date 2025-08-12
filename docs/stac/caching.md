# Caching

Asset objects are cached for 2 hours (7200 seconds) by default.
Depending on the update interval of an asset object (e.g. for frequently updated data), the `Cache-Control` header can be different.
In special cases, it can even be set to `no-cache` (e.g. for real-time data).

All endpoints support the precondition headers `If-Match` and `If-None-Match`.
To reduce unnecessary traffic, it is highly recommended to use these headers (especially `If-None-Match`) when making requests."

If your application uses frequently updated data and you want to ensure you do not miss any updates, follow this recommended procedure:

```python
import requests
import time

refresh_interval = 60

item_etag = "*"
item_url = "https://data.geo.admin.ch/collections/{collectionID}/items/{itemId}"

asset_id = 'data.json'
asset_etag = "*"

poll_for_new_data = True

while(poll_for_new_data):
    item_response = requests.get(item_url, headers={'If-None-Match': f'"{item_etag}"'})
    if item_response.status_code == 304:
    # item metadata and hence any associated asset object didn't
    # change since last call

    time.sleep(refresh_interval)

    elif item_response.status_code == 200:
    # item metadata has changed since last visit

    item_etag = item_response.headers.get("ETag") # save the new etag
    asset_href = item_response.json()['assets'][asset_id]['href'] # save the asset href

    obj_response = requests.get(asset_href, headers={'If-None-Match': f'"{asset_etag}"'})
    if obj_response.status_code == 304:
        # "our" asset object didn't change since last call,
        # we can ignore that the item metadata changed,
        # it was a different asset that has changed

        time.sleep(refresh_interval)

    elif obj_response.status_code == 200:
        # "our" asset object has changed, we load the new data

        asset_etag = obj_response.headers.get("ETag")  # save the new asset etag
        asset_checksum = obj_response.headers.get("X-Amz-Meta-Sha256")
        object = obj_response.data

        # calculate the sha256 checksum of the data in a proper way
        checksum = calc_checksum(object)
        if checksum != asset_checksum:
        # Error: corrupted data from download
        # do proper error handling

        # do sth with the data
    else:
        # do proper error handling
    else:
    # do proper error handling
```
