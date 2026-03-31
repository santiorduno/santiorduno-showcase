import { useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import {
  type Service,
  type Project,
  type ProjectDetail,
  type Certification,
  type AboutInfo,
} from '../constants';
import {
  useProjects,
  useProjectDetail as _useProjectDetail,
  useServices,
  useAbout,
  useCertifications,
  useEducation,
  useSocialLinks,
  useContactInfo,
} from '../hooks/useSanityData';
import {
  aboutES,
  servicesES,
  projectsES,
  educationES,
  certificationsES,
} from './content/es/about';
import type { ProjectContentTranslation } from './types';

export { _useProjectDetail as useProjectDetail };

export const useContent = () => {
  const { lang } = useLanguage();

  const { data: projectsEN } = useProjects();
  const { data: servicesEN } = useServices();
  const { data: aboutEN } = useAbout();
  const { data: certificationsEN } = useCertifications();
  const { data: educationEN } = useEducation();
  const { data: socialLinks } = useSocialLinks();
  const { data: contactInfo } = useContactInfo();

  return useMemo(() => {
    if (lang === 'en') {
      return {
        about: aboutEN,
        services: servicesEN,
        projects: projectsEN,
        education: educationEN,
        certifications: certificationsEN,
        socialLinks,
        contactInfo,
        getProjectBySlug: (_slug: string) => undefined as ProjectDetail | undefined,
      };
    }

    const about: AboutInfo = { ...aboutEN, ...aboutES };

    const services: Service[] = servicesEN.map((s) => {
      const o = servicesES.find((x) => x.id === s.id);
      if (!o) return s;
      return { ...s, title: o.title, description: o.description, items: o.items };
    });

    const projects: Project[] = projectsEN.map((p) => {
      const o = projectsES.find((x) => x.id === p.id);
      return o ? { ...p, description: o.description } : p;
    });

    const education = educationEN.map((e) => {
      const o = educationES.find((x) => x.id === e.id);
      return o ? { ...e, degree: o.degree, status: o.status } : e;
    });

    const certifications: Certification[] = certificationsEN.map((c) => {
      const o = certificationsES.find((x) => x.id === c.id);
      return o ? { ...c, title: o.title } : c;
    });

    return {
      about,
      services,
      projects,
      education,
      certifications,
      socialLinks,
      contactInfo,
      getProjectBySlug: (_slug: string) => undefined as ProjectDetail | undefined,
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, projectsEN, servicesEN, aboutEN, certificationsEN, educationEN, socialLinks, contactInfo]);
};

export function mergeProjectWithTranslation(
  project: ProjectDetail,
  translations: ProjectContentTranslation[],
  lang: string
): ProjectDetail {
  if (lang === 'en') return project;
  const tr = translations.find((t) => t.slug === project.slug);
  if (!tr) return project;

  return {
    ...project,
    description: tr.description,
    metadata: { ...project.metadata, role: tr.metadata.role },
    content: project.content.map((block) => {
      const blockTr = tr.content[block.id];
      if (!blockTr) return block;

      const data = { ...block.data } as Record<string, unknown>;
      if (blockTr.heading !== undefined && 'heading' in data) data.heading = blockTr.heading;
      if (blockTr.body !== undefined && 'body' in data) data.body = blockTr.body;
      if (blockTr.text !== undefined && 'text' in data) data.text = blockTr.text;
      if (blockTr.caption !== undefined && 'caption' in data) data.caption = blockTr.caption;

      if (blockTr.images && 'images' in data && Array.isArray(data.images)) {
        data.images = (data.images as { src: string; alt: string; caption?: string }[]).map(
          (img, i) => {
            const imgTr = blockTr.images?.[i];
            return imgTr?.caption !== undefined ? { ...img, caption: imgTr.caption } : img;
          }
        );
      }

      return { ...block, data: data as unknown as typeof block.data };
    }),
  };
}
