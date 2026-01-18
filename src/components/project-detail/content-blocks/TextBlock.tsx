import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { TextContent } from '../../../constants';
import { AnimatedTextLines } from '../../AnimatedTextLines';

interface TextBlockProps {
  data: TextContent;
}

const TextBlock: React.FC<TextBlockProps> = ({ data }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!headingRef.current) return;
    
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[data.alignment || 'left'];

  return (
    <div className={`max-w-4xl mx-auto px-6 py-8 ${alignmentClass}`}>
      {data.heading && (
        <h2 ref={headingRef} className="text-3xl lg:text-4xl font-light mb-6 text-white uppercase">
          {data.heading}
        </h2>
      )}
      <AnimatedTextLines
        text={data.body}
        className="text-lg lg:text-xl leading-relaxed text-gray-300 font-light"
      />
    </div>
  );
};

export default TextBlock;
