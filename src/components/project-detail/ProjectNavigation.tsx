import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import { useProjects } from '../../hooks/useSanityData';
import { useLanguage } from '../../i18n/LanguageContext';

interface ProjectNavigationProps {
  currentSlug: string;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ currentSlug }) => {
  const { data: projects } = useProjects();
  const { t } = useLanguage();
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center border-t border-white/20 pt-8">
        {/* Back to Projects */}
        <Link
          to="/#work"
          className="flex items-center gap-2 text-lg text-white hover:underline"
        >
          <Icon icon="lucide:arrow-left" className="size-5" />
          {t.projectDetail.backToProjects}
        </Link>

        {/* Prev/Next Navigation */}
        <div className="flex gap-8">
          {prevProject && (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-lg text-white hover:underline"
            >
              <Icon icon="lucide:chevron-left" className="size-5" />
              {t.projectDetail.previousLabel}
            </Link>
          )}
          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-lg text-white hover:underline"
            >
              {t.projectDetail.nextLabel}
              <Icon icon="lucide:chevron-right" className="size-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectNavigation;
