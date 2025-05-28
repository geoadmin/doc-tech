# Htmlpopup Resource

With an ID and a layer ID (technical name), this service can be used to
retrieve an html popup. An html popup is an html formatted
representation of the textual information about the feature. Here is a
[complete list of
layers](../../../api/faq/index.html#which-layers-have-a-tooltip) for
which this service is available.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/{featureId}/htmlPopup

### Input Parameters

No css styling is provided per default so that you can use your own.

| Parameters                  | Description                                                                                                                                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **lang (optional)**         | The language. Supported values: de, fr, it , rm, en. Defaults to "de".                                                                                                                                                          |
| **sr (optional)**           | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781".                                                                                           |
| **time (optional)**         | Time (YYYY) to filter out time enabled layers, e.g. LUBIS. Defaults to "none".                                                                                                                                                  |
| **mapExtent (optional)**    | The extent of the map. (minx, miny, maxx, maxy).                                                                                                                                                                                |
| **imageDisplay (optional)** | The screen image display parameters (width, height, and dpi) of the map. The combination of _mapExtent_ and _imageDisplay_ are used to compute a _resolution_ or _scale_. Some layer have _scale_ dependant htmlpopup responses |
| **coord (optional)**        | The coordinates of interest (x, y). Some layers with external datasource need to know the cooridnates of the click on the map (p.e. ch.bafu.gefahren-aktuelle_erdbeben)                                                         |
| **callback (optional)**     | The name of the callback function.                                                                                                                                                                                              |

### Example

- Get the html popup with the feature ID RIG belonging to layer
  ch.bafu.nabelstationen:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG/htmlPopup](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/RIG/htmlPopup)
