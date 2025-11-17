import { h, nextTick, watch, onMounted } from 'vue'
import { type Theme, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ApiCodeBlock from '../../components/ApiCodeBlock.vue'
import './custom.css'
import ExampleCodeBlock from '../../components/ExampleCodeBlock.vue'
import { createHighlighter } from 'shiki'
import type { HighlighterGeneric, BundledLanguage, BundledTheme } from 'shiki'
import { createMermaidRenderer } from 'vitepress-mermaid-renderer'

// Create a global instance of the highlighter as Shiki is supposed to be used as a singleton
const highlighterPromise = createHighlighter({
    themes: ['github-dark'],
    langs: ['javascript', 'json', 'sh', 'html', 'http'],
})

export default {
    extends: DefaultTheme,
    // Layout will be used to initialize mermaid and scroll to active sidebar item
    Layout: () => {
        const route = useRoute()

        const initMermaid = () => {
            const mermaidRenderer = createMermaidRenderer({
                theme: 'forest',
                flowchart: { useMaxWidth: true },
            })
        }

        // initial mermaid setup
        nextTick(() => initMermaid())

        // on theme change, re-render mermaid charts
        onMounted(() => {
            watch(
                () => document.documentElement.getAttribute('data-theme'),
                () => {
                    initMermaid()
                }
            )

            // initial scroll to active sidebar item
            nextTick(() => scrollToActiveSidebarItem())
        })

        // watch for route changes and scroll to active sidebar item
        watch(
            () => route.path,
            () =>
                nextTick(() => {
                    scrollToActiveSidebarItem()
                })
        )

        return h(DefaultTheme.Layout)
    },
    async enhanceApp({ app }) {
        // register custom global components
        app.component('ApiCodeBlock', ApiCodeBlock)
        app.component('ExampleCodeBlock', ExampleCodeBlock)

        const highlighter: HighlighterGeneric<BundledLanguage, BundledTheme> =
            await highlighterPromise

        // Provide the highlighter globally (it can later be used in any component)
        app.provide('highlighter', highlighter)
    },
} satisfies Theme

const scrollToActiveSidebarItem = () => {
    const activeLink = document.querySelector('#VPSidebarNav div.is-link.is-active.has-active')
    if (activeLink) {
        activeLink.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}
