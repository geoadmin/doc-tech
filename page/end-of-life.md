---
previewTitle: 'Planned removal of vector tile styles'
previewContent: 'Old styles for Light Base Map and Imagery Base Map no longer available from January 2025.'
---

# End-of-Life

Announcements of changes in our systems and in our provided data sets, newest first.

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
