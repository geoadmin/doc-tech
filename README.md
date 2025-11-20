# doc-tech

Technical documentation for services made available by geo.admin.ch.

<!-- prettier-ignore -->
| Branch      | CI Status  | Deployed version |
|-------------| ---------- | ---------------- |
| master      | ![Build Status](https://codebuild.eu-central-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiZ04zNVBLc2NkYkdlWFZzK0RZUjBkSE02U3UwejRqL0xSQUVqdFdSbVpCV0VrQnBod0NuK0c4aDg5MFhwMHJ0QzQxN0xqOXhmbmpiUVJEZXcxVE9Cbk9zPSIsIml2UGFyYW1ldGVyU3BlYyI6IkhmNVFpYUYrb0VvaUJrb0giLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=main) | <https://sys-docs.int.bgdi.ch/> |

## Getting Started

To build and run the site locally:

1. Make sure Node.js v22 or higher is installed (`node -v`). If you have `nvm` installed you should have automatically the correct version due to `.nvmrc`
2. Optional: Activate a suitable Node version, e.g. with `nvm use stable`
   ℹ️ Use `nvm list` to see all available Node versions
3. Run `npm install` to locally install all the necessary packages
4. Run `npm run docs:dev` and visit http://localhost:5173/ in your web browser

## Development

This project uses the [prettier](https://prettier.io/) package for formatting.

You can automatically run prettier with these commands:

1. `npm run format`
2. `npm run format:check`

## How to Add a Release Note

To add a release note, follow these steps:

1. Navigate to the `.releases/` folder in the project directory.
2. Create a new file with the following naming convention: `YYYYMMDD.md` (e.g., `20250514.md`).
3. Add the following header to the file:

   ```markdown
   ---
   title: YYYYMMDD
   date: Day, Month DDth YYYY
   ---
   ```

   Replace `YYYYMMDD` with the release date, and update the `date` field with the full date in a human-readable format.

4. Add the markdown content for the release note below the header.

5. (Optional) If you do not want the release note to appear in the sidebar menu, add the following variable to the header:

   ```markdown
   ignoreSideBar: true
   ```

6. Save the file and commit your changes.

## How to Edit the Status Banner

1. To edit the status banner, use the following variables located in the [`status-page.md`](./page/status-page.md) file:

   ```YAML
   previewType: "info"
   previewTitle: "Issues in services"
   previewContent: "Our systems are experiencing issues"
   ```

2. Update the `previewType` variable (`info` or `warning`) to control the color and the position in the page :
   - `info`: bottom of the page, just text without backgound color
   - `warning`: top of the page, yellow banner
   - `danger`: top of the page, red banner

3. Save the file and commit your changes.

## How to Edit the End-of-Life Preview

1. To edit the End-of-Life preview, use the following variables located in the [`end-of-life.md`](./page/end-of-life.md) file:

   ```YAML
   previewTitle: "Decomissioning of legacy vectortile styles / tiles"
   previewContent: "Old styles for Light Base Map and Imagery Base Map no longer available from January 2025"
   ```

2. Save the file and commit your changes.

## How to add a new incident details section

1. Edit the file [`status-page.md`](./page/status-page.md)
1. If there already is a section of the current year, such as e.g. `:::: details 2025 {open}`, add the incident on top of that section, leaving one blank line after the `:::: details 2025 {open}`
1. If it is the first incident of the current year, create a new section for the new year, e.g. `:::: details 2026 {open}` and already the closing `::::`, so basically like this:

   ```markdown
   :::: details 2026 {open}

   ::::
   ```

1. When you started a new year, please remove the `{open}` from the last year. This way, the old year is collapsed by default.
1. Also, please remove the `{open}` from the last incident's details, this way, only the recent incident's details are expanded.
1. Add the new incident either in the section of the new year or in the already existing section of the current year like this:

   ```markdown
   :::: details 2026 {open}

   ::: details MONTH, DAY - short heading {open}

   ### MONTH, DAY - longer heading

   DETAILS go here
   :::
   ::::
   ```

1. Remember to close the details section of the incident with three `:`, and in case you created a new year section, remember to close that one with four `:`.
