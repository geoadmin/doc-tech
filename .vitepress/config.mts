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
        items: sidebarApi3(),
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
        link: "/status",
      },
      {
        text: "End-of-Life Announcements",
        link: "/end-of-life-announcements",
      },
      {
        text: "FAQ",
        link: "/faq",
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
  try {
    if (fs.existsSync("./releases/releases-sidebar.json")) {
      const sidebarData = JSON.parse(
        fs.readFileSync("./releases/releases-sidebar.json", "utf-8")
      ).slice(0, 6);
      sidebarData.push({
        text: "All Releases",
        link: "/releases/release-notes",
      });
      return sidebarData;
    }
  } catch (error) {
    console.warn("Failed to load sidebar data:", error);
  }

  return {};
}

function expoloreDataItems(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Layers Metadata", link: "/api3/layers-metadata" },
    { text: "Layers Attributes", link: "/api3/layers-attributes" },
    { text: "Legend Resource", link: "/api3/legend-resource" },
  ];
}

function accessDataItems(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Features",
      items: [
        {
          text: "Identify Features",
          link: "/api3/identify-features",
        },
        { text: "Find", link: "/api3/find" },
        { text: "Feature Resource", link: "/api3/feature-resource" },
        {
          text: "HTMLpopup Resource",
          link: "/api3/htmlpopup-resource",
        },
      ],
    },
    {
      text: "Adress Search",
      items: [{ text: "Search", link: "/api3/search" }],
    },
    {
      text: "Elevation & Profile",
      items: [
        { text: "Height", link: "/api3/height" },
        { text: "Profile", link: "/api3/profile" },
      ],
    },
    { text: "SPARQL", link: "/api3/sparql" },
  ];
}

function visualizeDataItems(): DefaultTheme.SidebarItem[] {
  return [
    { text: "WMS", link: "/api3/wms" },
    { text: "WMTS", link: "/api3/wmts" },
    {
      text: "Mapbox Vector Tiles",
      link: "/api3/mapbox-vector-tiles",
    },
    {
      text: "3D",
      link: "/api3/3d",
    },
  ];
}

function downloadDataItems(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "STAC",
      collapsed: true,
      items: [
        { text: "Overview", link: "/api3/stac/overview" },
        { text: "Asset Upload Management", link: "/api3/stac/assetupload" },
        { text: "Caching", link: "/api3/stac/caching" },
        { text: "Authentication", link: "/api3/stac/authentication" },
        { text: "Migrate v0.9 to v1.0", link: "/api3/stac/migrate09-10" },
        {
          text: "Documentation",
          link: "https://data.geo.admin.ch/api/stac/static/spec/v1/apitransactional.html",
        },
      ],
    },
    {
      text: "Atom Feed / Open Search Download Service",
      link: "/api3/atom",
    },
  ];
}

function mapviewerItems(): DefaultTheme.SidebarItem[] {
  return [
    { text: "iFrame", link: "/api3/iframe" },
    {
      text: "JS API",
      link: "../datageoadminch/overview",
    },
  ];
}

function sidebarApi3(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Overview", link: "/api3/overview" },
    {
      text: "Explore Data",
      collapsed: true,
      items: expoloreDataItems(),
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
