<script setup lang="ts">
  interface StatusBannerProps {
    previewType: string;
    previewTitle: string;
    previewContent: string;
  }

  const props = defineProps<{
    status: StatusBannerProps;
  }>();

  const isWarning = props.status.previewType === "warning";
</script>
<template>
  <div :class="[isWarning ? 'status-warning' : 'status-info']">
    <a href="/page/status" class="status-content">
      <p>
        <span class="status-content-title"
          >{{ props.status.previewTitle }} -
        </span>
        <span class="status-content-text">{{
          props.status.previewContent
        }}</span>
      </p>
    </a>
  </div>
</template>
