import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { MediaContent } from '../../../constants';

interface VideoBlockProps {
  data: MediaContent;
}

const VideoBlock: React.FC<VideoBlockProps> = ({ data }) => {
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!videoRef.current) return;
    
    gsap.from(videoRef.current, {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: videoRef.current,
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
    <div ref={videoRef} className={`${widthClass} px-6 py-8`}>
      <video 
        src={data.src}
        controls
        className="w-full h-auto rounded-lg shadow-lg"
        poster={data.src.replace(/\.[^/.]+$/, '.jpg')} // Assumes poster image exists
      >
        Your browser does not support the video tag.
      </video>
      {data.caption && (
        <p className="text-sm text-gray-600 mt-4 text-center italic">
          {data.caption}
        </p>
      )}
    </div>
  );
};

export default VideoBlock;
