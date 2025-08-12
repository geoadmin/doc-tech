import { defineConfig, type DefaultTheme } from "vitepress";
import fs from "fs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "*.geo.admin.ch",
  description: "Technical Documentation about *.geo.admin.ch",
  head: [["link", { rel: "icon", href: "/static/favicon.ico" }]],
  ignoreDeadLinks: "localhostLinks",
  vite: {
    build: {
      // We add this to avoid the warning "(!) Some chunks are larger than 500 kB after minification."
      chunkSizeWarningLimit: 1000,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: { src: "/static/icon-ch.svg", width: 24, height: 24 },
    lastUpdated: {
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
    editLink: {
      text: "Edit this page on GitHub",
      pattern: "https://github.com/geoadmin/doc-tech/edit/master/:path",
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "STAC API",
        link: "https://data.geo.admin.ch/api/stac/static/spec/v1/api.html",
      },
    ],

    sidebar: [
      {
        text: "Get Started",
        collapsed: false,
        items: [{ text: "Overview", link: "/docs/overview" }],
      },
      {
        text: "Explore Data",
        collapsed: false,
        items: exploreDataItems(),
      },
      {
        text: "Access Data",
        collapsed: false,
        items: accessDataItems(),
      },
      {
        text: "Visualize Data",
        collapsed: false,
        items: visualizeDataItems(),
      },
      {
        text: "Download Data",
        collapsed: false,
        items: downloadDataItems(),
      },
      {
        text: "Map Viewer",
        collapsed: false,
        items: mapViewerItems(),
      },
      {
        text: "Release Notes",
        collapsed: false,
        items: loadReleasesSidebarData(),
      },
      {
        text: "Terms of use",
        link: "https://www.geo.admin.ch/en/general-terms-of-use-fsdi",
      },
      {
        text: "Status Page",
        link: "/page/status",
      },
      {
        text: "End-of-Life",
        link: "/page/end-of-life",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/geoadmin/doc-techdoc" },
    ],

    search: {
      provider: "local",
    },
  },
});

// loads the sidebar data in releases.json after the script has been run (.scripts/releases-sidebar.ts)
function loadReleasesSidebarData() {
  const numberOfItems = 6; // Number of items to show in the sidebar
  if (!fs.existsSync("./releases/releases-sidebar.json")) {
    return {};
  }
  const sidebarData = JSON.parse(
    fs.readFileSync("./releases/releases-sidebar.json", "utf-8")
  ).slice(0, numberOfItems);
  sidebarData.push({
    text: "All Releases",
    link: "/releases/release-notes",
  });
  return sidebarData;
}

function exploreDataItems(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Layers Metadata", link: "/docs/layers-metadata" },
    { text: "Layers Attributes", link: "/docs/layers-attributes" },
    { text: "Legend Resource", link: "/docs/legend-resource" },
  ];
}

function accessDataItems(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Features",
      items: [
        {
          text: "Identify Features",
          link: "/docs/identify-features",
        },
        { text: "Find Features", link: "/docs/find-features" },
        { text: "Get Features", link: "/docs/get-features" },
        {
          text: "Get HTML Popup",
          link: "/docs/get-html-popup",
        },
      ],
    },
    {
      text: "Address Search",
      items: [{ text: "Search", link: "/docs/search" }],
    },
    {
      text: "Elevation & Profile",
      items: [
        { text: "Height", link: "/docs/height" },
        { text: "Profile", link: "/docs/profile" },
      ],
    },
  ];
}

function visualizeDataItems(): DefaultTheme.SidebarItem[] {
  return [
    { text: "WMS", link: "/docs/wms" },
    { text: "WMTS", link: "/docs/wmts" },
    {
      text: "Mapbox Vector Tiles",
      link: "/docs/mapbox-vector-tiles",
    },
    {
      text: "3D",
      link: "/docs/3d",
    },
  ];
}

function downloadDataItems(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "STAC",
      collapsed: true,
      items: [
        { text: "Overview", link: "/docs/stac/overview" },
        { text: "Asset Upload Management", link: "/docs/stac/assetupload" },
        { text: "Caching", link: "/docs/stac/caching" },
        { text: "Authentication", link: "/docs/stac/authentication" },
        { text: "Supported Media Types", link: "/docs/stac/supported-media" },
        { text: "Migrate v0.9 to v1.0", link: "/docs/stac/migrate09-10" },
        {
          text: "Documentation",
          link: "https://data.geo.admin.ch/api/stac/static/spec/v1/api.html",
        },
      ],
    },
  ];
}

function mapViewerItems(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Embed in an iframe", link: "/docs/embed-in-an-iframe" },
    { text: "URL Parameters", link: "/docs/url-parameters" },
    {
      text: "Javascript API",
      link: "/docs/javascript-api",
    },
  ];
}
