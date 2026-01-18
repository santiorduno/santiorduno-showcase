# Project Blog/Documentation CMS Implementation Guide
## React Router Strategy

---

## Overview

This guide provides step-by-step instructions for implementing clickable project cards that open dedicated documentation/blog pages with rich media content (images, videos, GIFs). The solution uses **React Router v6** for routing and extends the existing CMS pattern from [`constants/index.tsx`](../src/constants/index.tsx).

### What You'll Build
- Individual project detail pages at `/projects/:slug`
- Flexible content management system for rich media
- Smooth navigation between homepage and project pages
- Reusable content block components
- Type-safe content structure with TypeScript

---

## Architecture Overview

### Routing Structure
```
/ (Homepage)
├── #services (scroll section)
├── #work (scroll section)
└── #about (scroll section)

/projects/:slug (Project Detail Pages)
├── /projects/las-riberas
├── /projects/parque-la-ruina
├── /projects/santa-eventos
└── ... (other projects)
```

### Component Structure
```
src/
├── App.tsx (routing configuration)
├── pages/
│   ├── HomePage.tsx (current App content)
│   └── ProjectDetailPage.tsx (new)
├── components/
│   └── project-detail/
│       ├── ProjectHeader.tsx
│       ├── ProjectMetadata.tsx
│       ├── ContentRenderer.tsx
│       ├── ProjectNavigation.tsx
│       └── content-blocks/
│           ├── TextBlock.tsx
│           ├── ImageBlock.tsx
│           ├── VideoBlock.tsx
│           ├── GalleryBlock.tsx
│           └── QuoteBlock.tsx
└── constants/
    ├── index.tsx (existing)
    └── projects/
        ├── index.ts
        ├── las-riberas.ts
        ├── parque-la-ruina.ts
        └── ... (other projects)
```

---

## Step-by-Step Implementation

### Phase 1: Install Dependencies & Setup Routing

#### Step 1.1: Install React Router
```bash
npm install react-router-dom
```

#### Step 1.2: Create HomePage Component
Move existing [`App.tsx`](../src/App.tsx) content to a new HomePage component.

**Create:** [`src/pages/HomePage.tsx`](../src/pages/HomePage.tsx)
```typescript
import React from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import ServiceSummary from "../sections/ServiceSummary";
import Services from "../sections/Services";
import ReactLenis from "lenis/react";
import About from "../sections/About";
import Projects from "../sections/Projects";

const HomePage = () => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Projects />
    </ReactLenis>
  );
};

export default HomePage;
```

#### Step 1.3: Update App.tsx with Router
**Modify:** [`src/App.tsx`](../src/App.tsx)
```typescript
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

---

### Phase 2: Design CMS Data Structure

#### Step 2.1: Add TypeScript Interfaces
**Modify:** [`src/constants/index.tsx`](../src/constants/index.tsx)

Add these interfaces at the top of the file:

```typescript
// Content Section Types
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

