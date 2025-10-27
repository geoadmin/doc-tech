import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ApiCodeBlock from '../../components/ApiCodeBlock.vue'
import './custom.css'
import ExampleCodeBlock from '../../components/ExampleCodeBlock.vue'
import { createHighlighter } from 'shiki'
import type { HighlighterGeneric, BundledLanguage, BundledTheme } from 'shiki'

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
} satisfies Theme
