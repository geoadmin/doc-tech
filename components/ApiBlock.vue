<script setup lang="ts">
const props = defineProps<{
  url?: string;
  method?: string;
}>();
</script>

<template>
  <div class="api-block">
    <button class="method-btn">{{ props.method }}</button>
    <code id="api-block-code" class="api-block-code">{{ props.url }}</code>
  </div>
</template>
