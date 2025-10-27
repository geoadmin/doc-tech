import { defineConfig, type DefaultTheme } from 'vitepress'
import fs from 'fs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: '*.geo.admin.ch',
    description: 'Technical Documentation about *.geo.admin.ch',
    /*
  Prepend a base path such that links still work when the page is built for the
  preview in a PR ("test link" in the PR description).

  For example, VITE_BASE_URL would be set to "/preview/feat-pb-1234-my-branch/"
  for a link like this:

     https://sys-docs.dev.bgdi.ch/preview/feat-pb-1234-my-branch/index.html
  */
    base: process.env.VITE_BASE_URL || '/',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    ignoreDeadLinks: 'localhostLinks',
    vite: {
        build: {
            // We add this to avoid the warning "(!) Some chunks are larger than 500 kB after minification."
            chunkSizeWarningLimit: 1000,
        },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: { src: '/icon-ch.svg', width: 24, height: 24 },
        lastUpdated: {
            formatOptions: {
                dateStyle: 'medium',
                timeStyle: 'short',
            },
        },
        editLink: {
            text: 'Edit this page on GitHub',
            pattern: 'https://github.com/geoadmin/doc-tech/edit/master/:path',
        },
        sidebar: [
            {
                text: 'Get Started',
                collapsed: false,
                items: [{ text: 'Overview', link: '/docs/overview' }],
            },
            {
                text: 'Explore Data',
                collapsed: false,
                items: exploreDataItems(),
            },
            {
                text: 'Access Data',
                collapsed: false,
                items: accessDataItems(),
            },
            {
                text: 'Visualize Data',
                collapsed: false,
                items: visualizeDataItems(),
            },
            {
                text: 'Download Data',
                collapsed: false,
                items: downloadDataItems(),
            },
            {
                text: 'Map Viewer',
                collapsed: false,
                items: mapViewerItems(),
            },
            {
                text: 'Release Notes',
                collapsed: false,
                items: releaseNotesItems(),
            },
            {
                text: 'Terms of use',
                link: 'https://www.geo.admin.ch/en/general-terms-of-use-fsdi',
            },
            {
                text: 'Status Page',
                link: '/page/status-page',
            },
            {
                text: 'End-of-Life',
                link: '/page/end-of-life',
            },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/geoadmin/doc-tech' }],

        search: {
            provider: 'local',
        },
    },
})

function releaseNotesItems() {
    return [
        {
            text: 'Software Updates',
            items: [
                {
                    text: 'web-mapviewer',
                    link: 'https://github.com/geoadmin/web-mapviewer/releases',
                },
                {
                    text: 'mf-chsdi3',
                    link: 'https://github.com/geoadmin/mf-chsdi3/releases',
                },
                {
                    text: 'service-stac',
                    link: 'https://github.com/geoadmin/service-stac/releases',
                },
            ],
        },
        { text: 'Data Updates', items: loadReleasesSidebarData() },
    ]
}

// loads the sidebar data in releases.json after the script has been run (.scripts/releases-sidebar.ts)
function loadReleasesSidebarData() {
    const numberOfItems = 6 // Number of items to show in the sidebar
    if (!fs.existsSync('./releases/releases-sidebar.json')) {
        return {}
    }
    const sidebarData = JSON.parse(
        fs.readFileSync('./releases/releases-sidebar.json', 'utf-8')
    ).slice(0, numberOfItems)
    sidebarData.push({
        text: 'All Releases',
        link: '/releases/release-notes',
    })
    return sidebarData
}

function exploreDataItems(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Get Layer Metadata', link: '/docs/get-layer-metadata' },
        { text: 'Get Layer Attributes', link: '/docs/get-layer-attributes' },
        { text: 'Get Layer Legend', link: '/docs/get-layer-legend' },
    ]
}

function accessDataItems(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Features',
            items: [
                {
                    text: 'Identify Features',
                    link: '/docs/identify-features',
                },
                { text: 'Find Features', link: '/docs/find-features' },
                { text: 'Get Features', link: '/docs/get-features' },
                {
                    text: 'Get HTML Popup',
                    link: '/docs/get-html-popup',
                },
            ],
        },
        {
            text: 'Search',
            link: '/docs/search',
        },
        {
            text: 'Elevation Data',
            items: [
                { text: 'Get Point Height', link: '/docs/get-point-height' },
                { text: 'Get Elevation Profile', link: '/docs/get-elevation-profile' },
            ],
        },
    ]
}

function visualizeDataItems(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'WMS', link: '/docs/wms' },
        { text: 'WMTS', link: '/docs/wmts' },
        { text: 'XYZ', link: '/docs/xyz' },
        {
            text: 'Vector Tiles',
            link: '/docs/vector-tiles',
        },
        {
            text: 'Terrain Service',
            link: '/docs/terrain-service',
        },
        {
            text: '3D Tiles',
            link: '/docs/3d-tiles',
        },
    ]
}

function downloadDataItems(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'STAC API',
            items: [
                { text: 'Overview', link: '/docs/stac-api/overview' },
                { text: 'Authentication', link: '/docs/stac-api/authentication' },
                { text: 'Asset Upload', link: '/docs/stac-api/asset-upload' },
                { text: 'Compression', link: '/docs/stac-api/compression' },
                {
                    text: 'Supported Media Types',
                    link: '/docs/stac-api/supported-media',
                },
                { text: 'Caching', link: '/docs/stac-api/caching' },
                { text: 'Item Expiration', link: '/docs/stac-api/item-expiration' },
                { text: 'Migrate v0.9 to v1.0', link: '/docs/stac-api/migrate09-10' },
                {
                    text: 'API Specs',
                    link: 'https://data.geo.admin.ch/api/stac/static/spec/v1/api.html',
                },
            ],
        },
    ]
}

function mapViewerItems(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Embed in an iframe', link: '/docs/embed-in-an-iframe' },
        { text: 'URL Parameters', link: '/docs/url-parameters' },
        {
            text: 'Javascript API',
            link: '/docs/javascript-api',
        },
    ]
}
