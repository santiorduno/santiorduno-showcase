import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { education, certifications } from "../constants";
import { Icon } from "@iconify-icon/react";

const Education = () => {
  return (
    <section id="education" className="min-h-screen">
      <AnimatedHeaderSection
        title="Edu"
        text="Continuous learning and professional development through formal education and industry certifications."
        withScrollTrigger={true}
      />
      
      <div className="px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Column */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-light mb-8 uppercase tracking-wider">Academic</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-black pl-6 py-4">
                  <h3 className="text-xl lg:text-2xl font-light mb-2">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 mb-1">{edu.institution}</p>
                  {edu.credential && (
                    <p className="text-sm text-gray-500">{edu.credential}</p>
                  )}
                  <p className="text-sm text-gray-600 mt-2 uppercase tracking-wide">{edu.status}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-light mb-8 uppercase tracking-wider">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg hover:bg-black transition-all duration-300 group"
                >
                  {/* Logo */}
                  {cert.logo && (
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={cert.logo} 
                        alt={`${cert.institution} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-base lg:text-lg font-light mb-1 group-hover:text-white transition-colors">{cert.title}</p>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors">{cert.institution}</p>
                  </div>

                  {/* View Button */}
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-4 py-2 border border-gray-300 rounded-lg text-sm group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 flex items-center gap-2"
                  >
                    View
                    <Icon icon="lucide:external-link" className="size-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
