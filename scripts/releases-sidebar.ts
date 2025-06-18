/**
 * @file releases-sidebar.ts
 *
 * This script generates sidebar items based on Markdown files located in the `/releases` directory. It reads
 * the front matter metadata from each file, filters out files marked to be
 * ignored, and creates a sidebar item for each release. The resulting sidebar
 * configuration is saved as a JSON file (`releases-sidebar.json`) in the
 * `/releases` directory.
 */
import glob from "fast-glob";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { type DefaultTheme } from "vitepress";

const files = await glob(["**"], {
  cwd: "./releases/",
  ignore: ["node_modules/**", ".vitepress/**", "*.json"],
  absolute: false,
  onlyFiles: true,
});

export const releasesSideBar: DefaultTheme.SidebarItem[] = [];

for (const file of files) {
  const content = fs.readFileSync(`./releases/${file}`, "utf-8");
  const { data: frontmatter } = matter(content);

  // skip non-article pages
  if (frontmatter.ignoreSideBar) continue;

  releasesSideBar.push({
    text: `Release ${frontmatter.title}`,
    link: `/releases/${file.replace(/\.md$/, "")}`,
  });
}

const identation = 2;
fs.writeFileSync(
  path.join("./releases/", "releases-sidebar.json"),
  JSON.stringify(releasesSideBar.reverse(), null, identation)
);
