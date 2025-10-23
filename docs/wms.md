---
outline: [2, 3]
---

# Web Map Service (WMS)

Federal offices make part of their data available via the WMS - Federal Spatial Data Infrastructure (FSDI) service.
The data layers currently available in the WMS-FSDI correspond, with a few exceptions, to the geodata that are presented in [map.geo.admin.ch](https://map.geo.admin.ch).

## GetCapabilities

The GetCapabilities document provides comprehensive information about the WMS service, including detailed layer descriptions available in all four Swiss national languages and English. The language can be specified using the `LANG` parameter, which can be provided either as a path parameter or as a query string parameter. When both are present, the path parameter takes precedence over the query string parameter.

::: info
The language parameter (both path and query string variants) is supported by all WMS requests: `GetCapabilities`, `GetMap`, `GetFeatureInfo`, and `GetLegendGraphic`. This allows you to receive localized responses and layer information in your preferred language.
:::

<ApiCodeBlock url="https://wms.geo.admin.ch/{language}/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&LANG=<Lang>" method="GET" />

### Path Parameters

| Parameter                 | Description                         |
| ------------------------- | ----------------------------------- |
| **Lang** *(optional)*     | Specifies the language for the service response. Supported values: `de` (German), `fr` (French), `it` (Italian), `rm` (Rumantsch), `en` (English). Defaults to `de` if not specified. |

### Query Parameters

| Parameter       | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| **Lang** *(optional)* | Specifies the language for the service response. Supported values: `de` (German), `fr` (French), `it` (Italian), `rm` (Rumantsch), `en` (English). Defaults to `de` if not specified. |

### Supported Projections

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

## GetMap

<ApiCodeBlock url="https://wms.geo.admin.ch/?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=<Layers>&STYLES=<Styles>&CRS=<CRS>&BBOX=<BBOX>&WIDTH=<Width>&HEIGHT=<Height>&FORMAT=<Format>" method="GET" />

Use the following parameters to define your request:

| **Parameter** | **Example**                     | **Description**                                                                                     |
| ------------- | ------------------------------- | --------------------------------------------------------------------------------------------------- |
| Layers        | ch.bafu.bundesinventare-bln     | Comma-separated list of layer names to display.                                                     |
| Styles        | default                         | Comma-separated list of styles. Use `default` if unsure.                                            |
| CRS           | EPSG:2056                       | Coordinate Reference System. Supported values: see [Supported Projections](#supported-projections). |
| BBOX          | 2550000,1060000,2660000,1140000 | Bounding box of the map image (minX,minY,maxX,maxY) in the selected CRS.                            |
| Width         | 800                             | Width of the output image in pixels.                                                                |
| Height        | 582                             | Height of the output image in pixels.                                                               |
| Format        | image/png                       | Output image format (e.g., `image/png`, `image/jpeg`).                                              |

Example of a GetMap request:

```bash
curl -o demo.png "https://wms.geo.admin.ch/?\
SERVICE=WMS&REQUEST=GetMap&\
VERSION=1.3.0&\
LAYERS=ch.bafu.bundesinventare-bln&\
STYLES=default&\
CRS=EPSG:2056&\
BBOX=2550000,1060000,2660000,1140000&\
WIDTH=800&\
HEIGHT=582&\
FORMAT=image/png"
```

The output image:

<img src="https://wms.geo.admin.ch/?SERVICE=WMS&REQUEST=GetMap&VERSION=1.3.0&LAYERS=ch.bafu.bundesinventare-bln&STYLES=default&CRS=EPSG:2056&BBOX=2550000,1060000,2660000,1140000&WIDTH=800&HEIGHT=582&FORMAT=image/png" />

## GetFeatureInfo

<ApiCodeBlock url="https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo&LAYERS=<Layers>&QUERY_LAYERS=<QueryLayers>&STYLES=<Styles>&CRS=<CRS>&BBOX=<BBOX>&WIDTH=<Width>&HEIGHT=<Height>&I=<I>&J=<J>&INFO_FORMAT=<InfoFormat>&FEATURE_COUNT=<FeatureCount>&LANG=<Lang>&FORMAT=<Format>&TRANSPARENT=<Transparent>" method="GET" />

Use the following parameters to define your request:

| **Parameter** | **Example**                     | **Description**                                                                                     |
| ------------- | ------------------------------- | --------------------------------------------------------------------------------------------------- |
| Layers        | ch.bafu.bundesinventare-bln     | Comma-separated list of layer names to display.                                                     |
| QueryLayers   | ch.bafu.bundesinventare-bln     | Comma-separated list of layers to query for information.                                            |
| Styles        |                                 | Comma-separated list of styles. Use `default` or leave empty if unsure.                             |
| CRS           | EPSG:2056                       | Coordinate Reference System. Supported values: see [Supported Projections](#supported-projections). |
| BBOX          | 2609000,1123050,2614050,1128100 | Bounding box of the map image (minX,minY,maxX,maxY) in the selected CRS.                            |
| Width         | 101                             | Width of the output image in pixels.                                                                |
| Height        | 101                             | Height of the output image in pixels.                                                               |
| I             | 50                              | X coordinate (pixel column) of the point to query, starting from 0 (left).                          |
| J             | 50                              | Y coordinate (pixel row) of the point to query, starting from 0 (top).                              |
| InfoFormat    | text/plain                      | Format of the returned feature info (e.g., `text/plain`, `application/json`).                       |
| FeatureCount  | 10                              | Maximum number of features to return.                                                               |
| Lang          | en                              | Language for the response. Supported values: `de`, `fr`, `it`, `en`.                                |
| Format        | image/png                       | Output image format (should match the map request).                                                 |
| Transparent   | true                            | Whether the background should be transparent (`true` or `false`).                                   |

Example of a GetFeatureInfo request:

<ExampleCodeBlock
request="curl https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo&FORMAT=image%2Fpng&TRANSPARENT=true&QUERY_LAYERS=ch.bafu.bundesinventare-bln&LAYERS=ch.bafu.bundesinventare-bln&FEATURE_COUNT=10&INFO_FORMAT=text%2Fplain&LANG=en&I=50&J=50&CRS=EPSG%3A2056&STYLES=&WIDTH=101&HEIGHT=101&BBOX=2609000%2C1123050%2C2614050%2C1128100"
exampleLang="txt"
example="GetFeatureInfo results:
Layer 'ch.bafu.bundesinventare-bln'
  Feature 1362: 
    No. = '1716'
    Name = 'Pfynwald – Illgraben'
    Area_ha = '5064.29'
    Objectsheet = 'https://data.geo.admin.ch/ch.bafu.bundesinventare-bln/objectsheets/2017revision/nr1716.pdf'
    Subarea-No. = '0'
    Subarea = ''"
/>

## GetLegendGraphic

<ApiCodeBlock url="https://wms.geo.admin.ch/?SERVICE=WMS&REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYERS={Layers}&STYLES={Styles}&LANG={Lang}&CRS={CRS}&BBOX={BBOX}&WIDTH={Width}&HEIGHT={Height}&FORMAT={Format}" method="GET" />

Use the following parameters to define your request:

| **Parameter** | **Example**                     | **Description**                                                                                    |
| ------------- | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| Layers        | ch.bafu.bundesinventare-bln     | Comma-separated list of layer names for which to request the legend.                               |
| Styles        | default                         | Comma-separated list of styles. Use `default` if unsure.                                           |
| Lang          | en                              | Language for the legend. Supported values: `de`, `fr`, `it`, `en`.                                 |
| CRS           | EPSG:2056                       | Coordinate Reference System. Supported values: see [Supported Projections](#supported-projections) |
| BBOX          | 2550000,1060000,2660000,1140000 | Bounding box of the map image (minX,minY,maxX,maxY) in the selected CRS.                           |
| Width         | 800                             | Width of the output image in pixels.                                                               |
| Height        | 582                             | Height of the output image in pixels.                                                              |
| Format        | image/png                       | Output image format (e.g., `image/png`, `image/jpeg`).                                             |

Example of a GetLegendGraphic request:

```bash
curl -o demo.png https://wms.geo.admin.ch/?SERVICE=WMS&REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYERS=ch.bafu.bundesinventare-bln&STYLES=default&LANG=en&CRS=EPSG:2056&BBOX=2550000,1060000,2660000,1140000&WIDTH=800&HEIGHT=582&FORMAT=image/png
```

The output image:

<img src="https://wms.geo.admin.ch/?SERVICE=WMS&REQUEST=GetLegendGraphic&VERSION=1.3.0&LAYERS=ch.bafu.bundesinventare-bln&STYLES=default&LANG=en&CRS=EPSG:2056&BBOX=2550000,1060000,2660000,1140000&WIDTH=800&HEIGHT=582&FORMAT=image/png" />

#### Further information

- [General Terms of Use and Operating Conditions of the Federal Spatial Data Infrastructure FSDI](https://www.geo.admin.ch/en/geo-services/geo-services/terms-of-use.html)
- [WMS-BGDI system status](http://status.geo.admin.ch/3380881)
- [Add WMS to ArcGIS Pro](https://pro.arcgis.com/en/pro-app/latest/help/data/services/add-wms-services.htm)
- [Add WMS to ArcGIS Desktop](https://desktop.arcgis.com/en/arcmap/10.6/map/web-maps-and-services/adding-wms-services.htm)
- [Google Earth](https://www.mngeo.state.mn.us/chouse/wms/wms_image_server_google_earth_instructions.html)
- [MapInfo](http://www.twiav.nl/files/TWIAV_TIP_MI002.pdf)
- [Quantum GIS](http://www.qgis.org/en/docs/index.html)
- [Exemple 1 - Mappetizer](http://www.mappetizer.de/de/beispiele/wms_bafu_suisse/index.html)

## Example: OpenLayers

This OpenLayers example shows how the CadastralWebMap appears differently when loaded using a WMTS compared to a tiled WMS.

<iframe height="600" style="width: 100%;" scrolling="no" src="https://codepen.io/geoadmin/embed/ogjMOay?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
