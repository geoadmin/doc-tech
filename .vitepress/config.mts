import { defineConfig, type DefaultTheme } from "vitepress";
import fs from "fs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "*.geo.admin.ch",
  description: "Technical Documentation about *.geo.admin.ch",
  head: [["link", { rel: "icon", href: "/static/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: { src: "/static/icon-ch.svg", width: 24, height: 24 },

    nav: [
      { text: "Home", link: "/" },
      {
        text: "STAC API",
        link: "https://data.geo.admin.ch/api/stac/static/spec/v1/api.html",
      },
    ],

    sidebar: [
      {
        text: "API Documentation",
        items: sidebarDocs(),
      },
      {
        text: "Release Notes",
        collapsed: true,
        items: loadReleasesSidebarData(),
      },
      {
        text: "Terms of use",
        link: "https://www.geo.admin.ch/en/general-terms-of-use-fsdi",
      },
      {
        text: "Status page",
        link: "/page/status",
      },
      {
        text: "End-of-Life Announcements",
        link: "/page/end-of-life-announcements",
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
  } else {
    const sidebarData = JSON.parse(
      fs.readFileSync("./releases/releases-sidebar.json", "utf-8")
    ).slice(0, numberOfItems);
    sidebarData.push({
      text: "All Releases",
      link: "/releases/release-notes",
    });
    return sidebarData;
  }
}

const exploreDataItems: DefaultTheme.SidebarItem[] = [
  { text: "Layers Metadata", link: "/docs/layers-metadata" },
  { text: "Layers Attributes", link: "/docs/layers-attributes" },
  { text: "Legend Resource", link: "/docs/legend-resource" },
];

function accessDataItems(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Features",
      items: [
        {
          text: "Identify Features",
          link: "/docs/identify-features",
        },
        { text: "Find", link: "/docs/find" },
        { text: "Feature Resource", link: "/docs/feature-resource" },
        {
          text: "HTMLpopup Resource",
          link: "/docs/htmlpopup-resource",
        },
      ],
    },
    {
      text: "Adress Search",
      items: [{ text: "Search", link: "/docs/search" }],
    },
    {
      text: "Elevation & Profile",
      items: [
        { text: "Height", link: "/docs/height" },
        { text: "Profile", link: "/docs/profile" },
      ],
    },
    { text: "SPARQL", link: "/docs/sparql" },
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
    {
      text: "Atom Feed / Open Search Download Service",
      link: "/docs/atom",
    },
  ];
}

function mapviewerItems(): DefaultTheme.SidebarItem[] {
  return [
    { text: "iFrame", link: "/docs/iframe" },
    {
      text: "JS API",
      link: "../datageoadminch/overview",
    },
  ];
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Overview", link: "/docs/overview" },
    {
      text: "Explore Data",
      collapsed: true,
      items: exploreDataItems,
    },
    {
      text: "Access Data",
      collapsed: true,
      items: accessDataItems(),
    },
    {
      text: "Visualize Data",
      collapsed: true,
      items: visualizeDataItems(),
    },
    {
      text: "Download Data",
      collapsed: true,
      items: downloadDataItems(),
    },
    {
      text: "Mapviewer Documentation",
      collapsed: true,
      items: mapviewerItems(),
    },
  ];
}
