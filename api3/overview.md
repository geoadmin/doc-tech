# API 3.0

Most services are implementing or are heavily inspired by ESRI GeoServices REST Specification or by the Open Geospatial Consortium (OGC).

All API REST endpoints supports only the following HTTP methods (unless specified):

| Method  | Description                                                                                                       |
| ------- | ----------------------------------------------------------------------------------------------------------------- |
| GET     | Return the requested data.                                                                                        |
| HEAD    | Return only HTTP headers of the GET request (no data in payload).                                                 |
| OPTIONS | Return only the HTTP headers for the communication options (e.g. CORS headers for preflight). No data in payload. |

::: raw

<iframe src="https://map.geo.admin.ch/embed.html?X=187027.34&Y=650640.77&zoom=2&lang=de&topic=ech&bgLayer=ch.swisstopo.pixelkarte-grau&layers=KML%7C%7Chttps:%2F%2Fapi3.geo.admin.ch%2Fexamples%2Fbln-style.kml,KML%7C%7Chttps:%2F%2Fpublic.geo.admin.ch%2FX5d851hOR-uy0T3DQHHfJw,ch.bafu.hydroweb-messstationen_gefahren" name="IframeGeoadmin" allow="geolocation 'self'" style="width:100%;height:350px"></iframe>
:::
