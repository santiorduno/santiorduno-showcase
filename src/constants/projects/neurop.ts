import type { ProjectDetail } from '../index';

export const neurop: ProjectDetail = {
  id: 6,
  title: "Neurop",
  slug: "neurop",
  description: "Custom web solution with focus on technical implementation and user experience.",
  technologies: [
    { id: 1, name: "Web Development" },
    { id: 2, name: "Frontend" }
  ],
  metadata: {
    year: "2024",
    role: "Frontend Developer"
  },
  content: [
    {
      id: "overview",
      type: "text",
      order: 1,
      data: {
        heading: "Healthcare Web Platform",
        body: "Neurop is a specialized healthcare platform requiring a clean, professional interface with emphasis on accessibility and user trust. The project demanded careful attention to medical information presentation and patient-friendly navigation.",
        alignment: "left"
      }
    },
    {
      id: "hero",
      type: "image",
      order: 2,
      data: {
        src: "/assets/projects/neurop/hero.jpg",
        alt: "Neurop Homepage",
        caption: "Clean, professional healthcare interface",
        width: "full"
      }
    },
    {
      id: "design-principles",
      type: "text",
      order: 3,
      data: {
        heading: "Design Principles",
        body: "The design focused on three core principles:\n\n• Accessibility: WCAG 2.1 AA compliance for all users\n• Trust: Professional aesthetics that inspire confidence\n• Clarity: Clear information hierarchy and easy navigation\n\nEvery design decision was made with the end user in mind, ensuring that patients and healthcare professionals could easily find the information they needed.",
        alignment: "left"
      }
    },
    {
      id: "features-gallery",
      type: "gallery",
      order: 4,
      data: {
        layout: "grid",
        columns: 3,
        images: [
          {
            src: "/assets/projects/neurop/gallery/services.jpg",
            alt: "Services page",
            caption: "Medical services overview"
          },
          {
            src: "/assets/projects/neurop/gallery/team.jpg",
            alt: "Team page",
            caption: "Healthcare professionals"
          },
          {
            src: "/assets/projects/neurop/gallery/contact.jpg",
            alt: "Contact page",
            caption: "Appointment booking system"
          }
        ]
      }
    },
    {
      id: "technical-details",
      type: "text",
      order: 5,
      data: {
        heading: "Technical Implementation",
        body: "Built with modern frontend technologies, the platform features responsive design, optimized performance, and seamless user interactions. Special attention was paid to form validation and error handling to ensure a smooth appointment booking experience.",
        alignment: "left"
      }
    },
    {
      id: "testimonial",
      type: "quote",
      order: 6,
      data: {
        text: "The new website has made it significantly easier for patients to find information and book appointments. We've seen a marked increase in online engagement.",
        author: "Medical Director",
        role: "Neurop"
      }
    }
  ]
};
