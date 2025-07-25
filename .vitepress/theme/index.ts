import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import ApiCodeBlock from "../../components/ApiCodeBlock.vue";
import "./custom.css";
import ExampleCodeBlock from "../../components/ExampleCodeBlock.vue";
import { createHighlighter } from "shiki";
import type { HighlighterGeneric, BundledLanguage, BundledTheme } from "shiki";

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    // register your custom global components
    app.component("ApiCodeBlock", ApiCodeBlock);
    app.component("ExampleCodeBlock", ExampleCodeBlock);

    // Initialize the highlighter asynchronously
    const highlighter: HighlighterGeneric<BundledLanguage, BundledTheme> =
      await createHighlighter({
        themes: ["github-dark"],
        langs: ["javascript", "json", "sh", "html", "http"],
      });

    // Provide the highlighter globally
    app.provide("highlighter", highlighter);
  },
} satisfies Theme;
