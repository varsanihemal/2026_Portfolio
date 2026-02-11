import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="bg-black text-white py-24 px-4 md:px-8 lg:px-16" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`${isEven ? "md:col-start-2" : ""} relative group`}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div
                  className={`${isEven ? "md:col-start-1 md:row-start-1" : ""}`}
                >
                  <div className="space-y-6">
                    {/* Project Number */}
                    <h2 className="text-8xl md:text-9xl font-bold text-white opacity-20">
                      {String(index + 1).padStart(2, "0")}
                    </h2>

                    {/* Project Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white -mt-8">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <div className="space-y-3 text-gray-400 leading-relaxed">
                      {Array.isArray(project.description) ? (
                        project.description.map((item, i) => (
                          <p key={i}>{item}</p>
                        ))
                      ) : (
                        <p>{project.description}</p>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:border-blue-500/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                        >
                          <span>Live Demo</span>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}

                      {project.codeLink && project.codeLink !== "#" && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                        >
                          <span>View Code</span>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
