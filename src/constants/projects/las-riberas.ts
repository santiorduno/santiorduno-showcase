import type { ProjectDetail } from '../index';

export const lasRiberas: ProjectDetail = {
  id: 1,
  title: "Las Riberas",
  slug: "las-riberas",
  description: "End-to-end web development for commercial landing page with focus on user experience and conversion optimization.",
  technologies: [
    { id: 1, name: "Figma UX/UI Design" },
    { id: 2, name: "Webflow development" }
  ],
  metadata: {
    client: "Koval Inmobiliaria",
    year: "2025-2026",
    role: "Lead Developer & Designer",
    liveUrl: "https://lasriberas.mx"
  },
  content: [
    {
      id: "intro",
      type: "text",
      order: 1,
      data: {
        heading: "Project Overview",
        body: "Las Riberas is a luxury residential development that required a sophisticated web presence to match its premium positioning. The project involved complete UX/UI design in Figma followed by development in Webflow, ensuring a seamless user experience and optimal conversion rates.",
        alignment: "left"
      }
    },
    {
      id: "hero-image",
      type: "image",
      order: 2,
      data: {
        src: "/assets/projects/las-riberas/hero.png",
        alt: "Las Riberas Hero Image",
        caption: "Homepage hero section showcasing the development",
        width: "full"
      }
    },
    {
      id: "design-process",
      type: "text",
      order: 3,
      data: {
        heading: "Design Process",
        body: "The design process began with extensive user research and competitive analysis. We created multiple iterations in Figma, focusing on creating an elegant, conversion-optimized experience that would resonate with the target demographic.",
        alignment: "left"
      }
    },
    {
      id: "gallery",
      type: "gallery",
      order: 4,
      data: {
        layout: "grid",
        columns: 3,
        images: [
          {
            src: "/assets/projects/las-riberas/image-1.png",
            alt: "Sitemap",
            caption: "Sitemap"
          },
          {
            src: "/assets/projects/las-riberas/image-2.png",
            alt: "Design mockup 2",
            caption: "Final design system"
          },
          {
            src: "/assets/projects/las-riberas/",
            alt: "Design mockup 3",
            caption: "Mobile responsive views"
          }
        ]
      }
    },
    {
      id: "demo-video",
      type: "video",
      order: 5,
      data: {
        src: "/assets/projects/las-riberas/demo.mp4",
        alt: "Las Riberas Website Demo",
        caption: "Interactive walkthrough of the final website"
      }
    },
    {
      id: "results",
      type: "quote",
      order: 6,
      data: {
        text: "The new website exceeded our expectations, delivering a 40% increase in qualified leads within the first month.",
        author: "Client Name",
        role: "Marketing Director, Grupo Koval"
      }
    }
  ]
};
