import type { ProjectDetail } from '../index';

export const thisWebsite: ProjectDetail = {
  id: 7,
  title: "Personal Portfolio & CMS",
  slug: "this-website",
  description: "A high-performance UX Engineering showcase featuring a custom-built CMS, serverless architecture, and advanced motion design.",
  technologies: [
    { id: 1, name: "React 19" },
    { id: 2, name: "GSAP" },
    { id: 3, name: "Three.js" },
    { id: 4, name: "Supabase" },
    { id: 5, name: "Tailwind CSS" }
  ],
  metadata: {
    year: "2026",
    role: "UX Engineer & Full Stack Developer",
    liveUrl: "https://santiorduno.com",
    githubUrl: "https://github.com/santiorduno/portfolio-v2"
  },
  content: [
    {
      id: "vision",
      type: "text",
      order: 1,
      data: {
        heading: "The Architecture of a Brand",
        body: "This project serves as a living laboratory for my work as a UX Engineer. It wasn't just about building a portfolio, but creating a scalable ecosystem that combines high-end visual storytelling with a robust technical foundation. The goal was to bridge the gap between creative 3D design and structured data management.",
        alignment: "left"
      }
    },
    {
      id: "tech-stack-showcase",
      type: "image",
      order: 2,
      data: {
        src: "/assets/projects/portfolio/architecture.jpg",
        alt: "Tech Stack Architecture",
        caption: "Built with React 19, GSAP for motion, and a custom TypeScript CMS structure.",
        width: "large"
      }
    },
    {
      id: "cms-logic",
      type: "text",
      order: 3,
      data: {
        heading: "Custom Content Management",
        body: "Unlike standard static portfolios, I developed a modular CMS-like system using TypeScript interfaces. This allows for dynamic project rendering through flexible content blocks (text, media, galleries, and quotes), making the site easily maintainable and scalable without refactoring the core UI components.",
        alignment: "left"
      }
    },
    {
      id: "motion-design",
      type: "gallery",
      order: 4,
      data: {
        layout: "grid",
        columns: 2,
        images: [
          {
            src: "/assets/projects/portfolio/gsap-scroll.jpg",
            alt: "GSAP ScrollTrigger Implementation",
            caption: "Advanced scroll-based animations"
          },
          {
            src: "/assets/projects/portfolio/threejs-hero.jpg",
            alt: "Three.js Hero Scene",
            caption: "Interactive 3D planetary rendering"
          }
        ]
      }
    },
    {
      id: "serverless-integration",
      type: "text",
      order: 5,
      data: {
        heading: "Full-Stack Capabilities",
        body: "To handle user interactions, I implemented a serverless backend using Vercel Functions. The contact system is integrated with Supabase (PostgreSQL) for lead storage and Resend for real-time email notifications, demonstrating a complete end-to-end professional solution within a frontend-centric stack.",
        alignment: "left"
      }
    },
        /*
    {
      id: "achievement-quote",
      type: "quote",
      order: 6,
      data: {
        text: "Building this site was an exercise in technical discipline. It represents my ability to handle complex data structures while maintaining a pixel-perfect user experience.",
        author: "Santi Orduño",
        role: "UX Engineer"
      }
    }
        */
  ]
};