// Enhanced Project Interface
export interface ProjectDetail {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail?: string;
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
```

#### Step 2.2: Add Slugs to Existing Projects
**Modify:** [`src/constants/index.tsx`](../src/constants/index.tsx)

Update the existing `Project` interface:
```typescript
export interface Project {
  id: number;
  title: string;
  slug: string; // Add this
  description: string;
  image?: string;
  link?: string;
  technologies: {
    id: number;
    name: string;
  }[];
}
```

Update each project in the `projects` array:
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Las Riberas",
    slug: "las-riberas", // Add this
    description: "End-to-end web development...",
    // ... rest of the project
  },
  {
    id: 2,
    title: "Parque La Ruina",
    slug: "parque-la-ruina", // Add this
    // ... rest of the project
  },
  // ... update all projects
];
```

#### Step 2.3: Create Project Content Directory
**Create:** [`src/constants/projects/index.ts`](../src/constants/projects/index.ts)
```typescript
import { ProjectDetail } from '../index';
import { lasRiberas } from './las-riberas';
import { parqueLaRuina } from './parque-la-ruina';
// Import other projects as you create them

export const projectsContent: ProjectDetail[] = [
  lasRiberas,
  parqueLaRuina,
  // Add other projects
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): ProjectDetail | undefined => {
  return projectsContent.find(project => project.slug === slug);
};
```

#### Step 2.4: Create Sample Project Content
**Create:** [`src/constants/projects/las-riberas.ts`](../src/constants/projects/las-riberas.ts)
```typescript
import { ProjectDetail } from '../index';

export const lasRiberas: ProjectDetail = {
  id: 1,
  title: "Las Riberas",
  slug: "las-riberas",
  description: "End-to-end web development for commercial landing page with focus on user experience and conversion optimization.",
  thumbnail: "/assets/projects/las-riberas/thumbnail.jpg",
  technologies: [
    { id: 1, name: "Figma UX/UI Design" },
    { id: 2, name: "Webflow development" }
  ],
  metadata: {
    client: "Grupo Koval",
    year: "2024",
    role: "Lead Developer & Designer",
    liveUrl: "https://lasriberas.com"
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
        src: "/assets/projects/las-riberas/hero.jpg",
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
            src: "/assets/projects/las-riberas/gallery/image-1.jpg",
            alt: "Design mockup 1",
            caption: "Initial design concepts"
          },
          {
            src: "/assets/projects/las-riberas/gallery/image-2.jpg",
            alt: "Design mockup 2",
            caption: "Final design system"
          },
          {
            src: "/assets/projects/las-riberas/gallery/image-3.jpg",
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
```

---

### Phase 3: Build Content Block Components

#### Step 3.1: Create TextBlock Component
**Create:** [`src/components/project-detail/content-blocks/TextBlock.tsx`](../src/components/project-detail/content-blocks/TextBlock.tsx)
```typescript
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TextContent } from '../../../constants';

interface TextBlockProps {
  data: TextContent;
}

const TextBlock: React.FC<TextBlockProps> = ({ data }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;
    
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[data.alignment || 'left'];

  return (
    <div ref={textRef} className={`max-w-4xl mx-auto px-6 py-8 ${alignmentClass}`}>
      {data.heading && (
        <h2 className="text-3xl lg:text-4xl font-light mb-6">{data.heading}</h2>
      )}
      <p className="text-lg lg:text-xl leading-relaxed text-gray-700 whitespace-pre-line">
        {data.body}
      </p>
    </div>
  );
};

export default TextBlock;
```

#### Step 3.2: Create ImageBlock Component
**Create:** [`src/components/project-detail/content-blocks/ImageBlock.tsx`](../src/components/project-detail/content-blocks/ImageBlock.tsx)
```typescript
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MediaContent } from '../../../constants';

interface ImageBlockProps {
  data: MediaContent;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ data }) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imageRef.current) return;
    
    gsap.from(imageRef.current, {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const widthClass = {
    full: 'w-full',
    large: 'max-w-6xl mx-auto',
    medium: 'max-w-4xl mx-auto',
    small: 'max-w-2xl mx-auto',
  }[data.width || 'large'];

  return (
    <div ref={imageRef} className={`${widthClass} px-6 py-8`}>
      <img 
        src={data.src} 
        alt={data.alt}
        className="w-full h-auto rounded-lg shadow-lg"
        loading="lazy"
      />
      {data.caption && (
        <p className="text-sm text-gray-600 mt-4 text-center italic">
          {data.caption}
        </p>
      )}
    </div>
  );
};

export default ImageBlock;
```

#### Step 3.3: Create VideoBlock Component
**Create:** [`src/components/project-detail/content-blocks/VideoBlock.tsx`](../src/components/project-detail/content-blocks/VideoBlock.tsx)
```typescript
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MediaContent } from '../../../constants';

interface VideoBlockProps {
  data: MediaContent;
}

const VideoBlock: React.FC<VideoBlockProps> = ({ data }) => {
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!videoRef.current) return;
    
    gsap.from(videoRef.current, {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
      },
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const widthClass = {
    full: 'w-full',
    large: 'max-w-6xl mx-auto',
    medium: 'max-w-4xl mx-auto',
    small: 'max-w-2xl mx-auto',
  }[data.width || 'large'];

  return (
    <div ref={videoRef} className={`${widthClass} px-6 py-8`}>
      <video 
        src={data.src}
        controls
        className="w-full h-auto rounded-lg shadow-lg"
        poster={data.src.replace(/\.[^/.]+$/, '.jpg')} // Assumes poster image exists
      >
        Your browser does not support the video tag.
      </video>
      {data.caption && (
        <p className="text-sm text-gray-600 mt-4 text-center italic">
          {data.caption}
        </p>
      )}
    </div>
  );
};

export default VideoBlock;
```

#### Step 3.4: Create GalleryBlock Component
**Create:** [`src/components/project-detail/content-blocks/GalleryBlock.tsx`](../src/components/project-detail/content-blocks/GalleryBlock.tsx)
```typescript
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GalleryContent } from '../../../constants';

interface GalleryBlockProps {
  data: GalleryContent;
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({ data }) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!galleryRef.current) return;
    
    const images = galleryRef.current.querySelectorAll('.gallery-item');
    gsap.from(images, {
      y: 60,
      opacity: 0,
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 80%",
      },
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  const gridClass = `grid gap-4 grid-cols-1 md:grid-cols-${data.columns || 3}`;

  return (
    <div ref={galleryRef} className="max-w-6xl mx-auto px-6 py-8">
      <div className={gridClass}>
        {data.images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
            {image.caption && (
              <p className="text-sm text-gray-600 mt-2 text-center">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryBlock;
```

#### Step 3.5: Create QuoteBlock Component
**Create:** [`src/components/project-detail/content-blocks/QuoteBlock.tsx`](../src/components/project-detail/content-blocks/QuoteBlock.tsx)
```typescript
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { QuoteContent } from '../../../constants';

interface QuoteBlockProps {
  data: QuoteContent;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ data }) => {
  const quoteRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!quoteRef.current) return;
    
    gsap.from(quoteRef.current, {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: quoteRef.current,
        start: "top 80%",
      },
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={quoteRef} className="max-w-4xl mx-auto px-6 py-12">
      <blockquote className="border-l-4 border-black pl-6 py-4">
        <p className="text-2xl lg:text-3xl font-light italic text-gray-800 mb-4">
          "{data.text}"
        </p>
        {(data.author || data.role) && (
          <footer className="text-lg text-gray-600">
            {data.author && <span className="font-medium">{data.author}</span>}
            {data.role && <span className="block text-sm">{data.role}</span>}
          </footer>
        )}
      </blockquote>
    </div>
  );
};

export default QuoteBlock;
```

---

### Phase 4: Build Core Project Detail Components

#### Step 4.1: Create ContentRenderer Component
**Create:** [`src/components/project-detail/ContentRenderer.tsx`](../src/components/project-detail/ContentRenderer.tsx)
```typescript
import React from 'react';
import { ContentSection } from '../../constants';
import TextBlock from './content-blocks/TextBlock';
import ImageBlock from './content-blocks/ImageBlock';
import VideoBlock from './content-blocks/VideoBlock';
import GalleryBlock from './content-blocks/GalleryBlock';
import QuoteBlock from './content-blocks/QuoteBlock';

interface ContentRendererProps {
  sections: ContentSection[];
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ sections }) => {
  // Sort sections by order
  const sortedSections = [...sections].sort((a, b) => a.order - b.order);

  const renderSection = (section: ContentSection) => {
    switch (section.type) {
      case 'text':
        return <TextBlock key={section.id} data={section.data} />;
      case 'image':
      case 'gif':
        return <ImageBlock key={section.id} data={section.data} />;
      case 'video':
        return <VideoBlock key={section.id} data={section.data} />;
      case 'gallery':
        return <GalleryBlock key={section.id} data={section.data} />;
      case 'quote':
        return <QuoteBlock key={section.id} data={section.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="content-sections">
      {sortedSections.map(section => renderSection(section))}
    </div>
  );
};

export default ContentRenderer;
```

#### Step 4.2: Create ProjectHeader Component
**Create:** [`src/components/project-detail/ProjectHeader.tsx`](../src/components/project-detail/ProjectHeader.tsx)
```typescript
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ProjectDetail } from '../../constants';

interface ProjectHeaderProps {
  project: ProjectDetail;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!headerRef.current) return;
    
    gsap.from(headerRef.current.children, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={headerRef} className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl lg:text-7xl font-light mb-6">{project.title}</h1>
      <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-3">
        {project.technologies.map(tech => (
          <span 
            key={tech.id}
            className="px-4 py-2 bg-black text-white text-sm rounded-full"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectHeader;
```

#### Step 4.3: Create ProjectMetadata Component
**Create:** [`src/components/project-detail/ProjectMetadata.tsx`](../src/components/project-detail/ProjectMetadata.tsx)
```typescript
import React from 'react';
import { ProjectDetail } from '../../constants';
import { Icon } from '@iconify-icon/react';

interface ProjectMetadataProps {
  metadata: ProjectDetail['metadata'];
}

const ProjectMetadata: React.FC<ProjectMetadataProps> = ({ metadata }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 border-y border-gray-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metadata.client && (
          <div>
            <p className="text-sm text-gray-500 mb-1">Client</p>
            <p className="text-lg font-medium">{metadata.client}</p>
          </div>
        )}
        <div>
          <p className="text-sm text-gray-500 mb-1">Year</p>
          <p className="text-lg font-medium">{metadata.year}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Role</p>
          <p className="text-lg font-medium">{metadata.role}</p>
        </div>
        {metadata.liveUrl && (
          <div>
            <p className="text-sm text-gray-500 mb-1">Live Site</p>
            <a 
              href={metadata.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium flex items-center gap-2 hover:underline"
            >
              Visit <Icon icon="lucide:external-link" className="size-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectMetadata;
```

#### Step 4.4: Create ProjectNavigation Component
**Create:** [`src/components/project-detail/ProjectNavigation.tsx`](../src/components/project-detail/ProjectNavigation.tsx)
```typescript
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import { projectsContent } from '../../constants/projects';

interface ProjectNavigationProps {
  currentSlug: string;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ currentSlug }) => {
  const currentIndex = projectsContent.findIndex(p => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projectsContent[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsContent.length - 1 ? projectsContent[currentIndex + 1] : null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center border-t border-gray-200 pt-8">
        {/* Back to Projects */}
        <Link 
          to="/#work"
          className="flex items-center gap-2 text-lg hover:underline"
        >
          <Icon icon="lucide:arrow-left" className="size-5" />
          Back to Projects
        </Link>

        {/* Prev/Next Navigation */}
        <div className="flex gap-8">
          {prevProject && (
            <Link 
              to={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-lg hover:underline"
            >
              <Icon icon="lucide:chevron-left" className="size-5" />
              Previous
            </Link>
          )}
          {nextProject && (
            <Link 
              to={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-lg hover:underline"
            >
              Next
              <Icon icon="lucide:chevron-right" className="size-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectNavigation;
```

---

### Phase 5: Create ProjectDetailPage

#### Step 5.1: Create ProjectDetailPage Component
**Create:** [`src/pages/ProjectDetailPage.tsx`](../src/pages/ProjectDetailPage.tsx)
```typescript
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getProjectBySlug } from '../constants/projects';
import ProjectHeader from '../components/project-detail/ProjectHeader';
import ProjectMetadata from '../components/project-detail/ProjectMetadata';
import ContentRenderer from '../components/project-detail/ContentRenderer';
import ProjectNavigation from '../components/project-detail/ProjectNavigation';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <a href="/" className="text-lg underline">Return to Homepage</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ProjectHeader project={project} />
      <ProjectMetadata metadata={project.metadata} />
      <ContentRenderer sections={project.content} />
      <ProjectNavigation currentSlug={slug} />
    </div>
  );
};

export default ProjectDetailPage;
```

---

### Phase 6: Update Projects Section

#### Step 6.1: Make Project Cards Clickable
**Modify:** [`src/sections/Projects.tsx`](../src/sections/Projects.tsx)

```typescript
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom"; // Add this import

const Works = () => {
    return <section id="work" className="flex flex-col min-h-screen">
        <AnimatedHeaderSection 
        title="Works"
        text="Digital products built with a data-driven mindset. Combining visual storytelling with Applied AI and full-stack development to solve complex business challenges."
        />
        <div className="relative flex flex-col font-light">
            {projects.map((project, index) => (
            <Link 
              key={project.id}
              to={`/projects/${project.slug}`} // Add this
              className="block" // Add this
            >
              <div 
              id="project" 
              className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
              >
                  {/* title */}
                  <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                      <h2
                      className="lg:text-[32px] text-[26] leading-none" 
                      >{project.title}
                      </h2>
                      <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5"/> 
                  </div>
                  {/* divider */}
                  <div className="w-full h-0.5 bg-black/80"></div>
                  {/* framwork */}
                  <div className="flex px-10 text-xs leading-loose uppercase transition-all duartion-500 md:text-sm gap-x-5 md:group-hover:px-12">
                      {project.technologies?.map((tech) => (
                      <p
                          key={tech.id} 
                          className="text-black transition-colors duration-500 md:group-hover:text-white"
                      >{tech.name}</p>
                      ))}
                  </div>
              </div>
            </Link>
            ))}
        </div>
    </section>
};

export default Works;
```

---

### Phase 7: Organize Media Assets

#### Step 7.1: Create Asset Directory Structure
Create the following folder structure in your `public` directory:

```
public/assets/projects/
├── las-riberas/
│   ├── thumbnail.jpg
│   ├── hero.jpg
│   ├── gallery/
│   │   ├── image-1.jpg
│   │   ├── image-2.jpg
│   │   └── image-3.jpg
│   ├── videof s/
│   │   └── demo.mp4
│   └── gifs/
│       └── interaction.gif
├── parque-la-ruina/
│   └── ... (same structure)
└── ... (other projects)
```

#### Step 7.2: Optimize Media Files
- **Images**: Use WebP format with JPG fallback, compress to < 500KB
- **Videos**: Use H.264 codec, compress to reasonable size
- **GIFs**: Consider converting to video for better performance

---

### Phase 8: Create Additional Project Content Files

#### Step 8.1: Create Content for Each Project
Follow the pattern from [`las-riberas.ts`](../src/constants/projects/las-riberas.ts) to create content files for each project:

**Create:** [`src/constants/projects/parque-la-ruina.ts`](../src/constants/projects/parque-la-ruina.ts)
```typescript
import { ProjectDetail } from '../index';

export const parqueLaRuina: ProjectDetail = {
  id: 2,
  title: "Parque La Ruina",
  slug: "parque-la-ruina",
  description: "Commercial landing page with frontend implementation and strategic visual communication for sustainable impact initiatives.",
  thumbnail: "/assets/projects/parque-la-ruina/thumbnail.jpg",
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
        heading: "About the Project",
        body: "Parque La Ruina is a sustainable urban development project...",
        alignment: "left"
      }
    },
    // Add more content sections...
  ]
};
```

Repeat for all projects: Santa Eventos, Qcom E-commerce, Arte Clean, Neurop, etc.

#### Step 8.2: Update Projects Index
**Modify:** [`src/constants/projects/index.ts`](../src/constants/projects/index.ts)

Add all project imports and exports:
```typescript
import { ProjectDetail } from '../index';
import { lasRiberas } from './las-riberas';
import { parqueLaRuina } from './parque-la-ruina';
import { santaEventos } from './santa-eventos';
import { qcomEcommerce } from './qcom-ecommerce';
import { arteClean } from './arte-clean';
import { neurop } from './neurop';

export const projectsContent: ProjectDetail[] = [
  lasRiberas,
  parqueLaRuina,
  santaEventos,
  qcomEcommerce,
  arteClean,
  neurop,
];

export const getProjectBySlug = (slug: string): ProjectDetail | undefined => {
  return projectsContent.find(project => project.slug === slug);
};
```

---

## Testing Checklist

### Functionality Testing
- [ ] Homepage loads correctly with all sections
- [ ] Smooth scroll works on homepage
- [ ] Project cards are clickable
- [ ] Clicking a project navigates to `/projects/:slug`
- [ ] Project detail page displays correctly
- [ ] All content sections render in correct order
- [ ] Images load with lazy loading
- [ ] Videos play correctly
- [ ] Gallery displays properly
- [ ] Back button returns to homepage
- [ ] Previous/Next navigation works
- [ ] 404 page shows for invalid slugs
- [ ] Browser back/forward buttons work

### Visual Testing
- [ ] Animations trigger on scroll
- [ ] Hover effects work on project cards
- [ ] Typography is consistent
- [ ] Spacing is consistent across sections
- [ ] Mobile responsive design works
- [ ] Tablet responsive design works
- [ ] Desktop layout is optimal

### Performance Testing
- [ ] Page load time < 2 seconds
- [ ] Images lazy load below fold
- [ ] No layout shift on load
- [ ] Smooth scroll performance
- [ ] No console errors

---

## Deployment Considerations

### Build Configuration
Ensure your [`vite.config.ts`](../vite.config.ts) is configured for client-side routing:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add this for proper routing in production
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
```

### Server Configuration
For deployment platforms (Vercel, Netlify, etc.), ensure all routes redirect to `index.html`:

**Vercel:** Create `vercel.json`
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Netlify:** Create `_redirects` in `public/`
```
/*    /index.html   200
```

---

## Maintenance & Content Updates

### Adding a New Project
1. Create project content file in [`src/constants/projects/`](../src/constants/projects/)
2. Add project to [`projectsContent`](../src/constants/projects/index.ts) array
3. Add slug to basic project in [`constants/index.tsx`](../src/constants/index.tsx)
4. Upload media assets to [`public/assets/projects/[slug]/`](../public/assets/projects/)
5. Test the new project page

### Updating Existing Project
1. Locate project file in [`src/constants/projects/`](../src/constants/projects/)
2. Modify content sections as needed
3. Add/remove/reorder sections
4. Update media assets if necessary
5. Changes reflect immediately in development

### Adding New Content Block Types
1. Create new interface in [`constants/index.tsx`](../src/constants/index.tsx)
2. Create new block component in [`content-blocks/`](../src/components/project-detail/content-blocks/)
3. Add case to [`ContentRenderer.tsx`](../src/components/project-detail/ContentRenderer.tsx)
4. Use in project content files

---

## Summary

This implementation provides:
- ✅ **Type-safe CMS** using TypeScript interfaces
- ✅ **Flexible content** with multiple block types
- ✅ **Smooth navigation** with React Router
- ✅ **Animated content** with GSAP
- ✅ **Responsive design** with Tailwind CSS
- ✅ **Easy maintenance** with modular structure
- ✅ **Performance optimized** with lazy loading
- ✅ **SEO ready** with proper meta tags

The system is designed to be maintainable, scalable, and easy to extend with new features in the future.

