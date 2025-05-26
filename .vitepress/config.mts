import { defineConfig, type DefaultTheme } from "vitepress";

// .vitepress/config.js
import { withMermaid } from "vitepress-plugin-mermaid";

// export default withMermaid({
//     // your existing vitepress config...
//     // optionally, you can pass MermaidConfig
//     mermaid: {
//       // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
//     },
//     // optionally set additional config for plugin itself with MermaidPluginConfig
//     mermaidPlugin: {
//       class: "mermaid my-class", // set additional css classes for parent container
//     },
// });

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

    sidebar: {
      "/datageoadminch/": { base: "/datageoadminch/", items: sidebarData() },
      "/visualization/": {
        base: "/visualization/",
        items: sidebarVisualization(),
      },
      api3geoadminch: {
        base: "/api3geoadminch/",
        items: sidebarApi3(),
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/geoadmin/doc-techdoc" },
    ],

    search: {
      provider: "local",
    },
  },
  // your existing vitepress config...
  // optionally, you can pass MermaidConfig
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid", // set additional css classes for parent container
  },
});

function sidebarData(collapsed: boolean = false): DefaultTheme.SidebarItem[] {
  const path = collapsed ? "../datageoadminch/" : "";
  return [
    {
      text: "STAC API",
      collapsed: collapsed,
      items: [
        { text: "Overview", link: `${path}overview` },
        { text: "Authentication", link: "authentication" },
        { text: "Uploading assets", link: "assetupload" },
        { text: "Notest on Caching", link: "caching" },
        { text: "Migrating from v0.9 to v1", link: "migrate09-10" },
      ],
    },
    {
      text: "API 3.0",
      link: "../api3geoadminch/overview",
    },
    {
      text: "CMS",
      link: "../cmsgeoadminch/overview",
    },
    {
      text: "JS API",
      link: "../datageoadminch/overview",
    },
  ];
}

function servicesItems(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Layers",
      collapsed: true,
      items: [
        { text: "Layers Metadata", link: "layers/layers-metadata" },
        { text: "Layers Attributes", link: "layers/layers-attributes" },
        { text: "Legend Resource", link: "layers/legend-resource" },
        {
          text: "HTMLpopup Resource",
          link: "layers/htmlpopup-resource",
        },
      ],
    },
    {
      text: "Features",
      collapsed: true,
      items: [
        {
          text: "Identify Features",
          link: "features/identify-features",
        },
        { text: "Find", link: "features/find" },
        { text: "Feature Resource", link: "features/feature-resource" },
        { text: "Search", link: "features/search" },
      ],
    },
    {
      text: "Elevation & Profiles",
      collapsed: true,
      items: [
        { text: "Height", link: "elevation/height" },
        { text: "Profile", link: "elevation/profile" },
      ],
    },
    {
      text: "Map Tiles",
      collapsed: true,
      items: [
        { text: "WMTS", link: "visualization/wmts" },
        {
          text: "Supported Projections",
          link: "visualization/supported-projections",
        },
        { text: "XYZ", link: "visualization/xyz" },
        { text: "Cache Update", link: "visualization/cache" },
        {
          text: "Mapbox Vector Tiles",
          link: "visualization/mapbox-vector-tiles",
        },
      ],
    },
    {
      text: "3D",
      collapsed: true,
      items: [
        {
          text: "Terrain Service",
          link: "3d/terrain-service",
        },
        { text: "3D Tiles", link: "3d/3d-tiles" },
      ],
    },
    {
      text: "Data Integration",
      collapsed: true,
      items: [
        { text: "SPARQL", link: "data-integration/sparql" },
        {
          text: "Atom Feed / Open Search Download Service",
          link: "data-integration/atom",
        },
      ],
    },
  ];
}

function sidebarApi3(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "API 3.0",
      items: [
        { text: "Overview", link: "overview" },
        {
          text: "Services",
          collapsed: true,
          items: servicesItems(),
        },
        {
          text: "Examples",
          link: "examples",
        },
        {
          text: "FAQ",
          link: "faq",
        },
        {
          text: "Release Notes",
          link: "release-notes",
        },
        {
          text: "Terms of use",
          link: "terms-of-use",
        },
      ],
    },
    {
      text: "STAC API",
      link: "../datageoadminch/overview",
    },
    {
      text: "CMS",
      link: "../cmsgeoadminch/overview",
    },
    {
      text: "JS API",
      link: "../datageoadminch/overview",
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
