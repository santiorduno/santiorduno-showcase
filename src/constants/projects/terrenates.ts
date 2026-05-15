import type { ProjectDetail } from '../index';

export const terrenates: ProjectDetail = {
  id: 5,
  title: "Terrenates",
  slug: "terrenates",
  description: "Brand identity and two-product digital system for a five-generation conservation ranch in Chihuahua — institutional site and Artisan Butchery D2C landing.",
  technologies: [
    { id: 1, name: "Figma" },
    { id: 2, name: "Design System" },
    { id: 3, name: "Brand Identity" },
    { id: 4, name: "Design Tokens" }
  ],
  metadata: {
    client: "Rancho Terrenates",
    year: "2025–2026",
    role: "Brand & Product Designer",
  },
  content: [
    {
      id: "overview",
      type: "text",
      order: 1,
      data: {
        heading: "One Identity. Two Products.",
        body: "Terrenates is five generations of ranching compressed into 7,000 hectares at 1,550 to 2,650 meters above sea level in Buenaventura, Chihuahua. The ranch holds an ADVC conservation certificate from CONANP — 5,200 hectares voluntarily protected. It operates two commercially distinct products: an institutional presence serving livestock buyers, conservation partners, and ecotourism guests; and Artisan Butchery, a direct-to-consumer operation that sells 21-day dry-aged beef without a physical storefront. One visual identity had to hold both without collapsing either into the other.",
        alignment: "left"
      }
    },
    {
      id: "hero-image",
      type: "image",
      order: 2,
      data: {
        src: "/assets/projects/terrenates/Hero.png",
        alt: "Terrenates — Institutional homepage design",
        caption: "Institutional homepage: 'Ganadería que regenera la tierra.' — heritage narrative, conservation stats, and the ranch's five-generation authority",
        width: "full"
      }
    },
    {
      id: "design-system",
      type: "text",
      order: 3,
      data: {
        heading: "The Design System",
        body: "Three typefaces, five color schemes, one token collection. Oswald carries display and headings — it gives the institutional product its territorial authority. Helvetica Neue handles body copy across the rancho site: neutral, legible, appropriately serious. Inter takes every interactive element — buttons, labels, CTAs — across both products. The color system was built as five interchangeable modes: Ivory and Cream for the ranch's narrative sections, Burgundy for conversion moments, Charcoal for the dry-age section, Sage for the ADVC conservation story. Every fill resolves to a Design Token from the 'Design Tokens · Terrenates' collection — swapping a section's scheme doesn't touch its content.",
        alignment: "left"
      }
    },
    {
      id: "design-system-image",
      type: "image",
      order: 4,
      data: {
        src: "/assets/projects/terrenates/image-2.png",
        alt: "Terrenates — Style guide: typography scale, color schemes, and design tokens",
        caption: "Style guide: typographic scale (Oswald / Helvetica Neue / Inter), five color schemes, and the primitive palette tied to Figma variable collections",
        width: "full"
      }
    },
    {
      id: "artisan-butchery",
      type: "text",
      order: 5,
      data: {
        heading: "Artisan Butchery: A Different Logic",
        body: "The butchery operates without a storefront. Orders come through WhatsApp. The landing page does the work that a physical space would normally do — establish trust, communicate provenance, and give the buyer a reason to choose a number over a supermarket shelf. The copy was stripped to data: 21 días. 5 generaciones. 7,000 hectáreas. Cero intermediarios. The hero headline is permanent: 'Criado con tiempo.' Every section moves through a single argument — the time and land behind the product are the product.",
        alignment: "left"
      }
    },
    {
      id: "butchery-image",
      type: "image",
      order: 6,
      data: {
        src: "/assets/projects/terrenates/image-3.png",
        alt: "Terrenates Artisan Butchery — D2C landing page design",
        caption: "Artisan Butchery landing: origin stats, heritage timeline (1890 → 1960 → 2024), and the Burgundy final CTA — 'Ordena directo.'",
        width: "full"
      }
    },
    {
      id: "catalog-component",
      type: "text",
      order: 7,
      data: {
        heading: "The Protein Catalog",
        body: "The most technically structured component in the system is the protein catalog: seven Figma variant states, each expanding a different protein category with its cut cards — Res, Pollo, Cordero, Pavo, Cerdo, and Otros Productos. Each variant uses auto-layout over a fixed 1,240px grid. When the inner grid is cleared between variants, the frame collapses — so every state requires a `grid.resize(1240, 272)` call before populating new cards. The 'Contenido · Terrenates' variable collection stores all copy in Desktop and Mobile modes: content is edited once, both breakpoints update.",
        alignment: "left"
      }
    },
    {
      id: "catalog-image",
      type: "image",
      order: 8,
      data: {
        src: "/assets/projects/terrenates/image-4.png",
        alt: "Terrenates — Protein catalog component and UI elements",
        caption: "Protein catalog component (7 variants), button system (4 types × 4 states), and section layout showing the Artisan Butchery cut cards",
        width: "full"
      }
    },
    {
      id: "demo-video",
      type: "video",
      order: 9,
      data: {
        src: "/assets/projects/terrenates/demo.mov",
        alt: "Terrenates — Full design walkthrough",
        caption: "Design walkthrough: institutional site and Artisan Butchery landing — both products, one system"
      }
    }
  ]
};
