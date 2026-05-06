# Case Study: Corporativo Kino
> Contexto para Claude Code — crear archivo `src/constants/projects/corporativo-kino.ts`

---

## Narrativa del case study

**El reto:** Corporativo Kino es un holding industrial con tres unidades de negocio especializadas (Kino Laboratorios, Sustentec y Kindeplan). Su sitio tenía un performance score de 61/100, un payload de 30.6 MB — 6 veces por encima del óptimo — y sin infraestructura de medición. El brief comercial: hacer del sitio una herramienta de ventas real, no solo una presencia corporativa.

**Mi rol:** Estrategia, UX Research, arquitectura de información, design system y propuesta de rediseño completo. El proyecto incluyó análisis técnico del sitio anterior, definición de usuarios objetivo e implementación de Google Analytics por primera vez.

**Lo distintivo:** Antes del diseño, hubo análisis. Antes del rediseño, hubo investigación de usuarios con 4 perfiles distintos. Y antes del lanzamiento, se configuró la medición para que el cliente pudiera medir por primera vez.

---

## Imágenes disponibles en `/public/assets/projects/corporativo-kino/`

- `Hero.mov` — video del sitio final
- `image-1.png` — usar para design system / look & feel
- `image-2.png` — usar para análisis técnico o sitemap
- `thumbnail.png` — thumbnail del proyecto
- `video-1.mov` — video adicional del producto

> Nota: Dado que solo hay 2 imágenes estáticas + 2 videos, la narrativa se construye principalmente con texto bien estructurado + los videos como demostración del resultado final.

---

## Archivo TypeScript — crear completo

