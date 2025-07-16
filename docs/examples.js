export const identifyFeatures01 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometry=678250,213000&geometryFormat=geojson&geometryType=esriGeometryPoint&imageDisplay=1391,1070,96&lang=fr&layers=all:ch.bafu.nabelstationen&mapExtent=312250,-77500,1007750,457500&returnGeometry=true&tolerance=5",
  response: `{
  "results": [
    {
      "type": "Feature",
      "featureId": "RIG",
      "bbox": [677835, 213440, 677835, 213440],
      "layerBodId": "ch.bafu.nabelstationen",
      "layerName": "Stations de mesure qualité de l'air",
      "id": "RIG",
      "geometry": {
        "type": "Point",
        "coordinates": [677835, 213440]
      },
      "properties": {
        "name": "Rigi-Seebodenalp",
        "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "label": "Rigi-Seebodenalp"
      }
    }
  ]
}
`,
};

export const identifyFeatures02 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik",
  response: `{
  "results": [
    {
      "featureId": "54901480-1980",
      "bbox": [549000.0, 148000.0, 549000.0, 148000.0],
      "layerBodId": "ch.bfs.arealstatistik",
      "layerName": "Arealstatistik Standard",
      "id": "54901480-1980",
      "geometry": {
        "x": 549000.0,
        "y": 148000.0,
        "spatialReference": { "wkid": 21781 }
      },
      "attributes": {
        "as_72": 8,
        "survey": "1979/85",
        "year": 1980,
        "fj": 1980,
        "desc_as_72_en": "Surroundings of blocks of flats",
        "label": "54901480-1980"
      }
    }
    (...more features...)
  ]
}`,
};

export const identifyFeatures03 = {
  request:
    '$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry={"paths":[[[675000,245000],[660000,260000],[620000,250000]]]}&geometryType=esriGeometryPolyline&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln',
  response: `{
  "results": [
    {
      "featureId": 1239,
      "bbox": [658884.4, 259457.7, 661405, 263367.1],
      "layerBodId": "ch.bafu.bundesinventare-bln",
      "layerName": "ILNM",
      "id": 1239,
      "geometry": {
        "rings": [
          [
            [661321.9, 259738.9],
            [660783.5, 259457.7],
            [660773.1, 259516.4],
            (...more points...)
            [661178.1, 263167.2],
            [661188.7, 263146],
            [661198, 263120.3]
          ]
        ],
        "spatialReference": {
          "wkid": 21781
        }
      },
      "attributes": {
        "bln_name": "Wasserschloss beim Zusammenfluss von Aare, Reuss und Limmat",
        "bln_obj": 1019,
        "bln_fl": 392.078,
        "subareanumber": 0,
        "subareaname": null,
        "linkurldescription": "https://data.geo.admin.ch/ch.bafu.bundesinventare-bln/objectsheets/2017revision/nr1019.pdf",
        "label": "Wasserschloss beim Zusammenfluss von Aare, Reuss und Limmat"
      }
    }
    (...more features...)
  ]
}`,
};

