---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # name: "*.geo.admin.ch"
  text: 'Welcome to the Tech Docs of geo.admin.ch'
  tagline: We provide web services and components to interact with the Federal Spatial Data Infrastructure (FSDI). The tech docs are dedicated to developers using these services.
  image:
    src: /swisstopo_map.png
    alt: Geoportal
  actions:
    - text: Get started
      link: /docs/overview
    - theme: alt
      text: Getting help
      link: http://groups.google.com/group/geoadmin-api

features:
  - title: Explore Data
    details: Browse additional information about layers, including attributes and other metadata.
    link: /docs/get-layer-metadata
    icon: 🧭
  - title: Access Data
    details: Retrieve location-based features such as geometries, addresses and elevation.
    link: /docs/identify-features
    icon: 🔎
  - title: Visualize Data
    details: Access map data (2D and 3D) for visualization in your application.
    icon: 👁
    link: /docs/wms
  - title: Download Data
    details: Download entire datasets for exploration and analysis.
    icon: ⬇️
    link: /docs/stac-api/overview
  - title: Map Viewer
    details: Integrate and customize map.geo.admin.ch as an interactive map in your webpage.
    icon: 🗺️
    link: /docs/embed-in-an-iframe
---

<script setup>
import { onMounted, onUnmounted, h, createApp } from 'vue'
import { data as releases } from './scripts/releases-content.data.ts'
import { data as status } from './scripts/status.data.ts'
import { data as announcements } from './scripts/announcements.data.ts'
import StatusBanner from './components/StatusBanner.vue'

const lastRelease = releases.at(0)
const statusPreview = status[0]
const announcementsPreview = announcements[0]


let statusContainer = null;
let app = null;
// Initiate and attach StatusBanner to the header, if type is 'warning' or 'danger'
onMounted(() => {
  if (statusPreview.frontmatter.type !== 'warning' && statusPreview.frontmatter.type !== 'danger' ) return;
  const headerContainer = document.querySelector('.VPNav');
  statusContainer = document.createElement('div');
  statusContainer.className = 'status-container';

  if (headerContainer && headerContainer.parentNode) {
    headerContainer.parentNode.insertBefore(statusContainer, headerContainer.nextSibling);

    app = createApp({
      render: () => h(StatusBanner, {
        status: statusPreview.frontmatter
      })
    });
    
    app.mount(statusContainer);
  }
})

onUnmounted(() => {
  // Clean up when user leaves the page
  if (app) {
    app.unmount();
  }
  
  if (statusContainer && statusContainer.parentNode) {
    statusContainer.parentNode.removeChild(statusContainer);
  }
})

</script>
<div class="home-container">
  <div class="releases-container">
    <h2 id="home-container-h2">Release Notes</h2>
    <div class="releases-container-cols">
      <div class="home-container-col">
        <h4>Software Updates</h4>
        <span>Latest software releases on *.geo.admin.ch:</span>
        <a class="vp-external-link-icon link" href="https://github.com/geoadmin/web-mapviewer/releases">web-mapviewer</a>
        <a class="vp-external-link-icon link" href="https://github.com/geoadmin/mf-chsdi3/releases">mf-chsdi3</a>
        <a class="vp-external-link-icon link" href="https://github.com/geoadmin/service-stac/releases">service-stac</a>
      </div>
      <div class="home-container-col">
        <h4>Data Updates</h4>
        <span>Changes in the data available through our services:</span>
        <a :href="lastRelease.url">Latest Release</a>
        <a href="/releases/release-notes">All Releases</a>
      </div>
    </div>
  </div>
  <div class="announcements-container">
    <h2 id="home-container-h2">End-of-Life</h2>
    <div class="home-container-col">
      <h4>{{ announcementsPreview.frontmatter.previewTitle}}</h4>
      <span>{{ announcementsPreview.frontmatter.previewContent}}</span>
      <a href="/page/end-of-life">Learn more</a>
    </div>
  </div>
</div>
<div class="home-status-container" v-if="statusPreview.frontmatter.type === 'info'">
  <span class="status-content-text">{{ '✅ ' +  statusPreview.frontmatter.content + ' '}}</span>
  <a href="/page/status-page">Learn more</a>
</div>
