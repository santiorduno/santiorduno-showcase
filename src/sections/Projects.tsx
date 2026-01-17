import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { Icon } from "@iconify-icon/react";

const Works = () => {
    return <section id="work" className="flex flex-col min-h-screen">
        <AnimatedHeaderSection 
        title="Works"
        text="Digital products built with a data-driven mindset. Combining visual storytelling with Applied AI and full-stack development to solve complex business challenges."
        />
        <div className="relative flex flex-col font-light">
            {projects.map((project, index) => (
            <div 
            key={project.id} 
            id="project" 
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            >
                {/* title */}
                <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                    <h2
                    className="lg:text-[32px] text-[26] leading-none" 
                    >{project.title}
                    </h2>
                    <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5"/> 
                </div>
                {/* divider */}
                <div className="w-full h-0.5 bg-black/80"></div>
                {/* framwork */}
                <div>
                    <p>
                        {project.technologies?.map((tech, index) => (
                            <span key={index} className="text-sm text-black/80">
                                {tech + " "}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            ))}
        </div>
    </section>
};

export default Works;