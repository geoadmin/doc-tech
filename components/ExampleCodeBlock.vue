<script setup lang="ts">
import { codeToHtml } from "shiki";
import { ref } from "vue";

const props = defineProps<{
  url: string;
}>();

const activeTab = ref("request");

const colorReplacements = {
  "#24292e": "var(--vp-code-block-bg)",
  "#e1e4e8": "var(--vp-c-text-1)",
  "#fdaeb7": "var(--vp-c-brand-3)",
  "#9ecbff": "var(--vp-c-text-4)",
  "#b392f0": "var(--vp-c-text-5)",
  "#79b8ff": "var(--vp-c-text-6)",
};

const requestHtml = await codeToHtml(props.url, {
  lang: "sh",
  theme: "github-dark",
  colorReplacements: colorReplacements,
});

const testJson = `{
  "geometry": {
    "paths": [
      [
        [675000, 245000],
        [660000, 260000],
        [620000, 250000]
      ]
    ],
    "type": "esriGeometryPolyline"
  },
  "geometryType": "esriGeometryPolyline"
}`;

const responseHtml = await codeToHtml(testJson, {
  lang: "json",
  theme: "github-dark",
  colorReplacements: colorReplacements,
});
</script>

<template>
  <div class="example-container">
    <div class="example-tabs">
      <div
        class="request-tab"
        @click="() => (activeTab = 'request')"
        :class="{ active: activeTab === 'request' }"
      >
        Request
      </div>
      <div
        class="response-tab"
        @click="() => (activeTab = 'response')"
        :class="{ active: activeTab === 'response' }"
      >
        Response
      </div>
    </div>
    <div
      id="language"
      class="request-block language-sh"
      :hidden="activeTab !== 'request'"
    >
      <div class="request-code-block" v-html="requestHtml"></div>
    </div>
    <div
      id="language"
      class="response-block language-json"
      :hidden="activeTab !== 'response'"
    >
      <div class="response-code-block" v-html="responseHtml"></div>
    </div>
  </div>
</template>

<style scoped>
.example-container {
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
}

.example-tabs {
  background-color: var(--vp-code-block-bg);
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  display: flex;
  height: 45px;
  padding: 10px;
}

.request-tab,
.response-tab {
  padding: 10px 10px;
  background-color: var(--vp-code-block-bg);
  cursor: pointer;
  font-size: small;
  color: var(--vp-c-text-3);
  font-weight: 500;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.request-tab:hover,
.response-tab:hover {
  color: var(--vp-c-brand-3);
}

.request-tab.active,
.response-tab.active {
  color: var(--vp-c-text-1);
}

.request-block,
.response-block {
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}

#language {
  margin: 0;
  border-radius: 0;
}
</style>
