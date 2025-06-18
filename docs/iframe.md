# Web Integration: iFrame

With iFrame, geo.admin.ch offers websites a simple and free way to integrate maps. The description of a location, a map for an event, or even an illustration to support a presentation can now be easily displayed. In addition, the map content can be enhanced and, if necessary, the full application can be integrated using iFrame.

The HTML code for integration into your own website is generated automatically and is available via the "Embed" menu item. The size of the map window can be customised via the "Preview". The generated code can be reused directly in the source code of your website.

<iframe src="https://www.youtube.com/embed/lxyuHVf5FMw?si=wV1WLqUlAnNgYFLZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" style="border: 0;width: 100%;height: 300px;max-width: 100%;max-height: 100%;margin-bottom: 50px" allowfullscreen></iframe>

## Simple Map

Using the Share function, a predefined view of map.geo.admin.ch is created as an HTML iFrame code. This can be embedded into a website.
[Share Function](http://help.geo.admin.ch/?id=52&lang=fr)

<figure>
    <img src="../../static/iframe/iframe_02.avif" style="background-color: white">
    <figcaption>Integrate an iFrame — © PP BGDI</figcaption>
</figure>

<iframe src="https://map.geo.admin.ch/#/embed?lang=fr&center=2604139.32,1196887.78&z=10&topic=ech&crosshair=bowl,2604057.07,1196890&layers=ch.kantone.cadastralwebmap-farbe&bgLayer=void&catalogNodes=532,614" style="border: 0;width: 688px;height: 300px;max-width: 100%;max-height: 100%;margin-top: 50px;" allow="geolocation"></iframe>

## Simple Map with Legend

The legend can be added to the simple map. Right-click on the Infobox image representing the legend that appears in “View information of a dataset External page. The content will open in a new window.” This URL can be added to the HTML code in the iFrame section.

```html
<b>Légende</b>

<p>
  <img
    src="https://api3.geo.admin.ch/static/images/legends/ch.bafu.nabelstationen_en.png"
    alt="Légende"
  />
</p>
```

<iframe src="https://map.geo.admin.ch/#/embed?lang=fr&center=2604139.32,1196887.78&z=10&topic=ech&crosshair=bowl,2604057.07,1196890&layers=ch.kantone.cadastralwebmap-farbe&bgLayer=void&catalogNodes=532,614" style="border: 0;width: 688px;height: 300px;max-width: 100%;max-height: 100%;margin-top: 50px;" allow="geolocation"></iframe>

<b>Légende</b>

<p>
  <img
    src="https://api3.geo.admin.ch/static/images/legends/ch.bafu.nabelstationen_en.png"
    alt="Légende"
  />
</p>

## Simple Map with Custom Data

The points of interest (red), path elements (orange), and areas/texts (blue) were drawn using the [Draw function](http://help.geo.admin.ch/?id=67). The content will open in a new window).
These graphic elements were saved locally in a file, which was then uploaded to a web server. It is now available via KML import. The legend was added as text in the HTML code.
[KML Zoo](http://cms.geo.admin.ch/www.geo.admin.ch/kml/zoo.kml) (KML file with graphic elements)

<iframe src="https://map.geo.admin.ch/#/embed?lang=fr&center=2686005.42,1248779&z=10&topic=ech&layers=ch.kantone.cadastralwebmap-farbe;KML%7Chttps://cms.geo.admin.ch/www.geo.admin.ch/kml/zoo.kml@style=geoadmin@clampToGround=false&bgLayer=ch.swisstopo.pixelkarte-farbe" style="border: 0;width: 100%;height: 300px;max-width: 100%;max-height: 100%;" allow="geolocation"></iframe>

## Complete Map Application

If standard functions such as location search, measuring, etc. are needed: the entire map viewer can also be embedded into the website—it automatically adjusts to the size and remains interactive. To do this, in the iFrame HTML code, replace “…#/embed?…” with “…#/map?…”.

**Important**: To enable geolocation, the code must be adjusted by adding the parameter allow='geolocation'. This setting helps avoid issues with certain browsers.

```html{7}
<iframe
  src="//map.geo.admin.ch/?lang=de&X=273253.00&Y=623352.00&zoom=9&bgLayer=ch.swisstopo.pixelkarte-farbe"
  width="100%"
  height="400"
  frameborder="0"
  style="border:0"
  allow="geolocation"
></iframe>
```

## Terms of Use

- The map viewer map.geo.admin.ch can be embedded as a small dynamic map (iFrame) into any website. The layout (CSS) and functions may not be modified.

- For presenting users' own data or third-party data using the map viewer iFrame in combination with interfaces (e.g., KML / WMS), the terms and conditions of the respective data owners also apply.

- Liability claims against federal authorities are—where legally permitted—excluded. This function is provided in accordance with http://www.disclaimer.admin.ch/.

## Integration Examples:

- [www.wildruhezone.ch](https://www.wildruhezonen.ch)
- [www.respektiere-deine-grenzen.ch](https://natur-freizeit.ch/schneesport-mit-ruecksicht)
- [www.trail.ch](http://www.trail.ch/tour/tamaro/tamaro-lema-karte.htm)
- [www.geoplanteam.ch](http://www.geoplanteam.ch/firma/kontakt)

## Flyer

[Flyer iFrame](https://backend.geo.admin.ch/fileservice/sdweb-docs-prod-geoadminch-files/files/2022/11/25/587c3614-7087-4c9e-ac22-fe782c4531ec.pdf)
PDF, 2 pages, 782 KB, German

## Further Information

- [General Terms of Use and Operational Regulations of the Swiss Federal Geodata Infrastructure (BGDI)](https://www.geo.admin.ch/de/geo-dienstleistungen/geodienste/terms-of-use.html)
- [iFrame System Status](http://status.geo.admin.ch/460128)
