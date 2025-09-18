<script setup lang="ts">
  interface StatusBannerProps {
    type: string;
    title: string;
    content: string;
  }

  const props = defineProps<{
    status: StatusBannerProps;
  }>();

  const isWarning = props.status.type === "warning";
</script>
<template>
  <div :class="[isWarning ? 'status-warning' : 'status-danger']">
    <a href="/page/status-page" class="status-content">
      <p>
        <span class="status-content-title">{{ props.status.title }} - </span>
        <span class="status-content-text">{{ props.status.content }}</span>
      </p>
    </a>
  </div>
</template>
