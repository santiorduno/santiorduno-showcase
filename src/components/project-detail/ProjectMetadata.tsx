import React from 'react';
import type { ProjectDetail } from '../../constants';
import { Icon } from '@iconify-icon/react';
import { useLanguage } from '../../i18n/LanguageContext';
import { trackCtaClick } from '../../utils/analytics';

interface ProjectMetadataProps {
  metadata: ProjectDetail['metadata'];
}

const ProjectMetadata: React.FC<ProjectMetadataProps> = ({ metadata }) => {
  const { t } = useLanguage();
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 border-y border-white/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metadata.client && (
          <div>
            <p className="text-sm text-gray-500 mb-1">{t.projectDetail.clientLabel}</p>
            <p className="text-lg font-medium text-white">{metadata.client}</p>
          </div>
        )}
        <div>
          <p className="text-sm text-gray-500 mb-1">{t.projectDetail.yearLabel}</p>
          <p className="text-lg font-medium text-white">{metadata.year}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">{t.projectDetail.roleLabel}</p>
          <p className="text-lg font-medium text-white">{metadata.role}</p>
        </div>
        {metadata.liveUrl && (
          <div>
            <p className="text-sm text-gray-500 mb-1">{t.projectDetail.liveSiteLabel}</p>
            <a
              href={metadata.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-white flex items-center gap-2 hover:underline"
              onClick={() => trackCtaClick('case_study')}
            >
              {t.projectDetail.visitLabel} <Icon icon="lucide:external-link" className="size-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectMetadata;