```ts
import type { ProjectDetail } from '../index';

export const corporativoKino: ProjectDetail = {
  id: 6,
  title: "Corporativo Kino",
  slug: "corporativo-kino",
  description: "UX strategy, technical audit, and full redesign proposal for an industrial holding with three specialized business units. Research-driven architecture and measurement implementation from scratch.",
  technologies: [
    { id: 1, name: "UX Research" },
    { id: 2, name: "Figma" },
    { id: 3, name: "Webflow" },
    { id: 4, name: "Google Analytics" }
  ],
  metadata: {
    client: "Corporativo Kino",
    year: "2025",
    duration: "6 months",
    role: "UX Strategist & Designer",
  },
  content: [
    {
      id: "overview",
      type: "text",
      order: 1,
      data: {
        heading: "The Challenge",
        body: "Corporativo Kino is an industrial holding operating three specialized units: Kino Laboratorios (technical testing and certifications), Sustentec (environmental consulting), and Kindeplan (planning and sustainability). Their existing site had a performance score of 61/100, a payload of 30.6 MB — six times above the optimum — and no analytics infrastructure. The business problem was concrete: the site wasn't generating qualified leads, and the team had no way to measure why.",
        alignment: "left"
      }
    },
    {
      id: "research",
      type: "text",
      order: 2,
      data: {
        heading: "User Research: Four Profiles, Four Different Needs",
        body: "Before designing anything, I mapped the actual user base. Corporativo Kino serves four distinct industrial profiles, each with a fundamentally different need when they land on the site. Industrial companies and government clients need to see certifications and regulatory authority immediately — trust is the conversion factor. Construction firms and environmental consultancies need to quickly understand service scope for their projects. Mining industry clients need speed: fast access to technical credentials and an equally fast quotation process. This research defined the entire site architecture. One design serving four profiles requires a clear navigation system and distinct conversion paths per business unit.",
        alignment: "left"
      }
    },
    {
      id: "technical-audit",
      type: "text",
      order: 3,
      data: {
        heading: "Technical Audit: Diagnosing Before Prescribing",
        body: "I ran a full performance audit on the existing site before proposing any redesign. The results were clear: Performance score of 61/100 — in the slow (red) range. A target of 90+ is considered fast. Total page payload of 30.6 MB, with 29.6 MB attributable to unoptimized images alone. No mobile-first implementation, causing layout failures on the device used by the majority of their audience. No analytics configuration — the client had no visibility into traffic, user behavior, or conversion. These numbers became the baseline. The redesign proposal was built around solving each of these issues specifically, not aesthetically.",
        alignment: "left"
      }
    },
    {
      id: "sitemap",
      type: "text",
      order: 4,
      data: {
        heading: "Information Architecture",
        body: "The site structure was redesigned around the user profiles identified in research. The main page functions as a trust-building entry point — certifications, services overview, and a direct contact CTA. Six sub-sections branch from it: Nosotros (company and mission), Unidades de Negocio (the three specialized units with distinct conversion paths), Evidencia Técnica (accreditations and testimonials for industrial clients), Recursos (downloadable content and whitepapers), Club Kino (loyalty program), and Contacto (direct WhatsApp connection for fast response). The contact flow was redesigned as a four-step process: trigger → classification by business unit → lead details → confirmation with a 24-hour response promise. This qualification step means the sales team receives leads already sorted by unit of interest.",
        alignment: "left"
      }
    },
    {
      id: "image-sitemap",
      type: "image",
      order: 5,
      data: {
        src: "/assets/projects/corporativo-kino/image-2.png",
        alt: "Corporativo Kino — Site architecture and design system",
        caption: "Site architecture: main page + 6 sub-sections, each with tailored content and conversion strategy per user profile",
        width: "full"
      }
    },
    {
      id: "design-system",
      type: "text",
      order: 6,
      data: {
        heading: "Design System",
        body: "I built the design system in Figma from primitive color variables — a neutral palette with accent greens reflecting Kino's environmental positioning. Typography uses Roboto for headings and Inter for body text, both optimized for legibility at industrial content density. The UI component library covers the full interface: button states in light and dark mode, form inputs (text fields, text areas, selects), tags, and checkboxes. The system was designed to hand off directly to Webflow CMS, enabling the marketing team to update content, upload resources, and edit the blog without developer involvement.",
        alignment: "left"
      }
    },
    {
      id: "image-ds",
      type: "image",
      order: 7,
      data: {
        src: "/assets/projects/corporativo-kino/image-1.png",
        alt: "Corporativo Kino — Design system and look & feel",
        caption: "Design system (Roboto + Inter, color primitives, full UI component library) and look & feel exploration in desktop and mobile",
        width: "full"
      }
    },
    {
      id: "analytics",
      type: "text",
      order: 8,
      data: {
        heading: "Implementing Measurement for the First Time",
        body: "One of the most commercially relevant deliverables of this project was configuring Google Analytics and Search Console as part of the launch package. Corporativo Kino had no visibility into their own site traffic. The implementation gave them a clear baseline: traffic sources, user behavior by section, and interaction data per business unit. This wasn't a nice-to-have — it was the foundation for any future design or marketing decision to be data-informed rather than assumption-based.",
        alignment: "left"
      }
    },
    {
      id: "phased-approach",
      type: "text",
      order: 9,
      data: {
        heading: "Phased Delivery",
        body: "The project was structured in three phases to manage risk and investment. Phase 1 covered the core: site architecture, design system, look & feel, and a development-ready Figma handoff. Phase 2 focused on frontend development with a mobile-first approach and the optimized quotation system. Phase 3 was analytics configuration and official launch. This phased structure allowed the client to validate the direction before committing to full development — a decision that protected both sides.",
        alignment: "left"
      }
    },
    {
      id: "result-video",
      type: "video",
      order: 10,
      data: {
        src: "/assets/projects/corporativo-kino/Hero.mov",
        alt: "Corporativo Kino — Final site walkthrough",
        caption: "Final design walkthrough: desktop and mobile experience"
      }
    },
    {
      id: "result-video-2",
      type: "video",
      order: 11,
      data: {
        src: "/assets/projects/corporativo-kino/video-1.mov",
        alt: "Corporativo Kino — Mobile experience and component detail",
        caption: "Mobile-first implementation detail and UI components in context"
      }
    }
  ]
};
```

---

## Actualización en `constants/index.tsx`

Agregar entrada al array `projects[]`:

```ts
{
  id: 6,
  title: "Corporativo Kino",
  slug: "corporativo-kino",
  description: "UX strategy, technical audit, and redesign for an industrial holding. Research-first approach with analytics implementation from scratch.",
  image: "/assets/projects/corporativo-kino/thumbnail.png",
  technologies: [
    { id: 1, name: "UX Research" },
    { id: 2, name: "Figma" },
    { id: 3, name: "Webflow" },
    { id: 4, name: "Google Analytics" }
  ]
}
```

---

## Actualización en `constants/projects/index.ts`

Agregar export:

```ts
export { corporativoKino } from './corporativo-kino';
```

---

## Notas para Claude Code

- Crear archivo nuevo: `src/constants/projects/corporativo-kino.ts`
- El id `6` es provisional — verificar que no exista otro proyecto con ese id en `constants/index.tsx`
- Los videos son `.mov` — verificar que el componente `VideoBlock` en `src/components/project-detail/content-blocks/` acepte ese formato, o convertir a `.mp4` si hay problemas de compatibilidad en navegadores
- Si existe `src/i18n/content/es/projects/`, crear el overlay en español con los campos `heading` y `body` traducidos
- El archivo `image-2.png` se usa para representar el sitemap + estructura — si visualmente no es claro en contexto, se puede reubicar en order 3 junto al texto de arquitectura
- Verificar que `thumbnail.png` tenga las mismas dimensiones que los otros thumbnails del proyecto

