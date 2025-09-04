# Overview

This documentation provides tutorials on how to use the STAC API of [data.geo.admin.ch](https://data.geo.admin.ch/).
The STAC API consists of standardized RESTful API endpoints designed for interacting with federal geodata.
All datasets are organized according to the [SpatioTemporal Asset Catalog](https://stacspec.org) (STAC) specification, which simplifies data discovery and usage.

For a detailed description of each endpoint, refer to the full specifications:

- [Regular users](https://data.geo.admin.ch/api/stac/static/spec/v1/api.html): `GET` endpoints for querying and retrieving data.
- [Selected users](https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html): `POST`/`PUT` endpoints for uploading and managing data.

This implementation conforms to the core [STAC API specification](https://github.com/radiantearth/stac-api-spec).
The underlying data model follows the STAC schema and is extended by the [forecast extension](https://github.com/stac-extensions/forecast) to support weather forecast data.

::: warning
STAC API `v0.9` is being deprecated and will be turned off on 31.3.2026. [Learn more...](/docs/stac/migrate09-10.md).
:::