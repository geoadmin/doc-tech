# Cache Update

As noted in the `wmts_description` service, the Tiles of a given
\<Time\> dimension might be updated for technical reasons. If you are
caching Tiles locally, this might result in your cache being outdated.
Use the Cache Update service to query the Date of the last update for a
given layer. If your cache is older than the returned Date, you have to
clear your local cache.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/cacheUpdate

### Example

- The the latest Cache Update for SwissImage Product:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.swisstopo.swissimage-product/cacheUpdate](../../../rest/services/api/MapServer/ch.swisstopo.swissimage-product/cacheUpdate)