export const identifyFeatures04 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometry={%22rings%22:[[[675000,245000],[670000,255000],[680000,260000],[690000,255000],[685000,240000],[675000,245000]]]}&geometryType=esriGeometryPolygon&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=5&layers=all:ch.bafu.bundesinventare-bln",
  response: `{
  "results": [
    {
      "featureId": 1231,
      "bbox": [665368.5, 256785.7, 676411.1, 261506.4],
      "layerBodId": "ch.bafu.bundesinventare-bln",
      "layerName": "ILNM",
      "id": 1231,
      "geometry": {
        "rings": [
          [
            [670779.3, 261171.1],
            [670779.9, 261158.7],
            [670775.6, 261132.1],
            [670775.6, 261114.8],
            [670778.6, 261091.6],
            [670783.6, 261077],
            [670790.7, 261056.9],
            [670799.1, 261038.2],
            [670808.7, 261016.7],
            [670818.2, 260999.4],
            [670829.4, 260985.2],
            (...more points...)
            [670779.3, 261171.1]
            [670779, 261310.9],
            [670766.3, 261305],
            [670770, 261294.5],
            [670770.9, 261275.3],
            [670771.8, 261258.6],
            [670772.8, 261245],
            [670774, 261222.7],
            [670774.6, 261205.1],
            [670776.8, 261194],
            [670779.3, 261171.1]
          ]
        ],
        "spatialReference": {
          "wkid": 21781
        }
      },
      "attributes": {
        "bln_name": "Lägerngebiet",
        "bln_obj": 1011,
        "bln_fl": 2465.705,
        "subareanumber": 0,
        "subareaname": null,
        "linkurldescription": "https://data.geo.admin.ch/ch.bafu.bundesinventare-bln/objectsheets/2017revision/nr1011.pdf",
        "label": "Lägerngebiet"
      }
    }
    (...more features...)
  ]
}`,
};
export const identifyFeatures05 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&geometryFormat=geojson",
  response: `{
  "results": [
    {
      "type": "Feature",
      "featureId": "54901480-1980",
      "bbox": [549000, 148000, 549000, 148000],
      "layerBodId": "ch.bfs.arealstatistik",
      "layerName": "Land use statistics standard",
      "id": "54901480-1980",
      "geometry": {
        "type": "Point",
        "coordinates": [549000, 148000]
      },
      "properties": {
        "as_72": 8,
        "survey": "1979/85",
        "year": 1980,
        "fj": 1980,
        "desc_as_72_de": "Umschwung von Mehrfamilienhäusern",
        "desc_as_72_fr": "Terrains attenants aux immeubles résidentiels",
        "desc_as_72_it": "Terreno annesso a case plurifamiliari",
        "desc_as_72_rm": "Umschwung von Mehrfamilienhäusern",
        "desc_as_72_en": "Surroundings of blocks of flats",
        "label": "54901480-1980"
      }
    }
    (...more features...)
  ]
}`,
};

export const identifyFeatures06 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=500,600,96&mapExtent=548945.5,147956,549402,148103.5&tolerance=1&layers=all:ch.bfs.arealstatistik&returnGeometry=false",
  response: `{
  "results": [
    {
      "layerBodId": "ch.bfs.arealstatistik",
      "layerName": "Land use statistics standard",
      "featureId": "54901480-1980",
      "id": "54901480-1980",
      "attributes": {
        "as_72": 8,
        "survey": "1979/85",
        "year": 1980,
        "fj": 1980,
        "desc_as_72_de": "Umschwung von Mehrfamilienhäusern",
        "desc_as_72_fr": "Terrains attenants aux immeubles résidentiels",
        "desc_as_72_it": "Terreno annesso a case plurifamiliari",
        "desc_as_72_rm": "Umschwung von Mehrfamilienhäusern",
        "desc_as_72_en": "Surroundings of blocks of flats",
        "label": "54901480-1980"
      }
    }
    (...more features...)
  ]
}`,
};

