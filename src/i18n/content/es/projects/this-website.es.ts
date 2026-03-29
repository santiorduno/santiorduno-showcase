import type { ProjectContentTranslation } from '../../../types';

export const thisWebsiteES: ProjectContentTranslation = {
  slug: 'this-website',
  description: 'Un portafolio de Ingeniería UX de alto rendimiento con un CMS personalizado, arquitectura serverless y motion design avanzado.',
  metadata: {
    role: 'Ingeniero UX y Desarrollador Full Stack',
  },
  content: {
    vision: {
      heading: 'La Arquitectura de una Marca',
      body: 'Este proyecto funciona como un laboratorio vivo de mi trabajo como Ingeniero UX. No se trató solo de construir un portafolio, sino de crear un ecosistema escalable que combina narrativa visual de alto nivel con una base técnica sólida. El objetivo fue cerrar la brecha entre el diseño 3D creativo y la gestión estructurada de datos.',
    },
    'tech-stack-showcase': {
      caption: 'Construido con React 19, GSAP para motion y una estructura CMS personalizada en TypeScript.',
    },
    'cms-logic': {
      heading: 'Gestión de Contenido Personalizada',
      body: 'A diferencia de los portafolios estáticos convencionales, desarrollé un sistema modular similar a un CMS usando interfaces TypeScript. Esto permite el renderizado dinámico de proyectos mediante bloques de contenido flexibles (texto, media, galerías y citas), haciendo el sitio fácilmente mantenible y escalable sin refactorizar los componentes UI principales.',
    },
    'motion-design': {
      images: [
        { caption: 'Animaciones avanzadas basadas en scroll' },
        { caption: 'Renderizado planetario 3D interactivo' },
      ],
    },
    'serverless-integration': {
      heading: 'Capacidades Full-Stack',
      body: 'Para gestionar las interacciones del usuario, implementé un backend serverless usando Vercel Functions. El sistema de contacto integra Supabase (PostgreSQL) para almacenamiento de leads y Resend para notificaciones de email en tiempo real, demostrando una solución profesional completa dentro de un stack centrado en el frontend.',
    },
  },
};
