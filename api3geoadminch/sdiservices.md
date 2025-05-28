# API REST Services

Most services are implementing or are heavily inspired by [ESRI
GeoServices REST
Specification](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#//02r300000054000000)
or by the [Open Geospatial Consortium (OGC)](http://opengeospatial.org).

All API REST endpoints supports only the following HTTP methods (unless
specified):

| Method  | Description                                                                                                       |
|---------|-------------------------------------------------------------------------------------------------------------------|
| `GET`     | Return the requested data.                                                                                        |
| `HEAD`    | Return only HTTP headers of the GET request (no data in payload).                                                 |
| `OPTIONS` | Return only the HTTP headers for the communication options (e.g. CORS headers for preflight). No data in payload. |

## Layers Metadata

This service provides metadata for all the available layers in the
GeoAdmin API.

### URL

`GET https://api3.geo.admin.ch/rest/services/api/MapServer`

### Input Parameters

RESTFul interface is available.

| Parameters                | Description                                                                                                                           |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
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

-   **layers**: a list of object literals representing the layers
    -   **name**: the name of the layer (short name less than 30
        characters)
    -   **fullName**: the layer's full name (not necessarily different
        from name)
    -   **idGeoCat**: the associated metadata id in
        [GeoCat](http://www.geocat.ch/geonetwork/srv/eng/geocat)
    -   **layerBodId**: the technical name or BOD id
-   **attributes**: the metadata attributes associated to a given layer
    -   **wmsResource**: the WMS resource of the layer
    -   **scaleLimit**: the scale at which the layer is valid
    -   **inspireUpperAbstract**: the abstract of the
        [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html)
        category (first level)
    -   **inprireName**: the name of the
        [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html)
        category
    -   **urlDetails**: link to the official details page
    -   **bundCollectionNumber**: the collection number
    -   **dataOwner**: the data owner
    -   **inprieAbstract**: the abstract of the
        [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html)
        category the layer belongs to
    -   **absctract**: the layer absctract
    -   **wmsContactAbbreviation**: the abbreviation contact for the WMS
        resource
    -   **downloadUrl**: the link where the data can be downloaded
    -   **maps**: the projects in which this layer is accessible
    -   **wmsContactName**: the contact name for the WMS resource
    -   **dataStatus**: the date of the latest data update
    -   **bundCollectionName**: the collection name
    -   **inspireUpperName**: the name of the
        [INSPIRE](https://www.geo.admin.ch/en/geo-information-switzerland/geodata-index-inspire.html)
        category (first level)
    -   **urlApplication**: the application where this layer is
        published
    -   **tileInfo**: WMTS general information in json format. Note that
        this section is always identical and is not tied to a particular
        "map" like in ESRI specifications.

### Examples

-   List all the layers available in the GeoAdmin API:
    [https://api3.geo.admin.ch/rest/services/api/MapServer](../../../rest/services/api/MapServer)
-   List all the layers available in the GeoAdmin API where the word
    "wasser" is found in their description:
    [https://api3.geo.admin.ch/rest/services/api/MapServer?searchText=wasser](../../../rest/services/api/MapServer?searchText=wasser)
-   Find a layer by [geocat
    ID](http://www.geocat.ch/geonetwork/srv/eng/geocat):
    [https://api3.geo.admin.ch/rest/services/api/MapServer?searchText=f198f6f6-8efa-4235-a55f-99767ea0206c](../../../rest/services/api/MapServer?searchText=f198f6f6-8efa-4235-a55f-99767ea0206c)

<div id="layer_attributes_description">

------------------------------------------------------------------------

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
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| **lang (optional)**     | The language. Supported values: de, fr, it , rm, en. (Defaults to de if browser language does not match any of the possible values) |
| **callback (optional)** | The name of the callback function.                                                                                                  |

### Example

Get the all the available attributes names of the municipal boundaries:
[https://api3.geo.admin.ch/rest/services/api/MapServer/ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill](../../../rest/services/api/MapServer/ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill)

<div id="legend_description">

------------------------------------------------------------------------

</div>

## Legend Resource

With a layer ID (or technical name), this service can be used to
retrieve a legend.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/legend

### Input Parameters

No css styling is provided per default so that you can use your own.

| Parameters              | Description                                                                                                                         |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| **lang (optional)**     | The language. Supported values: de, fr, it , rm, en. (Defaults to de if browser language does not match any of the possible values) |
| **callback (optional)** | The name of the callback function.                                                                                                  |

### Example

-   Get the legend for ch.bafu.nabelstationen:
    [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/legend](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/legend)
-   Get the same legend using JSONP:
    [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/legend?callback=callback](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/legend?callback=callback)

<div id="identify_description">

------------------------------------------------------------------------

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

If *tolerance=0*, *imageDisplay* and *mapExtent* are generaly not
needed, except to get models which are scale dependant, e.g. displaying
points at smaller scales and polygons ar larger one. If using
*tolerance\>0*, both *imageDisplay* and *mapExtent* must be set to
meaningfull values. As the *tolerance* is in pixels, these value are
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

``` javascript
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

``` python
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

-   Identify all the features belonging to ch.bafu.nabelstationen using
    a tolerance of 5 pixels around a point:
    [https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometry=678250,213000&geometryFormat=geojson&geometryType=esriGeometryPoint&imageDisplay=1391,1070,96&lang=fr&layers=all:ch.bafu.nabelstationen&mapExtent=312250,-77500,1007750,457500&returnGeometry=true&tolerance=5](../../../rest/services/all/MapServer/identify?geometry=678250,213000&geometryFormat=geojson&geometryType=esriGeometryPoint&imageDisplay=1391,1070,96&lang=fr&layers=all:ch.bafu.nabelstationen&mapExtent=312250,-77500,1007750,457500&returnGeometry=true&tolerance=5)
-   Identify all the features belonging to ch.bfs.arealstatistik
    intersecting an envelope (or bounding box):
    [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik](../../../rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik)
-   Identify all the features belonging to ch.bafu.bundesinventare-bln a
    polyline:
    [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry={"paths":\[\[\[675000,245000\],\[660000,260000\],\[620000,250000\]\]\]}&geometryType=esriGeometryPolyline&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln](../../../rest/services/api/MapServer/identify?geometry=%7B%22paths%22:%5B%5B%5B675000,245000%5D,%5B660000,260000%5D,%5B620000,250000%5D%5D%5D%7D&geometryType=esriGeometryPolyline&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln)
-   Identify all the features belonging to ch.bafu.bundesinventare-bln
    intersecting a polygon:
    [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry={"rings":\[\[\[675000,245000\],\[670000,255000\],\[680000,260000\],\[690000,255000\],\[685000,240000\],\[675000,245000\]\]\]}&geometryType=esriGeometryPolygon&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln](../../../rest/services/api/MapServer/identify?geometry=%7B%22rings%22:%5B%5B%5B675000,245000%5D,%5B670000,255000%5D,%5B680000,260000%5D,%5B690000,255000%5D,%5B685000,240000%5D,%5B675000,245000%5D%5D%5D%7D&geometryType=esriGeometryPolygon&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln)
-   Same request for ch.bfs.arealstatistik as above but returned
    geometry format is GeoJSON:
    [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&geometryFormat=geojson](../../../rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&geometryFormat=geojson)
-   Same request for ch.bfs.arealstatistik as above but geometry is not
    returned:
    [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&returnGeometry=false](../../../rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&returnGeometry=false)
-   Filter features with **layerDefs**:
    [https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=2548945.5,1147956,2549402,1148103.5&geometryFormat=geojson&imageDisplay=1367,949,96&lang=en&layers=all:ch.swisstopo.amtliches-strassenverzeichnis&mapExtent=2318250,952750,3001750,1427250&returnGeometry=false&sr=2056&tolerance=5&layerDefs={"ch.swisstopo.amtliches-strassenverzeichnis":"stn_label+ilike+'%Corniche%'"}](../../../rest/services/all/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=2548945.5,1147956,2549402,1148103.5&geometryFormat=geojson&imageDisplay=1367,949,96&lang=en&layers=all:ch.swisstopo.amtliches-strassenverzeichnis&mapExtent=2318250,952750,3001750,1427250&returnGeometry=false&sr=2056&tolerance=5&layerDefs=%7B%22ch.swisstopo.amtliches-strassenverzeichnis%22:%22stn_label+ilike+%27%Corniche%%27%22%7D)

### Examples of Reverse Geocoding

The service identify can be used for Reverse Geocoding operations. Here
is a [list of all the available
layers](../../../api/faq/index.html#which-layers-are-available).

-   Perform an identify request to find the districts intersecting a
    given envelope geometry (no buffer):
    [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill&returnGeometry=false](../../../rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill&returnGeometry=false)
-   Perform an identify request to find the municipal boundaries and ZIP
    (PLZ or NPA) intersecting with a point (no buffer):
    [https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryPoint&geometry=548945.5,147956&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,ch.swisstopo-vd.ortschaftenverzeichnis_plz&returnGeometry=false](../../../rest/services/api/MapServer/identify?geometryType=esriGeometryPoint&geometry=548945.5,147956&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,ch.swisstopo-vd.ortschaftenverzeichnis_plz&returnGeometry=false)
-   Reverse geocoding an <span class="title-ref">address</span> with a
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

------------------------------------------------------------------------

</div>

## Find

This service is used to search the attributes of features. Each result
include a feature ID, a layer ID, a layer name, a geometry (optionally)
and attributes in the form of name-value pair. Here is a [complete list
of layers](../../../api/faq/index.html#which-layers-have-a-tooltip) for
which this service is available.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/MapServer/find

### Input Parameters

One layer, one search text and one attribute.

| Parameters                    | Description                                                                                                                                                                                                                                              |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **layer (required)**          | A layer ID (only one layer at a time can be specified).                                                                                                                                                                                                  |
| **searchText (required)**     | The text to search for (one can use numerical values as well).                                                                                                                                                                                           |
| **searchField (required)**    | The name of the field to search (only one search field can be searched at a time).                                                                                                                                                                       |
| **contains (optional)**       | If false, the operation searches for an exact match of the searchText string. An exact match is case sensitive. Otherwise, it searches for a value that contains the searchText string provided. This search is not case sensitive. The default is true. |
| **geometryFormat (optional)** | Returned geometry format. Default to ESRI geometry format. Supported values are: "esrijson" or "geojson".                                                                                                                                                |
| **returnGeometry (optional)** | This parameter defines whether the geometry is returned or not. Default to "true".                                                                                                                                                                       |
| **sr (optional)**             | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781".                                                                                                                    |
| **lang (optional)**           | The language. Supported values: de, fr, it , rm, en. Defaults to "de".                                                                                                                                                                                   |
| **layerDefs (optional)**      | Filter features with an expression (see [identify](../../../services/sdiservices.html#identify-features)) Syntax: <span class="title-ref">{ "\<layerId\>" : "\<layerDef1\>"}</span>                                                                      |
| **callback (optional)**       | The name of the callback function.                                                                                                                                                                                                                       |

### Examples

-   Search for “Lavaux” in the field “bln_name” of the layer
    “ch.bafu.bundesinventare-bln” (infix match):
    [https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bafu.bundesinventare-bln&searchText=Lavaux&searchField=bln_name&returnGeometry=false](../../../rest/services/api/MapServer/find?layer=ch.bafu.bundesinventare-bln&searchText=Lavaux&searchField=bln_name&returnGeometry=false)
-   Search for “12316” in the field “egid” of the layer
    “ch.bfs.gebaeude_wohnungs_register” (infix match):
    [https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=123164&searchField=egid&returnGeometry=false](../../../rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=123164&searchField=egid&returnGeometry=false)
-   Search for “123164” in the field “egid” of the layer
    “ch.bfs.gebaeude_wohnungs_register” (exact match):
    [https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=1231641&searchField=egid&returnGeometry=false&contains=false](../../../rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=1231641&searchField=egid&returnGeometry=false&contains=false)
-   Search for the Talstrasse in Commune 'Full-Reuenthal':
    [https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.swisstopo.amtliches-strassenverzeichnis&searchText=Talstrasse&searchField=stn_label&returnGeometry=false&contains=false&layerDefs={"ch.swisstopo.amtliches-strassenverzeichnis":
    "com_fosnr =
    4307"}](../../../rest/services/api/MapServer/find?layer=ch.swisstopo.amtliches-strassenverzeichnis&searchText=Talstrasse&searchField=stn_label&returnGeometry=false&contains=false&layerDefs=%7B%22ch.swisstopo.amtliches-strassenverzeichnis%22%3A%20%22com_fosnr%20%3D%204307%22%7D)

<div id="featureresource_description">

------------------------------------------------------------------------

</div>

## Feature Resource

With an ID (or several in a comma separated list) and a layer ID
(technical name), this service can be used to retrieve a feature
resource. Here is a [complete list of
layers](../../../api/faq/index.html#which-layers-have-a-tooltip) for
which this service is available.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/MapServer/{layerBodId}/{featureId},{featureId}

### Input Parameters

RESTFul interface is available.

| Parameters                    | Description                                                                                                                           |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| **geometryFormat (optional)** | Returned geometry format. Default to ESRI geometry format. Supported values are: "esrijson" or "geojson".                             |
| **returnGeometry (optional)** | This parameter defines whether the geometry is returned or not. Default to "true".                                                    |
| **sr (optional)**             | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". |
| **lang (optional)**           | The language. Supported values: de, fr, it , rm, en. Defaults to "de".                                                                |
| **callback (optional)**       | The name of the callback function.                                                                                                    |

### Example

-   Get the feature with the ID RIG belonging to ch.bafu.nabelstationen:
    [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/RIG)
-   Get several features with IDs RIG and LAU belonging to
    ch.bafu.bundesinventar-bln:
    [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU)
-   A <span class="title-ref">GeoJSON</span> in \`EPSG:4326\`:
    [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU?sr=4326&geometryFormat=geojson](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU?sr=4326&geometryFormat=geojson)

<div id="htmlpopup_description">

------------------------------------------------------------------------

</div>

## Htmlpopup Resource

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
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **lang (optional)**         | The language. Supported values: de, fr, it , rm, en. Defaults to "de".                                                                                                                                                          |
| **sr (optional)**           | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781".                                                                                           |
| **time (optional)**         | Time (YYYY) to filter out time enabled layers, e.g. LUBIS. Defaults to "none".                                                                                                                                                  |
| **mapExtent (optional)**    | The extent of the map. (minx, miny, maxx, maxy).                                                                                                                                                                                |
| **imageDisplay (optional)** | The screen image display parameters (width, height, and dpi) of the map. The combination of *mapExtent* and *imageDisplay* are used to compute a *resolution* or *scale*. Some layer have *scale* dependant htmlpopup responses |
| **coord (optional)**        | The coordinates of interest (x, y). Some layers with external datasource need to know the cooridnates of the click on the map (p.e. ch.bafu.gefahren-aktuelle_erdbeben)                                                         |
| **callback (optional)**     | The name of the callback function.                                                                                                                                                                                              |

### Example

-   Get the html popup with the feature ID RIG belonging to layer
    ch.bafu.nabelstationen:
    [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG/htmlPopup](../../../rest/services/api/MapServer/ch.bafu.nabelstationen/RIG/htmlPopup)

<div id="search_description">

------------------------------------------------------------------------

</div>

## Search

The search service can be used to search for locations, layers or
features.

### URL

    GET https://api3.geo.admin.ch/rest/services/api/SearchServer

### Description

The search service is separated in 3 various categories or types:

-   The **location search** which is composed of the following geocoded
    locations:
    -   Cantons, Cities and communes
    -   All names as printed on the national map
        ([SwissNames](https://www.swisstopo.admin.ch/en/geodata/landscape/names3d.html))
    -   The districts
    -   The ZIP codes
    -   The addresses
    -   The cadastral parcels
-   The **layer search** wich enables the search of layers belonging to
    the GeoAdmin API.
-   The **feature search** which is used to search through features
    descriptions. Note: you can also specify a bounding box to filter
    the features. ([Searchable
    layers](../../../api/faq/index.html#which-layers-are-searchable))

### Input parameters

Only RESTFul interface is available.

**Location Search**

| Parameters                         | Description                                                                                                                                                                                                                                                                                       |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **searchText (required/optional)** | Must be provided if the <span class="title-ref">bbox</span> is not. The text to search for. Maximum of 10 words.                                                                                                                                                                                  |
| **type (required)**                | The type of performed search. Specify <span class="title-ref">locations</span> to perform a location search.                                                                                                                                                                                      |
| **bbox (required/optional)**       | Must be provided if the <span class="title-ref">searchText</span> is not. A comma separated list of 4 coordinates representing the bounding box on which features should be filtered (SRID: 21781 or 2056).                                                                                       |
| **sortbbox (optional)**            | When <span class="title-ref">bbox</span> is specified and this parameter is "true", then the ranking of the results is performed according to the distance between the locations and the center of the bounding box. Default to "true".                                                           |
| **returnGeometry (optional)**      | This parameter defines whether the geometry is returned or not. Default to "true".                                                                                                                                                                                                                |
| **origins (optional)**             | A comma separated list of origins. Possible origins are: zipcode,gg25,district,kantone,gazetteer,address,parcel A description of the origins can be found hereunder. Per default all origins are used.                                                                                            |
| **limit (optional)**               | The maximum number of results to retrive per request (Max and default limit=50)                                                                                                                                                                                                                   |
| **sr (optional)**                  | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". When a *returnGeometry* is set, its coordiantes will be returned in this *sr*. When setting a *bbox*, its coordinates have to be in the corresponding *sr*. |
| **geometryFormat (optional)**      | Set to *geojson* if you want the service to return a GeoJSON <span class="title-ref">FeatureCollection</span>. Geometries will be returned in the *sr* projection.                                                                                                                                |
| **callback (optional)**            | The name of the callback function.                                                                                                                                                                                                                                                                |

**Layer Search**

| Parameters                    | Description                                                                                                                                                                                                                               |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **searchText (required)**     | The text to search for. Maximum of 10 words allowed.                                                                                                                                                                                      |
| **type (required)**           | The type of performed search. Specify <span class="title-ref">layers</span> to perform a layer search.                                                                                                                                    |
| **lang (optional)**           | The language metadata. Supported values: de (default), fr, it, rm, en.                                                                                                                                                                    |
| **limit (optional)**          | The maximum number of results to retrive per request (Max and default limit=30)                                                                                                                                                           |
| **sr (optional)**             | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". When setting *geometryFormat* to *geosjon*, the coordinates are returned in the corresponding *sr*. |
| **geometryFormat (optional)** | Set to *geojson* if you want the service to return a GeoJSON <span class="title-ref">FeatureCollection</span>. Geometries will be returned in the *sr* projection.                                                                        |
| **callback (optional)**       | The name of the callback function.                                                                                                                                                                                                        |

**Feature Search**

| Parameters                    | Description                                                                                                                                                                                                                             |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **searchText (required)**     | The text to search for (in features detail field). Maximum of 10 words allowed.                                                                                                                                                         |
| **type (required)**           | The type of performed search. Specify <span class="title-ref">featuresearch</span> to perform a feature search.                                                                                                                         |
| **bbox (optional)**           | A comma separated list of 4 coordinates representing the bounding box according to which features should be ordered (SRID: 21781 or 2056).                                                                                              |
| **sortbbox (optional)**       | When <span class="title-ref">bbox</span> is specified and this parameter is "true", then the ranking of the results is performed according to the distance between the locations and the center of the bounding box. Default to "true". |
| **features (required)**       | A comma separated list of technical layer names.                                                                                                                                                                                        |
| **limit (optional)**          | The maximum number of results to retrive per request (Max and default limit=20)                                                                                                                                                         |
| **sr (optional)**             | The spatial reference. Supported values: 21781 (LV03) and 2056 (LV95) Defaults to "21781".                                                                                                                                              |
| **geometryFormat (optional)** | Set to *geojson* if you want the service to return a GeoJSON <span class="title-ref">FeatureCollection</span>. Geometries will be returned in the *sr* projection.                                                                      |
| **callback (optional)**       | The name of the callback function.                                                                                                                                                                                                      |

### Response syntax

The results are presented as a list of object literals. Here is an
example of response for location search.

``` javascript
results: [
  {
    id: 206,
    weight: 12,
    attrs: {
      origin: "gg25",
      layerBodId: "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill",
      featureId: "351",
      detail: "bern be",
      rank: 2,
      geom_st_box2d: "BOX(589008 196443.046875,604334.3125 204343.5)",
      num: 1,
      y: 598637.3125,
      x: 200393.28125,
      label: "<b>Bern (BE)</b>"
    }
  }
]
```

or a valid <span class="title-ref">GeoJSON</span> <span
class="title-ref">FeatureCollection</span> if parameter <span
class="title-ref">geometryFormat=geojson</span> is present

``` javascript
{
 "type": "FeatureCollection",
 "bbox": [
  601612,
  197186.8,
  601612,
  197186.8
 ],
 "features": [{
  "geometry": {
   "type": "Point",
   "coordinates": [
    197186.8125,
    601612.0625
   ]
  },
  "properties": {
   "origin": "gazetteer",
   "geom_quadindex": "021300220330313020221",
   "weight": 1,
   "zoomlevel": 10,
   "lon": 7.459799289703369,
   "detail": "wabern koeniz",
   "rank": 5,
   "lat": 46.925777435302734,
   "num": 1,
   "y": 601612.0625,
   "x": 197186.8125,
   "label": "<i>Populated Place</i> <b>Wabern</b> (BE) - Köniz",
   "id": 215754
  },
  "type": "Feature",
  "id": 215754,
  "bbox": [
   601612,
   197186.8,
   601612,
   197186.8
  ]
 }]
}
```

Here is a description of the data one can find in the above response.

-   **id**: This is an internal value and therefore shouldn't be used.
-   **weight**: The <span class="title-ref">weight</span> is dynamically
    computed according to the <span class="title-ref">searchText</span>
    that is provided. It informs the user about how close an entry is to
    the provided <span class="title-ref">searchText</span>.
-   **attrs**: The attributes associated to a given entry.
    -   **origin**: This attribute refers to the type of data an entry
        stands for.
    -   **layerBodId**: The id of the associated layer (if any)
    -   **featureId**: If available the object's Id can be combined with
        the <span class="title-ref">layerBodId</span> to collect more
        information about a feature.
    -   **detail**: The search field
    -   **rank**: A different <span class="title-ref">rank</span> is
        associated to each origin. Results are always ordered in
        ascending ranks.
    -   **geom_st_box2d**: This attribute is in is in CH1903 / LV03
        (EPSG:21781) reference system and represents the bounding box of
        the associated geometry.
    -   **num**: This attribute is only valid for locations with
        **address** <span class="title-ref">origin</span>. It refers to
        the street number.
    -   **x and y**: These attributes represent the coordinates of an
        entry. If an object's entry is a line or a polygon, those
        coordinates will always be on the underlying geometry.
    -   **label**: The html label for an entry.

Here is a list of possible origins sorted in ascending ranking order:

-   zipcode (ch.swisstopo-vd.ortschaftenverzeichnis_plz)
-   gg25 (ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill)
-   district (ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill)
-   kantone (ch.swisstopo.swissboundaries3d-kanton-flaeche.fill)
-   gazetteer (ch.swisstopo.swissnames3d, ch.bav.haltestellen-oev)
-   address (ch.bfs.gebaeude_wohnungs_register with EGID or use prefix
    'addresse', 'adresse', 'indirizzo', 'address' without EGID)
-   parcel (use prefix "parcel", "parzelle", "parcelle" or "parcella" in
    your requests to filter out other origins)

Prefix filtering cannot be combined with parameter <span
class="title-ref">origins</span>.

### Examples

-   Search for locations matching the word “wabern”:
    [https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=wabern&type=locations](../../../rest/services/api/SearchServer?searchText=wabern&type=locations)
-   Search for locations of type "parcel" and "district" (the origins):
    [https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=bern&origins=parcel,district&type=locations](../../../rest/services/api/SearchServer?searchText=bern&origins=parcel,district&type=locations)
-   Search for locations within a given map extent (the <span
    class="title-ref">bbox</span>):
    [https://api3.geo.admin.ch/rest/services/api/SearchServer?bbox=551306.5625,167918.328125,551754.125,168514.625&type=locations](../../../rest/services/api/SearchServer?bbox=551306.5625,167918.328125,551754.125,168514.625&type=locations)
-   Search for layers in French matching the word “géoïde” in their
    description:
    [https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=géoïde&type=layers&lang=fr](../../../rest/services/api/SearchServer?searchText=géoïde&type=layers&lang=fr)
-   Search for features matching word "433" in their description:
    [https://api3.geo.admin.ch/rest/services/api/SearchServer?features=ch.bafu.hydrologie-gewaesserzustandsmessstationen&type=featuresearch&searchText=433](../../../rest/services/api/SearchServer?features=ch.bafu.hydrologie-gewaesserzustandsmessstationen&type=featuresearch&searchText=433)
-   Get a GeoJSON for locations matching the word “wabern”:
    [https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=wabern&type=locations&geometryFormat=geojson](../../../rest/services/api/SearchServer?searchText=wabern&type=locations&geometryFormat=geojson)
-   Get a Webmercator GeoJSON:
    [https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=wabern&type=locations&geometryFormat=geojson&sr=3857](../../../rest/services/api/SearchServer?searchText=wabern&type=locations&geometryFormat=geojson&sr=3857)
-   Input <span class="title-ref">bbox</span> may also be in \`LV95\`:
    [https://api3.geo.admin.ch/rest/services/api/SearchServer?bbox=2551306.5625,1167918.328125,2551754.125,1168514.625&type=locations&sr=2056](../../../rest/services/api/SearchServer?bbox=2551306.5625,1167918.328125,2551754.125,1168514.625&type=locations&sr=2056)

### Example of feature search usage with other services

-   First: search for addresses using the feature search service:
    [https://api3.geo.admin.ch/rest/services/api/SearchServer?features=ch.bfs.gebaeude_wohnungs_register&type=featuresearch&searchText=isabelle](../../../rest/services/api/SearchServer?features=ch.bfs.gebaeude_wohnungs_register&type=featuresearch&searchText=isabelle)
-   Then: use "feature_id" found in "attrs" to get detailed information
    about a feature:
    [https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bfs.gebaeude_wohnungs_register/880711_0?returnGeometry=false](../../../rest/services/api/MapServer/ch.bfs.gebaeude_wohnungs_register/880711_0?returnGeometry=false)

<div id="height_description">

------------------------------------------------------------------------

</div>

## Height

This service allows to obtain elevation information for a point.

Outside of Switzerland a 10m grid elevation model is used. It is a
combined digital elevation model consisting of elevation models from
mapping agencies of France, Italy, Austria, Bavaria and
Baden-Württemberg and derived with a resolution of 10m. The extend
covers XMin: 2443000 YMin: 1024000 XMax: 2895000 YMax: 1340000

See [Height
models](https://www.swisstopo.admin.ch/en/geodata/height/alti3d.html)
for more details about data used by this service.

### URL

    GET https://api3.geo.admin.ch/rest/services/height

### Input Parameters

RESTFul interface is available.

| Parameters              | Description                                                                                                                                      |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| **easting (required)**  | The easting coordinate in LV03 (EPSG:21781) or LV95 (EPSG:2056)                                                                                  |
| **northing (required)** | The northing coordinate in LV03 (EPSG:21781) or LV95 (EPSG:2056)                                                                                 |
| **sr(optional)**        | The reference system to use (EPSG code). Valid values are 2056 (for LV95) and 21781 (for )LV03). If not given, trying to guess which one to use. |
| **callback (optional)** | The name of the callback function.                                                                                                               |

### Examples

-   [https://api3.geo.admin.ch/rest/services/height?easting=2600000&northing=1200000](../../../rest/services/height?easting=2600000&northing=1200000)

<div id="profile_description">

------------------------------------------------------------------------

</div>

## Profile

This service allows to obtain elevation information for a polyline in
CSV format. See [Height
models](https://www.swisstopo.admin.ch/en/geodata/height/alti3d.html)
for more details about data used by this service.

### URL

    GET|POST https://api3.geo.admin.ch/rest/services/profile.json (for json format)
    GET|POST https://api3.geo.admin.ch/rest/services/profile.csv  (for a csv)

### Input Parameters

RESTFul interface is available.

| Parameters                     | Description                                                                                                                                                                                                                                                             |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **geom (required)**            | A GeoJSON representation of a polyline (type = LineString). The LineString should not have more than <span class="title-ref">PROFILE_MAX_AMOUNT_POINTS</span>, generally 5'000 coordinates.                                                                             |
| **sr (optional)**              | The reference system to use (EPSG code). Valid value are 2056 (for LV95) and 21781 (for LV03). Strongly advised to set one, but if not given, trying to guess which one to use.                                                                                         |
| **nb_points (optional)**       | The number of points used for the polyline segmentation. Default "200".                                                                                                                                                                                                 |
| **offset (optional)**          | The offset value (INTEGER) in order to use the [exponential moving algorithm](http://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average) . For a given value the offset value specify the number of values before and after used to calculate the average. |
| **distinct_points (optional)** | If True, it will ensure the coordinates given to the service are part of the response. Possible values are True or False, default to False.                                                                                                                             |
| **callback (optional)**        | Only available for **profile.json**. The name of the callback function.                                                                                                                                                                                                 |

### Example

-   A profile in JSON:
    [https://api3.geo.admin.ch/rest/services/profile.json?geom={"type"%3A"LineString"%2C"coordinates"%3A\[\[2550050%2C1206550\]%2C\[2556950%2C1204150\]%2C\[2561050%2C1207950\]\]}&sr=2056](../../../rest/services/profile.json?geom=%7B%22type%22%3A%22LineString%22%2C%22coordinates%22%3A%5B%5B2550050%2C1206550%5D%2C%5B2556950%2C1204150%5D%2C%5B2561050%2C1207950%5D%5D%7D)
-   A profile in CSV:
    [https://api3.geo.admin.ch/rest/services/profile.csv?geom={"type"%3A"LineString"%2C"coordinates"%3A\[\[2550050%2C1206550\]%2C\[2556950%2C1204150\]%2C\[2561050%2C1207950\]\]}&sr=2056](../../../rest/services/profile.csv?geom=%7B%22type%22%3A%22LineString%22%2C%22coordinates%22%3A%5B%5B2550050%2C1206550%5D%2C%5B2556950%2C1204150%5D%2C%5B2561050%2C1207950%5D%5D%7D)

------------------------------------------------------------------------






## Mapbox Vector Tiles

A RESTFul implementation of [Mapbox Vector
Tiles](https://www.mapbox.com/vector-tiles). See
[description](https://www.geo.admin.ch/en/geo-services/geo-services/portrayal-services-web-mapping/vector_tiles_service.html)

The service provides both *tiles* and *styles* that the customer can
use.

### GetStyle

A current (latest version) style request is in the following form:

    GET <Scheme>://<ServerName>/styles/<layername>/style.json

example of current maplibre styles of light base map and imagery base
map:

-   <https://vectortiles.geo.admin.ch/styles/ch.swisstopo.basemap.vt/style.json>
-   <https://vectortiles.geo.admin.ch/styles/ch.swisstopo.lightbasemap.vt/style.json>
-   <https://vectortiles.geo.admin.ch/styles/ch.swisstopo.imagerybasemap.vt/style.json>

### GetTile

A tile request is in the following form:

    GET <Scheme>://<ServerName>/tiles/<LayerName>/<version>/<zoomlevel>/<x>/<y>.pbf

example of one pbf tile:

-   <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/7/67/44.pbf>
-   <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.relief.vt/v1.0.0/7/67/44.pbf>

### GetTileSets

MBTiles for storing tiled map data in SQLite databases for immediate or
offline usage and for efficient transfer. A MBtileSet request is in the
following form:

    GET <Scheme>://<ServerName>/tiles/<LayerName>/<version>/<LayerName>.mbtiles

example of the .mbtiles file:

-   <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/ch.swisstopo.base.vt.mbtiles>
-   <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.relief.vt/v1.0.0/ch.swisstopo.relief.vt.mbtiles>

### Available datasets and styles as mapbox vector tiles

The list of current datasets and styles is available visiting the
[official service
description](https://www.geo.admin.ch/en/vector-tiles-service-available-services-and-data)

### Metadata Service

Each tileset has a corresponding metatdata <span
class="title-ref">json</span> file that describes the available set of
tiles. The URL of the metadata <span class="title-ref">json</span> file
is :

    GET <Scheme>://<ServerName>/tiles/<LayerName>/<version>.json

example of tileset:

-   <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.base.vt/v1.0.0/tiles.json>
-   <https://vectortiles.geo.admin.ch/tiles/ch.swisstopo.relief.vt/v1.0.0/tiles.json>

<div id="sparql_description">

------------------------------------------------------------------------

</div>

## SPARQL Service

This service enables the connection of geodata from different sources as
Linked Data. [See description](https://www.geo.admin.ch/linkeddata).

### URL

    GET https://geo.ld.admin.ch/query/ (SPARQL Endpoint)
    GET https://geo.ld.admin.ch/sparql/ (YASGUI)

### Available datasets

-   [Data Catalog](https://geo.ld.admin.ch/.well-known/void)

<div id="inspireAtomFeed">

------------------------------------------------------------------------

</div>

## Atom Feed / Open Search Download Service

This service enables the download of datasets conforming to the [INSPIRE
Data
Specifications](https://inspire.ec.europa.eu/data-specifications/2892).
It is implemented as an Atom Feed / Open Search service according to the
[Technical Guidance for the implementation of INSPIRE Download
Services](https://inspire.ec.europa.eu/sites/default/files/documents/network-services/technical_guidance_download_services_v3.1.pdf).

### URL

    GET https://atom.geo.admin.ch/inspire/service.xml - Service Feed
    GET https://atom.geo.admin.ch/inspire/search/opensearchdescription.xml - Open Search Description Document
    GET https://atom.geo.admin.ch/inspire/search?q={} - Search Interface

### Available datasets

-   [Administrative
    units](https://www.geocat.ch/geonetwork/srv/eng/catalog.search#/metadata/fc2c80e5-fc87-415a-ac05-b2520957d155)
-   [Geographical
    Names](https://www.geocat.ch/geonetwork/srv/eng/catalog.search#/metadata/e81d4df0-52c8-4258-a38b-96f6761c976b)

### Examples

-   [Get a Dataset Feed (Describe Spatial Data Set
    Operation)](https://atom.geo.admin.ch/inspire/search?spatial_dataset_identifier_code=e81d4df0-52c8-4258-a38b-96f6761c976b&spatial_dataset_identifier_namespace=http://www.swisstopo.ch/)
    (code and namespace to be found in the Open Search Description
    Document)
-   [Get a dataset (Get Spatial Data Set
    Operation)](https://atom.geo.admin.ch/inspire/search?spatial_dataset_identifier_code=e81d4df0-52c8-4258-a38b-96f6761c976b&spatial_dataset_identifier_namespace=http://www.swisstopo.ch/&crs=http://www.opengis.net/def/crs/EPSG/0/3857)
    (code, namespace and crs to be found in the Open Search Description
    Document)
-   [Search for all available
    downloads](https://atom.geo.admin.ch/inspire/search?q=inspire)
