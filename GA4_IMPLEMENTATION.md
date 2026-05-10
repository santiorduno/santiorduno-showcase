# GA4 Events — santiorduno.com

Implementation plan for tracking user behavior on santiorduno.com as part of the portfolio's own case study.

**Period:** May 9 – Jun 6, 2026 (4 weeks baseline)
**GA4 Property:** `G-4R694LCNFK`
**Companion tool:** Microsoft Clarity (separate install)

---

## Why this exists

The portfolio currently tracks only `page_view` on home. Case studies, CTAs, scroll behavior, and form submissions are invisible. Without these events, the project's north-star metric — *% of sessions with scroll depth >70% in home that end in a contact form click* — is unmeasurable.

This document defines the five events to ship, where they live in the codebase, and the GA4 console setup that follows.

---

## Stack context (do not violate)

- **React 19 + Vite + TS + Tailwind** — strict TypeScript, no `any`.
- **Routing:** React Router. Two routes: `/` (HomePage) and `/projects/:slug` (ProjectDetailPage, lazy-loaded).
- **Smooth scroll:** Lenis is active on `/` only via `<ReactLenis root>` in `pages/HomePage.tsx`. Project detail pages use native scroll.
- **i18n:** Custom system with `useLanguage()` and `useContent()`. No external library.
- **Two project data layers:** `constants/index.tsx` (homepage cards) and `constants/projects/index.ts` (detail pages).
- **Path alias:** `@/` → `src/`.
- **Deployment:** Cloudflare Pages + Worker (`worker/index.ts`) handling `/api/contact` via Resend.

**Important:** Lenis hijacks the scroll event on home. The scroll-depth hook must read `window.scrollY` (Lenis writes to it), not the Lenis instance directly, to keep things simple.

---

## The five events

| # | Event name | When it fires | Why it matters |
|---|---|---|---|
| 1 | `scroll_depth` | User passes 25/50/70/100% of page | North-star metric uses 70% threshold |
| 2 | `case_study_view` | User lands on `/projects/:slug` | Confirms which projects attract clicks |
| 3 | `case_study_complete` | User reaches end of project detail page | Engagement quality per project |
| 4 | `cta_click` | User clicks any contact CTA | Locates highest-converting CTA |
| 5 | `contact_form_submit` | Form `POST /api/contact` returns 2xx | Conversion event — mark as Key Event in GA4 |

---

## File-by-file implementation

### 1. Type declarations

Create `src/types/gtag.d.ts`:

```typescript
declare function gtag(
  command: 'event',
  eventName: string,
  params?: Record<string, string | number>
): void

declare global {
  interface Window {
    gtag: typeof gtag
    dataLayer: unknown[]
  }
}

export {}
```

Add to `tsconfig.app.json` `include` if not picked up automatically.

---

### 2. Analytics helper

Create `src/utils/analytics.ts`:

```typescript
type EventParams = Record<string, string | number>

function track(eventName: string, params?: EventParams): void {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', eventName, params)
}

export function trackScrollDepth(pageName: string, depth: number): void {
  track('scroll_depth', { page_name: pageName, depth_percent: depth })
}

export function trackCaseStudyView(slug: string, title: string): void {
  track('case_study_view', { project_slug: slug, project_title: title })
}

export function trackCaseStudyComplete(slug: string): void {
  track('case_study_complete', { project_slug: slug })
}

export function trackCtaClick(location: string): void {
  track('cta_click', { cta_location: location })
}

export function trackContactFormSubmit(formLocation: string): void {
  track('contact_form_submit', { form_location: formLocation })
}
```

All gtag calls are centralized here. Components never call `window.gtag` directly.

---

### 3. Scroll depth hook

Create `src/hooks/useScrollDepth.ts`:

```typescript
import { useEffect, useRef } from 'react'
import { trackScrollDepth, trackCaseStudyComplete } from '@/utils/analytics'

interface Options {
  pageName: string
  /** If provided, fires case_study_complete at 100% with this slug */
  caseStudySlug?: string
}

const THRESHOLDS = [25, 50, 70, 100] as const

export function useScrollDepth({ pageName, caseStudySlug }: Options): void {
  const fired = useRef<Set<number>>(new Set())

  useEffect(() => {
    fired.current.clear()

    const handleScroll = (): void => {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      if (total <= 0) return
      const percent = Math.round((scrolled / total) * 100)

      THRESHOLDS.forEach(threshold => {
        if (percent >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold)
          trackScrollDepth(pageName, threshold)
          if (threshold === 100 && caseStudySlug) {
            trackCaseStudyComplete(caseStudySlug)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Fire on mount in case page is short

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pageName, caseStudySlug])
}
```

**Why one hook:** `case_study_complete` is just `scroll_depth` at 100% on a project page. Combining keeps the listener count down and avoids two scroll handlers competing on the same page.

---

### 4. Wire up scroll tracking on home

In `src/pages/HomePage.tsx`, add the hook at component top:

```typescript
import { useScrollDepth } from '@/hooks/useScrollDepth'

export function HomePage() {
  useScrollDepth({ pageName: 'home' })
  // ...existing JSX
}
```

---

### 5. Wire up case study tracking

In `src/pages/ProjectDetailPage.tsx`:

```typescript
import { useEffect } from 'react'
import { useScrollDepth } from '@/hooks/useScrollDepth'
import { trackCaseStudyView } from '@/utils/analytics'

// Inside the component, after slug is resolved and project is found:
useEffect(() => {
  if (!project) return
  trackCaseStudyView(project.slug, project.title)
}, [project])

useScrollDepth({
  pageName: `case_study:${project?.slug ?? 'unknown'}`,
  caseStudySlug: project?.slug,
})
```

