---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # name: "*.geo.admin.ch"
  text: "Welcome to GeoAdmin API’s documentation"
  tagline: The GeoAdmin API allows the integration in web pages of geospatial information provided by the Swiss Confederation. These pages are dedicated to developer interested in using the API.
  image:
    src: /static/home/swisstopo_map.png
    alt: Geoportal
  actions:
    - text: Get started
      link: /api3/overview
    - theme: alt
      text: Getting help
      link: http://groups.google.com/group/geoadmin-api

features:
  - title: Explore Data
    details: Get information about layers like Metadata, Attributes and Legend
    link: /api3/layers-metadata
    icon: ℹ️
  - title: Access Data
    details: Identify, search and retrieve information about features
    link: /api3/identify-features
    icon: 🔎
  - title: Visualize Data
    details: Get information about layers like Metadata, Attributes and Legend
    icon: 👁
    link: /api3/wmts
  - title: Download Data
    details: Get information about layers like Metadata, Attributes and Legend
    icon: ⬇️
    link: /api3/stac/overview
---

<br/>

---

<script setup>
import { data as releases } from './releases.data.ts'
const latestRelease = releases.at(-1)
</script>

# Release Notes

<div v-html="latestRelease.html"></div>

<ul>
  <li v-for="release of releases">
    <a :href="release.url">Release {{ release.frontmatter.title }}</a>
  </li>
</ul>
