// src/components/courses/CourseCurriculum.jsx

import React, { useState } from 'react';
import { getIcon, getModuleIcon } from './icons';

const CourseCurriculum = ({ modules, courseTitle }) => {
  const [activeMonth, setActiveMonth] = useState(1);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
            📚 Complete Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {modules.length} Months Module Breakdown
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A structured learning path from basics to advanced concepts
          </p>
        </div>

        {/* Month Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveMonth(module.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeMonth === module.id
                  ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/30'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-lime-400/50 hover:text-lime-400'
              }`}
            >
              <span className="mr-2">{getModuleIcon(module.icon)}</span>
              {module.month}
            </button>
          ))}
        </div>

        {/* Active Module Content */}
        {modules.map((module) => (
          <div
            key={module.id}
            className={`transition-all duration-500 ${
              activeMonth === module.id
                ? 'opacity-100 visible'
                : 'opacity-0 invisible absolute'
            }`}
          >
            {activeMonth === module.id && (
              <div className="relative">
                {/* Module Header Card */}
                <div className={`relative bg-gradient-to-r ${module.color} p-1 rounded-2xl mb-8`}>
                  <div className="bg-gray-950 rounded-xl p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="text-4xl sm:text-5xl mb-2">{getModuleIcon(module.icon)}</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          {module.title}
                        </h3>
                        <p className="text-gray-400">{module.weeks}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.projects.map((project, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-lime-400/10 border border-lime-400/30 rounded-lg text-lime-400 text-sm font-medium"
                          >
                            🚀 {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {module.topics.map((topic, topicIdx) => (
                    <div
                      key={topicIdx}
                      className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-lime-400/30 transition-all duration-300"
                    >
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-lime-400 rounded-full" />
                        {topic.category}
                      </h4>
                      <ul className="space-y-2">
                        {topic.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-2 text-gray-400 text-sm"
                          >
                            <span className="text-lime-400 mt-1">
                              {getIcon('check', 'w-4 h-4')}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCurriculum;