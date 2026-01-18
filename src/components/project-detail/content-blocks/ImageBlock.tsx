import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { MediaContent } from '../../../constants';

interface ImageBlockProps {
  data: MediaContent;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ data }) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imageRef.current) return;
    
    gsap.from(imageRef.current, {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const widthClass = {
    full: 'w-full',
    large: 'max-w-6xl mx-auto',
    medium: 'max-w-4xl mx-auto',
    small: 'max-w-2xl mx-auto',
  }[data.width || 'large'];

  return (
    <div ref={imageRef} className={`${widthClass} px-6 py-8`}>
      <img 
        src={data.src} 
        alt={data.alt}
        className="w-full h-auto rounded-lg shadow-lg"
        loading="lazy"
      />
      {data.caption && (
        <p className="text-sm text-gray-600 mt-4 text-center italic">
          {data.caption}
        </p>
      )}
    </div>
  );
};

export default ImageBlock;
