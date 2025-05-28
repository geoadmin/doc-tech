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
