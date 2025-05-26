# Legend Resource

With a layer ID (or technical name), this service can be used to
retrieve a legend.

### URL

```bash
GET https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/legend
```

### Input Parameters

No css styling is provided per default so that you can use your own.

| Parameters              | Description                                                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **lang (optional)**     | The language. Supported values: de, fr, it , rm, en. (Defaults to de if browser language does not match any of the possible values) |
| **callback (optional)** | The name of the callback function.                                                                                                  |

### Example

- Get the legend for ch.bafu.nabelstationen:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/legend](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/legend)
- Get the same legend using JSONP:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/legend?callback=callback](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/legend?callback=callback)
