import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { QuoteContent } from '../../../constants';

interface QuoteBlockProps {
  data: QuoteContent;
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ data }) => {
  const quoteRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!quoteRef.current) return;
    
    gsap.from(quoteRef.current, {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: quoteRef.current,
        start: "top 80%",
      },
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={quoteRef} className="max-w-4xl mx-auto px-6 py-12">
      <blockquote className="border-l-4 border-white pl-6 py-4">
        <p className="text-2xl lg:text-3xl font-light italic text-white mb-4">
          "{data.text}"
        </p>
        {(data.author || data.role) && (
          <footer className="text-lg text-gray-400">
            {data.author && <span className="font-medium">{data.author}</span>}
            {data.role && <span className="block text-sm">{data.role}</span>}
          </footer>
        )}
      </blockquote>
    </div>
  );
};

export default QuoteBlock;
