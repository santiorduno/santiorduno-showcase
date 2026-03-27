
// Content Section Types for Project Detail Pages
export type ContentSectionType = 'text' | 'image' | 'video' | 'gif' | 'gallery' | 'quote';

export interface ContentSection {
  id: string;
  type: ContentSectionType;
  order: number;
  data: TextContent | MediaContent | GalleryContent | QuoteContent;
}

export interface TextContent {
  heading?: string;
  body: string;
  alignment?: 'left' | 'center' | 'right';
}

export interface MediaContent {
  src: string;
  alt: string;
  caption?: string;
  width?: 'full' | 'large' | 'medium' | 'small';
}

export interface GalleryContent {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  layout: 'grid' | 'masonry' | 'carousel';
  columns?: 2 | 3 | 4;
}

export interface QuoteContent {
  text: string;
  author?: string;
  role?: string;
}

// Enhanced Project Interface for Detail Pages
export interface ProjectDetail {
  id: number;
  title: string;
  slug: string;
  description: string;
  technologies: {
    id: number;
    name: string;
  }[];
  metadata: {
    client?: string;
    year: string;
    duration?: string;
    role: string;
    liveUrl?: string;
    githubUrl?: string;
  };
  content: ContentSection[];
}

// Existing Interfaces
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
  slug: string; // Added for routing
  description: string;
  image?: string;
  link?: string;
  technologies: {
    id: number;
    name: string;
  }[];
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon?: string;
}

export interface ContactInfo {
  email: string;
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
    description: "Advanced UX/UI design and interactive prototyping in Figma, ensuring intuitive and engaging user journeys for web and product interfaces.",
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
    description: "Full-stack web development specialized in commercial landing pages, frontend implementation, and conversion-optimized design using modern frameworks",
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
    description: "Automation with Python and n8n, API integration, and technical implementation of designs using various rendering methods.",
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
    description: "Creation of impactful digital content for social media and advertising campaigns, with focus on performance and engagement.",
    items: [
      {title: "3D Modeling & Rendering"},
      {title: "Ad Campaign Design"},
      {title: "Commercial Design"},
      {title: "Video Editing"},
    ]
  },
  {
    id: 6,
    title: "Learning Data Analysis",
    description: "Data analysis and visualization with Excel, Tableau, and Python. Certified in IBM Enterprise Data Science.",
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
    slug: "las-riberas",
    description: "End-to-end web development for commercial landing page with focus on user experience and conversion optimization.",
    image: "/assets/projects/las-riberas/thumbnail.png",
    technologies: [
      {
        id: 1,
        name: "Figma"
      },
      {
        id: 2,
        name: "Webflow"
      },
    ]
  },
  {
    id: 2,
    title: "Santa Eventos",
    slug: "santa-eventos",
    description: "Complete web solution focusing on user experience and conversion-optimized design.",
    image: "/assets/projects/santa-eventos/thumbnail.png",
    technologies: [
      {
        id: 1,
        name: "Figma"
      },
      {
        id: 2,
        name: "Relume"
      }
    ]
  },
  {
    id: 3,
    title: "Arte Clean",
    slug: "arte-clean",
    description: "This website is a showcase of my work and skills. It's built with React and TypeScript. Tailwind for styling and Gsap library for animations.",
    image: "/assets/projects/arte-clean/thumbnail.png",
    technologies: [
      {
        id: 1,
        name: "React"
      },
      {
        id: 2,
        name: "TypeScript"
      },
      {
        id: 3,
        name: "Vercel"
      },
      {
        id: 4, 
        name: "Tailwind"
      },
      {
        id: 5,
        name: "Gsap"
      }
    ]
  },
  {
    id: 4,
    title: "Neurop",
    slug: "neurop",
    description: "Custom web solution with focus on technical implementation and user experience.",
    image: "/assets/projects/neurop/thumbnail.png",
    technologies: [
      {
      id:1,
      name: "Web Development"
    },
    {
      id:2,
      name: "Frontend"
    }
  ]
  },
  {
    id: 5,
    title: "This Website",
    slug: "this-website",
    description: "Custom web solution with focus on technical implementation and user experience.",
    image: "/assets/projects/this-website/thumbnail.png",
    technologies: [
    {
      id:1,
      name: "React"
    },
    {
      id:2,
      name: "TypeScript"
    },
    {
      id:3,
      name: "Tailwind"
    },
    {
      id:4,
      name: "Gsap"
    },
    {
      id:5,
      name: "Supabase"
    },
    {
      id:6,
      name: "Resend JS"
    },
  ]
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
  location: "Hermosillo, Sonora, MX"
};

// About information
export const about: AboutInfo[] = [
  {
    name: "Santiago Orduño",
    age: 25,
    title: "Design & Development Showcase",
    subtitle: "Product Designer specialized in UX/UI and Web Development",
    about:
    `I help brands create impactful digital
    experiences through UX/UI design,
    web development,and AI-enhanced visual content.
    `,
    bio: "I mix impactful design with robust technical implementation. Master's student in AI (Tec de Monterrey).",
    availability: "Available for freelance or part-time opportunities",
    fn: "Santiago",
    softSkills: "Experienced in leading multidisciplinary teams with a focus on self-management and Kanban methodology. Currently enhancing technical solutions through a Master's in Applied AI at Tecnológico de Monterrey and offering professional bilingual communication with a B2 English level."
  }
];

/*
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

*/

// Certifications
export interface Certification {
  id: number;
  title: string;
  institution: string;
  logo?: string;
  url: string;
}

// Education
export const certifications: Certification[] = [
  {
    id: 1,
    title: "Full Stack Developer con JavaScript",
    institution: "Platzi",
    logo: "https://yt3.googleusercontent.com/jSVrx7B9DIXfx7-Mh16nzdqXcBFoa-FV3fgItxePwv17Dst-U-JuC3_TR6rLq0quRjJPpHy5RQ=s900-c-k-c0x00ffffff-no-rj",
    url: "https://platzi.com/p/CrisisDesignty/ruta/100-ruta/diploma/detalle/"
  },
  {
    id: 2,
    title: "Especialidad: Visualización de datos",
    institution: "Tecnológico de Monterrey",
    logo: "https://i.pinimg.com/474x/41/ce/59/41ce59248a03255b0e7a5465a5c36f32.jpg",
    url: "https://www.credential.net/683138c8-1bfe-4609-a85b-b790200dbc21#acc.HrMnNEoc"
  },
  {
    id: 3,
    title: "Especialidad: Ciencia de datos",
    institution: "Tecnológico de Monterrey",
    logo: "https://i.pinimg.com/474x/41/ce/59/41ce59248a03255b0e7a5465a5c36f32.jpg",
    url: "https://www.credential.net/34786c0a-aefd-4968-adca-bad0e0de118e#acc.9VRY4v6o"
  },
  {
    id: 4,
    title: "IBM - Enterprise Data Science in Practice",
    institution: "IBM",
    logo: "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg",
    url: "https://www.credly.com/badges/8a6b04f1-d4c1-455c-ae9b-af882d8c7b45/public_url"
  },
  {
    id: 5,
    title: "Data Analysis with Python",
    institution: "Cognitive Class",
    logo: "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg",
    url: "https://courses.cognitiveclass.ai/certificates/2b8d52cd19ea46119c280ae299d6fe3e"
  }
];

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


/*

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

*/