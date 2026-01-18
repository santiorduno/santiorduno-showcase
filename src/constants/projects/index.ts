import type { ProjectDetail } from '../index';
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

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): ProjectDetail | undefined => {
  return projectsContent.find(project => project.slug === slug);
};