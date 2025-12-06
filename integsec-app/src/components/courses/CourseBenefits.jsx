// src/components/courses/CourseBenefits.jsx

import React from 'react';
import { getIcon } from './icons';

const CourseBenefits = ({ benefits }) => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
            🎓 Program Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What You'll Get
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to kickstart your career
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 border border-gray-800 hover:border-lime-400/50 rounded-2xl p-6 sm:p-8 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(benefit.icon, 'w-7 h-7 sm:w-8 sm:h-8')}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseBenefits;