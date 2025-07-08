import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import ApiCodeBlock from "../../components/ApiCodeBlock.vue";
import "./custom.css";
import ExampleCodeBlock from "../../components/ExampleCodeBlock.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component("ApiCodeBlock", ApiCodeBlock);
    app.component("ExampleCodeBlock", ExampleCodeBlock);
  },
} satisfies Theme;