export const identifyFeatures07 = {
  request: `$ curl https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=2548945.5,1147956,2549402,1148103.5&geometryFormat=geojson&imageDisplay=1367,949,96&lang=en&layers=all:ch.swisstopo.amtliches-strassenverzeichnis&mapExtent=2318250,952750,3001750,1427250&returnGeometry=false&sr=2056&tolerance=5&layerDefs={"ch.swisstopo.amtliches-strassenverzeichnis":"stn_label+ilike+'%Corniche%'"}`,
  response: `{
  "results": [
    {
      "layerBodId": "ch.swisstopo.amtliches-strassenverzeichnis",
      "layerName": "Official directory of streets",
      "featureId": 10035871,
      "id": 10035871,
      "properties": {
        "str_esid": 10035871,
        "stn_label": "Route de la Corniche",
        "zip_label": "1070 Puidoux, 1071 Chexbres, 1098 Epesses",
        "com_name": "Puidoux",
        "com_fosnr": 5607,
        "str_official": 1,
        "str_modified": "2024-10-15",
        "str_type": "Strasse",
        "str_children": null,
        "str_parent": null,
        "str_status": "bestehend",
        "label": "Route de la Corniche"
      }
    },
    {
      "layerBodId": "ch.swisstopo.amtliches-strassenverzeichnis",
      "layerName": "Official directory of streets",
      "featureId": 10048084,
      "id": 10048084,
      "properties": {
        "str_esid": 10048084,
        "stn_label": "Route de la Corniche",
        "zip_label": "1096 Cully, 1097 Riex, 1098 Epesses",
        "com_name": "Bourg-en-Lavaux",
        "com_fosnr": 5613,
        "str_official": 1,
        "str_modified": "2024-07-29",
        "str_type": "Strasse",
        "str_children": null,
        "str_parent": null,
        "str_status": "bestehend",
        "label": "Route de la Corniche"
      }
    },
    {
      "layerBodId": "ch.swisstopo.amtliches-strassenverzeichnis",
      "layerName": "Official directory of streets",
      "featureId": 10093805,
      "id": 10093805,
      "properties": {
        "str_esid": 10093805,
        "stn_label": "Route de la Corniche",
        "zip_label": "1071 Chexbres",
        "com_name": "Chexbres",
        "com_fosnr": 5601,
        "str_official": 1,
        "str_modified": "2024-07-29",
        "str_type": "Strasse",
        "str_children": null,
        "str_parent": null,
        "str_status": "bestehend",
        "label": "Route de la Corniche"
      }
    }
  ]
}`,
};

export const identifyFeatures08 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryEnvelope&geometry=548945.5,147956,549402,148103.5&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill&returnGeometry=false",
  response: `{
  "results": [
    {
      "layerBodId": "ch.swisstopo.swissboundaries3d-bezirk-flaeche.fill",
      "layerName": "District boundaries",
      "featureId": 2226,
      "id": 2226,
      "attributes": {
        "name": "Lavaux-Oron",
        "flaeche": 19791,
        "label": "Lavaux-Oron"
      }
    }
  ]
}`,
};

export const identifyFeatures09 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryPoint&geometry=548945.5,147956&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,ch.swisstopo-vd.ortschaftenverzeichnis_plz&returnGeometry=false",
  response: `{
  "results": [
    {
      "layerBodId": "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill",
      "layerName": "Municipal boundaries",
      "featureId": "13096-1850",
      "id": "13096-1850",
      "attributes": {
        "gemname": "Puidoux",
        "gemflaeche": 2286.0973335532985,
        "gde_hist_id": 13096,
        "gde_nr": 5607,
        "jahr": 1850,
        "perimeter": 30580.136077557163,
        "kanton": "VD",
        "objektart": 11,
        "is_current_jahr": false,
        "objektart_lookup": "politische_gemeinde",
        "link_de": "https://www.agvchapp.bfs.admin.ch/de/communes/results?BfsNr=5607&EntriesFrom=12.09.1848&EntriesTo=31.08.2006&IncludeUnassignedEntities=True",
        "link_fr": "https://www.agvchapp.bfs.admin.ch/fr/communes/results?BfsNr=5607&EntriesFrom=12.09.1848&EntriesTo=31.08.2006&IncludeUnassignedEntities=True",
        "link_it": "https://www.agvchapp.bfs.admin.ch/it/communes/results?BfsNr=5607&EntriesFrom=12.09.1848&EntriesTo=31.08.2006&IncludeUnassignedEntities=True",
        "label": "Puidoux"
      }
    }
    (...more features...)
  ]
}`,
};

