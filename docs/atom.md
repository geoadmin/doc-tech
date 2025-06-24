# Atom Feed / Open Search Download Service

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

- [Administrative
  units](https://www.geocat.ch/geonetwork/srv/eng/catalog.search#/metadata/fc2c80e5-fc87-415a-ac05-b2520957d155)
- [Geographical
  Names](https://www.geocat.ch/geonetwork/srv/eng/catalog.search#/metadata/e81d4df0-52c8-4258-a38b-96f6761c976b)

### Examples

- [Get a Dataset Feed (Describe Spatial Data Set
  Operation)](https://atom.geo.admin.ch/inspire/search?spatial_dataset_identifier_code=e81d4df0-52c8-4258-a38b-96f6761c976b&spatial_dataset_identifier_namespace=http://www.swisstopo.ch/)
  (code and namespace to be found in the Open Search Description
  Document)
- [Get a dataset (Get Spatial Data Set
  Operation)](https://atom.geo.admin.ch/inspire/search?spatial_dataset_identifier_code=e81d4df0-52c8-4258-a38b-96f6761c976b&spatial_dataset_identifier_namespace=http://www.swisstopo.ch/&crs=http://www.opengis.net/def/crs/EPSG/0/3857)
  (code, namespace and crs to be found in the Open Search Description
  Document)
- [Search for all available
  downloads](https://atom.geo.admin.ch/inspire/search?q=inspire)
