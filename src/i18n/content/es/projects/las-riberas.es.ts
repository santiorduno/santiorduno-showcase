import type { ProjectContentTranslation } from '../../../types';

export const lasRiberasES: ProjectContentTranslation = {
  slug: 'las-riberas',
  description: 'Desarrollo web completo para landing page comercial con enfoque en experiencia de usuario y optimización de conversión.',
  metadata: {
    role: 'Desarrollador y Diseñador Principal',
  },
  content: {
    intro: {
      heading: 'Descripción del Proyecto',
      body: 'Las Riberas es un desarrollo residencial amigable en Hermosillo que requería una presencia web sofisticada acorde a su posicionamiento premium. El proyecto implicó diseño UX/UI completo en Figma seguido de desarrollo en Webflow, garantizando una experiencia de usuario fluida y tasas de conversión óptimas.',
    },
    'hero-image': {
      caption: 'Sección hero de la página principal mostrando el desarrollo.',
    },
    'design-process': {
      heading: 'Proceso de Diseño',
      body: 'El proceso de diseño comenzó con investigación de usuarios y análisis competitivo exhaustivo. Se crearon múltiples iteraciones en Figma del Sitemap y sistema de diseño, enfocándose en crear una experiencia elegante y optimizada para conversión que resonara con el público objetivo.',
    },
    gallery: {
      images: [
        { caption: 'Mapa del sitio' },
        { caption: 'Sistema de diseño final' },
        { caption: 'Vistas responsivas para móvil' },
      ],
    },
    'demo-video': {
      caption: 'Recorrido interactivo del sitio web final.',
    },
  },
};
