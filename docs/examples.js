export const testJson = `{
    "geometry": {
      "paths": [
        [
          [675000, 245000],
          [660000, 260000],
          [620000, 250000]
        ]
      ],
      "type": "esriGeometryPolyline"
    },
    "geometryType": "esriGeometryPolyline"
}`;

export const identifyExample2 = `{
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
}`;

export const identifyExample3 = `{
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
}
`;
export const identifyExample4 = `{
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
}
`;
export const identifyExample5 = `{
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
}`;

export const identifyExample6 = `{
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
}`;

export const identifyExample7 = `{
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
}`;

export const identifyExample8 = `{
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
}`;

export const identifyExample9 = `{
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
}`;

export const identifyExample10 = `{
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
}`;
