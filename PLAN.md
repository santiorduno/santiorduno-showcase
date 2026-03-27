# santiorduno-showcase — Plan de migración y corrección

Portfolio personal de Santiago Orduño. React 19 + TypeScript + Vite 6 + Tailwind 4 + GSAP + Three.js (R3F) + Lenis. Actualmente deployado en Vercel con una serverless function para contacto que usa Supabase + Resend. Supabase está congelada (free tier pausado por inactividad). Se migra todo a Cloudflare Pages.

Repo: `https://github.com/santiorduno/santiorduno-showcase.git`
Dominio: `santiorduno.com`

---

# 1. Problemas detectados

Errores concretos que deben corregirse antes o durante la migración.

* Repo pesa 94MB por assets binarios en Git
   * `public/models/Planet.glb` — 18MB (modelo 3D del hero)
   * `public/assets/projects/las-riberas/demo.mp4` — 19MB
   * `public/assets/projects/santa-eventos/demo.mp4` — 1.5MB
   * `public/assets/projects/las-riberas/thumbnail.png` — 1.1MB (excesivo para un thumbnail)
   * `public/assets/projects/arte-clean/image-1.png` — 1.2MB
   * `public/fonts/` — 20 archivos (OTF + TTF duplicados, solo se necesita un formato)

* Proyectos fantasma sin assets
   * `src/constants/projects/parque-la-ruina.ts` y `src/constants/projects/qcom-ecommerce.ts` están importados en `src/constants/projects/index.ts` dentro del array `projectsContent`
   * Pero NO están en el array `projects` de `src/constants/index.tsx` (el que renderiza la homepage en `src/sections/Projects.tsx`)
   * NO tienen carpeta de assets en `public/assets/projects/`
   * Las rutas `/projects/parque-la-ruina` y `/projects/qcom-ecommerce` renderizan con imágenes rotas

* Errores de contenido
   * `src/constants/index.tsx` línea 114 — texto `[cite: 7]` en la descripción del servicio "Product Design" (artefacto de IA que se quedó en producción)
   * `src/constants/index.tsx` línea 163 — typo "Comertial Design", debe ser "Commercial Design"

* `index.html` vacío de metadata
   * Sin meta description
   * Sin Open Graph tags (og:title, og:description, og:image)
   * Sin favicon propio (usa el default `/vite.svg`)
   * Sin `robots.txt` en `public/`
   * Sin `sitemap.xml` en `public/`

* Dependencies mal ubicadas en `package.json`
   * `dotenv`, `vercel`, `@supabase/supabase-js`, `resend` están en `dependencies` (se bundlean al frontend) pero solo se usan en `api/contact.ts` (serverless function)

* README desactualizado
   * Referencia `vercel.json` que no existe en el repo
   * Referencia directorio `plans/` que no existe
   * Dice "Custom CMS System" cuando es contenido hardcodeado en archivos `.ts`

---

# 2. Migración: Supabase → Cloudflare

El único uso de Supabase es en `api/contact.ts` — guarda mensajes de contacto en una tabla `contacts` con 4 campos (name, email, subject, message). Supabase se elimina completamente.

## 2.1 Recuperar datos de Supabase

* Ir a `app.supabase.com` → proyecto → click "Restore" (si está pausado por free tier)
* Exportar tabla `contacts` como CSV desde el dashboard de Supabase
* Guardar backup local

## 2.2 Eliminar Supabase del proyecto

* Eliminar `@supabase/supabase-js` de `package.json`
* Eliminar `dotenv` de `package.json` (no se usa en frontend)
* Eliminar `vercel` de `package.json` (no se necesita como dependency)
* Eliminar `resend` de `package.json` dependencies (se usará en el Worker, no en el frontend bundle)
* Eliminar `@vercel/node` de `devDependencies`
* Eliminar el directorio `api/` completo (`api/contact.ts` se reemplaza por Cloudflare Pages Function)
* Eliminar referencias a `.supabase` y `.resend` del `.gitignore` (limpieza)
* Eliminar referencia a `.vercel` del `.gitignore`

## 2.3 Crear Cloudflare Pages Function para contacto

Crear archivo `functions/api/contact.ts` (Cloudflare Pages Functions convention — el directorio `functions/` en la raíz del proyecto mapea automáticamente a rutas serverless):

```
functions/
  api/
    contact.ts    → se sirve como POST /api/contact
```

La función solo usa Resend para enviar email. Sin base de datos, sin storage. El formulario de contacto en `src/sections/Contact.tsx` ya hace `fetch('/api/contact', ...)` — esa ruta no cambia.

Estructura de la function:

```typescript
// functions/api/contact.ts
interface Env {
  RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  // 1. Parsear body
  // 2. Validar campos (name, email, subject, message)
  // 3. Enviar email con Resend usando fetch directo a https://api.resend.com/emails
  //    (no usar el SDK resend — usar fetch nativo para evitar bundling issues en Workers)
  // 4. Retornar JSON response
  // CORS: Cloudflare Pages Functions en el mismo dominio no necesitan headers CORS extras
};
```

Usar fetch directo a la API de Resend en lugar del SDK:

```typescript
const res = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: 'Portfolio Contact <noreply@santiorduno.com>',
    to: 'contacto@santiorduno.com',
    subject: `Nuevo mensaje de ${name}: ${subject}`,
    html: `...` // mismo template que el actual
  }),
});
```