export const identifyFeatures10 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryPoint&geometry=548945.5,147956&imageDisplay=0,0,0&mapExtent=0,0,0,0&tolerance=0&layers=all:ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,ch.swisstopo-vd.ortschaftenverzeichnis_plz&returnGeometry=false",
  response: `{
  "results": [
    {
      "layerBodId": "ch.bfs.gebaeude_wohnungs_register",
      "layerName": "RBD: building status",
      "featureId": "1272199_0",
      "id": "1272199_0",
      "attributes": {
        "egid": "1272199",
        "strname_deinr": "Seftigenstrasse 264",
        "plz_plz6": "3084/308400",
        "ggdename": "Köniz",
        "ggdenr": 355,
        "gexpdat": "12.07.2025",
        "gdekt": "BE",
        "egrid": "CH669746359158",
        "lgbkr": 0,
        "lparz": "212",
        "lparzsx": null,
        "ltyp": null,
        "gebnr": "",
        "gbez": "",
        "gkode": 2600983.546,
        "gkodn": 1197396.177,
        "gksce": 901,
        "gstat": 1004,
        "gkat": 1060,
        "gklas": null,
        "gbauj": null,
        "gbaum": null,
        "gbaup": 8011,
        "gabbj": null,
        "garea": 3143,
        "gvol": null,
        "gvolnorm": null,
        "gvolsce": null,
        "gastw": 4,
        "ganzwhg": null,
        "gazzi": null,
        "gschutzr": null,
        "gebf": null,
        "gwaerzh1": 7430,
        "genh1": 7542,
        "gwaersceh1": 865,
        "gwaerdath1": "14.03.2023",
        "gwaerzh2": null,
        "genh2": null,
        "gwaersceh2": null,
        "gwaerdath2": "-",
        "gwaerzw1": 7630,
        "genw1": 7530,
        "gwaerscew1": 869,
        "gwaerdatw1": "29.11.2001",
        "gwaerzw2": null,
        "genw2": null,
        "gwaerscew2": null,
        "gwaerdatw2": "-",
        "edid": "0",
        "egaid": 100718281,
        "deinr": "264",
        "esid": 10006665,
        "strname": ["Seftigenstrasse"],
        "strnamk": ["Seftigenstr."],
        "strindx": ["Sef"],
        "strsp": ["DE"],
        "stroffiziel": "1",
        "dplz4": 3084,
        "dplzz": 0,
        "dplzname": "Wabern",
        "dkode": 2600968.668,
        "dkodn": 1197426.954,
        "doffadr": 1,
        "dexpdat": "12.07.2025",
        "ewid": null,
        "whgnr": null,
        "wstwk": null,
        "wmehrg": null,
        "weinr": null,
        "wbez": null,
        "wstat": null,
        "wexpdat": null,
        "wbauj": null,
        "wabbj": null,
        "warea": null,
        "wazim": null,
        "wkche": null,
        "label": "Seftigenstrasse 264"
      }
    }
  ]
}`,
};

export const find01 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bafu.bundesinventare-bln&searchText=Lavaux&searchField=bln_name&returnGeometry=false",
  response: `{
  "results": [
    {
      "layerBodId": "ch.bafu.bundesinventare-bln",
      "layerName": "ILNM",
      "featureId": 1255,
      "id": 1255,
      "attributes": {
        "bln_name": "Lavaux",
        "bln_obj": 1202,
        "bln_fl": 715.466,
        "subareanumber": 0,
        "subareaname": null,
        "linkurldescription": "https://data.geo.admin.ch/ch.bafu.bundesinventare-bln/objectsheets/2017revision/nr1202.pdf",
        "label": "Lavaux"
      }
    }
  ]
}`,
};

