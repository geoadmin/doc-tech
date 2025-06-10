import { createContentLoader } from "vitepress";

interface Release {
  frontmatter: {
    title: string;
    date: string;
  };
  html: string | undefined;
  url: string;
}

export default createContentLoader("releases/*.md", {
  render: true,
  transform(raw): Release[] {
    return raw
      .map(({ url, frontmatter, html }) => {
        if (frontmatter.ignoreSideBar) {
          return null; // skip non-article pages
        }
        return {
          frontmatter: {
            title: frontmatter.title,
            date: frontmatter.date,
          },
          html: html ? html : undefined,
          url,
        };
      })
      .filter((item): item is Release => item !== null)
      .reverse();
  },
});
