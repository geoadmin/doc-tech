# doc-tech

Technical documentation for services made available by geo.admin.ch.

## Getting Started

To build and run the site locally:

1. Make sure Node.js v18 or higher is installed (`node -v`)
2. Install VitePress following [the setup guide](https://vitepress.dev/guide/getting-started).
3. Optional: Activate a suitable Node version, e.g. with `nvm use stable`
   ℹ️ Use `nvm list` to see all available Node versions
4. Run `npm install` to locally install all the necessary packages
5. Run `npm run docs:dev` and visit http://localhost:5173/ in your web browser

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

## How to Edit the Status Page Preview

1. To edit the status page preview, use the following variables located in the `status.md` file:
   ```YAML
   previewType: "info"
   previewTitle: "Issues in services"
   previewContent: "Our systems are experiencing issues"
   ```
2. Update the `previewType` variable to one of the following values based on the desired message type `info`, `warning` or `danger`:

   ::: info
   This is an info box.
   :::

   ::: warning
   This is a warning.
   :::

   ::: danger
   This is a dangerous warning.
   :::

3. Save the file and commit your changes.

## How to Edit the End-of-Life Preview

1. To edit the End-of-Life preview, use the following variables located in the `end-of-life.md` file:

   ```YAML
   previewTitle: "Decomissioning of legacy vectortile styles / tiles"
   previewContent: "Old styles for Light Base Map and Imagery Base Map no longer available from January 2025"
   ```

2. Save the file and commit your changes.
