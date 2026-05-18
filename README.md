# Veranika Kasparevych — Personal Landing Page

Personal portfolio and landing page for Veranika Kasparevych, Front-end Engineer. Built with Astro, vanilla CSS, and TypeScript.

## Tech Stack

- **Framework:** [Astro](https://astro.build) v6
- **Styling:** Vanilla CSS with CSS custom properties
- **Fonts:** Bebas Neue, DM Sans (Google Fonts)
- **Language:** TypeScript
- **Tooling:** Prettier

## Project Structure

```text
src/
├── data/               # JSON content files (edit these to update page content)
│   ├── activities.json   — work cards (projects, talks, blog)
│   ├── experience.json   — work history
│   ├── referrals.json    — testimonials / carousel
│   ├── skills.json       — tech skills by category
│   └── languages.json    — spoken languages
├── layouts/
│   └── BaseLayout.astro  — shared layout (nav, footer, cursor, scripts)
├── pages/
│   ├── index.astro       — home page
│   └── 404.astro         — not found page
└── styles/
    └── global.css        — all styles

public/
├── cv-veranika-kasparevych.pdf
├── favicon.svg
├── logos/
└── thumbnails/
```

## Page Sections

1. **Hero** — name, bio, stats, and CTA
2. **Marquee** — scrolling tech keywords
3. **Work** — project cards sourced from `activities.json`
4. **Skills** — tech stack grid sourced from `skills.json` and `languages.json`
5. **Experience** — work history sourced from `experience.json`
6. **Referrals** — testimonial carousel sourced from `referrals.json`
7. **Contact** — email, GitHub, LinkedIn links

## Updating Content

All page content lives in `src/data/`. No code changes needed to update text:

| File | Controls |
| :--- | :--- |
| `activities.json` | Work section cards |
| `experience.json` | Experience section |
| `referrals.json` | Testimonials carousel |
| `skills.json` | Skills grid categories |
| `languages.json` | Languages spoken group |

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Type-check and build to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run format` | Format all files with Prettier |
