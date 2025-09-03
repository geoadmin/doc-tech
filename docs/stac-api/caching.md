# Caching

This page explains how caching works for asset objects in our API and how to efficiently handle updates using HTTP caching headers.
By leveraging the the right headers, you can minimize unnecessary data transfer and keep your application in sync with the latest changes.

Asset objects are cached for two hours by default.
Depending on how frequently an asset is updated, the `Cache-Control` header may vary.
For example, real-time data may be served with `no-cache` to ensure freshness.

All endpoints support the HTTP precondition headers `If-Match` and `If-None-Match`.
To reduce unnecessary traffic and improve efficiency, we strongly recommend using these headers - especially `If-None-Match` - when making requests.

Below, you’ll find a sample Python script demonstrating a recommended polling strategy for frequent data updates.
The script uses these headers to check for updates periodically, only downloading new data when it has changed.

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
