import type { ProjectDetail } from '../index';

export const lasRiberas: ProjectDetail = {
  id: 1,
  title: "Las Riberas",
  slug: "las-riberas",
  description: "UX strategy, design system, and Webflow development for a premium residential development. Research-driven decisions validated with heatmaps and user behavior data.",
  technologies: [
    { id: 1, name: "Figma" },
    { id: 2, name: "Webflow" },
    { id: 3, name: "Attention Insight" },
    { id: 4, name: "UX Research" }
  ],
  metadata: {
    client: "Koval Inmobiliaria",
    year: "2025–2026",
    duration: "8 months",
    role: "Lead UX Designer & Developer",
    liveUrl: "https://lasriberas.mx"
  },
  content: [
    {
      id: "overview",
      type: "text",
      order: 1,
      data: {
        heading: "The Challenge",
        body: "Las Riberas had 10 years in the Hermosillo real estate market and a complex product portfolio — residential lots, ready-to-move homes, and custom villas. Their existing web presence didn't reflect their premium positioning and lacked a clear conversion path for each buyer profile. The goal was to redesign the entire digital experience: from information architecture to a scalable design system, all implemented in Webflow.",
        alignment: "left"
      }
    },
    {
      id: "hero-image",
      type: "image",
      order: 2,
      data: {
        src: "/assets/projects/las-riberas/hero.png",
        alt: "Las Riberas — Lifestyle section showing Club Deportivo amenity",
        caption: "Lifestyle-driven section design highlighting the development's amenities",
        width: "full"
      }
    },
    {
      id: "process-ia",
      type: "text",
      order: 3,
      data: {
        heading: "Information Architecture First",
        body: "Before any visual design, I mapped the complete site structure in FigJam. The development has three distinct buyer profiles — lot buyers, home buyers, and villa buyers — each requiring a different conversion path. The sitemap defined separate landing experiences per product type, with a shared navigation system and unified CTAs across all pages.",
        alignment: "left"
      }
    },
    {
      id: "sitemap-image",
      type: "image",
      order: 4,
      data: {
        src: "/assets/projects/las-riberas/image-2.png",
        alt: "Las Riberas — Site architecture mapped in FigJam",
        caption: "Full site architecture: main page + three product sub-sites (Lotes, Casas, Villas), each with tailored conversion flows",
        width: "full"
      }
    },
    {
      id: "design-system",
      type: "text",
      order: 5,
      data: {
        heading: "Design System from Scratch",
        body: "I built the design system entirely in Figma — starting with primitive color variables, then typography (Palatino for headings, Neuzeit Grotesk for body), and a full UI component library including buttons, inputs, tags, and checkboxes in both light and dark modes. This system ensured visual consistency across all product pages and made the Webflow implementation significantly faster.",
        alignment: "left"
      }
    },
    {
      id: "design-system-image",
      type: "image",
      order: 6,
      data: {
        src: "/assets/projects/las-riberas/image-3.png",
        alt: "Las Riberas — Design system: typography, color variables, UI components",
        caption: "Design system: typography scale, primitive color variables, and full UI component library",
        width: "full"
      }
    },
    {
      id: "validation-intro",
      type: "text",
      order: 7,
      data: {
        heading: "Validating with Real User Behavior",
        body: "After launch, I used Attention Insight to run predictive heatmap analysis across key pages. The goal was to identify whether users were reaching the CTAs and engaging with the most commercially important content — and where we were losing attention before conversion.",
        alignment: "left"
      }
    },
    {
      id: "heatmap-hero",
      type: "image",
      order: 8,
      data: {
        src: "/assets/projects/las-riberas/image-6.png",
        alt: "Attention Insight heatmap — hero section showing strong CTA engagement at 3.3%",
        caption: "Hero heatmap: user attention concentrated on the main CTA and headline — with the 'Contacto' button registering 3.3% click rate",
        width: "full"
      }
    },
    {
      id: "heatmap-analysis",
      type: "text",
      order: 9,
      data: {
        heading: "What the Heatmaps Revealed",
        body: "The attention analysis across three key sections showed a consistent pattern: users engaged strongly with headlines and product names (Casa Alpina, Casa Azkar), but the CTAs below the fold were losing attention before users reached them. This confirmed a design decision made during architecture: each product section needed its CTA within the visible area, not below the image grid. The heatmap data validated the layout structure and informed copy adjustments on the product cards.",
        alignment: "left"
      }
    },
    {
      id: "heatmap-products",
      type: "gallery",
      order: 10,
      data: {
        layout: "grid",
        columns: 2,
        images: [
          {
            src: "/assets/projects/las-riberas/image-4.png",
            alt: "Heatmap — Lifestyle section with dual product CTAs",
            caption: "Lifestyle section: strong attention on product names, CTAs needed repositioning"
          },
          {
            src: "/assets/projects/las-riberas/image-5.png",
            alt: "Click map — Section interaction data with spacing analysis",
            caption: "Click map overlay: spacing and grid decisions validated against real interaction data"
          }
        ]
      }
    },
    {
      id: "final-design",
      type: "image",
      order: 11,
      data: {
        src: "/assets/projects/las-riberas/image-1.png",
        alt: "Las Riberas — Final design: amenities section with lifestyle imagery",
        caption: "Final implementation: amenity showcase section with Club Deportivo, Golf, Centro Ecuestre and lifestyle brands",
        width: "full"
      }
    },
    {
      id: "outcome",
      type: "text",
      order: 12,
      data: {
        heading: "Outcome",
        body: "The final site serves three buyer profiles through distinct conversion paths, built on a unified design system that scales across product pages. The heatmap validation process established a feedback loop between design decisions and real user behavior — replacing assumption-based iteration with evidence-based adjustments. The site is live at lasriberas.mx.",
        alignment: "left"
      }
    },
    {
      id: "demo-video",
      type: "video",
      order: 13,
      data: {
        src: "/assets/projects/las-riberas/demo.mp4",
        alt: "Las Riberas — Full site walkthrough",
        caption: "Interactive walkthrough of the final website"
      }
    }
  ]
};
