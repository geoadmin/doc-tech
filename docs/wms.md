# Web Mapping Services WMS: Available services an data

The BGDI supports the federal offices by setting up WMS services. You can freely use the following examples and integrate them into any GIS system.

Federal offices make part of their data available via the WMS-FSDI service. Users of geographic information systems (GIS) can integrate these services into their software using the service's metadata (Capabilities).

The data layers currently available in the WMS-FSDI correspond, with a few exceptions, to the geodata that are also presented in map.geo.admin.ch. The WMS-FSDI can be used free of charge and provides access to public geodata. The requests GetCapabilities, GetMap, GetFeatureInfo and GetLegendGraphic are supported.

The WMS-FSDI is accessible via a secure connection. The URL is https://wms.geo.admin.ch/.

In most geographic information systems, specifying the above URL is sufficient for using the data. Otherwise, the GetCapabilities request is: https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities
(the choice of the language [de,fr,it,en] is done by adding the parameterlang=en)

Example of a GetMap request:
https://wms.geo.admin.ch/?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=ch.bafu.bundesinventare-bln&STYLES=default&CRS=EPSG:2056&BBOX=2550000,1060000,2660000,1140000&WIDTH=800&HEIGHT=582&FORMAT=image/png

Example of a GetFeatureInfo request:
https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo&FORMAT=image%2Fpng&TRANSPARENT=true&QUERY_LAYERS=ch.bafu.bundesinventare-bln&LAYERS=ch.bafu.bundesinventare-bln&FEATURE_COUNT=10&INFO_FORMAT=text%2Fplain&LANG=en&I=50&J=50&CRS=EPSG%3A2056&STYLES=&WIDTH=101&HEIGHT=101&BBOX=2609000%2C1123050%2C2614050%2C1128100
(the choice of the language [de,fr,it,en] is done by adding the parameter lang=en)

Example of a GetLegendGraphic request:
https://wms.geo.admin.ch/?SERVICE=WMS&REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYERS=ch.bafu.bundesinventare-bln&STYLES=default&LANG=en&CRS=EPSG:2056&BBOX=2550000,1060000,2660000,1140000&WIDTH=800&HEIGHT=582&FORMAT=image/png

### Supported projections:

- EPSG:2056 CH1903+ / LV95 -- Swiss CH1903+ / LV95
- EPSG:21781 CH1903 / LV03 -- Swiss CH1903 / LV03
- EPSG:4326 WGS 84 -- WGS84 - World Geodetic System 1984 (GPS)
- EPSG:3857 WGS 84 / Pseudo-Mercator -- Spherical Mercator, Google Maps, OpenStreetMap, Bing, ArcGIS, ESRI
- EPSG:3034 ETRS89-extended / LCC Europe
- EPSG:3035 ETRS89-extended / LAEA Europe
- EPSG:4258 ETRS89
- EPSG:31287 MGI / Austria Lambert
- EPSG:25832 ETRS89 / UTM zone 32N
- EPSG:25833 ETRS89 / UTM zone 33N
- EPSG:31467 DHDN / 3-degree Gauss-Kruger zone 3
- EPSG:32632 WGS 84 / UTM zone 32N
- EPSG:32633 WGS 84 / UTM zone 33N
- EPSG:900913 Google Maps Global Mercator -- Spherical Mercator (unofficial - used in open source projects / OSGEO)

### Intended use

Web Map Services are especially interesting if you want to use continuously updated geodata in a predefined representation. Internet access is mandatory.

### Further information

- [General Terms of Use and Operating Conditions of the Federal Spatial Data Infrastructure FSDI](https://www.geo.admin.ch/en/geo-services/geo-services/terms-of-use.html)
- [WMS-BGDI system status](http://status.geo.admin.ch/3380881)
- [Add WMS to ArcGIS Pro](https://pro.arcgis.com/en/pro-app/latest/help/data/services/add-wms-services.htm)
- [Add WMS to ArcGIS Desktop](https://desktop.arcgis.com/en/arcmap/10.6/map/web-maps-and-services/adding-wms-services.htm)
- [Google Earth](https://www.mngeo.state.mn.us/chouse/wms/wms_image_server_google_earth_instructions.html)
- [MapInfo](http://www.twiav.nl/files/TWIAV_TIP_MI002.pdf)
- [Quantum GIS](http://www.qgis.org/en/docs/index.html)
- [Exemple 1 - Mappetizer](http://www.mappetizer.de/de/beispiele/wms_bafu_suisse/index.html)
