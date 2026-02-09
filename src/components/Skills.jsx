import React from "react";
import { skills } from "../data.js";

const Skills = () => {
  // Combine all skills into one array
  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.databases,
    ...skills.tools,
    ...skills.testing,
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16">
          My <span className="font-bold">Skills</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {allSkills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-4 border-2 border-black rounded-lg p-6 h-[160px] hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={skill.image}
                className="w-16 h-16 object-contain"
                alt={skill.name}
              />
              <p className="text-sm font-semibold text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;