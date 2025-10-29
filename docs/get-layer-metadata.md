# Get Layer Metadata

This endpoint provides metadata for all layers that match a search query.

<ApiCodeBlock url="https://api3.geo.admin.ch/rest/services/api/MapServer" method="GET" />

## Request Details

To interact with the metadata endpoint, you need to provide specific parameters in your request.
This endpoint only has **Query Parameters**, which are optional and modify the behavior of the request.

### Query Parameters

| Parameters                | Description                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **searchText (optional)** | The text to search for in the layer description.                                                                                      |
| **lang (optional)**       | The language. Supported values: de, fr, it , rm, en. Defaults to "de".                                                                |
| **sr (optional)**         | The spatial reference. Supported values: 21781 (LV03), 2056 (LV95), 4326 (WGS84) and 3857 (Web Pseudo-Mercator). Defaults to "21781". |
| **callback (optional)**   | The name of the callback function.                                                                                                    |

## Response Details

The response constains a list of all the layers matching the query.
For each layer, there are some general identification properties

| Field        | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| `name`       | The name of the layer (short name, less than 30 characters).   |
| `fullName`   | The layer's full name (not necessarily different from `name`). |
| `idGeoCat`   | The associated metadata ID in [GeoCat](https://www.geocat.ch). |
| `layerBodId` | The technical name or BOD ID.                                  |

and attributes listing more metaadata

| Field                    | Description                                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `wmsResource`            | The WMS resource of the layer.                                                                                                                         |
| `scaleLimit`             | The scale at which the layer is valid.                                                                                                                 |
| `inspireUpperAbstract`   | The abstract of the [INSPIRE](https://www.geo.admin.ch/en/inspire-services) category (first level).                                                    |
| `inspireName`            | The name of the [INSPIRE](https://www.geo.admin.ch/en/inspire-services) category.                                                                      |
| `urlDetails`             | Link to the official details page.                                                                                                                     |
| `bundCollectionNumber`   | The collection number.                                                                                                                                 |
| `dataOwner`              | The data owner.                                                                                                                                        |
| `inspireAbstract`        | The abstract of the [INSPIRE](https://www.geo.admin.ch/en/inspire-services) category the layer belongs to.                                             |
| `abstract`               | The layer abstract.                                                                                                                                    |
| `wmsContactAbbreviation` | The abbreviation contact for the WMS resource.                                                                                                         |
| `downloadUrl`            | The link where the data can be downloaded.                                                                                                             |
| `maps`                   | The projects in which this layer is accessible.                                                                                                        |
| `wmsContactName`         | The contact name for the WMS resource.                                                                                                                 |
| `dataStatus`             | The date of the latest data update.                                                                                                                    |
| `bundCollectionName`     | The collection name.                                                                                                                                   |
| `inspireUpperName`       | The name of the [INSPIRE](https://www.geo.admin.ch/en/inspire-services) category (first level).                                                        |
| `urlApplication`         | The application where this layer is published.                                                                                                         |
| `tileInfo`               | WMTS general information in JSON format. Note that this section is always identical and is not tied to a particular "map" like in ESRI specifications. |

## Examples

List all the layers available in the GeoAdmin API:

<ExampleCodeBlock
request="curl https://api3.geo.admin.ch/rest/services/api/MapServer"
example='{
  "mapName": "api",
  "description": "Configuration for the map (topic) api",
  "copyrightUnicode": "Data api",
  "layers": [
    {
      "attributes": {
        "inspireAbstract": "Soil",
        "fullTextSearch": "Estimate of (...)",
        "inspireName": "Soil",
        "wmsContactAbbreviation": "swisstopo",
        "wmsContactName": "Federal Office of Topography swisstopo",
        "maps": "api,ech,inspire,service-wms",
        "wmsUrlResource": "https://wms.geo.admin.ch/?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0",
        "scaleLimit": "1:100000",
        "dataOwner": "Agroscope",
        "urlDetails": "https://www.geocat.ch/geonetwork/srv/api/records/0572e842-7e34-409a-90d9-526d012a1c2d/attachments/W%C3%BCst-Galley%20Leifeld%202025%20org%20soils%20map.pdf",
        "dataStatus": "20241031",
        "inspireUpperAbstract": "Environment, biology and geology",
        "abstract": "Estimate of Switzerlands Organic Soil Surface, 2025The 2025 estimate of Switzerlands organic soil surface is an update of the 2015 estimate of organic soils. As in the 2015 map, it used the approach of collating existing information sources (e.g., soil maps, geology maps, forest habitat maps, historical observations of peatlands, as well as inventories of fens and raised bogs) to generate an estimate or the current extent of organic soils. In a first step, four important data sets were updated: Soil maps, geology maps, the national inventory of raised and transitional bogs, and the forest habitat maps. In a second step, all data sets were harmonized and inserted into a data model, allowing the semi-automatic combination of the various data sets. In a third step, the data sets were combined (more specifically, overlain) and a rule-based method was used to characterise the resulting surfaces as organic soil, or not organic soil. In a fourth step, information on the mineral soil surface was used to delete surfaces for which the evidence of mineral soil was stronger. The soil surface recommended for use in most applications is 32,702 ha, which corresponds to the ‘less conservative estimate or organic soils. Because of the heterogeneous nature of the information sources that were used to generate this indicator map, it is not possible to define the scale for which this map is appropriate. The following recommendation can however be made: The map is suitable for use at the regional scale (e.g., cantonal or district, ca. 1:100,000) and larger scale only; it is unsuitable for field-scale use. The two publications (Wüst-Galley, C. and J. Leifeld (2025) “The distribution and (future) use of Switzerlands organic soils” Mires and Peat 32(4): 1-17, DOI: 10.19189/001c.130819 and Wüst-Galley, C., A. Grünig and J. Leifeld (2015) “Locating organic soils for the greenhouse gas inventory” Agroscope Science 26, 100 pp.) describe the methodology and updated data sets in detail, and it is strongly recommended that both publications should be read by anybody wanting to use this data set. Parts of the data are subject to a licence. Please read the additional documentation.",
        "downloadUrl": "https://data.geo.admin.ch/browser/index.html#/collections/ch.agroscope.abschaetzung-organische_boeden",
        "inspireUpperName": "Environment, biology and geology"
      },
      "layerBodId": "ch.agroscope.abschaetzung-organische_boeden",
      "idGeoCat": "0572e842-7e34-409a-90d9-526d012a1c2d",
      "name": "Organic soils CH 2024",
      "fullName": "Estimate of Switzerlands Organic Soil Surface, 2025"
    },
    (... more layers ...)
  ],
  "spatialReference": {
    "wkid": 21781
  },
  "tileInfo": {},
  "initialExtent": {
    "xmin": 458000,
    "ymin": 76375,
    "xmax": 839125,
    "ymax": 312500,
    "spatialReference": {
      "wkid": 21781
    }
  },
  "fullExtent": {
    "xmin": 420000,
    "ymin": 30000,
    "xmax": 900000,
    "ymax": 350000,
    "spatialReference": {
      "wkid": 21781
    }
  },
  "units": "esriMeters",
  "capabilities": "Map"
}'
/>

Using searchText parameter to list all the layers available in the GeoAdmin API where the word "wasser" is found in their description:

<ExampleCodeBlock
request="curl https://api3.geo.admin.ch/rest/services/api/MapServer?searchText=wasser"
example='{
  "mapName": "api",
  "description": "Configuration for the map (topic) api",
  "copyrightUnicode": "Data api",
  "layers": [
    {
      "attributes": {
        "inspireAbstract": "Soil",
        "fullTextSearch": "Wetness potential in the agricultural land, vector | Das Feuchtflächenpotential wurde anhand der Prozesse Wasserakkumulation und Versickerung beurteilt. Aus dem Höhenmodell (Swissalti3d © swisstopo) wurden Reliefparameter berechnet und Ebenen und Mulden modelliert. Das Potential der Versickerung wurde von Bodenkarten abgeleitet. Wo keine detaillierten Bodenkarten vorhanden waren, wurden geologische Karten und andere Surrogate in einem Expertenmodell überlagert und gewichtet. Der Vektor-Datensatz ist auf die vorwiegend landwirtschaftlich genutzten Feldblöcke zugeschnitten.Versickerung: 4 Klassen; Wasserakkumulation: 5 Klassen. Zitat: Szerencsits, E., Prasuhn, V., Churko, G., Herzog, F., Utiger, C., Zihlmann, U. et al. (2018). Karte potenzieller Feucht-Acker-Flächen der Schweiz. Agroscope Science, 72, 67. https://www.feuchtacker.ch/ | swisstopo | Federal Office of Topography swisstopo | Agroscope",
        "inspireName": "Soil",
        "wmsContactAbbreviation": "swisstopo",
        "wmsContactName": "Federal Office of Topography swisstopo",
        "maps": "api,ech,inspire,service-wms",
        "wmsUrlResource": "https://wms.geo.admin.ch/?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0",
        "scaleLimit": "Min 1:5000 – Max 1:25000",
        "dataOwner": "Agroscope",
        "dataStatus": "20230725",
        "inspireUpperAbstract": "Environment, biology and geology",
        "abstract": "Das Feuchtflächenpotential"
      },
      "layerBodId": "ch.agroscope.feuchtflaechenpotential-kulturlandschaft",
      "idGeoCat": "5188235f-c5c3-4628-9173-055824b65539",
      "name": "Wetness potential agricultural land",
      "fullName": "Wetness potential in the agricultural land, vector"
    },
    (... more layers ...)
  ],
  "spatialReference": {
    "wkid": 21781
  },
  "tileInfo": {},
  "initialExtent": {
    "xmin": 458000,
    "ymin": 76375,
    "xmax": 839125,
    "ymax": 312500,
    "spatialReference": {
      "wkid": 21781
    }
  },
  "fullExtent": {
    "xmin": 420000,
    "ymin": 30000,
    "xmax": 900000,
    "ymax": 350000,
    "spatialReference": {
      "wkid": 21781
    }
  },
  "units": "esriMeters",
  "capabilities": "Map"
}'
/>

Find a layer by [geocat ID](https://www.geocat.ch):

<ExampleCodeBlock
request="curl https://api3.geo.admin.ch/rest/services/api/MapServer?searchText=f198f6f6-8efa-4235-a55f-99767ea0206c"
example='{
  "mapName": "api",
  "description": "Configuration for the map (topic) api",
  "copyrightUnicode": "Data api",
  "layers": [
    {
      "attributes": {
        "urlApplication": "https://map.geo.admin.ch/?lang=de&topic=gewiss",
        "inspireAbstract": "Geology",
        "fullTextSearch": "Hydrogeological Map of Switzerland: Groundwater Resources 1:500000 | The Federal Office for the Environment (FOEN) is the body within the Swiss Geological Survey responsible for hydrogeology. The 1:500,000 Hydrogeological Map forms part of the GeoMaps series (GK500) and is divided into two sheets. The first (GK500-Hydro) represents the various groundwater resources in Switzerland and their productiveness. The second (GK500-Hydro_Vul) shows the vulnerability of the groundwater resources to the risk of pollution. The groundwater resources sheet also indicates the type of groundwater aquifer (karstic, jointed or unconsolidated rock), the most important springs and groundwater catchments as well as hydrodynamic information about the infiltration and exfiltration areas. The two sheets were originally published as Tables 8.6 and 8.7 of the Hydrological Atlas of Switzerland HADES (FOEN, 2004 and 2007). | Hydrogeologische Karte der Schweiz: Grundwasservorkommen 1:500000 | swisstopo | Federal Office of Topography swisstopo | Federal Office of Topography swisstopo",
        "inspireName": "Geology",
        "wmsContactAbbreviation": "swisstopo",
        "bundCollectionNumber": "46.6",
        "wmsContactName": "Federal Office of Topography swisstopo",
        "bundCollection": "Hydrogeologische Karte der Schweiz: Grundwasservorkommen 1:500000",
        "maps": "api,bafu,ech,geol,georessourcen,gewiss,inspire,schule,service-wms,swissmaponline,swisstopo",
        "wmsUrlResource": "https://wms.geo.admin.ch/?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0",
        "scaleLimit": "1:500000",
        "dataOwner": "Federal Office of Topography swisstopo",
        "urlDetails": "https://shop.swisstopo.admin.ch/en/maps/geological-maps/geomaps-500000",
        "dataStatus": "20081103",
        "inspireUpperAbstract": "Environment, biology and geology",
        "abstract": "The Federal Office for the Environment (FOEN) is the body within the Swiss Geological Survey responsible for hydrogeology. The 1:500,000 Hydrogeological Map forms part of the GeoMaps series (GK500) and is divided into two sheets. The first (GK500-Hydro) represents the various groundwater resources in Switzerland and their productiveness. The second (GK500-Hydro_Vul) shows the vulnerability of the groundwater resources to the risk of pollution. The groundwater resources sheet also indicates the type of groundwater aquifer (karstic, jointed or unconsolidated rock), the most important springs and groundwater catchments as well as hydrodynamic information about the infiltration and exfiltration areas. The two sheets were originally published as Tables 8.6 and 8.7 of the Hydrological Atlas of Switzerland HADES (FOEN, 2004 and 2007).",
        "downloadUrl": "https://data.geo.admin.ch/ch.swisstopo.geologie-hydrogeologische_karte-grundwasservorkommen",
        "inspireUpperName": "Environment, biology and geology"
      },
      "layerBodId": "ch.swisstopo.geologie-hydrogeologische_karte-grundwasservorkommen",
      "idGeoCat": "f198f6f6-8efa-4235-a55f-99767ea0206c",
      "name": "Groundwater Resources 500",
      "fullName": "Hydrogeological Map of Switzerland: Groundwater Resources 1:500000"
    }
  ],
  "spatialReference": {
    "wkid": 21781
  },
  "tileInfo": {
    "rows": 256,
    "cols": 256,
    "dpi": 90.7,
    "format": "PNG,JPEG",
    "compressionQuality": null,
    "origin": {
      "x": 420000,
      "y": 350000
    },
    "spatialReference": {
      "wkid": 21781
    },
    "lods": []
  },
  "initialExtent": {
    "xmin": 458000,
    "ymin": 76375,
    "xmax": 839125,
    "ymax": 312500,
    "spatialReference": {
      "wkid": 21781
    }
  },
  "fullExtent": {
    "xmin": 420000,
    "ymin": 30000,
    "xmax": 900000,
    "ymax": 350000,
    "spatialReference": {
      "wkid": 21781
    }
  },
  "units": "esriMeters",
  "capabilities": "Map"
}
'
/>
