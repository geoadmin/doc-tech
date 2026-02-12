<script setup lang="ts">
import { withBase } from 'vitepress'

interface StatusBannerProps {
    type: string
    previewTitle: string
    previewContent: string
}

const props = defineProps<{
    status: StatusBannerProps
}>()

const isWarning = props.status.type === 'warning'
</script>
<template>
    <div :class="[isWarning ? 'status-warning' : 'status-danger']">
        <a
            :href="withBase('/page/status-page')"
            class="status-content"
        >
            <p>
                <span class="status-content-title">{{ props.status.previewTitle }} - </span>
                <span class="status-content-text">{{ props.status.previewContent }}</span>
            </p>
        </a>
    </div>
</template>
