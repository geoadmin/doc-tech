# Geoadmin API Overview

Discover how to leverage Geoadmin's Public API to integrate geospatial information provided by the Swiss Confederation.

These pages are dedicated to developer interested in using the API.

### Using Geoadmin's API REST Services

Most services are implementing or are heavily inspired by ESRI GeoServices REST Specification or by the Open Geospatial Consortium (OGC).

The API Services are organized into categories based on the actions you can perform with the geospatial data:

- [Explore Data](/docs/layers-metadata): layers metadata, attributes and resources.
- [Access Data](/docs/identify-features): get specific features or elevation data, use advanced search.
- [Visualize Data](/docs/wmts): WMTS, Mapbox Vector Tiles and 3D.
- [Download Data](/docs/stac/overview): information about STAC API and Atom Feed / Open Search Download Service.
- [Mapviewer Documentation](/docs/iframe): iFrame documentation and JS API.

According to your objective, you can find following

All API REST endpoints supports only the following HTTP methods (unless specified):

| Method  | Description                                                                                                       |
| ------- | ----------------------------------------------------------------------------------------------------------------- |
| GET     | Return the requested data.                                                                                        |
| HEAD    | Return only HTTP headers of the GET request (no data in payload).                                                 |
| OPTIONS | Return only the HTTP headers for the communication options (e.g. CORS headers for preflight). No data in payload. |

::: warning
The GeoAdmin API and all GeoAdmin services can only be used in HTTPS context (HTTP will be automatically redirected to HTTPS). The access and use of the data or the services is free of charge, subject to the provisions on fair use, see www.geo.admin.ch/terms-of-use. For a list of all available layers and their accessibility please refer to the FAQ.
:::

::: tip Note on web scraping:
Automatic parsing of the geoservices via bots with high query intensities is to be refrained from. For obtaining the datasets outside the context of the web services (use in offline systems, databases, etc.), the download service or file based download has to be used.
:::
