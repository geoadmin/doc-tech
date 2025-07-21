# Get HTML Popup

Get metadata for a feature formatted as an HTML popup.

<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/{featureId}/htmlPopup" method="GET" />

:::tip
The [map viewer](https://map.geo.admin.ch/) displays the same popup when you click on a feature by hand.
No CSS styling is provided per default so that you can use your own.
:::

## Request Details

To interact with the HTML popup service, you need to provide specific parameters in your request.
These parameters are divided into path parameters, which are required and part of the URL, and query parameters, which are optional and modify the behavior of the request.

### Path Parameters

| Parameters                | Description                                               |
| ------------------------- | --------------------------------------------------------- |
| **layerBodId (required)** | The id of the layer                                       |
| **featureId (required)**  | The object’s Id (separated by comma for multiple objects) |

### Query Parameters

| Parameters                  | Description                                                                                                                                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **lang (optional)**         | The language. Supported values: de, fr, it , rm, en. Defaults to "de".                                                                                                                                                          |
| **sr (optional)**           | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781".                                                                                           |
| **time (optional)**         | Time (YYYY) to filter out time enabled layers, e.g. LUBIS. Defaults to "none".                                                                                                                                                  |
| **mapExtent (optional)**    | The extent of the map. (minx, miny, maxx, maxy).                                                                                                                                                                                |
| **imageDisplay (optional)** | The screen image display parameters (width, height, and dpi) of the map. The combination of _mapExtent_ and _imageDisplay_ are used to compute a _resolution_ or _scale_. Some layer have _scale_ dependant htmlpopup responses |
| **coord (optional)**        | The coordinates of interest (x, y). Some layers with external datasource need to know the cooridnates of the click on the map (p.e. ch.bafu.gefahren-aktuelle_erdbeben)                                                         |
| **callback (optional)**     | The name of the callback function.                                                                                                                                                                                              |

## Examples

Get the HTML popup with the feature ID `RIG` belonging to layer `ch.bafu.nabelstationen`:

<ExampleCodeBlock
request='$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG/htmlPopup'
example='<div
id="ch.bafu.nabelstationen#RIG"
class="chbafunabelstationen htmlpopup-container">

  <div class="htmlpopup-header">
    <span>Nationales Beobachtungsnetz für Luftfremdstoffe NABEL: Stationen</span>
    (Bundesamt für Umwelt BAFU)
  </div>
  <div class="htmlpopup-content">
    <table>
      <tr>
        <td class="cell-left">Name</td>
        <td>Rigi-Seebodenalp</td>
      </tr>
      <tr>
        <td class="cell-left">Datenbfrage</td>
        <td>
          <a
            href="https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html"
            target="_blank"
            >Link</a
          >
        </td>
      </tr>
      <tr>
        <td class="cell-left"></td>
        <td>
          <a
            href="https://map.geo.admin.ch?ch.bafu.nabelstationen=RIG&amp;lang=de&amp;topic=api"
            target="_blank"
          >
            Link zum Objekt
          </a>
        </td>
      </tr>
    </table>
  </div>
</div>'
/>

This request retrieves the HTML for the popup, displaying the same content as the map viewer below:

<iframe src="https://map.geo.admin.ch/#/embed?lang=en&center=2681170.18,1204968.08&z=2.228&topic=ech&layers=ch.bafu.nabelstationen@features=RIG&bgLayer=ch.swisstopo.pixelkarte-farbe&featureInfo=default" style="border: 0;width: 800px;height: 600px;max-width: 100%;max-height: 100%;" allow="geolocation"></iframe>
