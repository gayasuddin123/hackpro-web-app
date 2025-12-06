// src/components/courses/CoursePromo.jsx

import React from 'react';

const CoursePromo = ({ course }) => {
  return (
    <section className={`relative py-8 sm:py-10 px-4 sm:px-6 z-10 bg-gradient-to-r ${course.theme.gradient}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="text-black">
            <span className="text-2xl sm:text-3xl font-bold">HackPro Academy</span>
            <span className="mx-2">–</span>
            <span className="text-lg sm:text-xl">{course.shortTitle}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-black/80 text-sm font-medium">
            {course.technologies.slice(0, 6).map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-black/10 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePromo;