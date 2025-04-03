import { defineConfig, type DefaultTheme } from 'vitepress'

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

    logo: { src: '/static/icon-ch.svg', width: 24, height: 24 },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'API Specs', link: 'https://data.geo.admin.ch/api/stac/static/spec/v1/api.html' }
    ],

    sidebar: {
      '/datageoadminch/': { base: '/datageoadminch/', items: sidebarData() },
      '/visualization/': { base: '/visualization/', items: sidebarVisualization() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/geoadmin/doc-techdoc' }
    ],

    search: {
      provider: 'local',
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
})

function sidebarData(): DefaultTheme.SidebarItem[] {
  return [
    // {
    //   text: 'Overview',
    //   collapsed: false,
    //   items: [
    //     { text: 'What is STAC API', link: 'overview' },
    //     { text: 'Getting Started', link: 'getting-started' },
    //   ]
    // },
    {
      text: 'Tutorials',
      collapsed: false,
      items: [
        { text: 'Overview', link: 'overview' },
        { text: 'Authentication', link: 'authentication' },
        { text: 'Uploading assets', link: 'assetupload'},
        { text: 'Notest on Caching', link: 'caching'},
        { text: 'Migrating from v0.9 to v1', link: 'migrate09-10'}
      ]
    },
    // {
    //   text: 'API Spec',
    //   collapsed: false,
    //   items: [
    //     { text: 'API Specs', link: 'https://data.geo.admin.ch/api/stac/static/spec/v1'}
    //   ]
    // }
  ]
}

function sidebarVisualization(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'WMTS 1.0.0',
      collapsed: false,
      items: [
        { text: 'Overview', link: 'overview' },
        { text: 'Examples', link: 'examples' },
      ]
    },
    {
      text: 'XYZ',
      collapsed: false,
      items: [
        { text: 'Overview', link: 'xyz' },
      ]
    }
  ]
}
