---
ignoreSideBar: true
---

<script setup>
import { data as releases } from '../scripts/releases-content.data.ts'

// replace <h2> for <h3> and <h1> for <h2> for each release page
function transformHtml(html) {
  const html_edited = html
    .replace(/<h2/g, '<h3')
    .replace(/<\/h2>/g, '</h3>');

  return html_edited
    .replace(/<h1/g, '<h2')
    .replace(/<\/h1>/g, '</h2>');
}

</script>

# Release Notes

<div v-for="release of releases">
    <div v-html="transformHtml(release.html)"></div>
</div>
