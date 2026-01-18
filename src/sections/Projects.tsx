import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";

const Works = () => {
    return <section id="work" className="flex flex-col min-h-screen">
        <AnimatedHeaderSection 
        title="Works"
        text="Digital products built with a data-driven mindset. Combining visual storytelling with Applied AI and full-stack development to solve complex business challenges."
        />
        <div className="relative flex flex-col font-light">
            {projects.map((project, index) => (
            <Link 
              key={project.id}
              to={`/projects/${project.slug}`}
              className="block px-10 py-8 group"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Thumbnail */}
                  <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
                    <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <Icon icon="lucide:image" className="size-16" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col justify-center gap-3">
                    {/* Title */}
                    <div className="flex justify-between items-start">
                        <h2 className="text-3xl lg:text-4xl font-light">{project.title}</h2>
                        <Icon icon="lucide:arrow-up-right" className="size-6 flex-shrink-0 ml-4"/> 
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-base lg:text-lg">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies?.map((tech) => (
                        <span
                            key={tech.id} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >{tech.name}</span>
                        ))}
                    </div>
                  </div>
              </div>
              
              {/* Divider */}
              <div className="w-full h-px bg-gray-200 mt-8"></div>
            </Link>
            ))}
        </div>
    </section>
};

export default Works;