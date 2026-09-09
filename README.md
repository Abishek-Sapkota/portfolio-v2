# Abishek Sapkota — Software Engineer Portfolio

A static portfolio site for a Django/React engineer. Content lives in one
JavaScript module and is rendered by a Vite React client with project
filtering, theme persistence, motion, accessibility, and SEO metadata. There is
no server, no database, and nothing to keep running: `npm run build` produces a
folder of files any static host will serve.

**Live demo:** <https://abisheksapkota.com.np>

## Stack

- **Client:** React 18, Vite, React Router, Tailwind CSS, Framer Motion, React Hook Form, Zod, Lucide
- **Quality:** Vitest/Testing Library, ESLint, Prettier
- **Operations:** GitHub Actions, optional Nginx container for local preview

## Quick start

```bash
npm install
npm run dev
```

Vite serves the site at `http://localhost:5173`.

The root Makefile wraps the same tasks:

```bash
make help       # list every command
make install    # install dependencies from the lockfile
make dev        # start the dev server
make build      # build the static site into dist
make preview    # serve the built site on :4173
make test       # run the Vitest suite
make lint       # run ESLint
make serve      # build and serve through Nginx on :8080
```

No environment variables are required, for development or for production.

## Editing content

Everything visible on the site comes from
[`src/data/portfolio.js`](src/data/portfolio.js): the profile
copy and contact details, the skills grid, the experience and education log,
and the project case studies with their tech stacks and galleries.

- `profile.skills` is grouped into cards by `category` and listed in the order written; there are no proficiency scores.
- `profile.experience` and `profile.education` render newest first; `end_date: null` displays as "Now".
- Each project needs a unique `slug`, which becomes its URL at `/projects/<slug>`. Add the same slug to `public/sitemap.xml` so the new page gets indexed.
- `is_featured` selects which projects appear on the home page; `order` sets the sequence on `/projects`.
- Gallery `source` values are plain URLs. To ship images with the site, drop them in `public/` and reference them as `/my-image.jpg`.

Edit the file, save, and the dev server reloads. The module's shape mirrors the
JSON the previous REST API returned, which is why the page components did not
need to change.

## Contact form

`/contact` validates the enquiry in the browser with Zod, then opens the
visitor's mail client through a pre-filled `mailto:` link addressed to
`profile.email`. Nothing is submitted anywhere, so no inbox integration or API
key is involved; the confirmation message also shows the plain email address for
visitors without a configured mail client.

To route submissions to a real inbox instead, point the form at a hosted form
endpoint (Formspree, Web3Forms, or a Netlify/Vercel form) inside
[`src/components/ContactForm.jsx`](src/components/ContactForm.jsx);
the validation and markup stay as they are.

## Project map

```text
src/data/          all site content in one module
src/components/    navigation, project cards, form, metadata, motion
src/context/       persisted dark/light theme
src/pages/         lazy-loaded route views
public/            robots, sitemap, and the CNAME for the custom domain
nginx.conf         static serving config with SPA fallback
```

## Tests and formatting

```bash
npm run lint
npm test
npm run build
```

CI runs these checks on every push and pull request.

## Deployment

Any static host works. Run `npm run build` and publish `dist/`.

- **Netlify / Vercel / Cloudflare Pages:** build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** this is the live setup. `.github/workflows/deploy.yml` builds on every
  push to `main` and publishes `dist/` through `actions/deploy-pages`; `public/CNAME` holds
  the apex domain and `npm run build` copies `index.html` to `404.html` so client-side
  routes survive a refresh. Served from the domain root, so Vite's `base` stays `/`.
- **Docker / Nginx:** `make serve` builds the `production` stage of `Dockerfile` and serves the site on `:8080`.

**Add an SPA rewrite from `/*` to `/index.html`.** Routes like
`/projects/student-forum` are resolved by the client, so without the rewrite a
deep link or a page refresh returns a 404. `nginx.conf` already handles this via
`try_files`, and GitHub Pages is covered by the generated `404.html`; on Netlify add a
`public/_redirects` file containing `/* /index.html 200`, and on Vercel add the
equivalent rewrite in `vercel.json`.

## Launch checklist

- Swap the placeholder Unsplash gallery images in `src/data/portfolio.js` for real project screenshots.
- Confirm the SPA rewrite works by refreshing a project detail page on the deployed site.
- Verify the contact form opens a correctly pre-filled email.

## History

This project was previously a full-stack application: a Django REST Framework
API served the profile, projects, and contact submissions from PostgreSQL, with
Docker Compose and a Django admin for content editing. That version is preserved
in full at `../portfolio-fullstack-backup` (see its `BACKUP.md`), and the static
content module here was generated from its live database.
