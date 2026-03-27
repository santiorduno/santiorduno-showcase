# Santi Orduño - Portfolio

A modern, interactive portfolio website showcasing web development and design projects with rich animations, 3D graphics, and TypeScript-based content files.

## Portfolio

Visit the live site: [santiorduno.com](https://santiorduno.com)

## Skills Demonstrated

This portfolio showcases proficiency in:

### Frontend Development
- **React 19** - Modern React with hooks, lazy loading, and concurrent features
- **TypeScript** - Type-safe development with interfaces and generics
- **Vite** - Fast build tooling and hot module replacement
- **TailwindCSS v4** - Utility-first CSS with custom configurations

### Advanced Animations
- **GSAP** - High-performance animations with ScrollTrigger
- **Lenis** - Smooth scrolling implementation
- **Custom Animation Components** - Reusable animated sections

### 3D Graphics
- **Three.js** - 3D rendering and scene management
- **React Three Fiber** - React integration for Three.js
- **@react-three/drei** - Useful 3D helpers and abstractions

### Architecture & Patterns
- **Component-Based Architecture** - Modular, reusable components
- **TypeScript-based content files** - Structured project content in `.ts` files
- **Dynamic Routing** - React Router with lazy loading
- **Responsive Design** - Mobile-first approach

### Backend Integration
- **Cloudflare Pages Functions** - Serverless contact form handler
- **Resend** - Email service integration
- **Environment Variables** - Secure configuration management

### Performance Optimization
- **Code Splitting** - Vendor chunking for optimal loading
- **Lazy Loading** - On-demand component loading
- **Image Optimization** - Efficient asset management
- **Bundle Optimization** - Tree shaking and minification

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** TailwindCSS 4
- **Animations:** GSAP + Lenis
- **3D Graphics:** Three.js + React Three Fiber
- **Routing:** React Router DOM 7
- **Backend:** Cloudflare Pages Functions
- **Email:** Resend
- **Deployment:** Cloudflare Pages

```
santiorduno/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── project-detail/  # Project page components
│   │   └── ...
│   ├── sections/            # Homepage sections
│   ├── pages/               # Route pages
│   ├── constants/           # Data & configuration
│   │   └── projects/        # Project content files
│   └── main.tsx            # App entry point
├── functions/               # Cloudflare Pages Functions
│   └── api/
│       └── contact.ts      # Contact form handler
├── public/                  # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/santiorduno/santiorduno-showcase.git
cd santiorduno-showcase
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file (only needed for local function testing):
```env
RESEND_API_KEY=your_resend_key
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Adding New Projects

1. Create a new file in `src/constants/projects/`:
```typescript
// src/constants/projects/my-project.ts
import { ProjectDetail } from '../index';

export const myProject: ProjectDetail = {
  id: 1,
  title: "Project Name",
  slug: "project-name",
  description: "Project description",
  technologies: [
    { id: 1, name: "React" },
    { id: 2, name: "TypeScript" }
  ],
  metadata: {
    client: "Client Name",
    year: "2024",
    role: "Full Stack Developer",
    liveUrl: "https://example.com"
  },
  content: [
    {
      id: "intro",
      type: "text",
      order: 1,
      data: {
        heading: "Overview",
        body: "Project details...",
        alignment: "left"
      }
    }
    // Add more content blocks...
  ]
};
```

2. Export in `src/constants/projects/index.ts`:
```typescript
import { myProject } from './my-project';

export const projectsContent: ProjectDetail[] = [
  myProject,
  // ... other projects
];
```

3. Add assets to `public/assets/projects/my-project/`

## Content Block Types

- **Text** - Headings and paragraphs
- **Image** - Single images with captions
- **Video** - Video embeds
- **Gallery** - Image galleries (grid/masonry/carousel)
- **Quote** - Testimonials and quotes

## Deployment

### Cloudflare Pages

1. Push to GitHub
2. Import project in Cloudflare Pages
3. Set build command: `npm run build`, output directory: `dist`
4. Add environment variable: `RESEND_API_KEY`
5. Deploy

Cloudflare Pages automatically picks up `functions/api/contact.ts` and serves it at `/api/contact`.

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Website: [santiorduno.com](https://santiorduno.com)
- Email: contacto@santiorduno.com
- GitHub: [@santiorduno](https://github.com/santiorduno)

---
