# Embed in an iframe

You can embed an interactive version of the [map viewer](https://map.geo.admin.ch/) into your webpage using an HTML iframe, as shown below:

<iframe src="https://map.geo.admin.ch/#/embed?lang=en&center=2600988.46,1197433.4&z=8&topic=ech&layers=&bgLayer=ch.swisstopo.pixelkarte-farbe&featureInfo=default" style="border: 0;width: 100%;height: 300px;max-width: 100%;max-height: 100%;" allow="geolocation"></iframe>

The following expands on the introduction given in the [Web Integration: iFrame](https://www.geo.admin.ch/de/web-integration-iframe/) page.

:::tip ⚖️ Terms of Use
Refer to the corresponding section on the [Web Integration: iFrame](https://www.geo.admin.ch/de/web-integration-iframe/) page.
:::

## Add a legend

To add a legend of a specific layer to your embedded map viewer:

1. Display the legend of the layer in the map viewer as explained in the [map viewer help](https://www.geo.admin.ch/en/map-viewer-topics-and-data#Display-of-legend-and-additional-information).
2. Copy the image URL, for example, by right-clicking the legend image and selecting "Copy Image Link".
3. Add an element to your HTML code displaying the image URL.

Here is an example:

```html
<iframe
  src="https://map.geo.admin.ch/#/embed?lang=en&center=2675475,1229326.76&z=6&topic=ech&layers=ch.bfe.grundwasserwaermenutzungspotential&bgLayer=ch.swisstopo.pixelkarte-grau"
  style="border: 0;width: 100%;height: 300px;max-width: 100%;max-height: 100%;"
  allow="geolocation"
></iframe>
<b>Legend</b>
<p>
  <img
    src="https://api3.geo.admin.ch/static/images/legends/ch.bfe.grundwasserwaermenutzungspotential_en.png"
    alt="Legend"
  />
</p>
```

which looks like this in the final webpage:

<iframe src="https://map.geo.admin.ch/#/embed?lang=en&center=2675475,1229326.76&z=6&topic=ech&layers=ch.bfe.grundwasserwaermenutzungspotential&bgLayer=ch.swisstopo.pixelkarte-grau" style="border: 0;width: 100%;height: 300px;max-width: 100%;max-height: 100%;" allow="geolocation"></iframe>

<b>Legend</b>

<p>
  <img
    src="https://api3.geo.admin.ch/static/images/legends/ch.bfe.grundwasserwaermenutzungspotential_en.png"
    alt="Legend"
  />
</p>

## Add custom elements

To add custom elements like POIs, paths, and text on top of the map viewer:

1. Add the elements with [the Drawing functionality of the map viewer](https://www.geo.admin.ch/en/map-viewer-functions-drawing-and-measuring).
2. Export the elements to a KML file and save it locally on your computer.
3. Upload the KML file to a publicly available web server.
4. Exit drawing mode and import the KML file into the map viewer using the [Import file functionality](https://www.geo.admin.ch/en/map-viewer-functions-advanced-tools).
5. Generate the iframe [as you would for regular layers](https://www.geo.admin.ch/de/web-integration-iframe/).

For example, to get to a result that looks like this:

<iframe src="https://map.geo.admin.ch/#/embed?lang=en&center=2685959.53,1248777.78&z=9.63&topic=ech&layers=KML%7Chttps://cms.geo.admin.ch/www.geo.admin.ch/kml/zoo.kml&bgLayer=ch.swisstopo.pixelkarte-grau&featureInfo=default" style="border: 0;width: 100%;height: 300px;max-width: 100%;max-height: 100%;" allow="geolocation"></iframe>

follow these steps:

1. In the map viewer, using the Draw functionality, add some markers (red), a path (orange), a polygon (blue) and a text (green).
2. Export the drawing as a KML and upload the KML to `https://cms.geo.admin.ch/www.geo.admin.ch/kml/zoo.kml`.
3. After importing the KML again, a layer is added with the drawing. The generated iframe now contains the URL to the KML:

   ```html
   <iframe
     src="https://map.geo.admin.ch/#/embed?
         lang=en&
         center=2685959.53,1248777.78&
         z=9.63&
         topic=ech&
         layers=KML%7Chttps://cms.geo.admin.ch/www.geo.admin.ch/kml/zoo.kml
         &bgLayer=ch.swisstopo.pixelkarte-grau
         &featureInfo=default"
     style="border: 0;
             width: 100%;
             height: 300px;
             max-width: 100%;
             max-height: 100%;"
     allow="geolocation"
   >
   </iframe>
   ```

This works with any KML, not just with those created in the map viewer.

## Center on a search result

Instead of hardcoding coordinates, you can specify a search term and have the map viewer center on the first search result.
The search is the same as if you would enter a term in the search bar on [map.geo.admin.ch](https://map.geo.admin.ch/).

For example, to center the map on the address "Holzikofenweg 36, 3007 Bern":

<iframe
   src="https://map.geo.admin.ch/#/embed?
      &swisssearch=Holzikofenweg 36, 3007 Bern"
   style="border: 0;
          width: 100%;
          height: 300px;
          max-width: 100%;
          max-height: 100%;"
   allow="geolocation">
</iframe>

You would pass the address to the `swisssearch` parameter in an iframe like this:

```html
<iframe
  src="https://map.geo.admin.ch/#/embed?
      &swisssearch=Holzikofenweg 36, 3007 Bern"
  style="border: 0;
          width: 100%;
          height: 300px;
          max-width: 100%;
          max-height: 100%;"
  allow="geolocation"
>
</iframe>
```

Note: If there is more than one search result, you must pass the parameter `swisssearch_autoselect=true` to automatically select and center on the first search result.
For example, if you search for the ambiguous "Holzikofenweg, 3007 Bern" without setting `swisssearch_autoselect=true`, the map will not center on any result:

<iframe
   src="https://map.geo.admin.ch/#/embed?
      &swisssearch=Holzikofenweg, 3007 Bern"
   style="border: 0;
          width: 100%;
          height: 300px;
          max-width: 100%;
          max-height: 100%;"
   allow="geolocation">
</iframe>

Appending `swisssearch_autoselect=true` centers the map on the first search result (Holzikofenweg 1, 3007 Bern):

```html
<iframe
  src="https://map.geo.admin.ch/#/embed?
      &swisssearch=Holzikofenweg, 3007 Bern
      &swisssearch_autoselect=true"
  style="border: 0;
          width: 100%;
          height: 300px;
          max-width: 100%;
          max-height: 100%;"
  allow="geolocation"
>
</iframe>
```

The corresponding iframe:

<iframe
   src="https://map.geo.admin.ch/#/embed?
      &swisssearch=Holzikofenweg, 3007 Bern
      &swisssearch_autoselect=true"
   style="border: 0;
          width: 100%;
          height: 300px;
          max-width: 100%;
          max-height: 100%;"
   allow="geolocation">
</iframe>

## Embed the complete map viewer

To embed the map viewer with the search bar and other menus, replace the `#/embed?` with `#/map?` in the iframe snippet.

In an example:

<iframe src="https://map.geo.admin.ch/#/map?lang=en&center=2675475,1229326.76&z=6&bgLayer=ch.swisstopo.pixelkarte-farbe" style="border: 0;width: 100%;height: 300px;max-width: 100%;max-height: 100%;" allow="geolocation"></iframe>

This is represented by an iframe like:

```html
<iframe
  src="https://map.geo.admin.ch/#/map?
      lang=en&
      center=2675475,1229326.76&
      z=6&
      bgLayer=ch.swisstopo.pixelkarte-farbe"
  style="border: 0;
          width: 100%;
          height: 300px;
          max-width: 100%;
          max-height: 100%;"
  allow="geolocation"
></iframe>
```

:::tip
To ensure proper geolocation functionality, explicitly enable geolocation with `allow="geolocation"` to avoid issues in certain web browsers.
:::

## Example: Accessing Feature Info from an Embedded Map

Example showing how to retrieve the layer ID and the feature ID outside the iframe when a feature is selected on the map.

This example demonstrates how to enable interaction between an embedded map and other elements on your webpage.
When a user clicks on a supported feature (currently from KML or GeoJSON layers), the map sends a `message` event to the parent page using the postMessage API.
The event is then captured by the parent page and used to display feature information outside the iframe.

<iframe height="600" style="width: 100%;" scrolling="no" title="Basic iframe" src="https://codepen.io/geoadmin/embed/zxvyMBp?default-tab=none%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
