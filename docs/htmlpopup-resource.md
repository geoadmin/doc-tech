# Htmlpopup Resource

With an ID and a layer ID (technical name), this service can be used to retrieve an html popup. An html popup is an html formatted representation of the textual information about the feature. Here is a
[complete list oflayers](../../../api/faq/index.html#which-layers-have-a-tooltip) for which this service is available.

<Suspense>
<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/{featureId}/htmlPopup" method="GET" />
</Suspense>

## Request Details

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

## Response Format

::: details Response Exaple

```html
<div
  id="ch.bafu.nabelstationen#RIG"
  class="chbafunabelstationen htmlpopup-container"
>
  <div class="htmlpopup-header">
    <span
      >Nationales Beobachtungsnetz für Luftfremdstoffe NABEL: Stationen</span
    >
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
</div>
```

:::

The endpoint returns an `HTML` document containing the formatted representation of the textual information about the feature. No css styling is provided per default so that you can use your own.

## Examples

Get the html popup with the feature ID `RIG` belonging to layer `ch.bafu.nabelstationen`:

```sh
$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG/htmlPopup
```
