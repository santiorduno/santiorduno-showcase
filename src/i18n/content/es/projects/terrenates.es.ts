import type { ProjectContentTranslation } from '../../../types';

export const terrenatesES: ProjectContentTranslation = {
  slug: 'terrenates',
  description: 'Identidad de marca y sistema digital de dos productos para un rancho chihuahuense de cinco generaciones — sitio institucional y landing D2C de Artisan Butchery.',
  metadata: {
    role: 'Diseñador de Marca y Producto',
  },
  content: {
    overview: {
      heading: 'Una Identidad. Dos Productos.',
      body: 'Terrenates es cinco generaciones de ganadería condensadas en 7,000 hectáreas entre los 1,550 y los 2,650 msnm en Buenaventura, Chihuahua. El rancho cuenta con certificación ADVC de la CONANP — 5,200 hectáreas destinadas voluntariamente a la conservación. Opera dos productos comercialmente distintos: una presencia institucional para compradores de pie de cría, aliados de conservación y visitantes de ecoturismo; y Artisan Butchery, una operación D2C que vende carne madurada 21 días sin punto de venta físico. Una identidad visual tuvo que sostener ambos sin colapsar ninguno.',
    },
    'hero-image': {
      caption: 'Homepage institucional: "Ganadería que regenera la tierra." — narrativa de herencia, estadísticas de conservación y la autoridad de cinco generaciones',
    },
    'design-system': {
      heading: 'El Sistema de Diseño',
      body: 'Tres tipografías, cinco esquemas de color, una colección de tokens. Oswald lleva encabezados y display — le da al producto institucional su autoridad territorial. Helvetica Neue maneja el cuerpo de texto del sitio del rancho: neutral, legible, con el peso adecuado. Inter toma cada elemento interactivo — botones, etiquetas, CTAs — en ambos productos. El sistema de color se construyó como cinco modos intercambiables: Ivory y Cream para las secciones narrativas del rancho, Burgundy para los momentos de conversión, Charcoal para la sección de dry-age, Sage para la historia ADVC. Cada fill resuelve a un Design Token de la colección "Design Tokens · Terrenates" — cambiar el esquema de una sección no toca su contenido.',
    },
    'design-system-image': {
      caption: 'Guía de estilos: escala tipográfica (Oswald / Helvetica Neue / Inter), cinco esquemas de color y la paleta primitiva vinculada a colecciones de variables de Figma',
    },
    'artisan-butchery': {
      heading: 'Artisan Butchery: Una Lógica Distinta',
      body: 'La carnicería opera sin punto de venta. Los pedidos llegan por WhatsApp. La landing page hace el trabajo que normalmente haría un espacio físico — establecer confianza, comunicar procedencia y darle al comprador una razón para elegir un número sobre un anaquel de supermercado. El copy se redujo a datos: 21 días. 5 generaciones. 7,000 hectáreas. Cero intermediarios. El titular del hero es permanente: "Criado con tiempo." Cada sección avanza un solo argumento — el tiempo y la tierra detrás del producto son el producto.',
    },
    'butchery-image': {
      caption: 'Landing de Artisan Butchery: estadísticas de origen, línea de tiempo de herencia (1890 → 1960 → 2024) y el CTA final en Burgundy — "Ordena directo."',
    },
    'catalog-component': {
      heading: 'El Catálogo de Proteínas',
      body: 'El componente más técnicamente estructurado del sistema es el catálogo de proteínas: siete estados de variante en Figma, cada uno expandiendo una categoría de proteína distinta con sus tarjetas de corte — Res, Pollo, Cordero, Pavo, Cerdo y Otros Productos. Cada variante usa auto-layout sobre una cuadrícula fija de 1,240px. Al vaciar la cuadrícula entre variantes, el frame colapsa — por eso cada estado requiere `grid.resize(1240, 272)` antes de poblar nuevas tarjetas. La colección de variables "Contenido · Terrenates" almacena todo el copy en modos Desktop y Mobile: el contenido se edita una sola vez y ambos breakpoints se actualizan.',
    },
    'catalog-image': {
      caption: 'Componente del catálogo de proteínas (7 variantes), sistema de botones (4 tipos × 4 estados) y layout de sección con las tarjetas de cortes de Artisan Butchery',
    },
    'demo-video': {
      caption: 'Recorrido de diseño: sitio institucional y landing de Artisan Butchery — dos productos, un sistema',
    },
  },
};
