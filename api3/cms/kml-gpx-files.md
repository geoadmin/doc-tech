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