export const find02 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=123164&searchField=egid&returnGeometry=false",
  response: `{
  "results": [
    {
      "layerBodId": "ch.bfs.gebaeude_wohnungs_register",
      "layerName": "RBD: building status",
      "featureId": "3123164_0",
      "id": "3123164_0",
      "attributes": {
        "egid": "3123164",
        "strname_deinr": "Via Arboi 15",
        "plz_plz6": "6534/653400",
        "ggdename": "San Vittore",
        "ggdenr": 3835,
        "gexpdat": "13.07.2025",
        "gdekt": "GR",
        "egrid": "CH167876918122",
        "lgbkr": 0,
        "lparz": "1109",
        "lparzsx": null,
        "ltyp": null,
        "gebnr": "168E",
        "gbez": "",
        "gkode": 2728519.025,
        "gkodn": 1122066.665,
        "gksce": 901,
        "gstat": 1004,
        "gkat": 1020,
        "gklas": 1110,
        "gbauj": null,
        "gbaum": null,
        "gbaup": 8019,
        "gabbj": null,
        "garea": 92,
        "gvol": null,
        "gvolnorm": null,
        "gvolsce": null,
        "gastw": 2,
        "ganzwhg": 1,
        "gazzi": null,
        "gschutzr": null,
        "gebf": null,
        "gwaerzh1": 7450,
        "genh1": 7560,
        "gwaersceh1": 860,
        "gwaerdath1": "29.11.2001",
        "gwaerzh2": null,
        "genh2": null,
        "gwaersceh2": null,
        "gwaerdath2": "-",
        "gwaerzw1": 7650,
        "genw1": 7560,
        "gwaerscew1": 860,
        "gwaerdatw1": "29.11.2001",
        "gwaerzw2": 7600,
        "genw2": 7500,
        "gwaerscew2": 860,
        "gwaerdatw2": "29.11.2001",
        "edid": "0",
        "egaid": 102249110,
        "deinr": "15",
        "esid": 10197717,
        "strname": ["Via Arboi"],
        "strnamk": ["Via Arboi"],
        "strindx": ["Arb"],
        "strsp": ["IT"],
        "stroffiziel": "1",
        "dplz4": 6534,
        "dplzz": 0,
        "dplzname": "S. Vittore",
        "dkode": 2728516.143,
        "dkodn": 1122068.893,
        "doffadr": 0,
        "dexpdat": "13.07.2025",
        "ewid": ["1"],
        "whgnr": [null],
        "wstwk": [3100],
        "wmehrg": [1],
        "weinr": [null],
        "wbez": [null],
        "wstat": [3004],
        "wexpdat": ["2025-07-13T00:00:00"],
        "wbauj": [1999],
        "wabbj": [null],
        "warea": [180],
        "wazim": [3],
        "wkche": [1],
        "label": "Via Arboi 15"
      }
    }
    (...more features...)
  ]
}
`,
};

export const find03 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=1231641&searchField=egid&returnGeometry=false&contains=false",
  response: `{
  "results": [
    {
      "layerBodId": "ch.bfs.gebaeude_wohnungs_register",
      "layerName": "RBD: building status",
      "featureId": "1231641_0",
      "id": "1231641_0",
      "attributes": {
        "egid": "1231641",
        "strname_deinr": "Beaulieustrasse 2",
        "plz_plz6": "3012/301200",
        "ggdename": "Bern",
        "ggdenr": 351,
        "gexpdat": "13.07.2025",
        "gdekt": "BE",
        "egrid": "CH251146763508",
        "lgbkr": 2,
        "lparz": "2091",
        "lparzsx": null,
        "ltyp": null,
        "gebnr": "",
        "gbez": "",
        "gkode": 2599407.817,
        "gkodn": 1200797.593,
        "gksce": 904,
        "gstat": 1004,
        "gkat": 1020,
        "gklas": 1122,
        "gbauj": null,
        "gbaum": null,
        "gbaup": 8012,
        "gabbj": null,
        "garea": 174,
        "gvol": null,
        "gvolnorm": null,
        "gvolsce": null,
        "gastw": 4,
        "ganzwhg": 10,
        "gazzi": null,
        "gschutzr": null,
        "gebf": null,
        "gwaerzh1": 7460,
        "genh1": 7580,
        "gwaersceh1": 865,
        "gwaerdath1": "11.02.2025",
        "gwaerzh2": 7400,
        "genh2": 7500,
        "gwaersceh2": 860,
        "gwaerdath2": "29.11.2001",
        "gwaerzw1": 7660,
        "genw1": 7580,
        "gwaerscew1": 865,
        "gwaerdatw1": "11.02.2025",
        "gwaerzw2": 7600,
        "genw2": 7500,
        "gwaerscew2": 860,
        "gwaerdatw2": "29.11.2001",
        "edid": "0",
        "egaid": 100774486,
        "deinr": "2",
        "esid": 10084832,
        "strname": ["Beaulieustrasse"],
        "strnamk": ["Beaulieustr."],
        "strindx": ["Bea"],
        "strsp": ["DE"],
        "stroffiziel": "1",
        "dplz4": 3012,
        "dplzz": 0,
        "dplzname": "Bern",
        "dkode": 2599409.699,
        "dkodn": 1200794.829,
        "doffadr": 1,
        "dexpdat": "13.07.2025",
        "ewid": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        "whgnr": [null, null, null, null, null, null, null, null, null, null],
        "wstwk": [3100, 3102, 3102, 3101, 3103, 3101, 3104, 3103, 3104, 3104],
        "wmehrg": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "weinr": [null, null, null, null, null, null, null, null, null, null],
        "wbez": [
          null,
          "Rechts",
          "Links",
          "Rechts",
          "Rechts",
          "Links",
          "Mitte",
          "Links",
          "Links",
          "Rechts"
        ],
        "wstat": [3004, 3004, 3004, 3004, 3004, 3004, 3004, 3004, 3004, 3004],
        "wexpdat": [
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00",
          "2025-07-13T00:00:00"
        ],
        "wbauj": [1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999],
        "wabbj": [null, null, null, null, null, null, null, null, null, null],
        "warea": [95, 97, 65, 97, 97, 65, 48, 65, 20, 20],
        "wazim": [3, 4, 2, 4, 3, 2, 1, 5, 1, 1],
        "wkche": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        "label": "Beaulieustrasse 2"
      }
    }
  ]
}`,
};

