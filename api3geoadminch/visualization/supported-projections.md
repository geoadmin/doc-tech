# Supported projections

Four projections are supported. The same tiles are offered in four other
_tilematrixsets/projection_.

- LV95/CH1903+ (EPSG:2056)  
  <https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml>

- LV03/CH1903 (EPSG:21781)  
  <https://wmts.geo.admin.ch/EPSG/21781/1.0.0/WMTSCapabilities.xml>

- Plate-Carrée WGS1984 (EPSG:4326, in **lat/lon order**)  
  <https://wmts.geo.admin.ch/EPSG/4326/1.0.0/WMTSCapabilities.xml>

- WGS84/Pseudo-Mercator (EPSG:3857, as used in OSM, Bing, Google Map)  
  <https://wmts.geo.admin.ch/EPSG/3857/1.0.0/WMTSCapabilities.xml>

Note:

- Partly due to a limitation of the WTMS 1.0.0 recommendations, each
  _projection_ has its own _GetCapabilities_ document.
- The same <span class="title-ref">timestamps</span> are available in
  all projection. New <span class="title-ref">timestamp</span> are
  added to the former ones.
- The layer _ch.kantone.cadastralwebmap-farbe_ uses a WMS service as
  its source.
- Note that all layers are available at all scales. You have to check
  for which **tileMatrixSets** a particuliar layer is defined. Your
  WMTS client may either stretch the tiles from the last available
  level or display nothing.
