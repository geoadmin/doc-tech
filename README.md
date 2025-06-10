# doc-techdoc

Technical Documentation for geoadmin

## How to Add a Release Note

To add a release note, follow these steps:

1. Navigate to the `.releases/` folder in the project directory.
2. Create a new file with the following naming convention: `YYYYMMDD.md` (e.g., `20250514.md`).
3. Add the following front matter to the file:

   ```markdown
   ---
   title: YYYYMMDD
   date: Day, Month DDth YYYY
   ---
   ```

   Replace `YYYYMMDD` with the release date, and update the `date` field with the full date in a human-readable format.

4. Add the markdown content for the release note below the front matter.

5. (Optional) If you do not want the release note to appear in the sidebar menu, add the following variable to the front matter:

   ```markdown
   ignoreSideBar: true
   ```

6. Save the file and commit your changes.
# doc-tech

Technical Documentation for geoadmin

## Getting started

To build and run the site locally:

1. Make sure Node.js v18 or higher is installed (`node -v`)
2. Install VitePress following [the setup guide](https://vitepress.dev/guide/getting-started).
3. Optional: Activate a suitable Node version, e.g. with `nvm use stable`
   ℹ️ Use `nvm list` to see all available Node versions
4. Run `npm run docs:dev` and visit http://localhost:5173/ in your web browser
