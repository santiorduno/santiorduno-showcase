import type { ProjectContentTranslation } from '../../../types';

export const lasRiberasES: ProjectContentTranslation = {
  slug: 'las-riberas',
  description: 'Estrategia UX, sistema de diseño y desarrollo en Webflow para un desarrollo residencial premium — decisiones validadas con análisis de heatmaps y comportamiento de usuarios.',
  metadata: {
    role: 'Diseñador UX & Desarrollador Principal',
  },
  content: {
    overview: {
      heading: 'El Reto',
      body: 'Las Riberas tenía 10 años en el mercado inmobiliario de Hermosillo y un portafolio de producto complejo — lotes residenciales, casas listas para habitar y villas personalizadas. Su presencia digital no reflejaba su posicionamiento premium y carecía de un camino de conversión claro para cada perfil de comprador. El objetivo era rediseñar toda la experiencia digital: desde la arquitectura de información hasta un sistema de diseño escalable, todo implementado en Webflow.',
    },
    'hero-image': {
      caption: 'Diseño de sección lifestyle destacando las amenidades del desarrollo',
    },
    'process-ia': {
      heading: 'Arquitectura de Información Primero',
      body: 'Antes de cualquier diseño visual, mapee la estructura completa del sitio en FigJam. El desarrollo tiene tres perfiles de comprador distintos — compradores de lotes, de casas y de villas — cada uno requiriendo un camino de conversión diferente. El sitemap definió experiencias de landing separadas por tipo de producto, con un sistema de navegación compartido y CTAs unificados en todas las páginas.',
    },
    'sitemap-image': {
      caption: 'Arquitectura completa del sitio: página principal + tres sub-sitios de producto (Lotes, Casas, Villas), cada uno con flujos de conversión personalizados',
    },
    'design-system': {
      heading: 'Sistema de Diseño desde Cero',
      body: 'Construí el sistema de diseño completo en Figma — comenzando con variables de color primitivas, luego tipografía (Palatino para títulos, Neuzeit Grotesk para cuerpo) y una librería completa de componentes UI incluyendo botones, inputs, tags y checkboxes en modos claro y oscuro. Este sistema garantizó consistencia visual en todas las páginas de producto y aceleró significativamente la implementación en Webflow.',
    },
    'design-system-image': {
      caption: 'Sistema de diseño: escala tipográfica, variables de color primitivas y librería completa de componentes UI',
    },
    'validation-intro': {
      heading: 'Validando con Comportamiento Real de Usuarios',
      body: 'Después del lanzamiento, usé Attention Insight para ejecutar análisis de heatmaps predictivos en páginas clave. El objetivo era identificar si los usuarios estaban llegando a los CTAs y comprometiéndose con el contenido comercialmente más importante — y dónde estábamos perdiendo atención antes de la conversión.',
    },
    'heatmap-hero': {
      caption: "Heatmap del hero: atención concentrada en el CTA principal y el titular — con el botón 'Contacto' registrando 3.3% de click rate",
    },
    'heatmap-analysis': {
      heading: 'Lo que Revelaron los Heatmaps',
      body: 'El análisis de atención en tres secciones clave mostró un patrón consistente: los usuarios se comprometían fuertemente con los títulos y nombres de producto (Casa Alpina, Casa Azkar), pero los CTAs debajo del fold perdían atención antes de que los usuarios llegaran a ellos. Esto confirmó una decisión de diseño tomada durante la arquitectura: cada sección de producto necesitaba su CTA dentro del área visible, no debajo de la cuadrícula de imágenes. Los datos de heatmap validaron la estructura del layout e informaron ajustes de copy en las tarjetas de producto.',
    },
    'heatmap-products': {
      images: [
        { caption: 'Sección lifestyle: fuerte atención en nombres de producto, CTAs necesitaban reposicionamiento' },
        { caption: 'Overlay de click map: decisiones de espaciado y cuadrícula validadas contra datos reales de interacción' },
      ],
    },
    'final-design': {
      caption: 'Implementación final: sección de amenidades con Club Deportivo, Golf, Centro Ecuestre y marcas lifestyle',
    },
    outcome: {
      heading: 'Resultado',
      body: 'El sitio final atiende tres perfiles de comprador a través de caminos de conversión distintos, construido sobre un sistema de diseño unificado que escala en todas las páginas de producto. El proceso de validación con heatmaps estableció un ciclo de retroalimentación entre decisiones de diseño y comportamiento real de usuarios — reemplazando la iteración basada en suposiciones por ajustes basados en evidencia. El sitio está en vivo en lasriberas.mx.',
    },
    'demo-video': {
      caption: 'Recorrido interactivo del sitio web final',
    },
  },
};
