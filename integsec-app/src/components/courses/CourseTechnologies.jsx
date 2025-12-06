// src/components/courses/CourseTechnologies.jsx

import React from 'react';

const CourseTechnologies = ({ technologies }) => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies You'll Master
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get hands-on experience with industry-leading tools and frameworks
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-900/80 border border-gray-800 hover:border-lime-400/50 rounded-full text-gray-300 hover:text-lime-400 text-sm sm:text-base font-medium transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseTechnologies;