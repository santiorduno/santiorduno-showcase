import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getProjectBySlug } from '../constants/projects';
import ProjectHeader from '../components/project-detail/ProjectHeader';
import ProjectMetadata from '../components/project-detail/ProjectMetadata';
import ContentRenderer from '../components/project-detail/ContentRenderer';
import ProjectNavigation from '../components/project-detail/ProjectNavigation';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4 text-white">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <a href="/" className="text-lg text-white underline">Return to Homepage</a>
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