export const find04 = {
  request: `$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.swisstopo.amtliches-strassenverzeichnis&searchText=Talstrasse&searchField=stn_label&returnGeometry=false&contains=false&layerDefs={"ch.swisstopo.amtliches-strassenverzeichnis":"com_fosnr=4307"}`,
  response: `{
  "results": [
    {
      "layerBodId": "ch.swisstopo.amtliches-strassenverzeichnis",
      "layerName": "Official directory of streets",
      "featureId": 10094530,
      "id": 10094530,
      "attributes": {
        "str_esid": 10094530,
        "stn_label": "Talstrasse",
        "zip_label": "5324 Full-Reuenthal",
        "com_name": "Full-Reuenthal",
        "com_fosnr": 4307,
        "str_official": 1,
        "str_modified": "2024-07-23",
        "str_type": "Strasse",
        "str_children": null,
        "str_parent": null,
        "str_status": "bestehend",
        "label": "Talstrasse"
      }
    }
  ]
}`,
};

export const featureResource01 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG",
  response: `{
  "feature": {
    "featureId": "RIG",
    "bbox": [677835, 213440, 677835, 213440],
    "layerBodId": "ch.bafu.nabelstationen",
    "layerName": "Monitoring stations air quality",
    "id": "RIG",
    "geometry": {
      "x": 677835,
      "y": 213440,
      "spatialReference": {
        "wkid": 21781
      }
    },
    "attributes": {
      "name": "Rigi-Seebodenalp",
      "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
      "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
      "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
      "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
      "label": "Rigi-Seebodenalp"
    }
  }
}`,
};

export const featureResource02 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU",
  response: `{
  "type": "FeatureCollection",
  "features": [
    {
      "featureId": "RIG",
      "bbox": [677835, 213440, 677835, 213440],
      "layerBodId": "ch.bafu.nabelstationen",
      "layerName": "Monitoring stations air quality",
      "id": "RIG",
      "geometry": {
        "x": 677835,
        "y": 213440,
        "spatialReference": {
          "wkid": 21781
        }
      },
      "attributes": {
        "name": "Rigi-Seebodenalp",
        "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "label": "Rigi-Seebodenalp"
      }
    },
    {
      "featureId": "LAU",
      "bbox": [538695, 152615, 538695, 152615],
      "layerBodId": "ch.bafu.nabelstationen",
      "layerName": "Monitoring stations air quality",
      "id": "LAU",
      "geometry": {
        "x": 538695,
        "y": 152615,
        "spatialReference": {
          "wkid": 21781
        }
      },
      "attributes": {
        "name": "Lausanne",
        "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "label": "Lausanne"
      }
    }
  ]
}`,
};

