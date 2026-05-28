# Landing Page Portfolio

Veranika Kasparevych's personal portfolio — built with Astro v6, TypeScript, and vanilla CSS.

## Stack

- **Framework:** Astro v6 with MDX + Sitemap integrations
- **Language:** TypeScript (strict mode)
- **Styling:** Vanilla CSS with custom properties (`src/styles/global.css`)
- **Fonts:** Bebas Neue, DM Sans (Google Fonts), Montserrat (fontsource-variable)

## Commands

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Type-check + build to ./dist
npm run preview      # Preview production build locally
npm run format       # Format all files with Prettier
npm run format:check # Check formatting (used in CI)
npm run validate     # Validate src/data/*.json content files
```

## Project Structure

```
src/
  components/   # Reusable UI components (WorkCard, ExperienceItem, etc.)
  data/         # JSON content files — edit these to update page content
  layouts/      # BaseLayout.astro (nav, footer, cursor, meta tags)
  pages/        # index.astro (home), 404.astro
  sections/     # Page sections (Hero, Work, Skills, Experience, etc.)
  styles/       # global.css
public/         # Static assets (CV PDF, favicon, logos, thumbnails)
scripts/        # Node.js utility scripts (validate-content.js)
```

## Path Aliases (tsconfig.json)

| Alias          | Resolves to       |
| -------------- | ----------------- |
| `@components/` | `src/components/` |
| `@layouts/`    | `src/layouts/`    |
| `@sections/`   | `src/sections/`   |
| `@data/`       | `src/data/`       |

## Updating Content

All page content is driven by JSON files in `src/data/`. Edit these directly — no code changes needed:

| File              | Controls              |
| ----------------- | --------------------- |
| `activities.json` | Work section cards    |
| `experience.json` | Experience timeline   |
| `referrals.json`  | Testimonials carousel |
| `skills.json`     | Skills grid           |
| `projects.json`   | Projects              |
| `education.json`  | Education             |
| `languages.json`  | Languages             |

After editing JSON files, run `npm run validate` to catch typos or missing fields before committing.

## Branch Strategy

```
feature/xxx → develop → main
```

- **main** — production, auto-deploys to Netlify
- **develop** — integration branch, gets a Netlify branch preview on every push
- **feature/xxx** — individual features, merge into develop

## Automations

| Automation            | Trigger                         | File                                |
| --------------------- | ------------------------------- | ----------------------------------- |
| Pre-commit formatting | Every commit                    | `.husky/pre-commit` + `lint-staged` |
| CI (check + build)    | Every push / PR to main/develop | `.github/workflows/ci.yml`          |
| Deploy to Netlify     | Push to `main`                  | Netlify (automatic)                 |
| Branch preview        | Push to any branch              | Netlify (automatic)                 |
| Lighthouse audit      | PR to `main` or `develop`       | `.github/workflows/lighthouse.yml`  |
| Dependabot updates    | Weekly (Monday)                 | `.github/dependabot.yml`            |

## Deployment

The site deploys to Netlify automatically on every push. Build settings are in `netlify.toml`.

- **Production:** `main` branch → `https://veranikabarel.netlify.app`
- **Branch previews:** any branch gets a unique preview URL automatically

If you have a custom domain, update `site` in `astro.config.mjs` and configure it in the Netlify dashboard.
