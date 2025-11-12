import { type Theme, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ApiCodeBlock from '../../components/ApiCodeBlock.vue'
import './custom.css'
import ExampleCodeBlock from '../../components/ExampleCodeBlock.vue'
import { createHighlighter } from 'shiki'
import type { HighlighterGeneric, BundledLanguage, BundledTheme } from 'shiki'
import { h, nextTick, watch, onMounted } from 'vue'

// Create a global instance of the highlighter as Shiki is supposed to be used as a singleton
const highlighterPromise = createHighlighter({
    themes: ['github-dark'],
    langs: ['javascript', 'json', 'sh', 'html', 'http'],
})

export default {
    extends: DefaultTheme,
    async enhanceApp({ app }) {
        // register custom global components
        app.component('ApiCodeBlock', ApiCodeBlock)
        app.component('ExampleCodeBlock', ExampleCodeBlock)

        const highlighter: HighlighterGeneric<BundledLanguage, BundledTheme> =
            await highlighterPromise

        // Provide the highlighter globally (it can later be used in any component)
        app.provide('highlighter', highlighter)
    },
    Layout: () => {
        const route = useRoute()
        onMounted(async () => {
            await nextTick(() => scrollToActiveSidebarItem())
        })

        watch(
            () => route.path,
            () =>
                nextTick(() => {
                    scrollToActiveSidebarItem()
                })
        )

        return h(DefaultTheme.Layout)
    },
} satisfies Theme

const scrollToActiveSidebarItem = () => {
    const activeLink = document.querySelector('#VPSidebarNav div.is-link.is-active.has-active')
    if (activeLink) {
        activeLink.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}
