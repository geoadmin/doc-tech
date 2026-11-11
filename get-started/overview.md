# Overview

Discover how to access geospatial data provided by the Swiss Confederation through the web services of the [federal geoportal](https://geo.admin.ch).

We provide tutorials on how to interact with these services:

- [Explore Data](/explore-data/get-layer-metadata): Browse additional information about layers, including attributes and other metadata.
- [Access Data](/access-data/identify-features): Retrieve location-based features such as geometries, addresses and elevation.
- [Visualize Data](/visualize-data/wms): Access map data (2D and 3D) for visualization in your application.
- [Download Data](/download-data/stac-api/overview): Download entire datasets for exploration and analysis.
- [Map Viewer](/map-viewer/embed-in-an-iframe): Embed the [map viewer](https://map.geo.admin.ch/) in your webpage.

The tutorials are written for a tech-savvy audience like geoinformaticians, data scientists, GIS specialists and web developers.

Where available we link to more detailed specifications, for example to our [STAC API](https://data.geo.admin.ch/api/stac/static/spec/v1/api.html).

::: tip ⚖️ Terms of Use
The access and use of the data or the services is free of charge, subject to the provisions on fair use, see our [Terms of Use](https://www.geo.admin.ch/en/general-terms-of-use-fsdi).
:::

## Fair Use

Our services are shared by all users. Please follow these rules:

- Use `identify`, `find` and `search` for interactive use: one user, one map click or one query.
- Do not send requests over a grid of bounding boxes to export a layer. We block clients that do this.
- To get all features of a layer, download the dataset with the [STAC API](/download-data/stac-api/overview).
  The STAC collection ID can differ from the layer ID. The [layer legend](/explore-data/get-layer-legend) links to the download.
- Send a `User-Agent` header with the name of your application and a contact (e-mail or URL).
- If you get HTTP status `429`, wait and retry with [exponential backoff](/get-started/retry). If you get `403`, stop.
- For a high number of requests, contact [webgis@swisstopo.ch](mailto:webgis@swisstopo.ch) before you start.

### AI Agents

AI agents can read the same rules in [llms.txt](/llms.txt).
If you generate code with an AI agent, make sure that the code follows these rules.

## Available Layers

To use our APIs you often must know a layer’s technical name, e.g., ch.bfs.gebaeude_wohnungs_register. We recommend the following three resources to look up these names:

- [Map viewer layer table](https://api3.geo.admin.ch/rest/services/api/MapServer/layersTable): Lists the layers available on the map viewer and how they are featured.
- STAC API: For automation directly the [/collections endpoint](https://data.geo.admin.ch/api/stac/v1/collections), for manual browsing the [STAC Browser](https://data.geo.admin.ch/browser/index.html).
- [data.geo.admin.ch](https://data.geo.admin.ch): A curated inventory of all datasets, including those not yet exposed via the STAC API.
