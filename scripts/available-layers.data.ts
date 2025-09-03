export default {
  async load() {
    try {
      return (await fetch("https://api3.geo.admin.ch/rest/services/api/MapServer/layersConfig?lang=en")).json();
    } catch (error) {
      console.error("Error loading layers:", error);
      throw error;
    }
  }
}