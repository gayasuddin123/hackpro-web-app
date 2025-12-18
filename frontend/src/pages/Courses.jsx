// src/pages/Courses.jsx

import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import CourseCard from '../components/courses/CourseCard';
import { getAllCourses } from '../data/coursesData';

const Courses = () => {
  const [filter, setFilter] = useState('all');
  const allCourses = getAllCourses();

  const filteredCourses = filter === 'all' 
    ? allCourses 
    : filter === 'popular' 
      ? allCourses.filter(c => c.isPopular)
      : allCourses.filter(c => c.level.toLowerCase().includes(filter));

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'popular', label: '🔥 Popular' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'advanced', label: 'Advanced' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 z-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-lime-400/20 border border-lime-400/50 text-lime-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎓 Transform Your Career
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Explore Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">
                Industry-Ready
              </span>{' '}
              Courses
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
              Job-oriented programs with hands-on projects, industry mentorship, and guaranteed placement support.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative py-8 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === f.id
                    ? 'bg-lime-400 text-black'
                    : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-lime-400/50 hover:text-lime-400'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No courses found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4 sm:px-6 z-10 bg-gradient-to-r from-lime-400/10 to-green-400/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '2000+', label: 'Students Trained' },
              { value: '50+', label: 'Live Projects' },
              { value: '95%', label: 'Placement Rate' },
              { value: '4.9', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-16 px-4 sm:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not Sure Which Course to Pick?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free counseling session with our experts and get personalized guidance.
          </p>
          <button className="bg-lime-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-lime-300 transition-all duration-300">
            Book Free Counseling
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;