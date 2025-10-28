<script setup lang="ts">
import { inject } from 'vue'
import type { HighlighterGeneric, BundledLanguage, BundledTheme } from 'shiki'

const props = defineProps<{
    url: string
    method?: string
}>()

const highlighter = inject<HighlighterGeneric<BundledLanguage, BundledTheme>>('highlighter')

const html = highlighter?.codeToHtml(props.url, {
    lang: 'http',
    theme: 'github-dark',
    colorReplacements: {
        '#24292e': 'var(--vp-code-block-bg)',
        '#e1e4e8': 'var(--vp-c-text-1)',
        '#fdaeb7': 'var(--vp-c-brand-3)',
    },
})
</script>

<template>
    <div class="api-block language-http">
        <button class="method-button">{{ props.method }}</button>
        <div
            class="api-block-code"
            v-html="html"
        ></div>
    </div>
</template>
