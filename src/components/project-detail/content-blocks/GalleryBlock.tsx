import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { GalleryContent } from '../../../constants';

interface GalleryBlockProps {
  data: GalleryContent;
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({ data }) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!galleryRef.current) return;
    
    const images = galleryRef.current.querySelectorAll('.gallery-item');
    gsap.from(images, {
      y: 60,
      opacity: 0,
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 80%",
      },
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  const gridClass = `grid gap-4 grid-cols-1 md:grid-cols-${data.columns || 3}`;

  return (
    <div ref={galleryRef} className="max-w-6xl mx-auto px-6 py-8">
      <div className={gridClass}>
        {data.images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
            {image.caption && (
              <p className="text-sm text-gray-600 mt-2 text-center">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryBlock;
