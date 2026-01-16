
export interface Service {
  id: number;
  title: string;
  description: string;
  items?: {
    title: string;
  }[];
  icon?: string; 
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  technologies?: string[];
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface AboutInfo {
  name: string,
  age: number,
  title: string,
  subtitle: string,
  about: string,
  bio: string,
  availability: string,
  fn: string,
  softSkills: string
}

export const services: Service[] = [
  {
    id: 1,
    title: "Product Design",
    description: "Advanced UX/UI design and interactive prototyping in Figma, ensuring intuitive and engaging user journeys for web and product interfaces[cite: 7].",
    items: [
      {title: "Interactive Prototyping"},
      {title: "User Research & Testing"},
      {title: "Information Architecture"},
      {title: "Design Systems (Figma)"},
    ]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Full-stack web development specialized in commercial landing pages, frontend implementation, and conversion-optimized design using modern frameworks[cite: 10, 22].",
    items: [
      {title: "React & Astro Development"},
      {title: "Responsive Web Design"},
      {title: "Performance Optimization"},
      {title: "E-commerce Solutions"},
    ]
  },
  {
    id: 3,
    title: "Visual Content & AI",
    description: "Visual content development enhanced by AI tools (Midjourney, ComfyUI). Expert in Adobe Creative Suite (Photoshop, Illustrator) and visual AI integration.",
    items: [
      {title: "Generative AI Workflows"},
      {title: "Vector Illustration"},
      {title: "Digital Asset Creation"},
      {title: "AI-Enhanced Visuals"},
    ]
  },
  {
    id: 4,
    title: "Technical Integration",
    description: "Automation with Python and n8n, API integration, and technical implementation of designs using various rendering methods[cite: 11, 23].",
    items: [
      {title: "Workflow Automation"},
      {title: "API & Data Integration"},
      {title: "Python Scripting"},
      {title: "SSR/CSR Implementation"},
    ]
  },
  {
    id: 5,
    title: "3D Design & Motion Graphics",
    description: "Creation of impactful digital content for social media and advertising campaigns, with focus on performance and engagement[cite: 32].",
    items: [
      {title: "3D Modeling & Rendering"},
      {title: "Ad Campaign Design"},
      {title: "Comertial Design"},
      {title: "Video Editing"},
    ]
  },
  {
    id: 6,
    title: "Learning Data Analysis",
    description: "Data analysis and visualization with Excel, Tableau, and Python. Certified in IBM Enterprise Data Science[cite: 11, 51].",
    items: [
      {title: "Data Visualization"},
      {title: "User Analytics"},
      {title: "Business Intelligence"},
      {title: "Python for Data Science"},
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Las Riberas",
    description: "End-to-end web development for commercial landing page with focus on user experience and conversion optimization.",
    technologies: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Parque La Ruina",
    description: "Commercial landing page with frontend implementation and strategic visual communication for sustainable impact initiatives.",
    technologies: ["Webflow", "UX/UI Design"]
  },
  {
    id: 3,
    title: "Santa Eventos",
    description: "Complete web solution focusing on user experience and conversion-optimized design.",
    technologies: ["Frontend", "Responsive Design"]
  },
  {
    id: 4,
    title: "Qcom E-commerce",
    description: "Corporate website and e-commerce design including banner creation, product images, site UI/UX, and performance maintenance.",
    technologies: ["E-commerce", "UI/UX", "Performance"]
  },
  {
    id: 5,
    title: "Arte Clean & Corporativo Kino",
    description: "Web development projects utilizing various frameworks and rendering methods based on project requirements.",
    technologies: ["SSR", "CSR", "Static Generation"]
  },
  {
    id: 6,
    title: "Neurop",
    description: "Custom web solution with focus on technical implementation and user experience.",
    technologies: ["Web Development", "Frontend"]
  }
];

// Social media links
export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Behance",
    url: "https://www.behance.net/santiorduno" 
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jesús-santiago-orduño-bennett-629a73225"
  },
  {
    id:3,
    name: "Github",
    url: "https://github.com/santiorduno"
  }
];

// Contact information
export const contactInfo: ContactInfo = {
  email: "contacto@santiorduno.com",
  phone: "(66) 2223 0245",
  location: "Hermosillo, Sonora, MX"
};

// About information
export const about: AboutInfo[] = [
  {
    name: "Santiago Orduño Bennett",
    age: 25,
    title: "Product & Web Designer",
    subtitle: "Product Designer specialized in UX/UI and Web Development",
    about:
    `I help brands create impactful digital
    experiences through UX/UI design,
    web development,and AI-enhanced visual content.
    `,
    bio: "Full-stack web designer specialized in commercial landing pages, UX/UI, and frontend development. Technical services: automation with n8n, API integration, VPS server configuration, and database management. I combine impactful design with robust technical implementation. Master's student in AI (Tec de Monterrey).",
    availability: "Available for freelance or part-time opportunities",
    fn: "Santiago",
    softSkills: "Experienced in leading multidisciplinary teams with a focus on self-management and Kanban methodology. Currently enhancing technical solutions through a Master's in Applied AI at Tecnológico de Monterrey and offering professional bilingual communication with a B2 English level."
  }
];

// Skills
export const hardSkills: string[] = [
  "Illustrator",
  "Photoshop",
  "Premiere Pro",
  "After Effects",
  "Blender",
  "Figma",
  "Webflow",
  "AI Tools (Firefly, Midjourney, ComfyUI)",
  "Excel",
  "Python",
  "React",
  "TypeScript",
  "Tailwind CSS"
];

export const softSkills: string[] = [
  "Quality-focused",
  "Team collaboration",
  "Client relations",
  "Detail-oriented",
  "Continuous learning",
  "Creative problem-solving",
  "Time management"
];

// Certifications
export const certifications: string[] = [
  "Full Stack Developer con JavaScript",
  "Especialidad: Visualización de datos",
  "Especialidad: Ciencia de datos",
  "IBM - Enterprise Data Science in Practice",
  "Data Analysis with Python"
];

// Education
export const education = [
  {
    id: 1,
    institution: "Universidad de Sonora (UNISON)",
    degree: "Graphic Design",
    credential: "Cédula Profesional 15254230",
    status: "Completed"
  },
  {
    id: 2,
    institution: "Tecnológico de Monterrey",
    degree: "Master's in Applied Artificial Intelligence (MNA)",
    status: "On going"
  }
];

// Work experience
export const experience = [
  {
    id: 1,
    company: "Qualisys",
    role: "Social Media & Web Designer",
    description: "Social media content creation, content management, and corporate website and e-commerce design for Qcom. SAP ERP Distributors and Dell Technologies Titanium Partner.",
    period: "September 2022 - February 2024"
  },
  {
    id: 2,
    company: "Kolab - Grupo Koval",
    role: "Graphic Designer",
    description: "Graphic designer at an agency affiliated with Grupo Koval, collaborating on strategic projects such as Las Riberas and Parque La Ruina. Work aligned with Kolab, Koval's innovation lab, driving visual communication for sustainable impact initiatives.",
    period: "February 2024 - October 2025"
  },
  {
    id: 3,
    company: "Freelance",
    role: "Web Developer",
    description: "Led end-to-end web development for Las Riberas, Parque La Ruina, and Santa Eventos, focusing on user experience, frontend implementation, and conversion-optimized design.",
    period: "Available"
  }
];