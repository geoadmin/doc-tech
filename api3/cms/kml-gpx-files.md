# Work with KML and GPX files in map.geo.admin.ch

This guide has been edited to further help our users take full advantage of all functions related to internal and external KML and GPX files. While the basic instructions and explanations about the Drawing and measuring tool can be found in the ["Drawing & measuring on the map"](https://www.geo.admin.ch/en/map-viewer-functions-drawing-and-measuring) section, this paragraph serves to complement the one explaining the basics of [sharing, exporting and further editing the KML and GPX files](https://www.geo.admin.ch/en/map-viewer-functions-drawing-and-measuring#Share,-export-and-further-edit-drawings).

<figure>
    <img src="../../static/cms/kml_gpx_01.avif" style="background-color: white">
    <figcaption>How to work with KML and GPX files? — © PP BGDI</figcaption>
</figure>

## Origins and different types of KML and GPX files?

The system handles KML and GPX files differently, depending on how the files were imported or created.
This chapter explains the 4 types of KML (and, where applicable, GPX) files and shows how [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en) handles them

### 1. An internal KML file, a map.geo.admin.ch drawing

This is the KML file that was stored in the system when you exited "Draw & Measure on the Map" mode and that is displayed in the "Displayed Maps" menu section as a "Drawing" without the red notice "Third-party data and/or style". **The author of the drawing is the owner and has write access to the drawing**. If you wish, you can reopen the "Draw and measure on the map" mode to edit the file as often as you like and share it with others, but you retain write access to this drawing.
**Warning**: If you reload the browser, you will lose ownership of your drawing and will no longer be able to edit it (see the third type of KML/GPX file below).
**Note**: The file can be shared with third parties for editing by going to "Share" in drawing mode and passing on the "Link to edit your drawing/style".

<figure>
    <img src="../../static/cms/kml_gpx_02.avif" style="background-color: white">
    <figcaption>Sie sind der Eigentümer der Datei — © swisstopo</figcaption>
</figure>

### 2. An external KML, KMZ or GPX file that has been imported into map.geo.admin.ch from a local drive

This is a KML / KMZ / GPX file that has been downloaded locally in your computer, or has been sent to you via Mail, and has been imported to [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en). It will appear in the "Maps displayed" menu with a grey offline symbol on the right with the text "Local files can't be shared".. **This file is not possible to share in any way (be it with the share option or via copying the URL) and obviously, cannot be edited. It will however appear within a generated PDF file, meaning it can be printed out**.
The reason for this is, that the file is nowhere to be found online nor in the backlog of the map.geo.admin.ch system.
**Attention**: Before downloading a KML / GPX file and store it in your computer (or sharing it with anyone else), make sure that you have completely finished it. Otherwise, we suggest you to copy an "Edit Link" to be able to further edit it. More on this link below in the "Edit and share your drawings" section.

<figure>
    <img src="../../static/cms/kml_gpx_03.avif" style="background-color: white">
    <figcaption>Sie können diese Datei nur anschauen oder als PDF exportieren — © swisstopo</figcaption>
</figure>

### 3. An internal KML file, a map.geo.admin.ch drawing that has not been imported.

This applies to any KML file that was created in [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en) **AND WAS NOT IMPORTED**. This means that if the file:

- has been shared via [the Share link](https://www.geo.admin.ch/en/map-viewer-functions-share) in the menu
- has been shared via URL
  has been shared via [the share link of the Drawing & Measure mode](https://www.geo.admin.ch/en/map-viewer-functions-drawing-and-measuring)
  has been (accidentally) refreshed / recharged after having been finished (by accidently clicking f5 for example)

  , it must contain in part of the URL a piece of code containing: **"https://public.geo.admin.ch/api/kml/files/..."**. If this is the case, though it contains the red profile added in the "Maps displayed" section of the menu indicating that you’re not (anymore) identified as the owner, this KML is saved in the backend of the [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en) system and **can therefore be shared, embedded in an iFrame and exported as a PDF print**.
  **Attention**: If you enter the "Draw & Measure on map" tool in order to edit that KML / GPX file, the system will create a copy of the original including the drawing. This copy will become your property and you will be able to export it and share it as your own, but the original KML from which the copy has been made will not be edited. The copy will therefore appear as your drawing in the Displayed maps section of the menu without red profile.

<figure>
    <img src="../../static/cms/kml_gpx_04.avif" style="background-color: white">
    <figcaption>Sie bleiben Eigentümer der Datei — © swisstopo</figcaption>
</figure>

### 4. An external KML, KMZ or GPX file stored online

Once finished a KML / KMZ / GPX file, it has also the possibility to be saved online in an external server / cloud system like Dropbox, Google Drive, GitHub, etc. and imported in [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en) by URL via the "Advanced tools -> Import file" function of the menu. Though the system still won’t recognize your uploaded file as yours by putting the red profile in the layer of your drawing in the "Maps displayed" section of the Menu, the system will have access to it online and, contrary to the local file, allow you to share it, embed it in an iFrame and export it as a PDF print. In order to do so, we have created dedicated instructions on [how to publish your KML file online](https://www.geo.admin.ch/en/create-publish-online-kml).

<figure>
    <img src="../../static/cms/kml_gpx_05.avif" style="background-color: white">
    <figcaption>Eine online gespeicherte Datei — © swisstopo</figcaption>
</figure>

## Edit and share your drawings

We would like to underline, that while in the Drawing & Measuring mode is on, you have the possibility to save and share your drawings in 2 different forms with short links when clicking the **"Share"** button:

### 1. Link to share your drawing / style

This short link allows you to share the current drawing/measurement and the current map configuration (zoom level, data sets, etc.). Specifically, this link opens a new window of [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en) with the drawings and/or measurements and displays them under "Map display" as "Data and/or style from a third-party provider".

**The original KML file cannot be edited via this link.
Note: The drawing accessed via this link can be further edited in drawing mode, although a new drawing is created in the background. The original drawing remains unchanged.**

### 2. Link to edit your drawing

This short link allows third parties to edit the original drawing. This means that the link opens a new window of [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en) in Draw & Measure mode on the map, in which the drawings and measurements contained therein can be further edited.

**This link can also be shared with others for editing (at your own risk) and must be stored in a safe place. If this link is lost, the original drawing can no longer be edited!**

<figure>
    <img src="../../static/cms/kml_gpx_06.avif" style="background-color: white">
    <figcaption>Share and export a drawing — © PP BGDI</figcaption>
</figure>

## External / Third party datasets

You might have noticed that sometimes, your KML or GPX files displayed in the «Maps displayed» section of the Menu contains a red profile warning you that the dataset or style comes from an external source. This, and the text that appears with it, warn our users about the fact, that this is an external dataset where the eventual terms and conditions of the third-party data owner apply and have to be respected. This will also be implied in the down-right corner of the map where the copyright will include the name of the datasets that have been uploaded in red. Depending on the type of KML / GPX file, this red profile will appear or disappear. Please inform yourself on the types of KML / GPX files in the «How does the system differentiate the KML and GPX files?» section above.

## Instructions for editing KML files yourself (outside of map.geo.admin.ch)

In this section, we provide a small collection of tips and simple tools for editing KML files outside of [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en). This section does not claim to be complete. For further information, please refer to the external sources linked below and to the [OGC standard for KML](https://www.ogc.org/standard/kml/).
**Note**: All KML files generated in [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en) comply with the Google standard, the inventors of KML files.

To edit a KML file, we recommend using a text editor such as Notepad++ (which is used for the examples given below), Editor, WordPad and also Microsoft Word. Further possibilities exist with professional GIS systems or Google Earth. These possibilities will not be discussed in detail here.
**Note**: After editing, the file must be saved again with the extension **".kml"**.

<figure>
    <img src="../../static/cms/kml_gpx_07.avif" style="background-color: white">
    <figcaption>Structure of a standard KML file — © PP BGDI</figcaption>
</figure>

### How can I change the NAME and DESCRIPTION of a Point / Line / Text / Polygon in my KML file?

Every single element of your KML file contains a `<name>` and `<description>` parameter that can be edited. Here an example:

<figure>
    <img src="../../static/cms/kml_gpx_08.avif" style="background-color: white">
    <figcaption>Name and description of a KML element — © PP BGDI</figcaption>
</figure>

**Note**: You might have noticed that there is another `<name>` parameter on the top. This is the name of your KML and is also perfectly editable from "Drawing" to "My awesome KML file" for example.
Warning: Only texts do not have a `<description>` parameter, as they are already a text.

### How can I change the COLOUR of the lines of my KML file?

Every single element of your KML file contains a `<color>` parameter, however only the texts, lines and polygons are editable and most colour palettes are not yet supported by our system. Here an example:

<figure>
    <img src="../../static/cms/kml_gpx_09.avif" style="background-color: white">
    <figcaption>Colour of a KML element — © PP BGDI</figcaption>
</figure>

Here is an example of some supported values:

- Red - ff0000ff
- Yellow - ff00ffff
- Blue - ffff0000
- Green - ff00ff00
- Purple - ff800080
- Orange - ff0080ff
- Brown - ff336699
- Pink - ffff00ff

For more information concerning how to change the colour of your KML elements, visit: https://developers.google.com/kml/documentation/kmlreference#elements-specific-to-balloonstyle

### How can I change the WIDTH of my line / SIZE of my point?

In order to better see the lines in [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en), one can also change their width with the `<width>` parameter or see your points better changing the `<scale>` parameter. Here an example:

<figure>
    <img src="../../static/cms/kml_gpx_10.avif" style="background-color: white">
    <figcaption>Width of a KML line — © PP BGDI</figcaption>
</figure>

### How can I change the POINT SYMBOLOGY of my KML?

[map.geo.admin.ch](https://map.geo.admin.ch/?lang=en) has a wide range of point symbols available. However, it is possible to export a [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en) drawing as a KML and assign your own custom point symbols. To do this, change the URL in the `<href>` parameter of the exported KML as shown here:

<figure>
    <img src="../../static/cms/kml_gpx_11.avif" style="background-color: white">
    <figcaption>Point symbol of a KML element — © PP BGDI</figcaption>
</figure>
