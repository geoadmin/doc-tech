---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # name: "*.geo.admin.ch"
  text: "Welcome to the Tech Docs of geo.admin.ch"
  tagline: We provide web services and components to interact with the Federal Spatial Data Infrastructure (FSDI). The tech docs are dedicated to developers using these services.
  image:
    src: /static/home/swisstopo_map.png
    alt: Geoportal
  actions:
    - text: Get started
      link: /docs/overview
    - theme: alt
      text: Getting help
      link: http://groups.google.com/group/geoadmin-api

features:
  - title: Explore Data
    details: Get information about layers like Metadata, Attributes and Legend
    link: /docs/layers-metadata
    icon: ℹ️
  - title: Access Data
    details: Identify, search and retrieve information about features
    link: /docs/identify-features
    icon: 🔎
  - title: Visualize Data
    details: WMS, WMTS, Mapbox Vector Tiles and 3D services
    icon: 👁
    link: /docs/wms
  - title: Download Data
    details: Geodata from STAC API and Atom Feed / Open Search download service
    icon: ⬇️
    link: /docs/stac/overview
---

<script setup>
import { data as releases } from './scripts/releases-content.data.ts'
import { data as status } from './scripts/status.data.ts'
import { data as announcements } from './scripts/announcements.data.ts'

const latestReleases = releases.slice(1, 6)
const lastRelease = releases.at(0)
const statusPreview = status[0]
const announcementsPreview = announcements[0]
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

<div class="status-announcements-container">
  <div class="status-container">
    <h2>Services Status</h2>
    <div :class="[statusPreview.frontmatter.previewType, 'custom-block status-alert']">
      <p class="custom-block-title">{{ statusPreview.frontmatter.previewTitle}}</p>
      <p>{{ statusPreview.frontmatter.previewContent}}</p>
      <a href="/page/status">Learn more</a>
    </div>
  </div>
  <div class="announcements-container">
    <h2>Product Retirements</h2>
    <div>
      <p class="custom-block-title">{{ announcementsPreview.frontmatter.previewTitle}}</p>
      <p>{{ announcementsPreview.frontmatter.previewContent}}</p>
      <a href="/page/product-retirements">Learn more</a>
    </div>
  </div>
</div>
