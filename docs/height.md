# Height

This service allows to obtain elevation information for a point.

Outside of Switzerland a 10m grid elevation model is used. It is a combined digital elevation model consisting of elevation models from mapping agencies of France, Italy, Austria, Bavaria and Baden-Württemberg and derived with a resolution of 10m. The extend
covers XMin: 2443000 YMin: 1024000 XMax: 2895000 YMax: 1340000

See [Height models](https://www.swisstopo.admin.ch/en/geodata/height/alti3d.html) for more details about data used by this service.

```http
https://api3.geo.admin.ch/rest/services/height
```

## Resquest Details

RESTFul interface is available.

### Query Parameters

| Parameters              | Description                                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **easting (required)**  | The easting coordinate in LV03 (EPSG:21781) or LV95 (EPSG:2056)                                                                                  |
| **northing (required)** | The northing coordinate in LV03 (EPSG:21781) or LV95 (EPSG:2056)                                                                                 |
| **sr(optional)**        | The reference system to use (EPSG code). Valid values are 2056 (for LV95) and 21781 (for )LV03). If not given, trying to guess which one to use. |
| **callback (optional)** | The name of the callback function.                                                                                                               |

## Examples

```sh
$ curl https://api3.geo.admin.ch/rest/services/height?easting=2600000&northing=1200000
```
