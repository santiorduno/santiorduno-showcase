# Santi Orduño - Portfolio

A modern, interactive portfolio website showcasing web development and design projects with rich animations, 3D graphics, and a custom CMS for project management.

## 🚀 Live Demo

Visit the live site: [santiorduno.com](https://santiorduno.com)

## 💡 Skills Demonstrated

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
- **Custom CMS System** - TypeScript-based content management
- **Dynamic Routing** - React Router with lazy loading
- **Responsive Design** - Mobile-first approach

### Backend Integration
- **Serverless Functions** - Vercel API routes
- **Supabase** - Database integration for contact form
- **Resend** - Email service integration
- **Environment Variables** - Secure configuration management

### Performance Optimization
- **Code Splitting** - Vendor chunking for optimal loading
- **Lazy Loading** - On-demand component loading
- **Image Optimization** - Efficient asset management
- **Bundle Optimization** - Tree shaking and minification

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** TailwindCSS 4
- **Animations:** GSAP + Lenis
- **3D Graphics:** Three.js + React Three Fiber
- **Routing:** React Router DOM 7
- **Backend:** Vercel Serverless Functions
- **Database:** Supabase
- **Email:** Resend
- **Deployment:** Vercel

## 📁 Project Structure

```
santiorduno/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── project-detail/  # Project page components
│   │   └── ...
│   ├── sections/            # Homepage sections
│   ├── pages/               # Route pages
│   ├── constants/           # Data & configuration
│   │   └── projects/        # Project content (CMS)
│   └── main.tsx            # App entry point
├── api/                     # Serverless functions
│   └── contact.ts          # Contact form handler
├── public/                  # Static assets
└── plans/                   # Documentation
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/santiorduno.git
cd santiorduno
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
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

## 📝 Adding New Projects

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

## 🎨 Content Block Types

The CMS supports multiple content types:

- **Text** - Headings and paragraphs
- **Image** - Single images with captions
- **Video** - Video embeds
- **Gallery** - Image galleries (grid/masonry/carousel)
- **Quote** - Testimonials and quotes

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

The `vercel.json` configuration is already set up for:
- Serverless functions in `/api`
- SPA routing
- Build optimization

## 📚 Documentation

- [Project Review](plans/project-review.md) - Complete technical documentation
- [CMS Strategy](plans/project-blog-cms-strategy.md) - Content management guide

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- Website: [santiorduno.com](https://santiorduno.com)
- Email: contacto@santiorduno.com
- GitHub: [@santiorduno](https://github.com/santiorduno)

---

Built with ❤️ using React, TypeScript, and modern web technologies.
