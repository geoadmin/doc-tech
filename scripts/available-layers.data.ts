export default {
  async load() {
    return (await fetch("https://api3.geo.admin.ch/rest/services/api/MapServer/layersConfig?lang=en")).json();
  }
}