---
previewTitle: 'Planned removal of ch.bfe.komo-projekte'
previewContent: 'The layer _ch.bfe.komo-projekte_ will be removed from chsdi services with the release of December 17th.'
---

# End-of-Life

Announcements of changes in our systems and in our provided data sets, newest first.

## [2025-12-17] Removal of layer ch.bfe.komo-projekte, announcement of removal ch.bakom.mobilnetz-2g

The layer _ch.bfe.komo-projekte_ has been removed from chsdi services as previously announced.
The layer ch.bakom.mobilnetz-2g will be removed from chsdi services with the release of February 4th 2026.

## [2025-11-12] Planned removal of layer ch.bfe.komo-projekte

The layer _ch.bfe.komo-projekte_ will be removed from chsdi services with the release of December 17th.

## [2025-11-12] Removal of some BAFU layers, Siegfried layers and ch.swisstopo.schneeschuhwandern

The layers _ch.bafu.flora-verbreitungskarten_, _ch.bafu.gefahren-basiskarte_, _ch.bafu.karst-ausdehnung_grundwasservorkommen_, _ch.bafu.karst-einzugsgebiete_, _ch.bafu.karst-einzugsgebietseinheiten_, _ch.bafu.karst-quellen_schwinden_, _ch.bafu.karst-unterirdische_fliesswege_, _ch.swisstopo.hiks-siegfried-ta25.metadata_, _ch.swisstopo.hiks-siegfried-ta50.metadata_ and _ch.swisstopo.schneeschuhwandern_ have been removed from chsdi services as previously announced.

## [2025-11-12] Removal of layer ch.bazl.intrinsisches-bodenrisiko_sora

The layer _ch.bazl.intrinsisches-bodenrisiko_sora_ has been removed from chsdi services, since it is replaced by the 2 new layers _ch.bazl.intrinsisches-bodenrisiko_sora_100_ and _ch.bazl_._intrinsisches-bodenrisiko_sora_200_ from now on.

## [2025-11-12] Removal of Atom Feed / Open Search Download Service

The INSPIRE ATOM/OS download service has been removed from the chsdi services as previously announced.
The INSPIRE datasets ([ch.swisstopo.swissboundaries3d.inspire](https://data.geo.admin.ch/browser/index.html#/collections/ch.swisstopo.swissboundaries3d.inspire) and [ch.swisstopo.swissnames3d.inspire](https://data.geo.admin.ch/browser/index.html#/collections/ch.swisstopo.swissnames3d.inspire)) stay available for download via the STAC API.

## [2025-10-08] Planned removal of Atom Feed / Open Search Download Service

The [INSPIRE Atom Feed / Open Search download service](https://api3.geo.admin.ch/services/sdiservices.html#atom-feed-open-search-download-service) at [https://atom.geo.admin.ch/inspire/service.xml](https://atom.geo.admin.ch/inspire/service.xml) will be removed with the data release of November 12th 2025.
The INSPIRE datasets ([ch.swisstopo.swissboundaries3d.inspire](https://data.geo.admin.ch/browser/index.html#/collections/ch.swisstopo.swissboundaries3d.inspire) and [ch.swisstopo.swissnames3d.inspire](https://data.geo.admin.ch/browser/index.html#/collections/ch.swisstopo.swissnames3d.inspire)) are now available for download via the STAC API.

## [2024-09-25] Planned removal of vector tile styles

As already announced [in the release notes of May 2024](/releases/20240515), the old vector tiles styles are no longer going to be maintained from mid-January 2025.
They will be definitively decommissioned in autumn 2026.
This includes the styles with worldwide coverage

- `ch.swisstopo.leichte-basiskarte.vt`
- `ch.swisstopo.leichte-basiskarte-imagery.vt`
- `ch.swisstopo.leichte-basiskarte_world.vt`
- `ch.swisstopo.leichte-basiskarte-imagery_world.vt`

and the referenced vector tileset

- `ch.swisstopo.leichte-basiskarte.vt`

If you use one of these resources in your application, we ask that you replace it with the corresponding new variant.
The following table shows the mapping from the old to the new resource:

| Old (no longer available from January 2025)      | New                                  | Type           |
| ------------------------------------------------ | ------------------------------------ | -------------- |
| ch.swisstopo.leichte-basiskarte.vt               | ch.swisstopo.lightbasemap.vt         | Style          |
| ch.swisstopo.leichte-basiskarte-imagery.vt       | ch.swisstopo.imagerybasemap.vt       | Style          |
| ch.swisstopo.leichte-basiskarte_world.vt         | ch.swisstopo.lightbasemap_world.vt   | Style          |
| ch.swisstopo.leichte-basiskarte-imagery_world.vt | ch.swisstopo.imagerybasemap_world.vt | Style          |
| ch.swisstopo.leichte-basiskarte.vt               | ch.swisstopo.base.vt                 | Vector Tileset |

For further information, see also see [Vector Tiles Service](https://www.geo.admin.ch/en/vector-tiles-service-available-services-and-data).
