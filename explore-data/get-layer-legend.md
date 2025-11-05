# Get Layer Legend

This endpoint provides the legend of a given layer in the form of HTML markup.
A legend is what is shown when you click the info button on a layer in the map viewer.
It contains a description of the layer, the actual legend explaining the meaning of the different colors and symbols, and additional metadata.

<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/ech/MapServer/{layerBodId}/legend" method="GET" />

## Request Details

To interact with the legend endpoint, you need to provide specific parameters in your request.
These parameters are divided into **Path Parameters**, which are required and part of the URL, and **Query Parameters**, which are optional and modify the behavior of the request.

### Path Parameters

| Parameters                | Description                         |
| ------------------------- | ----------------------------------- |
| **layerBodId (required)** | The technical name or the layer ID. |

### Query Parameters

| Parameters              | Description                                                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **lang (optional)**     | The language. Supported values: `de`, `fr`, `it`, `rm`, `en`. (Defaults to `de` if browser language does not match any of the possible values) |
| **callback (optional)** | The name of the callback function.                                                                                                             |

## Response Details

The endpoint returns an **HTML** document containing the legend for the specified layer. The response includes:

- A `title` and `abstract` describing the layer.
- A `legend image` showing the symbology used in the layer.
- Additional `metadata` such as the layer ID, valid scale range, and links to detailed descriptions, metadata, and data sources.

No CSS styling is applied by default, allowing you to integrate the legend seamlessly into your own application or website. You can style the HTML response using your custom CSS to match your application's design.

## Examples

Get the legend for `ch.bafu.nabelstationen`:

<ExampleCodeBlock
request="curl https://api3.geo.admin.ch/rest/services/ech/MapServer/ch.bafu.nabelstationen/legend"
exampleLang='html'
example='<div class="legend-container">

  <div class="legend-header">
    <p class="bod-title">
      <span
        >Nationales Beobachtungsnetz für Luftfremdstoffe NABEL: Stationen</span
      >
      (Bundesamt für Umwelt BAFU)
    </p>
    <p class="legend-abstract">
      Das Nationale Beobachtungsnetz für Luftfremdstoffe NABEL misst die
      Luftverschmutzung an 16 Standorten in der Schweiz. Die Stationen sind über
      das ganze Land verteilt und messen die Belastung an typischen Standorten
      (z.B. Strassen in Stadtzentrum, Wohngebiet, ländliche Station).Die
      Stationen des NABEL repräsentieren je nach Standorttyp unterschiedliche
      Belastungssituationen. Die Luftqualität muss somit nach Standorttyp und
      nicht nach geografischer Lage der Stationen beurteilt werden.
    </p>
  </div>
  <div class="legend-footer">
    <br />
    <span>Legende</span><br />
    <div class="img-container">
      <img
      src=//api3.geo.admin.ch/static/images/legends/ch.bafu.nabelstationen_de.png
      alt="layer legend img"/>
    </div>
    <br /><br />
    <span>Informationen</span><br />
    <table>
      <tr>
        <td>ID Geobasisdatensatz</td>
        <td>121.1</td>
      </tr>
      <tr>
        <td>Gültiger Massstabsbereich</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Metadaten</td>
        <td>
          <a
            target="_blank"
            href="https://www.geocat.ch/geonetwork/srv/ger/catalog.search#/metadata/14de1375-09ae-42b4-9592-5f0af091d050"
          >
            Link zu geocat.ch</a
          >
        </td>
      </tr>
      <tr>
        <td>Detailbeschreibung</td>
        <td>
          <a
            href="https://www.bafu.admin.ch/bafu/de/home/themen/luft/luftbelastung/nationales-beobachtungsnetz-fuer-luftfremdstoffe--nabel-.html"
            target="new"
            >Link zur Detailbeschreibung</a
          >
        </td>
      </tr>
      <tr>
        <td>Datenbezug</td>
        <td>
          <a href="https://www.bafu.admin.ch/geodaten" target="new"
            >Link für Datenbezug</a
          >
        </td>
      </tr>
      <tr>
        <td>Thematisches Geoportal</td>
        <td>
          <a href="http://map.bafu.admin.ch" target="new"
            >Link zum Fachportal</a
          >
        </td>
      </tr>
      <tr>
        <td>WMS Dienst</td>
        <td>
          <a
            href="https://wms.geo.admin.ch/?REQUEST=GetCapabilities&amp;SERVICE=WMS&amp;VERSION=1.3.0"
            target="new"
            >Link zum WMS</a
          >
        </td>
      </tr>
      <tr>
        <td>Datenstand</td>
        <td>01.01.2021</td>
      </tr>
    </table>
  </div>
</div>'
/>

Get the same legend using JSONP:

```sh
$ curl https://api3.geo.admin.ch/rest/services/ech/MapServer/ch.bafu.nabelstationen/legend?callback=callback
```