Environment variables: configurar `RESEND_API_KEY` en Cloudflare Pages dashboard → Settings → Environment variables.

## 2.4 Configurar Cloudflare Pages

* Build command: `npm run build`
* Output directory: `dist`
* Root directory: `/` (raíz del repo)
* Framework preset: ninguno (Vite genérico)
* Conectar repo de GitHub para deploy automático en cada push

## 2.5 Verificar que el frontend no cambia

El formulario en `src/sections/Contact.tsx` (línea 32) ya hace:

```typescript
const response = await fetch('/api/contact', { method: 'POST', ... });
```

Esta ruta se mantiene igual. No hay cambios en el frontend.

---

# 3. Google Analytics + SEO básico

## 3.1 Google Analytics 4

Agregar en `index.html` dentro del `<head>`, ANTES del cierre:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Reemplazar `G-XXXXXXXXXX` con el Measurement ID real de GA4 (lo obtiene el usuario desde analytics.google.com → Admin → Data Streams).

## 3.2 Meta tags en `index.html`

Actualizar el `<head>` de `index.html`:

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Santiago Orduño — Product Designer & Web Developer</title>
<meta name="description" content="Portfolio de Santiago Orduño. Diseño UX/UI, desarrollo web y contenido visual con IA. Hermosillo, México." />
<link rel="icon" type="image/jpeg" href="/images/favicon.jpg" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Santiago Orduño — Product Designer & Web Developer" />
<meta property="og:description" content="Portfolio de Santiago Orduño. Diseño UX/UI, desarrollo web y contenido visual con IA." />
<meta property="og:image" content="https://santiorduno.com/images/og-image.jpg" />
<meta property="og:url" content="https://santiorduno.com" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Santiago Orduño — Product Designer & Web Developer" />
<meta name="twitter:description" content="Portfolio de Santiago Orduño. Diseño UX/UI, desarrollo web y contenido visual con IA." />
<meta name="twitter:image" content="https://santiorduno.com/images/og-image.jpg" />
```

El usuario debe crear y colocar:
* `public/images/favicon.jpg` (o .png/.ico) — favicon del sitio
* `public/images/og-image.jpg` — imagen de 1200x630px para previews en redes sociales

## 3.3 robots.txt

Crear `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://santiorduno.com/sitemap.xml
```

## 3.4 sitemap.xml

Crear `public/sitemap.xml` con las rutas actuales:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemapschemas.org/sitemap/0.9">
  <url><loc>https://santiorduno.com/</loc></url>
  <url><loc>https://santiorduno.com/projects/las-riberas</loc></url>
  <url><loc>https://santiorduno.com/projects/santa-eventos</loc></url>
  <url><loc>https://santiorduno.com/projects/arte-clean</loc></url>
  <url><loc>https://santiorduno.com/projects/neurop</loc></url>
  <url><loc>https://santiorduno.com/projects/this-website</loc></url>
</urlset>
```

No incluir `parque-la-ruina` ni `qcom-ecommerce` porque tienen imágenes rotas.

---

# 4. Correcciones de contenido

## 4.1 Artefacto de IA

* `src/constants/index.tsx` línea 114 — eliminar `[cite: 7]` del string de descripción del servicio "Product Design"

## 4.2 Typo

* `src/constants/index.tsx` línea 163 — cambiar `"Comertial Design"` por `"Commercial Design"`

## 4.3 Proyectos fantasma

Dos opciones (decidir con el usuario):

* Opción A: eliminar `src/constants/projects/parque-la-ruina.ts` y `src/constants/projects/qcom-ecommerce.ts`, y remover sus imports de `src/constants/projects/index.ts`
* Opción B: crear sus carpetas de assets en `public/assets/projects/parque-la-ruina/` y `public/assets/projects/qcom-ecommerce/`, agregar imágenes reales, y añadirlos al array `projects` en `src/constants/index.tsx`

---

# 5. Optimización de assets (post-migración)

Esto no bloquea la migración pero reduce el repo de 94MB a ~15MB estimado.

* Convertir imágenes PNG a WebP (80% reducción típica)
* Comprimir `Planet.glb` con glTF-Transform o Draco compression
* Eliminar archivos OTF de `public/fonts/` (mantener solo TTF, o viceversa) — actualizar los `@font-face` en `src/index.css` acorde
* Mover videos (demo.mp4) a Cloudflare R2 o un CDN externo, y referenciarlos por URL en los archivos de proyecto
* Optimizar thumbnails a max 200KB

---

# 6. Orden de ejecución

1. Corregir errores de contenido (4.1, 4.2, 4.3)
2. Limpiar `package.json` y eliminar `api/contact.ts` (2.2)
3. Crear `functions/api/contact.ts` para Cloudflare (2.3)
4. Agregar GA4 + meta tags + robots.txt + sitemap.xml (3.1–3.4)
5. Actualizar `index.html` (3.2)
6. Build test local: `npm run build` — verificar que `dist/` genera correctamente
7. Push a GitHub → configurar Cloudflare Pages (2.4)
8. Configurar env vars en Cloudflare dashboard (RESEND_API_KEY)
9. Probar formulario de contacto en producción
10. Optimización de assets (5) — branch separado
