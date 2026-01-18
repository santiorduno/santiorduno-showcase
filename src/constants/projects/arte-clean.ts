import type { ProjectDetail } from '../index';

export const arteClean: ProjectDetail = {
  id: 4,
  title: "ArteClean",
  slug: "arte-clean",
  description: "A high-performance digital platform built with Astro for a Tucson-based cleaning service, focusing on speed, professional branding, and customer conversion.",
  technologies: [
    { id: 1, name: "Astro JS" },
    { id: 2, name: "Tailwind CSS" },
    { id: 3, name: "TypeScript" },
    { id: 4, name: "Figma" }
  ],
  metadata: {
    client: "ArteClean LLC",
    year: "2025",
    role: "UX/UI Designer & Web Developer",
    liveUrl: "https://arte-clean.vercel.app/",
  },
  content: [
    {
      id: "concept",
      type: "text",
      order: 1,
      data: {
        heading: "Precision and Care in Every Pixel",
        body: "ArteClean is more than a cleaning service; it is a promise of space transformation through precision. The core objective of this project was to capture that philosophy in a digital experience that transmits trust, professionalism, and absolute clarity from the first click.",
        alignment: "left"
      }
    },
    {
      id: "hero-shot",
      type: "image",
      order: 2,
      data: {
        src: "/assets/projects/arte-clean/hero.png",
        alt: "ArteClean Branding and Web Header",
        caption: "Visual identity and web concept focusing on cleanliness and professional trust.",
        width: "large"
      }
    },
    {
      id: "design-philosophy",
      type: "text",
      order: 3,
      data: {
        heading: "Clean and Intuitive Interface",
        body: "The UI strategy centered on a clean, uncluttered interface using ample white space to let the content and high-quality imagery take center stage. The architecture was meticulously designed to guide users intuitively from the services list directly to the contact form, ensuring a frictionless conversion path.",
        alignment: "left"
      }
    },
    {
      id: "desktop-view",
      type: "image",
      order: 4,
      data: {
        src: "/assets/projects/arte-clean/image-1.png",
        alt: "ArteClean Desktop Experience",
        caption: "The desktop layout emphasizes white space and clear call-to-actions.",
        width: "large"
      }
    },
    {
      id: "tech-stack",
      type: "text",
      order: 5,
      data: {
        heading: "Optimized Performance with Astro",
        body: "To ensure the user experience was as fluid as the design, the site was developed using Astro. This choice guaranteed exceptional loading speeds and optimal performance across all devices, significantly improving user navigation and the site's SEO positioning.",
        alignment: "left"
      }
    },
    {
      id: "mobile-experience",
      type: "image",
      order: 6,
      data: {
        src: "/assets/projects/arte-clean/image-3.png",
        alt: "ArteClean Mobile Responsive View",
        caption: "Fully responsive design for users seeking quick service quotes on the go.",
        width: "medium"
      }
    },
    {
      id: "color-palette",
      type: "image",
      order: 7,
      data: {
        src: "/assets/projects/arte-clean/image-2.png",
        alt: "ArteClean Color Selection",
        caption: "A palette dominated by blues and whites to evoke freshness, serenity, and neatness.",
        width: "large"
      }
    },
    {
      id: "final-result",
      type: "text",
      order: 8,
      data: {
        heading: "A Functional Business Tool",
        body: "The result is an elegant and functional digital platform that serves as the perfect introduction for ArteClean—a website that not only looks professional but also works as an effective tool for acquiring new clients.",
        alignment: "left"
      }
    }
  ]
};