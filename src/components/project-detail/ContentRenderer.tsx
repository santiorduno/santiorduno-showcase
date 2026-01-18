import React from 'react';
import type { ContentSection } from '../../constants';
import TextBlock from './content-blocks/TextBlock';
import ImageBlock from './content-blocks/ImageBlock';
import VideoBlock from './content-blocks/VideoBlock';
import GalleryBlock from './content-blocks/GalleryBlock';
import QuoteBlock from './content-blocks/QuoteBlock';

interface ContentRendererProps {
  sections: ContentSection[];
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ sections }) => {
  // Sort sections by order
  const sortedSections = [...sections].sort((a, b) => a.order - b.order);

  const renderSection = (section: ContentSection) => {
    switch (section.type) {
      case 'text':
        return <TextBlock key={section.id} data={section.data as any} />;
      case 'image':
      case 'gif':
        return <ImageBlock key={section.id} data={section.data as any} />;
      case 'video':
        return <VideoBlock key={section.id} data={section.data as any} />;
      case 'gallery':
        return <GalleryBlock key={section.id} data={section.data as any} />;
      /*
      case 'quote':
        return <QuoteBlock key={section.id} data={section.data as any} />;
      default:
        return null;
   */ 
    }
  };

  return (
    <div className="content-sections">
      {sortedSections.map(section => renderSection(section))}
    </div>
  );
};

export default ContentRenderer;
