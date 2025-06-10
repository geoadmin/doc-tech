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

<script setup>
import { data as releases } from './scripts/releases-content.data.ts'
const latestReleases = releases.slice(1, 6)
const lastRelease = releases.at(0)
</script>

## Release Notes

<div class="releases-container">
  <div class="releases-preview">
    <div class="releases-preview-content" v-html="lastRelease.html"></div>
    <p>...</p>
    <a :href="lastRelease.url">Learn more</a>
  </div>

  <div class="releases-list">
      <div v-for="release of latestReleases">
        <a :href="release.url">
        <p>Release {{ release.frontmatter.title }}</p>
        <span>{{ release.frontmatter.date }}</span>
        </a>
      </div>
  </div>
</div>
