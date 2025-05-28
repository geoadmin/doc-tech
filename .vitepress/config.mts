import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "*.geo.admin.ch",
  description: "Technical Documentation about *.geo.admin.ch",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: { src: "/static/icon-ch.svg", width: 24, height: 24 },

    nav: [
      { text: "Home", link: "/" },
      {
        text: "API Specs",
        link: "https://data.geo.admin.ch/api/stac/static/spec/v1/api.html",
      },
    ],

    sidebar: [
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
        text: "Release Notes",
        link: "/release-notes",
      },
      {
        text: "FAQ",
        link: "/faq",
      },
      {
        text: "API Documentation",
        items: sidebarApi3(),
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/geoadmin/doc-techdoc" },
    ],

    search: {
      provider: "local",
    },
  },
  // your existing vitepress config...
  // optionally, you can pass MermaidConfig
  // mermaid: {
  // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  // },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  // mermaidPlugin: {
  // class: "mermaid", // set additional css classes for parent container
  // },
});

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
    { text: "iFrame", link: "stac-api" },
    {
      text: "JS API",
      link: "../datageoadminch/overview",
    },
  ];
}

function cmsItems(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Overview", link: "cms/overview" },
    {
      text: "Tutorials and Tools",
      items: [
        {
          text: "Easily generate the coordinates of addresses in Switzerland and display them on map.geo.admin.ch",
          link: "/api3/cms/coordinates-generator",
        },
        {
          text: "Create a KML and publish it online",
          link: "/api3/cms/create-kml",
        },
      ],
    },
    {
      text: "Map Viewer",
      link: "/api3/cms/map-viewer",
      items: [
        {
          text: 'Elevation Profile – The "Coastline Paradoxon’s" trap',
          link: "/api3/cms/elevation-profile",
        },
        {
          text: "Work with KML and GPX files in map.geo.admin.ch",
          link: "/api3/cms/kml-gpx-files",
        },
      ],
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
    {
      text: "CMS",
      collapsed: true,
      items: cmsItems(),
    },
  ];
}

function sidebarVisualization(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "WMTS 1.0.0",
      collapsed: false,
      items: [
        {
          text: "Overview",
          link: "overview",
          items: [
            { text: "What is WMTS", link: "overview" },
            { text: "Getting Started", link: "getting-started" },
          ],
        },
        { text: "Examples", link: "examples" },
      ],
    },
    {
      text: "XYZ",
      collapsed: false,
      items: [{ text: "Overview", link: "xyz" }],
    },
  ];
}
