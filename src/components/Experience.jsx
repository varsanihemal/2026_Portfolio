import React from "react";
import { experience } from "../data";

const Experience = () => {
  return (
    <section className="bg-black text-white py-12 md:py-24 px-3 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Experience Cards */}
        <div className="relative">
          {/* Timeline line - adjusted for mobile */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>
          
          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-12 md:pl-20 group"
              >
                {/* Timeline dot - adjusted for mobile */}
                <div className="absolute left-2.5 md:left-6 w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full border-2 md:border-4 border-black group-hover:scale-125 transition-transform duration-300 z-10">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Card */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl md:rounded-2xl p-5 md:p-10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                  {/* Header */}
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg md:rounded-xl p-0.5 flex-shrink-0">
                        <div className="w-full h-full bg-gray-900 rounded-lg md:rounded-xl flex items-center justify-center">
                          <img 
                            src={exp.logo} 
                            className="w-8 h-8 md:w-10 md:h-10 object-contain" 
                            alt={exp.company} 
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-0.5 md:mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-sm md:text-base text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-gray-300 bg-gray-800/50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-gray-700">
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium text-gray-300 bg-gray-800/50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-gray-700">
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 md:space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li 
                        key={idx} 
                        className="flex gap-2 md:gap-3 text-gray-300 leading-relaxed text-sm md:text-[15px]"
                      >
                        <span className="text-blue-400 mt-0.5 md:mt-1 flex-shrink-0">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;