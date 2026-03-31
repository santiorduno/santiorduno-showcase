import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectHeader from '../components/project-detail/ProjectHeader';
import ProjectMetadata from '../components/project-detail/ProjectMetadata';
import ContentRenderer from '../components/project-detail/ContentRenderer';
import ProjectNavigation from '../components/project-detail/ProjectNavigation';
import { useProjectDetail } from '../hooks/useSanityData';
import { mergeProjectWithTranslation } from '../i18n/useContent';
import { useLanguage } from '../i18n/LanguageContext';
import { projectTranslationsES } from '../i18n/content/es/index';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const { data: rawProject, loading } = useProjectDetail(slug ?? '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  if (loading && !rawProject) {
    return null;
  }

  if (!rawProject) {
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

  const project = mergeProjectWithTranslation(rawProject, projectTranslationsES, lang);

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