Place these AFTER the project-not-found guard. If the slug doesn't match a project, no events fire.

---

### 6. CTA click tracking

Every contact CTA needs `trackCtaClick(location)` on its click handler. Locations to instrument:

| Location string | Where |
|---|---|
| `nav` | `sections/Navbar.tsx` — contact link |
| `hero` | `sections/Hero.tsx` — primary CTA if any |
| `service_summary` | `sections/ServiceSummary.tsx` — CTA inside |
| `contact_section` | `sections/Contact.tsx` — submit button counts as cta + form_submit |
| `footer` | wherever the footer contact link lives |
| `case_study` | any CTA inside `components/project-detail/` |

Pattern:

```typescript
import { trackCtaClick } from '@/utils/analytics'

<button onClick={() => trackCtaClick('hero')}>
  {t.contact.cta}
</button>
```

Naming convention: lowercase, snake_case, descriptive of position not visual style. Stable strings — these become GA4 dimension values.

---

### 7. Contact form submit

In `src/sections/Contact.tsx` (or wherever the form handler lives), inside the `fetch('/api/contact')` success branch:

```typescript
import { trackContactFormSubmit } from '@/utils/analytics'

const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})

if (res.ok) {
  trackContactFormSubmit('contact_section')
  // ...existing success UI
}
```

**Do not** fire on form open, only on successful submission. Failed submits are not conversions.

---

### 8. Verify gtag is loaded

The GA4 snippet should already be in `index.html` (since baseline data exists). Confirm it loads BEFORE any React code runs and that `window.gtag` is a function. If not, the events will silently no-op (the helper guards against undefined).

To verify locally during dev: open DevTools → Network → filter by `collect`. Each `track*()` call should produce a request to `google-analytics.com/g/collect`.

---

## GA4 console setup (post-deploy)

Once events are live and at least one event has fired:

### Mark conversion event

1. Admin → Events → wait for `contact_form_submit` to appear (can take 24h)
2. Toggle "Mark as Key Event"

### Build the funnel

Explore → blank exploration → technique: Funnel exploration. Steps in order:

1. Event name = `page_view` (filter: `page_location` contains `santiorduno.com/`)
2. Event name = `scroll_depth` (filter: `depth_percent` = 70)
3. Event name = `cta_click` (any location)
4. Event name = `contact_form_submit`

Save as "Portfolio conversion funnel".

### Build the north-star segment

Explore → segments → new audience segment:
- Sessions where `scroll_depth` event fired with `depth_percent >= 70`

Use this segment to filter the funnel. The conversion rate of this segment to `contact_form_submit` IS the north-star metric.

### Custom dimensions

Admin → Custom definitions → register:

| Dimension | Event parameter | Scope |
|---|---|---|
| Page name | `page_name` | Event |
| Project slug | `project_slug` | Event |
| CTA location | `cta_location` | Event |
| Depth percent | `depth_percent` | Event |

Without this step, the parameters won't show up in standard reports. They'll exist in raw event data but not in dashboards.

---

## Verification checklist

Before declaring this done:

- [ ] `npm run build` passes with no TS errors
- [ ] `npx tsc --noEmit` passes
- [ ] Local dev: visit home, scroll to bottom — see 4 `scroll_depth` events in DevTools Network
- [ ] Local dev: visit `/projects/<any-slug>` — see `case_study_view` event fire on mount
- [ ] Local dev: scroll to bottom of project page — see `case_study_complete` fire
- [ ] Local dev: click each CTA — see `cta_click` with correct location
- [ ] Local dev: submit contact form — see `contact_form_submit` only on success
- [ ] Deploy to Cloudflare Pages
- [ ] GA4 → DebugView (with debug_mode enabled) shows events from production
- [ ] After 24h: events appear in standard reports
- [ ] Custom dimensions registered
- [ ] Funnel exploration saved
- [ ] `contact_form_submit` marked as Key Event

---

## Implementation order

1. `gtag.d.ts` (1 min — unblocks everything else)
2. `analytics.ts` helper (5 min)
3. `useScrollDepth` hook (10 min)
4. Wire to `HomePage` (2 min)
5. Wire to `ProjectDetailPage` (5 min)
6. Add `trackCtaClick` to all CTAs (15 min — most error-prone, do last on the dev side)
7. Add `trackContactFormSubmit` to form handler (5 min)
8. `npm run build` + smoke test locally
9. Deploy
10. GA4 console setup (15 min)

Total dev time: ~1 hour. GA4 setup: 15 min after first events arrive.

---

## What this does NOT do

- **No A/B testing.** That's a Phase 4 concern, after baseline.
- **No Clarity integration.** Clarity ships separately (single script in `index.html`, no React work).
- **No PII capture.** Form submit tracks the event, not the user's email or message.
- **No referrer enrichment.** GA4 captures source/medium natively; no extra params needed.

---

## Open items

1. Confirm whether the GA4 snippet in `index.html` uses `gtag.js` (standard) or GTM container — affects whether `window.gtag` exists or events go through `dataLayer.push`. If GTM, the helper needs adjustment.
2. Confirm the contact form lives in `sections/Contact.tsx` or a separate component — affects file 7.
3. Decide CTA location names BEFORE implementing — once data starts flowing, renaming requires a regex over historical events to compare.
