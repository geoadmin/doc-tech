---
ignoreSideBar: true
---

<script setup>
import { data as releases } from '../scripts/releases-content.data.ts'

// replace <h1> for <h2> for each release page
function transformHtml(html) {
  return html.replace(/<h1/g, '<h2').replace(/<\/h1>/g, '</h2>');
}

</script>

# Release Notes

<div v-for="release of releases">
    <div v-html="transformHtml(release.html)"></div>
</div>
