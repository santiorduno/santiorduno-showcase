# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Type-check + Vite production build → dist/
npm run preview   # Serve the production build locally
npm run lint      # ESLint

npx tsc --noEmit  # Type-check only (no emit)
```

There are no automated tests. Verification is manual.

To test the Cloudflare Worker locally (contact form + `/api/health`):
```bash
# Create .dev.vars with RESEND_API_KEY=... then:
npx wrangler dev
```

## Deployment

Deployed to Cloudflare Pages via Wrangler. The `worker/index.ts` file is the Cloudflare Worker that:
- Handles `/api/contact` (POST) — sends email via Resend
- Serves the SPA from `dist/` via `env.ASSETS` binding for all other routes

Environment variable required in Cloudflare: `RESEND_API_KEY`.

## Architecture

**Single-page portfolio** with two routes:
- `/` → `HomePage` (all sections stacked vertically)
- `/projects/:slug` → `ProjectDetailPage` (lazy-loaded)

### Source layout

```
src/
  App.tsx                     # Router + LanguageProvider wrapper
  sections/                   # Full-width homepage sections (Hero, Navbar, Services, About, Projects, Education, Contact, ServiceSummary)
  pages/                      # Route-level components (HomePage, ProjectDetailPage)
  components/
    project-detail/           # Sub-components for /projects/:slug (header, metadata, navigation, content blocks)
    AnimatedHeaderSection.tsx # Reusable GSAP scroll-trigger section header
    AnimatedTextLines.tsx     # Animated staggered text lines
    Planet.tsx                # Three.js 3D planet (used in Hero)
  constants/
    index.tsx                 # All typed data: services, projects[], about[], education, certifications, all TypeScript interfaces
    projects/                 # One file per project (ProjectDetail type with content blocks)
  i18n/
    types.ts                  # Language union, UITranslations interface, ProjectContentTranslation interface
    LanguageContext.tsx        # Context + Provider + useLanguage() hook
    useContent.ts             # useContent() — returns language-aware data (merges EN base with ES overlays)
    translations/en.ts        # All UI strings in English
    translations/es.ts        # All UI strings in Spanish
    content/es/               # Spanish content overlays (about, services, per-project files)
```

### i18n system

The site supports EN/ES. There is no external i18n library.

- **UI strings**: `useLanguage().t` gives a typed `UITranslations` object (not `t('key')` function calls). All UI string keys are defined in `src/i18n/types.ts`.
- **Structured content**: `useContent()` hook merges Spanish overlays over the English `constants/` data. English is the base; Spanish files only override what differs.
- **Project content**: Each project in `constants/projects/` has a `ProjectDetail` with typed `content: ContentSection[]` blocks. Spanish translations for each project live in `src/i18n/content/es/projects/`.
- Language is persisted to `localStorage` under key `santi-lang`.

To add new UI strings: update `UITranslations` in `types.ts`, then add the key to both `translations/en.ts` and `translations/es.ts`.

### Content block system

Project detail pages render a list of `ContentSection` blocks. Types: `text | image | video | gif | gallery | quote`. Each block type has its own component under `src/components/project-detail/content-blocks/`. The `ContentRenderer.tsx` dispatches to the right block component.

To add a new project: create `src/constants/projects/my-project.ts` (see README for the full template), export it from `src/constants/projects/index.ts`, and optionally add a Spanish translation file in `src/i18n/content/es/projects/`.

### Two project data layers

There are **two separate project lists** that must both be updated when adding a project:

1. `constants/index.tsx` → `projects: Project[]` — homepage card data (title, slug, image, technologies). This is what `sections/Projects.tsx` renders.
2. `constants/projects/index.ts` → `projectsContent: ProjectDetail[]` — full detail page data with content blocks. This is what `ProjectDetailPage` uses.

A project missing from `projects[]` won't appear on the homepage; a project missing from `projectsContent[]` will 404 on its detail route.

### Icons

Icons use `@iconify-icon/react`: `import { Icon } from "@iconify-icon/react"` with Iconify icon name strings (e.g. `<Icon icon="ph:arrow-right" />`).

### Smooth scroll

Lenis smooth scroll is applied at the `HomePage` level only via `<ReactLenis root>` in `src/pages/HomePage.tsx`. The `/projects/:slug` route does not use Lenis.

### Build chunking

Vite is configured (`vite.config.ts`) to split vendor chunks: `three-vendor` (Three.js + react-three), `gsap-vendor`, `router-vendor`. This keeps the main bundle small.

### Path alias

`@` resolves to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).
