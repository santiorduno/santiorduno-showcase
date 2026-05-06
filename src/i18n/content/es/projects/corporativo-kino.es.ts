import type { ProjectContentTranslation } from '../../../types';

export const corporativoKinoES: ProjectContentTranslation = {
  slug: 'corporativo-kino',
  description: 'Estrategia UX, auditoría técnica y propuesta de rediseño completo para un holding industrial con tres unidades de negocio especializadas. Arquitectura basada en investigación e implementación de medición desde cero.',
  metadata: {
    role: 'Estratega UX & Diseñador',
  },
  content: {
    overview: {
      heading: 'El Reto',
      body: 'Corporativo Kino es un holding industrial que opera tres unidades especializadas: Kino Laboratorios (pruebas técnicas y certificaciones), Sustentec (consultoría ambiental) y Kindeplan (planeación y sustentabilidad). Su sitio existente tenía un performance score de 61/100, un payload de 30.6 MB — seis veces por encima del óptimo — y sin infraestructura de analítica. El problema de negocio era concreto: el sitio no estaba generando leads calificados, y el equipo no tenía forma de medir por qué.',
    },
    research: {
      heading: 'Investigación de Usuarios: Cuatro Perfiles, Cuatro Necesidades Distintas',
      body: 'Antes de diseñar cualquier cosa, mapee la base de usuarios real. Corporativo Kino atiende cuatro perfiles industriales distintos, cada uno con una necesidad fundamentalmente diferente al llegar al sitio. Empresas industriales y clientes gubernamentales necesitan ver certificaciones y autoridad regulatoria inmediatamente — la confianza es el factor de conversión. Constructoras y consultoras ambientales necesitan entender rápidamente el alcance de servicios para sus proyectos. Los clientes de la industria minera necesitan velocidad: acceso rápido a credenciales técnicas y un proceso de cotización igualmente ágil. Esta investigación definió toda la arquitectura del sitio. Un diseño que sirve a cuatro perfiles requiere un sistema de navegación claro y caminos de conversión distintos por unidad de negocio.',
    },
    'technical-audit': {
      heading: 'Auditoría Técnica: Diagnosticar Antes de Prescribir',
      body: 'Realicé una auditoría de rendimiento completa al sitio existente antes de proponer cualquier rediseño. Los resultados fueron claros: Performance score de 61/100 — en el rango lento (rojo). Un objetivo de 90+ se considera rápido. Payload total de 30.6 MB, con 29.6 MB atribuibles únicamente a imágenes sin optimizar. Sin implementación mobile-first, causando fallos de layout en el dispositivo usado por la mayoría de su audiencia. Sin configuración de analítica — el cliente no tenía visibilidad sobre tráfico, comportamiento de usuario ni conversión. Estos números se convirtieron en la línea base. La propuesta de rediseño se construyó alrededor de resolver cada uno de estos problemas específicamente, no estéticamente.',
    },
    sitemap: {
      heading: 'Arquitectura de Información',
      body: 'La estructura del sitio fue rediseñada alrededor de los perfiles de usuario identificados en la investigación. La página principal funciona como punto de entrada para construir confianza — certificaciones, resumen de servicios y un CTA de contacto directo. Seis sub-secciones se ramifican desde ella: Nosotros (empresa y misión), Unidades de Negocio (las tres unidades especializadas con caminos de conversión distintos), Evidencia Técnica (acreditaciones y testimonios para clientes industriales), Recursos (contenido descargable y whitepapers), Club Kino (programa de lealtad) y Contacto (conexión directa por WhatsApp para respuesta rápida). El flujo de contacto fue rediseñado como un proceso de cuatro pasos: disparador → clasificación por unidad de negocio → datos del lead → confirmación con promesa de respuesta en 24 horas. Este paso de calificación significa que el equipo de ventas recibe leads ya ordenados por unidad de interés.',
    },
    'image-sitemap': {
      caption: 'Arquitectura del sitio: página principal + 6 sub-secciones, cada una con contenido personalizado y estrategia de conversión por perfil de usuario',
    },
    'design-system': {
      heading: 'Sistema de Diseño',
      body: 'Construí el sistema de diseño en Figma desde variables de color primitivas — una paleta neutral con verdes de acento que reflejan el posicionamiento ambiental de Kino. La tipografía usa Roboto para títulos e Inter para cuerpo, ambas optimizadas para legibilidad en densidad de contenido industrial. La librería de componentes UI cubre la interfaz completa: estados de botón en modo claro y oscuro, inputs de formulario (campos de texto, áreas de texto, selects), tags y checkboxes. El sistema fue diseñado para entregarse directamente al CMS de Webflow, permitiendo al equipo de marketing actualizar contenido, subir recursos y editar el blog sin intervención de desarrollo.',
    },
    'image-ds': {
      caption: 'Sistema de diseño (Roboto + Inter, primitivas de color, librería completa de componentes UI) y exploración de look & feel en desktop y móvil',
    },
    analytics: {
      heading: 'Implementando Medición por Primera Vez',
      body: 'Uno de los entregables comercialmente más relevantes de este proyecto fue configurar Google Analytics y Search Console como parte del paquete de lanzamiento. Corporativo Kino no tenía visibilidad sobre el tráfico de su propio sitio. La implementación les dio una línea base clara: fuentes de tráfico, comportamiento de usuario por sección y datos de interacción por unidad de negocio. Esto no era un extra — era la base para que cualquier decisión futura de diseño o marketing fuera basada en datos en lugar de suposiciones.',
    },
    'phased-approach': {
      heading: 'Entrega por Fases',
      body: 'El proyecto se estructuró en tres fases para gestionar riesgo e inversión. La Fase 1 cubrió el núcleo: arquitectura del sitio, sistema de diseño, look & feel y un handoff de Figma listo para desarrollo. La Fase 2 se enfocó en el desarrollo frontend con enfoque mobile-first y el sistema de cotización optimizado. La Fase 3 fue la configuración de analítica y el lanzamiento oficial. Esta estructura por fases permitió al cliente validar la dirección antes de comprometerse con el desarrollo completo — una decisión que protegió a ambas partes.',
    },
    'result-video': {
      caption: 'Recorrido del diseño final: experiencia en desktop y móvil',
    },
    'result-video-2': {
      caption: 'Detalle de implementación mobile-first y componentes UI en contexto',
    },
  },
};
