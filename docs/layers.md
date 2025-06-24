# Layers Metadata

This service provides metadata for all the available layers in the
GeoAdmin API.

### URL

`GET https://api3.geo.admin.ch/rest/services/api/MapServer`

### Input Parameters

RESTFul interface is available.

| Parameters                | Description                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **searchText (optional)** | The text to search for in the layer description.                                                                                      |
| **lang (optional)**       | The language. Supported values: de, fr, it , rm, en. Defaults to "de".                                                                |
| **sr (optional)**         | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". |
| **callback (optional)**   | The name of the callback function.                                                                                                    |

### Response syntax

Here is an example of response.

```json
{
  "layers": [
    {
      "name": "Temperature monitoring stations",
      "fullName": "Water temperature monitoring stations",
      "idGeoCat": "4f10c35a-8fac-4000-ab6d-7a294284059a",
      "layerBodId": "ch.bafu.hydrologie-wassertemperaturmessstationen",
      "attributes": {
          "wmsUrlResource": "http://wms.geo.admin.ch/?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0",
          "scaleLimit": "-",
          "inspireUpperAbstract": "Environnement, biology and geology | Space and population",
          "inspireName": "Environmental monitoring facilities | Human health and safety",
          "urlDetails": "http://www.bafu.admin.ch/hydrologie/01835/02122/index.html?lang=de",
          "abstract": "...",
          "inspireAbstract": "...",
          "dataOwner": "Federal Office for the Environment FOEN",
          "wmsContactAbbreviation": "swisstopo",
          "maps": "...",
          "wmsContactName": "Federal Office of Topography swisstopo",
          "dataStatus": "20130322",
          "inspireUpperName": "Environment biology and geology | Space and population",
          "urlApplication": "http://map.bafu.admin.ch"
      }
    }
  ],
  "tileInfo": {
    "origin": {
      "y": 350000,
      "x": 420000,
      "spatialReference": {
        "wkid": 21781
      }
    },
    "rows": 256,
    "format": "PNG,JPEG",
    "lods": [
        {
          "height": 1,
          "width": 1,
          "scale": 14285750.5715,
          "resolution": 4000,
          "level": 0
        }, ...
        {
            "height": 12500,
            "width": 18750,
            "scale": 357.1425,
            "resolution": 0.1,
            "level": 28
        }
    ],
    "spatialReference": {
      "wkid": 21781
    },
    "cols": 256,
    "dpi": 96,
    "compressionQuality": ""
  },
  "description": "Configuration for the map (topic) api",
  "fullExtent": {
    "xmin": 42000,
    "ymin": 30000,
    "ymax": 350000,
    "xmax": 900000,
    "spatialReference": {
        "wkid": 21781
    }
  },
  "units": "esriMeters",
  "initialExtent": {
    "xmin": 458000,
    "ymin": 76375,
    "ymax": 289125,
    "xmax": 862500,
    "spatialReference": {
      "wkid": 21781
    }
  },
  "spatialReference": {
    "wkid": 21781
  },
  "capabilities": "Map",
  "copyrightText": "Data api"
}
```

Here is a description of the data one can find in the above response.

