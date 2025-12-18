// src/components/courses/CourseHighlights.jsx

import React from 'react';
import { getIcon } from './icons';

const CourseHighlights = ({ highlights }) => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 hover:border-lime-400/50 rounded-2xl p-4 sm:p-6 text-center transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 group-hover:bg-lime-400/20 transition-colors">
                {getIcon(item.icon, 'w-6 h-6 sm:w-7 sm:h-7')}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                {item.title}
              </div>
              <div className="text-gray-400 text-sm">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;