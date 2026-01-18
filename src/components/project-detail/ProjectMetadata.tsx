import React from 'react';
import type { ProjectDetail } from '../../constants';
import { Icon } from '@iconify-icon/react';

interface ProjectMetadataProps {
  metadata: ProjectDetail['metadata'];
}

const ProjectMetadata: React.FC<ProjectMetadataProps> = ({ metadata }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 border-y border-white/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metadata.client && (
          <div>
            <p className="text-sm text-gray-500 mb-1">Client</p>
            <p className="text-lg font-medium text-white">{metadata.client}</p>
          </div>
        )}
        <div>
          <p className="text-sm text-gray-500 mb-1">Year</p>
          <p className="text-lg font-medium text-white">{metadata.year}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Role</p>
          <p className="text-lg font-medium text-white">{metadata.role}</p>
        </div>
        {metadata.liveUrl && (
          <div>
            <p className="text-sm text-gray-500 mb-1">Live Site</p>
            <a 
              href={metadata.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-white flex items-center gap-2 hover:underline"
            >
              Visit <Icon icon="lucide:external-link" className="size-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectMetadata;
