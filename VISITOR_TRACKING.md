# Visitor Tracking — D1 + Cloudflare Worker

Geolocation tracking without GA4 or third-party tools. Uses Cloudflare's native `request.cf` object to capture country, city, timezone, org, and device per visit, stored in a D1 SQLite database.

**Status:** D1 database created and table initialized. Code changes pending.
**Database:** `santiorduno-analytics` (`53c59c61-dca4-4249-998c-3e2727fe14e1`)
**Region:** WNAM

---

## What was already done (do not repeat)

- [x] `npx wrangler d1 create santiorduno-analytics` — DB created
- [x] Wrangler added the binding to `wrangler.json` automatically (binding name: `santiorduno_analytics`)
- [x] Duplicate binding removed from `wrangler.json` manually
- [x] `visitors` table created via:

```sql
CREATE TABLE IF NOT EXISTS visitors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL,
  country TEXT,
  city TEXT,
  timezone TEXT,
  org TEXT,
  path TEXT,
  referrer TEXT,
  device TEXT
);
```

---

## What needs to be implemented

### 1. `worker/index.ts` — two changes

**Change A:** Add `DB` to the `Env` interface (line 1-3 of the file):

```typescript
interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
  DB: D1Database; // ADD THIS LINE
}
```

**Change B:** Add the `/api/visitor` endpoint AFTER the `/api/health` block and BEFORE the `/api/contact` block. Do not modify anything inside `/api/contact`.

```typescript
if (url.pathname === '/api/visitor' && request.method === 'POST') {
  try {
    const cf = request.cf as Record<string, string> | undefined;
    const body = await request.json() as { path?: string; referrer?: string; device?: string };

    await env.DB.prepare(`
      INSERT INTO visitors (timestamp, country, city, timezone, org, path, referrer, device)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      new Date().toISOString(),
      cf?.country ?? null,
      cf?.city ?? null,
      cf?.timezone ?? null,
      cf?.asOrganization ?? null,
      body.path ?? null,
      body.referrer ?? null,
      body.device ?? null,
    ).run();

    return Response.json({ ok: true }, { status: 200, headers: CORS_HEADERS });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return Response.json({ error: msg }, { status: 500, headers: CORS_HEADERS });
  }
}
```

---

### 2. New file: `src/hooks/useVisitor.ts`

Create this file from scratch:

```typescript
import { useEffect } from 'react'

export function useVisitor(): void {
  useEffect(() => {
    // Only once per session — do not spam the endpoint on re-renders
    if (sessionStorage.getItem('visitor_tracked')) return
    sessionStorage.setItem('visitor_tracked', '1')

    fetch('/api/visitor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: window.location.pathname,
        referrer: document.referrer || null,
        device: window.innerWidth < 768 ? 'mobile' : 'desktop',
      }),
    }).catch(() => {
      // Silent fail — never block the UI if tracking fails
    })
  }, [])
}
```

---

### 3. `src/pages/HomePage.tsx` — one line change

Import and call `useVisitor` alongside the existing `useScrollDepth` hook:

```typescript
import { useVisitor } from '@/hooks/useVisitor'

// Inside the component, at the top alongside useScrollDepth:
useVisitor()
```

Do not modify anything else in this file.

---

## Constraints

- **Do not touch `/api/contact`** — it is production and working.
- **Do not touch `/api/health`** — it is used for health checks.
- **Do not add any npm packages** — this uses only native Cloudflare Worker APIs.
- **The fetch in `useVisitor` must be fire-and-forget** — no await, no UI state, no error display.
- **sessionStorage key is `visitor_tracked`** — do not change this key, it prevents duplicate rows per session.
- The `request.cf` object is only available in production Cloudflare Workers. Locally it will be `undefined` — the `?? null` fallbacks handle this correctly, do not add extra guards.

---

## Build and deploy

After implementing the three changes above:

```bash
npx tsc --noEmit   # must pass with zero errors
npm run build
npx wrangler pages deploy dist
```

---

## Verification (run after deploy)

Open `https://santiorduno.com` in Chrome (not Brave), wait 5 seconds, then:

```bash
npx wrangler d1 execute santiorduno-analytics --remote --command "SELECT * FROM visitors ORDER BY id DESC LIMIT 5;"
```

Expected output: one row with `country`, `city`, `timezone`, `org`, `device` populated. If `country` is null, the Worker is running locally or `request.cf` is not available — only valid in production.

---

## What this enables for the case study

Once rows are flowing into D1, these queries become available:

```sql
-- Mobile vs desktop split
SELECT device, COUNT(*) as sessions
FROM visitors
GROUP BY device;

-- Traffic by country (filter bots)
SELECT country, city, org, COUNT(*) as visits
FROM visitors
GROUP BY country, city, org
ORDER BY visits DESC;

-- Bot detection: orgs that aren't ISPs
SELECT org, COUNT(*) as hits
FROM visitors
WHERE org NOT LIKE '%Telmex%'
  AND org NOT LIKE '%Totalplay%'
  AND org NOT LIKE '%Izzi%'
GROUP BY org
ORDER BY hits DESC;

-- Daily traffic trend
SELECT DATE(timestamp) as day, COUNT(*) as visits
FROM visitors
GROUP BY day
ORDER BY day ASC;
```

These queries give data GA4 doesn't: real org names (to identify bots), exact device breakdown, and referrer source without sampling.
