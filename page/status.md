---
# Use the following variables to set the Current Status section in this page and the homepage preview
# Set `type` to control the position and color of the homepage preview:
#   - "info": bottom of the page, no color
#   - "warning": top of the page, yellow
#   - "danger": top of the page, red
# The `title` is not displayed in the homepage preview for 'info' type
type: "info"
title: "All systems operational"
content: "All systems are fully operational and available for use."
---

# Status

Status updates of \*geo.admin.ch services, newest first.

## Current Status

### {{ $frontmatter.title }}

{{ $frontmatter.content }}

## [2025-07-02] Incident with Printing

### [2025-07-03 10:00] Incident Resolved

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

### [2025-07-02 16:00] Incident Detected

The printing functionality of map.geo.admin.ch is currently unavailable.
We are analysing the problem and keep you updated on this page.

## [2025-04-30] Incident with WMS/WMTS

### [2025-05-06] Root Cause Analysis

On the 30th of April and 1st of May, the WMS service and WMTS service provided by geo.admin.ch were restricted or unavailable, which also affected the print function in the map viewer.

Our specialists were able to identify the cause after just over a day.
A routine update of a computing cluster that we carried out in the cloud, even though all routine tests had been successful, led to unexpected problems accessing certain file systems due to the rollout of new system libraries.
This primarily resulted in a large number of our WMS layers becoming unavailable.
The problem was resolved by our specialists by rolling out new system components on the afternoon of 1 May.

We apologise for any inconvenience caused.

Thank you for your understanding and patience.

### [2025-05-01, 16:00] Incident Resolved

The disruption has been resolved.

All services on \*geo.admin.ch are now available as usual.

We thank you for your understanding and patience.

### [2025-05-01, 12:00] Update

No change since the update at 9:25 a.m.
We are continuing to work intensively to resolve the problem.

The next update will be provided today at around 4 p.m. or as soon as the disruption has been resolved.

We apologise for any inconvenience caused and thank you in advance for your patience.

### [2025-05-01, 09:25] Update

The extent of the disruption has been reduced in the meantime.
Certain WMS layers and the printing service are still affected.
No other services provided by \*geo.admin.ch are affected. We are continuing to work intensively to resolve the problem.

The next update will be provided today at around 12 noon or as soon as the disruption has been resolved.

We apologise for any inconvenience caused and thank you in advance for your patience.

### [2025-04-30, 16:00] Update

The disruption to the WMS, WMTS and print services is still ongoing.
No other services provided by \*geo.admin.ch are affected.
We are working intensively to resolve the problem.

The next update will be provided tomorrow, 1 May, at 9 a.m. or as soon as the disruption has been resolved.

We apologise for any inconvenience caused and thank you in advance for your patience.

### [2025-04-30, 12:00] Update

The disruption to WMS and WMTS services is still ongoing.
We are continuing to work hard to resolve the issue.

The next update will be provided today at around 4 p.m. or as soon as the disruption has been resolved.

We apologise for any inconvenience caused and thank you in advance for your patience.

### [2025-04-30, 10:00] Incident Detected

We are currently experiencing some problems with our WMS and WMTS services, which we are analysing and will resolve as quickly as possible.
The duration of the disruption is still unknown.
We will keep you updated on this page.

The next update will be provided today at around 12 noon or as soon as the disruption has been resolved.

We apologise for any inconvenience caused and thank you in advance for your patience.
