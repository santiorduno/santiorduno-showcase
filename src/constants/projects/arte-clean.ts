import type { ProjectDetail } from '../index';

export const arteClean: ProjectDetail = {
  id: 5,
  title: "Arte Clean & Corporativo Kino",
  slug: "arte-clean-corporativo-kino",
  description: "Web development projects utilizing various frameworks and rendering methods based on project requirements.",
  thumbnail: "/assets/projects/arte-clean/thumbnail.jpg",
  technologies: [
    { id: 1, name: "SSR" },
    { id: 2, name: "CSR" },
    { id: 3, name: "Static Generation" }
  ],
  metadata: {
    year: "2024",
    role: "Full-Stack Developer"
  },
  content: [
    {
      id: "intro",
      type: "text",
      order: 1,
      data: {
        heading: "Multi-Framework Web Solutions",
        body: "Arte Clean and Corporativo Kino represent two distinct web development projects that showcase the versatility of modern web technologies. Each project utilized different rendering strategies based on specific requirements and performance goals.",
        alignment: "left"
      }
    },
    {
      id: "arte-clean-image",
      type: "image",
      order: 2,
      data: {
        src: "/assets/projects/arte-clean/arte-clean-hero.jpg",
        alt: "Arte Clean Website",
        caption: "Arte Clean - Professional cleaning services website",
        width: "large"
      }
    },
    {
      id: "technical-approach",
      type: "text",
      order: 3,
      data: {
        heading: "Technical Implementation",
        body: "The projects leveraged different rendering strategies:\n\n• Server-Side Rendering (SSR) for dynamic content and SEO optimization\n• Client-Side Rendering (CSR) for interactive user interfaces\n• Static Site Generation for optimal performance and scalability\n\nThis multi-faceted approach ensured each project received the most appropriate technical solution for its specific needs.",
        alignment: "left"
      }
    },
    {
      id: "kino-image",
      type: "image",
      order: 4,
      data: {
        src: "/assets/projects/arte-clean/kino-hero.jpg",
        alt: "Corporativo Kino Website",
        caption: "Corporativo Kino - Corporate services platform",
        width: "large"
      }
    },
    {
      id: "comparison",
      type: "gallery",
      order: 5,
      data: {
        layout: "grid",
        columns: 2,
        images: [
          {
            src: "/assets/projects/arte-clean/gallery/arte-services.jpg",
            alt: "Arte Clean services",
            caption: "Arte Clean service offerings"
          },
          {
            src: "/assets/projects/arte-clean/gallery/kino-dashboard.jpg",
            alt: "Kino dashboard",
            caption: "Corporativo Kino admin interface"
          }
        ]
      }
    },
    {
      id: "results",
      type: "text",
      order: 6,
      data: {
        heading: "Performance Results",
        body: "Both projects achieved excellent performance metrics with Lighthouse scores above 90. The strategic use of different rendering methods resulted in fast load times, excellent SEO rankings, and smooth user experiences across all devices.",
        alignment: "left"
      }
    }
  ]
};