export const featureResource03 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG,LAU?sr=4326&geometryFormat=geojson",
  response: `{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "featureId": "RIG",
      "bbox": [8.46333, 47.06741, 8.46333, 47.06741],
      "layerBodId": "ch.bafu.nabelstationen",
      "layerName": "Monitoring stations air quality",
      "id": "RIG",
      "geometry": {
        "type": "Point",
        "coordinates": [8.46333, 47.06741]
      },
      "properties": {
        "name": "Rigi-Seebodenalp",
        "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "label": "Rigi-Seebodenalp"
      }
    },
    {
      "type": "Feature",
      "featureId": "LAU",
      "bbox": [6.639701, 46.522018, 6.639701, 46.522018],
      "layerBodId": "ch.bafu.nabelstationen",
      "layerName": "Monitoring stations air quality",
      "id": "LAU",
      "geometry": {
        "type": "Point",
        "coordinates": [6.639701, 46.522018]
      },
      "properties": {
        "name": "Lausanne",
        "url_de": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_fr": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_it": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "url_en": "https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html",
        "label": "Lausanne"
      }
    }
  ]
}
`,
};

export const htmlPopup01 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bafu.nabelstationen/RIG/htmlPopup",
  response: `<div
  id="ch.bafu.nabelstationen#RIG"
  class="chbafunabelstationen htmlpopup-container"
>
  <div class="htmlpopup-header">
    <span
      >Nationales Beobachtungsnetz für Luftfremdstoffe NABEL: Stationen</span
    >
    (Bundesamt für Umwelt BAFU)
  </div>

  <div class="htmlpopup-content">
    <table>
      <tr>
        <td class="cell-left">Name</td>
        <td>Rigi-Seebodenalp</td>
      </tr>
      <tr>
        <td class="cell-left">Datenbfrage</td>
        <td>
          <a
            href="https://www.bafu.admin.ch/bafu/de/home/themen/luft/zustand/daten/datenabfrage-nabel.html"
            target="_blank"
            >Link</a
          >
        </td>
      </tr>

      <tr>
        <td class="cell-left"></td>
        <td>
          <a
            href="https://map.geo.admin.ch?ch.bafu.nabelstationen=RIG&amp;lang=de&amp;topic=api"
            target="_blank"
          >
            Link zum Objekt
          </a>
        </td>
      </tr>
    </table>
  </div>
</div>`,
};

export const search01 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=wabern&type=locations",
  response: `{
  "results": [
    {
      "attrs": {
        "detail": "wabern koeniz",
        "geom_quadindex": "021300220302121113110",
        "geom_st_box2d": "BOX(601112.8374564094 197515.61386168728,601112.8374564094 197515.61386168728)",
        "label": "<i>Populated Place</i> <b>Wabern</b> (BE) - Köniz",
        "lat": 46.928733825683594,
        "lon": 7.453245639801025,
        "num": 1,
        "objectclass": "TLM_SIEDLUNGSNAME",
        "origin": "gazetteer",
        "rank": 5,
        "x": 197515.609375,
        "y": 601112.8125,
        "zoomlevel": 10
      },
      "id": 357116,
      "weight": 100
    },
  (...more results...)
  ]
}`,
};

export const search02 = {
  request:
    "$ curl https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText=bern&origins=parcel,district&type=locations",
  response: `{
  "results": [
    {
      "attrs": {
        "detail": "Bern-Mittelland",
        "featureId": "246",
        "geom_quadindex": "021",
        "geom_st_box2d": "BOX(575209.9836898939 168848.72527490254,622384.0411650916 219079.463898759)",
        "label": "<b>Bern-Mittelland</b>",
        "lat": 46.896873474121094,
        "lon": 7.495893478393555,
        "num": 1,
        "objectclass": "",
        "origin": "district",
        "rank": 3,
        "x": 193975.1875,
        "y": 604363.3125,
        "zoomlevel": 4294967295
      },
      "id": 246,
      "weight": 1
    },
    (...more results...)
  ]
}
`,
};
