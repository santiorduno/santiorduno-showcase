# Santi Orduño Portfolio Project Review

## Overview

This project is a modern, interactive portfolio website for Santi Orduño, a developer/designer. It showcases services, projects, and personal information with rich media content and smooth animations. The site features a homepage with multiple sections and dedicated project detail pages with a CMS-like content management system.

## Technology Stack

### Core Technologies
- **React 19** - Frontend framework with modern hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server (using Rolldown)
- **TailwindCSS v4** - Utility-first CSS framework

### Routing & Navigation
- **React Router DOM v7** - Client-side routing with lazy loading
- **Lenis** - Smooth scrolling library for enhanced UX

### Animations & Interactions
- **GSAP (GreenSock Animation Platform)** - High-performance animations
- **@gsap/react** - React integration for GSAP
- **ScrollTrigger** - Scroll-based animation triggers

### 3D Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Maath** - Math utilities for 3D

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **@iconify-icon/react** - Icon library

### Deployment
- **Vercel** - Hosting and deployment platform

## How the Project Works

### Application Flow
1. **Entry Point**: `main.tsx` renders the `App` component in StrictMode
2. **Routing**: `App.tsx` uses `BrowserRouter` to handle navigation between:
   - Homepage (`/`) - `HomePage` component
   - Project details (`/projects/:slug`) - Lazy-loaded `ProjectDetailPage`

### Homepage Structure
The homepage consists of vertically stacked sections wrapped in `ReactLenis` for smooth scrolling:
- **Navbar** - Navigation menu
- **Hero** - Introduction with 3D planet animation
- **ServiceSummary** - Brief services overview
- **Services** - Detailed service offerings
- **About** - Personal information
- **Projects** - Project showcase grid
- **Education** - Educational background
- **Contact** - Contact information

### Project Detail Pages
Individual project pages feature:
- **Dynamic Routing**: URL-based project loading via slug
- **CMS-like Content**: Flexible content blocks (text, images, videos, galleries, quotes)
- **Metadata Display**: Project details, technologies, client info
- **Navigation**: Previous/Next project links

### Content Management System
The project uses a TypeScript-based CMS where content is defined as structured data:
- **Content Types**: text, image, video, gallery, quote
- **Flexible Layouts**: Configurable widths, alignments, and arrangements
- **Type Safety**: Full TypeScript interfaces for all content structures

## Architecture & Component Structure

### Directory Structure
```
src/
├── App.tsx (routing configuration)
├── main.tsx (React entry point)
├── pages/
│   ├── HomePage.tsx (homepage layout)
│   └── ProjectDetailPage.tsx (project detail layout)
├── components/
│   ├── project-detail/
│   │   ├── ProjectHeader.tsx
│   │   ├── ProjectMetadata.tsx
│   │   ├── ContentRenderer.tsx
│   │   └── content-blocks/
│   │       ├── TextBlock.tsx
│   │       ├── ImageBlock.tsx
│   │       ├── VideoBlock.tsx
│   │       ├── GalleryBlock.tsx
│   │       └── QuoteBlock.tsx
│   └── (other reusable components)
├── sections/ (homepage sections)
├── constants/
│   ├── index.tsx (types and interfaces)
│   └── projects/ (project data)
└── (other config files)
```

### Key Components

#### Pages
- **HomePage**: Orchestrates all homepage sections
- **ProjectDetailPage**: Manages project detail view with error handling

#### Project Detail Components
- **ProjectHeader**: Displays project title and description
- **ProjectMetadata**: Shows client, year, technologies, links
- **ContentRenderer**: Maps content sections to appropriate block components
- **ProjectNavigation**: Provides navigation between projects

#### Content Block Components
Each block component handles:
- GSAP animations on scroll
- Responsive design
- Loading states
- Accessibility features

### Data Flow
1. **Static Data**: Project information stored in `src/constants/projects/`
2. **Routing**: URL slug determines which project to load
3. **Content Rendering**: `ContentRenderer` iterates through content sections
4. **Component Hydration**: Each block component renders its specific content type

## Animations & Performance

### Animation Strategy
- **GSAP ScrollTrigger**: Triggers animations as elements enter viewport
- **Staggered Animations**: Sequential reveals for better visual flow
- **Performance Optimized**: Minimal DOM manipulation, hardware acceleration

### Performance Features
- **Lazy Loading**: Project detail pages loaded on demand
- **Code Splitting**: Vendor chunks separated in build
- **Image Optimization**: Lazy loading for media assets
- **Bundle Optimization**: Vite's tree shaking and chunking

## Scaling & Extension Guide

### Adding New Projects
1. Create new file in `src/constants/projects/`
2. Define `ProjectDetail` object with content sections
3. Add to `projects/index.ts` exports
4. Add corresponding assets to `public/assets/projects/`

### Extending Content Types
1. Add new type to `ContentSectionType`
2. Create interface for content data
3. Implement new block component
4. Update `ContentRenderer` to handle new type

### Adding Homepage Sections
1. Create new section component in `src/sections/`
2. Import and add to `HomePage.tsx`
3. Ensure responsive design and animations

### Performance Considerations
- Monitor bundle size with new features
- Optimize images and media assets
- Consider virtualization for large content lists
- Test animations on various devices

### Deployment
- Automatic deployment via Vercel on push to main branch
- Environment variables configured for production
- Build optimizations active for production bundles

## Development Workflow

### Local Development
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

### Code Quality
- ESLint for code consistency
- TypeScript for type safety
- Prettier for code formatting (if configured)

## Future Enhancements

### Potential Improvements
- **CMS Admin Panel**: Web-based content management
- **Internationalization**: Multi-language support
- **Dark/Light Mode**: Theme switching
- **Progressive Web App**: Offline capabilities
- **Analytics Integration**: User behavior tracking
- **SEO Optimization**: Meta tags, structured data
- **Accessibility**: WCAG compliance improvements

### Technical Debt
- Consider migrating to newer React patterns if needed
- Evaluate bundle size impact of 3D libraries
- Implement error boundaries for better error handling

This project demonstrates modern React development practices with a focus on performance, user experience, and maintainable code architecture.