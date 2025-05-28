# Create a KML and publish it online

KML (formerly known as Keyhole Markup Language) is an XML file format used to display information in a geographical context. KML information can be displayed in many map viewers and of course on [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en). This tutorial shows you how to create a KML file and put it online.

## Create a .kml file

- [Online KML generator](https://www.swisstopo.admin.ch/fr/conversion-coordonnees-generation-de-kml)
- [Instructions for drawing on map.geo.admin.ch](https://www.geo.admin.ch/en/map-viewer-functions-drawing-and-measuring)

## How to publish KML/GPX online

For users who wish to view their KML/GPX files on the Internet via a stable URL and who do not have their own server, there are the following ways of depositing and publishing KML/GPX files free of charge:

## Publish with Google Drive

- Create an account/log on to: https://drive.google.com
- Import the file: Click on the «New Plus (+)» symbol in the top left-hand corner. «New -> File upload» and upload the desired KML/GPX file.
- Right-click on the file (or click on the 3 dots to the right of the file), and click on «Share» -> «Share». Change the general access to «Anyone with the link».
- Copy the URL by clicking on «Copy link» and click on «Done».
- The copied URL must then be modified as follows, so that the KML/GPX file can be imported using the KML/GPX import tool on [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en):

  1.  Replace the link in front of the URL «https://drive.google.com/file/d/» with the string «https://drive.google.com/uc?export=download&id=».
  2.  And remove the string «/view?usp=sharing» at the end of the URL.

- The resulting URL can be used via «Import file» -> «Online» on [map.geo.admin.ch(https://map.geo.admin.ch/?lang=en)] in the «Advanced tools» section of the menu.
- [Example](https://s.geo.admin.ch/90ece1e5d2)

## Publish with Dropbox

- Open an account at: http://www.dropbox.com (you can install the desktop application or use the web application directly)
- Click on «Import or drop» to import the KML / GPX file. If the file is downloaded in the desktop application, click on «Copy link».
  To find out more about publishing via Dropbox: http://www.dropbox.com/help/16
- The resulting URL can be used via «Import file» -> «Online» on [map.geo.admin.ch](https://map.geo.admin.ch/?lang=en) in the «Advanced tools» section of the menu.
- [Example](https://s.geo.admin.ch/90ece1e5d2)

## Publish with Gist

[Gist](https://gist.github.com/), a [Github](https://github.com/) function:

- Create an account/log on to: https://gist.github.com/
- Create your URL by dragging and dropping your KML/GPX file into the Gist text window (1)
- You will now see the code for your KML/GPX file in the text window. Press the «Create Public Gist» button (2) and then the «Raw» button (3).
- A URL with your KML/GPX file is generated as shown in (4).
- According to (5), you can integrate this URL into the map viewer and, in particular, make it available to other users as a permalink or link it to a personal web page.
- [Example](https://s.geo.admin.ch/90ece1e5d2)

<img src="../../static/gist.avif">
