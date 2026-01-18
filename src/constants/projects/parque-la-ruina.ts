import type { ProjectDetail } from '../index';

export const parqueLaRuina: ProjectDetail = {
  id: 2,
  title: "Parque La Ruina",
  slug: "parque-la-ruina",
  description: "Commercial landing page with frontend implementation and strategic visual communication for sustainable impact initiatives.",
  technologies: [
    { id: 1, name: "Webflow" },
    { id: 2, name: "Figma UX/UI Design" }
  ],
  metadata: {
    client: "Grupo Koval",
    year: "2024",
    role: "Designer & Developer"
  },
  content: [
    {
      id: "intro",
      type: "text",
      order: 1,
      data: {
        heading: "Sustainable Urban Development",
        body: "Parque La Ruina represents a unique approach to urban development, combining environmental sustainability with community engagement. The project required a web presence that would communicate these values while driving visitor engagement and community participation.",
        alignment: "left"
      }
    },
    {
      id: "hero-image",
      type: "image",
      order: 2,
      data: {
        src: "/assets/projects/parque-la-ruina/hero.jpg",
        alt: "Parque La Ruina Hero",
        caption: "Main landing page showcasing the park's vision",
        width: "full"
      }
    },
    {
      id: "challenge",
      type: "text",
      order: 3,
      data: {
        heading: "The Challenge",
        body: "Creating a digital experience that would resonate with environmentally conscious visitors while maintaining accessibility and ease of use. The design needed to reflect the natural beauty of the park while providing clear information about events, activities, and sustainability initiatives.",
        alignment: "left"
      }
    },
    {
      id: "design-gallery",
      type: "gallery",
      order: 4,
      data: {
        layout: "grid",
        columns: 2,
        images: [
          {
            src: "/assets/projects/parque-la-ruina/gallery/design-1.jpg",
            alt: "Homepage design",
            caption: "Homepage with nature-inspired aesthetics"
          },
          {
            src: "/assets/projects/parque-la-ruina/gallery/design-2.jpg",
            alt: "Events section",
            caption: "Interactive events calendar"
          }
        ]
      }
    },
    {
      id: "testimonial",
      type: "quote",
      order: 5,
      data: {
        text: "The website perfectly captures our mission of creating sustainable urban spaces. Visitor engagement has increased significantly since launch.",
        author: "Project Director",
        role: "Grupo Koval"
      }
    }
  ]
};
