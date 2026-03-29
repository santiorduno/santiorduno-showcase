import type { ProjectContentTranslation } from '../../../types';

export const neuropES: ProjectContentTranslation = {
  slug: 'neurop',
  description: 'Solución web personalizada con enfoque en implementación técnica y experiencia de usuario.',
  metadata: {
    role: 'Desarrollador Frontend',
  },
  content: {
    overview: {
      heading: 'Plataforma Web de Salud',
      body: 'Neurop es una plataforma de salud especializada que requería una interfaz limpia y profesional con énfasis en accesibilidad y confianza del usuario. El proyecto exigió especial atención en la presentación de información médica y navegación amigable para pacientes.',
    },
    hero: {
      caption: 'Interfaz de salud limpia y profesional.',
    },
    'design-principles': {
      heading: 'Principios de Diseño',
      body: 'El diseño se centró en tres principios fundamentales:\n\n• Accesibilidad: Cumplimiento WCAG 2.1 AA para todos los usuarios\n• Confianza: Estética profesional que inspira seguridad\n• Claridad: Jerarquía de información clara y navegación sencilla\n\nCada decisión de diseño se tomó pensando en el usuario final, garantizando que pacientes y profesionales de la salud pudieran encontrar fácilmente la información que necesitaban.',
    },
    'features-gallery': {
      images: [
        { caption: 'Resumen de servicios médicos' },
        { caption: 'Profesionales de la salud' },
        { caption: 'Sistema de reserva de citas' },
      ],
    },
    'technical-details': {
      heading: 'Implementación Técnica',
      body: 'Desarrollado con tecnologías frontend modernas, la plataforma cuenta con diseño responsivo, rendimiento optimizado e interacciones de usuario fluidas. Se prestó especial atención a la validación de formularios y manejo de errores para garantizar una experiencia de reserva de citas sin fricciones.',
    },
  },
};
