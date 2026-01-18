import type { ProjectDetail } from '../index';

export const santaEventos: ProjectDetail = {
  id: 2,
  title: "Santa Eventos",
  slug: "santa-eventos",
  description: "Complete web solution focusing on user experience and conversion-optimized design.",
  technologies: [
    { id: 1, name: "Figma" },
    { id: 2, name: "Relume" }
  ],
  metadata: {
    year: "2025",
    role: "UX/UI Designer"
  },
  content: [
    {
      id: "overview",
      type: "text",
      order: 1,
      data: {
        heading: "Event Management Platform",
        body: "Santa Eventos needed a comprehensive web solution to showcase their event planning services and streamline client inquiries. The focus was on creating an intuitive user experience that would convert visitors into clients.",
        alignment: "left"
      }
    },
    {
      id: "hero",
      type: "image",
      order: 2,
      data: {
        src: "/assets/projects/santa-eventos/hero.png",
        alt: "Santa Eventos Homepage",
        caption: "Modern, elegant homepage design",
        width: "full"
      }
    },
    {
      id: "design-system",
      type: "text",
      order: 3,
      data: {
        heading: "Design System Development",
        body: "Created a comprehensive design system in Figma to ensure consistency across all pages and components. The system includes typography, color palettes, spacing guidelines, and reusable components that can be easily maintained and scaled.",
        alignment: "left"
      }
    },
    {
      id: "prototypes",
      type: "gallery",
      order: 4,
      data: {
        layout: "grid",
        columns: 3,
        images: [
          {
            src: "/assets/projects/santa-eventos/image-1.png",
            alt: "Services page",
            caption: "Services showcase"
          },
          {
            src: "/assets/projects/santa-eventos/image-2.png",
            alt: "Portfolio page",
            caption: "Event portfolio"
          },
          {
            src: "/assets/projects/santa-eventos/image-3.png",
            alt: "Contact page",
            caption: "Contact form design"
          }
        ]
      }
    },
    /*
    {
      id: "results-quote",
      type: "quote",
      order: 5,
      data: {
        text: "The new website has transformed how we present our services. Client inquiries have doubled, and the feedback has been overwhelmingly positive.",
        author: "Owner",
        role: "Santa Eventos"
      }
    }
    */
  ]
};
