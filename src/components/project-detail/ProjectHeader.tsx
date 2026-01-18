import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { ProjectDetail } from '../../constants';
import { AnimatedTextLines } from '../AnimatedTextLines';

interface ProjectHeaderProps {
  project: ProjectDetail;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    if (titleRef.current) {
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
    
    if (tagsRef.current) {
      tl.from(tagsRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=0.5");
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 ref={titleRef} className="text-5xl lg:text-7xl font-light mb-8 text-white uppercase">
        {project.title}
      </h1>
      
      <AnimatedTextLines
        text={project.description}
        className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed font-light"
      />
      
      <div ref={tagsRef} className="flex flex-wrap gap-3">
        {project.technologies.map(tech => (
          <span 
            key={tech.id}
            className="px-4 py-2 bg-white text-black text-sm rounded-full font-light"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectHeader;
