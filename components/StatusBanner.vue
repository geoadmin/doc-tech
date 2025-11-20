<script setup lang="ts">
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
            href="/page/status-page"
            class="status-content"
        >
            <p>
                <span class="status-content-title">{{ props.status.previewTitle }} - </span>
                <span class="status-content-text">{{ props.status.previewContent }}</span>
            </p>
        </a>
    </div>
</template>
