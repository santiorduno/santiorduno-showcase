import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectHeader from '../components/project-detail/ProjectHeader';
import ProjectMetadata from '../components/project-detail/ProjectMetadata';
import ContentRenderer from '../components/project-detail/ContentRenderer';
import ProjectNavigation from '../components/project-detail/ProjectNavigation';
import { useContent } from '../i18n/useContent';
import { useLanguage } from '../i18n/LanguageContext';
import { useScrollDepth } from '../hooks/useScrollDepth';
import { trackCaseStudyView } from '../utils/analytics';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getProjectBySlug } = useContent();
  const { t } = useLanguage();

  const project = slug ? getProjectBySlug(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!project) return;
    trackCaseStudyView(project.slug, project.title);
  }, [project]);

  useScrollDepth({
    pageName: `case_study:${project?.slug ?? 'unknown'}`,
    caseStudySlug: project?.slug,
  });

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4 text-white">{t.projectDetail.notFoundTitle}</h1>
          <p className="text-gray-400 mb-8">{t.projectDetail.notFoundText}</p>
          <a href="/" className="text-lg text-white underline">{t.projectDetail.notFoundLink}</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <ProjectHeader project={project} />
      <ProjectMetadata metadata={project.metadata} />
      <ContentRenderer sections={project.content} />
      <ProjectNavigation currentSlug={slug} />
    </div>
  );
};

export default ProjectDetailPage;
