import { createContentLoader } from "vitepress";

export default createContentLoader("releases/*.md", {
  render: true,
});
