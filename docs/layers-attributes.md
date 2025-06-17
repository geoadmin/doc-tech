# Layer Attributes

This service is used to expose the attributes names that are specific to
a layer. This service is especially useful when combined wit h the find
service.

### URL

```bash
GET https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}
```

### Input Parameters

RESTFul interface is available.

| Parameters              | Description                                                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **lang (optional)**     | The language. Supported values: de, fr, it , rm, en. (Defaults to de if browser language does not match any of the possible values) |
| **callback (optional)** | The name of the callback function.                                                                                                  |

### Example

Get the all the available attributes names of the municipal boundaries:
[https://api3.geo.admin.ch/rest/services/api/MapServer/ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill](../../../rest/services/api/MapServer/ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill)
