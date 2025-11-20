---
type: 'info'
previewTitle: 'All Systems Operational'
previewContent: 'No ongoing incidents - all services are functioning as expected.'

outline: [2, 3]
---

<!---
Templates:

✅ Normal status: Status info is at the bottom of the start page

type: "info"
title: "All Systems Operational"
content: "No ongoing incidents - all services are functioning as expected."

⚠️ Minor incident: Status info as a yellow banner at the top of the start page

type: "warning"
title: "Minor incident"
content: "We are currently investigating degraded performance in [Service XY]. Some users may experience intermittent issues. Updates will be posted as more information becomes available."

🚨 Major incident: Status info as a red banner at the top of the start page

type: "danger"
title: "Major incident"
content: "We are experiencing a significant outage affecting [Service XY]. All hands are on deck to diagnose and resolve the issue. The next update will be posted at XX:XX or as significant progress is made."
--->

# Status Page

This page provides the latest status updates for all \*.geo.admin.ch web services, including ongoing incidents and a history of past events.

## Current Status

{{
  {
    'info': '✅',
    'warning': '⚠️',
    'danger': '🚨'
  }[$frontmatter.type] || ''
}} **{{ $frontmatter.previewTitle }}**: {{ $frontmatter.previewContent }}

## Incident History

<!-- Please check the README.md for details on how to add new incidents or start a new year, thanks!
-->

::::: details 2025

:::: details Nov 12 - Issues with search service

::: info Nov 14 - Information on recent problems when changing address data from RBD to the official directory of building addresses

On Wednesday, November 12, 2025, the Search Service was switched from the register of buildings and dwellings (RBD) to the new default data source of the official directory of building addresses.

The temporary change in the feature ID led to unexpected problems for a number of users of the REST API from geo.admin.ch. Our comprehensive problem identification and solution, which has now been completed, has shown that this was due to a technical model issue in the source data (lack of uniqueness of the EGID-EDID combination) and was therefore unavoidable. In the meantime, the problem has been resolved on the data side, so that the feature ID of the search service once again returns the unique combination of EGID and EDID, as was the case before the change from the RBD to the official building address register.

The technical workarounds below, including the option to choose between the RBD and the official building address register, remain applicable:

Among other things, this update made the addresses for the Principality of Liechtenstein searchable. In order to do this, the perimeter of the addresses in Swisssearch had to be enlarged and the data source behind the Origin in Swisssearch was changed accordingly. As a result, the featureIDs no longer come from `ch.bfs.gebaeude_wohnungs_register`, but from `ch.swisstopo.amtliches-gebaeudeadressverzeichnis`.

On the SearchServer endpoint, you can either perform a type=featuresearch or a type=locations search.

- `type=featuresearch` is linked to a layer and requires the Get parameter `features=<layername>` to search the data of the desired layer. There is no fuzzy search here.
- `type=locations`, on the other hand, is independent of layers and performs a Swisssearch on various data sources (including addresses). Fuzzy search is implemented here.
  In this search, the features parameter is ignored; a query is made on the Swisssearch index, and you can optionally select the data source with origins=xyz.

For your information, there are three ways to perform an address search:

1. Swisssearch search with origins=address; if desired, the feature ID can be transferred to the feature endpoint of the specialist layer ch.swisstopo.amtliches-gebaeudeadressverzeichnis
2. FeatureSearch in the layer ch.swisstopo.amtliches-gebaeudeadressverzeichnis; if desired, the feature ID can be transferred to the feature endpoint of the thematic layer ch.swisstopo.amtliches-gebaeudeadressverzeichnis
3. FeatureSearch in the layer ch.bfs.gebaeude_wohnungs_register; if desired, the feature ID can be transferred to the feature endpoint of the specialist layer ch.bfs.gebaeude_wohnungs_register.