- **layers**: a list of object literals representing the layers
  - **name**: the name of the layer (short name less than 30
    characters)
  - **fullName**: the layer's full name (not necessarily different
    from name)
  - **idGeoCat**: the associated metadata id in
    [GeoCat](http://www.geocat.ch/geonetwork/srv/eng/geocat)
  - **layerBodId**: the technical name or BOD id
- **attributes**: the metadata attributes associated to a given layer
  - **wmsResource**: the WMS resource of the layer
  - **scaleLimit**: the scale at which the layer is valid
  - **inspireUpperAbstract**: the abstract of the
    [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html)
    category (first level)
  - **inprireName**: the name of the
    [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html)
    category
  - **urlDetails**: link to the official details page
  - **bundCollectionNumber**: the collection number
  - **dataOwner**: the data owner
  - **inprieAbstract**: the abstract of the
    [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html)
    category the layer belongs to
  - **absctract**: the layer absctract
  - **wmsContactAbbreviation**: the abbreviation contact for the WMS
    resource
  - **downloadUrl**: the link where the data can be downloaded
  - **maps**: the projects in which this layer is accessible
  - **wmsContactName**: the contact name for the WMS resource
  - **dataStatus**: the date of the latest data update
  - **bundCollectionName**: the collection name
  - **inspireUpperName**: the name of the
    [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html)
    category (first level)
  - **urlApplication**: the application where this layer is
    published
  - **tileInfo**: WMTS general information in json format. Note that
    this section is always identical and is not tied to a particular
    "map" like in ESRI specifications.

### Examples

- List all the layers available in the GeoAdmin API:
  [https://api3.geo.admin.ch/rest/services/api/MapServer](../../../rest/services/api/MapServer)
- List all the layers available in the GeoAdmin API where the word
  "wasser" is found in their description:
  [https://api3.geo.admin.ch/rest/services/api/MapServer?searchText=wasser](../../../rest/services/api/MapServer?searchText=wasser)
- Find a layer by [geocat
  ID](http://www.geocat.ch/geonetwork/srv/eng/geocat):
  [https://api3.geo.admin.ch/rest/services/api/MapServer?searchText=f198f6f6-8efa-4235-a55f-99767ea0206c](../../../rest/services/api/MapServer?searchText=f198f6f6-8efa-4235-a55f-99767ea0206c)

<div id="layer_attributes_description">

---

</div>

## Layer Attributes

This service is used to expose the attributes names that are specific to
a layer. This service is especially useful when combined wit h the find
service.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}

### Input Parameters

RESTFul interface is available.

| Parameters              | Description                                                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **lang (optional)**     | The language. Supported values: de, fr, it , rm, en. (Defaults to de if browser language does not match any of the possible values) |
| **callback (optional)** | The name of the callback function.                                                                                                  |

### Example

Get the all the available attributes names of the municipal boundaries:
[https://api3.geo.admin.ch/rest/services/api/MapServer/ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill](../../../rest/services/api/MapServer/ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill)

<div id="legend_description">

---

</div>

## Legend Resource

With a layer ID (or technical name), this service can be used to
retrieve a legend.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/legend

### Input Parameters

No css styling is provided per default so that you can use your own.

| Parameters              | Description                                                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **lang (optional)**     | The language. Supported values: de, fr, it , rm, en. (Defaults to de if browser language does not match any of the possible values) |
| **callback (optional)** | The name of the callback function.                                                                                                  |

### Example

- Get the legend for ch.bafu.nabelstationen:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/legend](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/legend)
- Get the same legend using JSONP:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/legend?callback=callback](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/legend?callback=callback)

<div id="identify_description">

---

</div>

## Identify Features

This service can be used to discover features at a specific location.
Here is a [complete list of
layers](../../../api/faq/index.html#which-layers-have-a-tooltip) for
which this service is available.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/MapServer/identify

### Input Parameters

No more than 50 features can be retrieved per request.

<table>
<colgroup>
<col style="width: 28%" />
<col style="width: 71%" />
</colgroup>
<thead>
<tr class="header">
<th>Parameters</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>geometry (required)</strong></td>
<td>The geometry to identify on. The geometry is specified by the
geometry type. This parameter is specified as a separated list of
coordinates. The simple syntax (comma separated list of coordinates) and
the complex one can be used. (<a
href="http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#//02r3000000n1000000">ESRI
syntax for geometries</a>)</td>
</tr>
<tr class="even">
<td><strong>geometryType (required)</strong></td>
<td>The type of geometry to identify on. Supported values are:
esriGeometryPoint or esriGeometryPolyline or esriGeometryPolygon or
esriGeometryEnvelope.</td>
</tr>
<tr class="odd">
<td><strong>layers (optional)</strong></td>
<td>The layers to perform the identify operation on. Per default query
all the layers in the GeoAdmin API. Notation: all:"comma separated list
of technical layer names".</td>
</tr>
<tr class="even">
<td><dl>
<dt><strong>mapExtent</strong></dt>
<dd>
<p><strong>(required/optional)</strong></p>
</dd>
</dl></td>
<td>The extent of the map. (minx, miny, maxx, maxy). Optional if
<em>tolerance=0</em>. Default to The mapExtent and the imageDisplay
parameters are used by the server to calculate the 0,0,0,0</td>
</tr>
<tr class="odd">
<td><dl>
<dt><strong>imageDisplay</strong></dt>
<dd>
<p><strong>(required/optional)</strong></p>
</dd>
</dl></td>
<td><p>The screen image display parameters (width, height, and dpi) of
the map. The mapExtent and the imageDisplay parameters are used by the
server to calculate the the distance on the map to search based on the
tolerance in screen pixels. Optional if <em>tolerance=0</em>. Default to
0,0,0</p>
<p>The combination of <em>mapExtent</em> and <em>imageDisplay</em> is
used to compute a <em>resultion</em> or <em>scale</em>. Some layer have
<em>scale</em> dependant geometries</p></td>
</tr>
<tr class="even">
<td><strong>tolerance (required)</strong></td>
<td>The tolerance in pixels around the specified geometry. This
parameter is used to create a buffer around the geometry. Therefore, a
tolerance of 0 deactivates the buffer creation.</td>
</tr>
<tr class="odd">
<td><strong>returnGeometry (optional)</strong></td>
<td>This parameter defines whether the geometry is returned or not.
Default to "true".</td>
</tr>
<tr class="even">
<td><strong>geometryFormat (optional)</strong></td>
<td>Returned geometry format. Default to ESRI geometry format. Supported
values are: "esrijson" or "geojson".</td>
</tr>
<tr class="odd">
<td><strong>offset (optional)</strong></td>
<td>Offset for the first record (if more than 50 records)</td>
</tr>
<tr class="even">
<td><strong>sr (optional)</strong></td>
<td>The spatial reference. Supported values: 21781 (LV03), 2056 (LV95),
4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781".</td>
</tr>
<tr class="odd">
<td><strong>lang (optional)</strong></td>
<td>The language. Supported values: de, fr, it , rm, en. Defaults to
"de".</td>
</tr>
<tr class="even">
<td><strong>layerDefs (optional)</strong></td>
<td>Filter features with an expression. Syntax: <span
class="title-ref">{ "&lt;layerId&gt;" : "&lt;layerDef1&gt;" }</span>
where <span class="title-ref">&lt;layerId&gt;</span> must correspond to
the layer specified in <span class="title-ref">layers</span>.</td>
</tr>
<tr class="odd">
<td><strong>callback (optional)</strong></td>
<td>The name of the callback function.</td>
</tr>
</tbody>
</table>

### Tolerance, mapExtent and imageDisplay

If _tolerance=0_, _imageDisplay_ and _mapExtent_ are generaly not
needed, except to get models which are scale dependant, e.g. displaying
points at smaller scales and polygons ar larger one. If using
_tolerance\>0_, both _imageDisplay_ and _mapExtent_ must be set to
meaningfull values. As the _tolerance_ is in pixels, these value are
used to convert it to map units, \_i.e.\_ meters.

The following table summarize the various combinations:

<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 40%" />
<col style="width: 40%" />
</colgroup>
<thead>
<tr class="header">
<th></th>
<th>imageDisplay=0,0,0 mapExtent=0,0,0,0</th>
<th>imageDisplay=1,1,1 mapExtent=1,1,1,1</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>tolerance=0</strong></td>
<td>No buffer &amp; No scale</td>
<td><blockquote>
<p>No buffer &amp; but scale</p>
</blockquote></td>
</tr>
<tr class="even">
<td><strong>tolerance&gt;0</strong></td>
<td>Forbidden</td>
<td><blockquote>
<p>Buffer &amp; Scale</p>
</blockquote></td>
</tr>
</tbody>
</table>

### Filters

You may filter by attributes with **layerDefs** on [queryable
layers](../api/faq/index.html#which-layers-are-queryable).

To check which attributes are availables, their types and examples
values for a given searchable layer, you may use the [attributes
services](../../../services/sdiservices.html#layer-attributes).

For instance, the layer
**ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill** has the
following two attributes:

> <http://api3.geo.admin.ch/rest/services/api/MapServer/ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill>

```javascript
{
   "fields":[
      {
         "values":[
            "Epalinges",
            "Ependes (VD)",
            "Grub (AR)",
            "Leuk",
            "Uesslingen-Buch"
         ],
         "alias":"Name",
         "type":"VARCHAR",
         "name":"gemname"
      },
      {
         "values":[
            3031,
            4616,
            5584,
            5914,
            6110
         ],
         "alias":"BFS-Nummer",
         "type":"INTEGER",
         "name":"id"
      }
   ],
   "id":"ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill",
   "name":"Municipal boundaries"
}
```

### layerDefs syntax

The syntax of the <span class="title-ref">layerDefs</span> parameter is
a json with the layername as key and the filter expression as value:

    {"<layername>":"<filter_expression>"}

The filter expression can consist of a single expression of the form
<span class="title-ref">\<attribute\> \<operator\> \<value\></span> or
several of these expressions combined with boolean operators <span
class="title-ref">and</span> and <span class="title-ref">or</span>, e.g.

    state='open' and startofconstruction>='2018-10'

<span class="title-ref">\<attribute\></span> must be one of the
queryable attributes, the type of <span
class="title-ref">\<value\></span> must correspond the the type of the
queryable attribute (see above) and <span
class="title-ref">\<operator\></span> can be one of

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 31%" />
<col style="width: 53%" />
</colgroup>
<thead>
<tr class="header">
<th>Data type</th>
<th>Operators</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><blockquote>
<p>varchar</p>
</blockquote></td>
<td><blockquote>
<p>=, +=, like, ilike, not like not ilike, is null, is not null</p>
</blockquote></td>
<td><blockquote>
<p>toto ='3455 Kloten', toto ilike '%SH%', toto is null toto ilike
'SH%'</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>number</p>
</blockquote></td>
<td><blockquote>
<p>=, &lt;, &gt;, &gt;=, &lt;=, !=</p>
</blockquote></td>
<td><blockquote>
<p>tutu &gt;= 2.4 tutu&lt;5</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>boolean</p>
</blockquote></td>
<td><blockquote>
<p>is (truefalse)</p>
</blockquote></td>
<td><blockquote>
<p>tata is not false</p>
</blockquote></td>
</tr>
</tbody>
</table>

### Correct encoding

It's important, that the parameters are correctly serialized and
url-encoded, e.g.

```python
>>> import json
>>> import urllib.parse
>>> params = {
        "ch.swisstopo.amtliches-strassenverzeichnis": "zip_label = '8302 Kloten'"
    }
>>> print(json.dumps(params))
{"ch.swisstopo.amtliches-strassenverzeichnis": "zip_label = '8302 Kloten'"}
>>> print(urllib.parse.quote(json.dumps(params)))
%7B%22ch.swisstopo.amtliches-strassenverzeichnis%22%3A%20%22zip_label%20%3D%20%278302%20Kloten%27%22%7D
>>> print('&layerDefs={}'.format(urllib.parse.quote(json.dumps(params))))
&layerDefs=%7B%22ch.swisstopo.amtliches-strassenverzeichnis%22%3A%20%22zip_label%20%3D%20%278302%20Kloten%27%22%7D
```

### Examples

- Identify all the features belonging to ch.bafu.nabelstationen using
  a tolerance of 5 pixels around a point:
  [https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometry=678250,213000&geometryFormat=geojson&geometryType=esriGeometryPoint&imageDisplay=1391,1070,96&lang=fr&layers=all:ch.bafu.nabelstationen&mapExtent=312250,-77500,1007750,457500&returnGeometry=true&tolerance=5](../../../rest/services/all/MapServer/identify?geometry=678250,213000&geometryFormat=geojson&geometryType=esriGeometryPoint&imageDisplay=1391,1070,96&lang=fr&layers=all:ch.bafu.nabelstationen&mapExtent=312250,-77500,1007750,457500&returnGeometry=true&tolerance=5)
- Identify all the features belonging to ch.bfs.arealstatistik
  intersecting an envelope (or bounding box):
  [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik](../../../rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik)
- Identify all the features belonging to ch.bafu.bundesinventare-bln a
  polyline:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry={"paths":\[\[\[675000,245000\],\[660000,260000\],\[620000,250000\]\]\]}&geometryType=esriGeometryPolyline&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln](../../../rest/services/api/MapServer/identify?geometry=%7B%22paths%22:%5B%5B%5B675000,245000%5D,%5B660000,260000%5D,%5B620000,250000%5D%5D%5D%7D&geometryType=esriGeometryPolyline&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln)
- Identify all the features belonging to ch.bafu.bundesinventare-bln
  intersecting a polygon:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry={"rings":\[\[\[675000,245000\],\[670000,255000\],\[680000,260000\],\[690000,255000\],\[685000,240000\],\[675000,245000\]\]\]}&geometryType=esriGeometryPolygon&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln](../../../rest/services/api/MapServer/identify?geometry=%7B%22rings%22:%5B%5B%5B675000,245000%5D,%5B670000,255000%5D,%5B680000,260000%5D,%5B690000,255000%5D,%5B685000,240000%5D,%5B675000,245000%5D%5D%5D%7D&geometryType=esriGeometryPolygon&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln)
- Same request for ch.bfs.arealstatistik as above but returned
  geometry format is GeoJSON:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&geometryFormat=geojson](../../../rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&geometryFormat=geojson)
- Same request for ch.bfs.arealstatistik as above but geometry is not
  returned:
  [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&returnGeometry=false](../../../rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&returnGeometry=false)
- Filter features with **layerDefs**:
  [https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=2548945.5,1147956,2549402,1148103.5&geometryFormat=geojson&imageDisplay=1367,949,96&lang=en&layers=all:ch.swisstopo.amtliches-strassenverzeichnis&mapExtent=2318250,952750,3001750,1427250&returnGeometry=false&sr=2056&tolerance=5&layerDefs={"ch.swisstopo.amtliches-strassenverzeichnis":"stn_label+ilike+'%Corniche%'"}](../../../rest/services/all/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=2548945.5,1147956,2549402,1148103.5&geometryFormat=geojson&imageDisplay=1367,949,96&lang=en&layers=all:ch.swisstopo.amtliches-strassenverzeichnis&mapExtent=2318250,952750,3001750,1427250&returnGeometry=false&sr=2056&tolerance=5&layerDefs=%7B%22ch.swisstopo.amtliches-strassenverzeichnis%22:%22stn_label+ilike+%27%Corniche%%27%22%7D)

### Examples of Reverse Geocoding

The service identify can be used for Reverse Geocoding operations. Here
is a [list of all the available
layers](../../../api/faq/index.html#which-layers-are-available).

- Perform an identify request to find the districts intersecting a
  given envelope geometry (no buffer):
  [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill&returnGeometry=false](../../../rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill&returnGeometry=false)
- Perform an identify request to find the municipal boundaries and ZIP
  (PLZ or NPA) intersecting with a point (no buffer):
  [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryPoint&geometry=548945.5,147956&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,ch.swisstopo-vd.ortschaftenverzeichnis_plz&returnGeometry=false](../../../rest/services/api/MapServer/identify?geometryType=esriGeometryPoint&geometry=548945.5,147956&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,ch.swisstopo-vd.ortschaftenverzeichnis_plz&returnGeometry=false)
- Reverse geocoding an <span class="title-ref">address</span> with a
  point (no buffer):
  [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?mapExtent=0,0,100,100&imageDisplay=100,100,100&tolerance=1&geometryType=esriGeometryPoint&geometry=600968.625,197426.921875&layers=all:ch.bfs.gebaeude_wohnungs_register&returnGeometry=false](../../../rest/services/api/MapServer/identify?mapExtent=0,0,100,100&imageDisplay=100,100,100&tolerance=1&geometryType=esriGeometryPoint&geometry=600968.625,197426.921875&layers=all:ch.bfs.gebaeude_wohnungs_register&returnGeometry=false)

### Simulate a search radius

Equation:

    SearchRadius = Max(MapWidthInMeters / ScreenWidthInPx, MapHeightInMeters / ScreenHeightInPx) * toleranceInPx

For instance if one wants a radius of 5 meters:

    Max(100 / 100, 100 / 100) * 5 = 5

So you would set:

    mapExtent=0,0,100,100&imageDisplay=100,100,100&tolerance=5&geometryType=esriGeometryPoint&geometry=548945,147956 to perform an identify request with a search radius of 5 meters around a given point.

<div id="find_description">

---

</div>
