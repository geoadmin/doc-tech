<script setup>
import { data as layerTable } from './scripts/available-layers.data.ts'
</script>

# Available Layers

The following table contains all available GeoAdmin layers.

<table id="layer-table">
  <thead id="layer-table-headers">
    <tr>
      <th>Layer Name</th>
      <th>Label</th>
      <th>Type</th>
      <th>Tooltip</th>
      <th>Searchable</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="layer in layerTable" :key="layer.serverLayerName">
      <td>{{ layer.serverLayerName }}</td>
      <td>{{ layer.label }}</td>
      <td>{{ layer.type }}</td>
      <td>{{ layer.tooltip ? '✓' : '✗' }}</td>
      <td>{{ layer.searchable ? '✓' : '✗' }}</td>
    </tr>
  </tbody>
</table>