Specific documentation for this topic: [Search | \*.geo.admin.ch](https://docs.geo.admin.ch/access-data/search.html#request-details)
:::
::::
:::: details Nov 12 - Incident with Service Stac

::: info Nov 12, 19:15 - Disruption of Service Stac - Resolved

The root cause that led to the outage of STAC API could be identified and resolved. The problem was a
misconfigration of database logging that was done earlier today
that led to a rapid increase in log volume and eventually resulted in full disk of the database cluster. Disk
space has been increased and the logging configuration change rolled back.

STAC API is functioning normal again.
:::
::: info Nov 12, 19:15 - Disruption of Service Stac

The STAC API on data.geo.admin.ch is currently unavailable. We're investigating the cause and will give an update later tonight.
:::
::::
:::: details July 2nd - Incident with Printing

::: info July 3, 10:00 - Incident Resolved

An update to map.geo.admin.ch made on July 2, 2025 caused a temporarily disruption to the system's printing service.
This resulted in a problem with the browser cache storing the information.
The issue was resolved on the morning of Thursday, July 3, 2025.

However, all users who used the print service at least once during this time period must clear their cache.
We have prepared simple instructions for each browser to help you do this:

FIREFOX

- Go to the Firefox menu (three horizontal lines), select "Settings" and then "Privacy & Security."
- Under "Cookies and website data," click "Clear data."
- Select "Temporarily cached files and folders" and "cookies and site data" and then click "Clear."

GOOGLE CHROME

- Click on the three dots (menu) in the upper right corner
- Select "More tools" and then "Clear browser data"
- In the new window, select the time period "All time" and activate "Cached images and files"
- Click on "Clear data"

EDGE

- Click on the three dots (menu) in the upper right corner and select "Settings."
- Go to the "Privacy, search, and services" section and click on "Clear browser data" and then
  on "Choose what to clear."
- Select time range: Select the time range for which you want to clear the cache (e.g., "Last hour," "Last 24 hours," "All time").
- Select items. Make sure the "Cached images and files" checkbox is selected
- Delete: Click the "Clear now" button to clear the cache

SAFARI

- In Safari, go to "Settings" > "Advanced" and enable "Show Develop menu in menu bar."
- Click on ‘Develop’ in the menu and then on "Empty Cache."
  :::
  ::: info July 2, 16:00 - Incident Detected

The printing functionality of map.geo.admin.ch is currently unavailable.
We are analysing the problem and keep you updated on this page.
:::
::::
:::: details April 30 - Incident with WMS/WMTS

::: info May 6 - Root Cause Analysis

On the 30th of April and 1st of May, the WMS service and WMTS service provided by geo.admin.ch were restricted or unavailable, which also affected the print function in the map viewer.

Our specialists were able to identify the cause after just over a day.
A routine update of a computing cluster that we carried out in the cloud, even though all routine tests had been successful, led to unexpected problems accessing certain file systems due to the rollout of new system libraries.
This primarily resulted in a large number of our WMS layers becoming unavailable.
The problem was resolved by our specialists by rolling out new system components on the afternoon of 1 May.

We apologise for any inconvenience caused.

Thank you for your understanding and patience.
:::
::: info May 1, 16:00 - Incident Resolved

The disruption has been resolved.

All services on \*geo.admin.ch are now available as usual.

We thank you for your understanding and patience.
:::
::: info May 1, 12:00 - Update

No change since the update at 9:25 a.m.
We are continuing to work intensively to resolve the problem.

The next update will be provided today at around 4 p.m. or as soon as the disruption has been resolved.

We apologise for any inconvenience caused and thank you in advance for your patience.
:::
::: info May 1, 09:25 Update

The extent of the disruption has been reduced in the meantime.
Certain WMS layers and the printing service are still affected.
No other services provided by \*geo.admin.ch are affected. We are continuing to work intensively to resolve the problem.

The next update will be provided today at around 12 noon or as soon as the disruption has been resolved.

We apologise for any inconvenience caused and thank you in advance for your patience.
:::
::: info April 30, 16:00 Update

The disruption to the WMS, WMTS and print services is still ongoing.
No other services provided by \*geo.admin.ch are affected.
We are working intensively to resolve the problem.

The next update will be provided tomorrow, 1 May, at 9 a.m. or as soon as the disruption has been resolved.

We apologise for any inconvenience caused and thank you in advance for your patience.
:::
::: info April 30, 12:00 Update

The disruption to WMS and WMTS services is still ongoing.
We are continuing to work hard to resolve the issue.

The next update will be provided today at around 4 p.m. or as soon as the disruption has been resolved.

We apologise for any inconvenience caused and thank you in advance for your patience.
:::
::: info April 30, 10:00 Incident Detected

We are currently experiencing some problems with our WMS and WMTS services, which we are analysing and will resolve as quickly as possible.
The duration of the disruption is still unknown.
We will keep you updated on this page.

The next update will be provided today at around 12 noon or as soon as the disruption has been resolved.

We apologise for any inconvenience caused and thank you in advance for your patience.
:::
::::
:::::
