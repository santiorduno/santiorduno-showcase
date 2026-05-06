import type { ProjectDetail } from '../index';
import { lasRiberas } from './las-riberas';
import { corporativoKino } from './corporativo-kino';
import { santaEventos } from './santa-eventos';
import { arteClean } from './arte-clean';
import { neurop } from './neurop';
import { thisWebsite } from './this-website';

export const projectsContent: ProjectDetail[] = [
  lasRiberas,
  corporativoKino,
  santaEventos,
  arteClean,
  neurop,
  thisWebsite
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): ProjectDetail | undefined => {
  return projectsContent.find(project => project.slug === slug);
};