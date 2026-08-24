# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Michael Dias's personal portfolio site, deployed to GitHub Pages at `michaeldias9.github.io` (custom domain via `public/CNAME`). React + Vite SPA styled with Tailwind CSS.

## Commands

```bash
npm run dev       # start Vite dev server (localhost:5173)
npm run build     # production build to dist/
npm run lint      # eslint .
npm run preview   # preview the production build locally
npm run deploy    # build + publish dist/ to gh-pages branch (gh-pages -d dist)
```

There is no test suite configured in this repo.

Node version: Vite 5 requires Node 20.19+ or 22.12+. If a build fails with a "Cannot find native binding" error from `@tailwindcss/oxide` or similar, it's almost always a Node version mismatch — check `node -v` before debugging further.

## Architecture

- **Routing**: `HashRouter` (in [main.jsx](src/main.jsx)) is used deliberately, not `BrowserRouter` — this is required for client-side routing to work correctly on GitHub Pages, which has no server-side rewrite rules. Routes are declared in [App.jsx](src/App.jsx) and page transitions are animated with `framer-motion`'s `AnimatePresence` (`mode="wait"`), keyed on `location.pathname`.
- **Pages** ([src/pages/](src/pages/)): `Home.jsx` (profile/experience/education/skills/contact) and `Projects.jsx` (project showcase with media). Each page is a single large component with its content data (specs, skills, project list) defined as local const arrays at the top of the file, rather than pulled from a CMS or JSON — edit these arrays directly to update site content.
- **Layout chrome**: `Navbar` (top nav) and `ChromeOverlay` (fixed corner marks + bottom status bar showing live cursor coordinates) are rendered once in `App.jsx` outside the animated route content, so they persist across page transitions.
- **Visual theme**: the whole site follows an "engineering blueprint / technical drawing" motif — monospace UI text (IBM Plex Mono), serif headings (Fraunces), sheet/part numbering ("SHEET/01", "P.04"), blueprint-blue grid background, corner registration marks, and crosshair cursor tracking. Custom theme colors (`charcoal`, `paper`/`cream`, `ink`, `muted`, `blueprint`, `redline`) are defined in [tailwind.config.js](tailwind.config.js) — reuse these tokens rather than introducing new colors, to keep the motif consistent. `AttitudeIndicator` (an SVG artificial-horizon widget that tilts with mouse position) and `SectionRail` (scroll-spy side nav using `IntersectionObserver`) reinforce the same theme and are Home-page-specific.
- **Assets**: project media (images/gifs/video) live in [src/assets/](src/assets/) and are imported directly into `Projects.jsx`; static files served as-is (favicon, `CNAME`) live in [public/](public/).
