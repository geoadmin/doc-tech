# Identify Features

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
