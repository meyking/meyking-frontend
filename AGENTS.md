# Meyking website

Instructions for AI coding assistants (Claude Code, Codex) working in this repo.
`CLAUDE.md` imports this file, so both tools read the same text.

The repo is the public website for Meyking Enterprise, a custom packaging
supplier in Mont-Royal, Québec. It is live at https://www.meyking.com.

The person you are working with may not be a developer. Explain what you are
about to do in plain language, run the commands yourself, and ask before
anything that changes the live site or the content database.

## What is where

| Path | What it is |
| --- | --- |
| `web/` | The site. Gatsby 3, React 17, TypeScript, Material-UI 4 (`makeStyles`). |
| `web/gatsby-node.js` | Creates product, category, and industry pages from Sanity content. |
| `web/src/pages/` | Home, products, about, contact. |
| `web/src/templates/` | Product page and category/industry page. |
| `web/functions/send-mail.js` | Netlify function behind the contact form. |
| `web/netlify.toml` | Netlify build settings. The site's base directory is `web`. |
| `sanity-cms/` | Sanity Studio v2 schema (carousel, category, industry, product). |

Services:

| Service | Details |
| --- | --- |
| GitHub | `meyking/meyking-frontend`, public. Default branch `master`. |
| Netlify | Site `meyking`, id `d2db3382-17f6-4618-8eef-ed2da7fcb218`. |
| Sanity | Project `qa4hnhox`, dataset `production`. |
| DNS | Alibaba Cloud (`hichina.com` nameservers). Email is on NetEase. |

## First-time setup

When someone asks to be set up, work through these in order. Check what is
already installed before installing anything, and tell the person what each
install is for before you run it.

1. Access. The person needs write access to the GitHub repo, membership of the
   Netlify team that owns the `meyking` site, and membership of the Sanity
   project. If a later step fails on permissions, this is the cause; the site
   owner has to invite them.
2. Node. Install Node 16.14.0 with nvm (`nvm install 16.14.0`). `web/.nvmrc`
   pins it and Netlify builds with the same version. The build is only known to
   work on this version. Also keep a current Node (20 or newer) available,
   because the Netlify and Sanity CLIs do not run on Node 16.
3. Site dependencies. In `web/`, on Node 16:
   `corepack yarn install --frozen-lockfile`. This installs from the existing
   `yarn.lock` and must not change it.
4. Netlify CLI. On the newer Node: `npm install -g netlify-cli`. The person
   runs `netlify login` and approves it in the browser. Then, from `web/`:
   `netlify link --id d2db3382-17f6-4618-8eef-ed2da7fcb218`.
5. Sanity CLI. On the newer Node: `npm install -g @sanity/cli`. The person runs
   `sanity login --provider github --no-open` (or `google`, or `sanity` for
   email and password), opens the printed URL, and signs in. `sanity projects
   list` should then show `meyking`.
6. Git identity. The repo is public, so commit with a personal email, set for
   this repo only: `git config --local user.email <personal email>`.
7. Check it works: build the site (next section). A passing build means Node,
   dependencies, and Sanity access are all fine.

## Build and preview

All commands run from `web/` on Node 16.14.0.

- Build: `./node_modules/.bin/gatsby build`. Output goes to `web/public/`. The
  build reads content from Sanity over the network; no token is needed.
- Local dev server: `./node_modules/.bin/gatsby develop`, then
  http://localhost:8000.
- Shareable preview, after a build:
  `netlify deploy --no-build --dir=public --alias <name>`. The link is
  `https://<name>--meyking.netlify.app`. This does not touch the live site.

Look at the result before calling something done. Build, open the page, and
check it at desktop and phone widths.

## Going live

- A push to `master` makes Netlify build and publish to www.meyking.com. Ask
  the person before every push to `master`, even a small one. Do the work on a
  branch and show a preview link first.
- Never run `netlify deploy --prod`.
- Only `master` and `cn` build on Netlify. Other branches do not deploy.
- After a push to `master`, confirm the deploy finished:
  `netlify api listSiteDeploys --data '{"site_id":"d2db3382-17f6-4618-8eef-ed2da7fcb218","per_page":1}'`
  and read `state`. If it is `error`, the live site stays on the previous
  version. The CLI cannot fetch build logs, so reproduce the failure with a
  local build.

## Sanity content

- The site is static. A content change in Sanity shows up only after the next
  deploy.
- Read content with the CLI from any folder except `sanity-cms/`:
  `sanity documents query '<GROQ>' --project-id qa4hnhox --dataset production --api-version 2025-08-15`.
  The current CLI refuses to run inside `sanity-cms/` because that studio is
  version 2.
- Treat the dataset as read-only. Do not create, change, or delete documents
  unless the person confirms that specific change. Deletions cannot be undone.
- Content with no image is hidden, not broken. A product with no thumbnail uses
  its first gallery image; a product with no images gets no page. Categories,
  industries, and carousel slides with no image are left out of listings. Keep
  this behaviour when adding anything that reads `thumbnail`: a missing image
  must never fail the build.

## Code rules

- Before writing a component, hook, or helper, search `web/src/` for one that
  already does the job, and use or extend it.
- Do not add, upgrade, or remove packages without asking. That includes edits
  to any `package.json` or lockfile.
- Keep changes small and in the existing style: function components and
  `makeStyles`.
- Secrets live in Netlify environment variables (`EMAIL`, `PASSWORD`,
  `WEBSITE_EMAIL` for the contact form). Never print them or commit them.

## Writing and design rules

Words on the site:

- Only state facts about the business that are in this repo, in Sanity, or
  given by the owner. Do not invent numbers, capabilities, history, or clients.
  If a sentence needs a fact you do not have, ask.
- Plain sentences. No slogans, no small uppercase labels above headings, no
  subtitle under every heading, no sales adjectives.
- Sentence case for headings. No em dashes. No emoji.

Look of the site:

- Solid backgrounds, thin rules between sections, square corners.
- No gradients, glows, frosted-glass effects, or badges. No animation that is
  not a response to something the visitor did.
- One way of showing a thing. Reuse the existing card, section, and button
  components so pages match.

## Current state (25 November 2026)

Check each of these still holds before relying on it.

- The `homepage-refresh` branch holds a redesign of the homepage, header,
  footer, and About page, with shared design values in `web/src/theme.ts`. Its
  preview is https://homepage-refresh--meyking.netlify.app. It is not merged.
  The Products, product detail, and Contact pages still have the old styling.
- In late May 2026, 23 products, 4 categories, 2 industries, and 3 carousel
  slides lost their images in Sanity. They are hidden on the site. Nobody has
  confirmed whether that was deliberate.
- `https://meyking.com` (without `www`) shows a certificate error, because its
  DNS record points at a different server. The fix is one `A` record at Alibaba
  Cloud, set to Netlify's load balancer (`75.2.60.5`), then adding
  `meyking.com` as a domain alias in Netlify. Do not move the nameservers to
  Netlify: its zone has no mail records and email would stop.
- The About page needs real company information from the owner (history, how
  orders work, what can be customised).
- The stack is old (Gatsby 3, Material-UI 4, Node 16, Sanity Studio v2). A
  rebuild on current tools is a separate project; do not start it unasked.
