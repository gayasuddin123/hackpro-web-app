// src/components/courses/CourseCTA.jsx

import React from 'react';
import { getIcon } from './icons';

const CourseCTA = ({ course }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`bg-gradient-to-r ${course.theme.gradient}/10 border border-lime-400/30 rounded-3xl p-8 sm:p-12 md:p-16 text-center`}>
          {/* Badge */}
          <span className={`inline-block bg-gradient-to-r ${course.theme.gradient} text-black px-4 py-1 rounded-full text-sm font-bold mb-6`}>
            🔥 Limited Time Offer
          </span>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Journey Today!
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Join {course.stats.studentsEnrolled}+ students who have transformed their careers with our program.
            Limited seats available for the upcoming batch.
          </p>

          {/* Price & CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <span className="text-gray-500 line-through text-lg">
                {formatPrice(course.originalPrice)}
              </span>
              <div className={`text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${course.theme.gradient}`}>
                {formatPrice(course.price)}
              </div>
            </div>
            <button className={`group bg-gradient-to-r ${course.theme.gradient} text-black px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-lime-400/30 hover:shadow-lime-400/50 hover:scale-105`}>
              <span className="flex items-center gap-2">
                Enroll Now
                {getIcon('rocket', 'w-5 h-5 group-hover:translate-x-1 transition-transform')}
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-lime-400">{getIcon('check', 'w-5 h-5')}</span>
              No-Risk Money Back Guarantee
            </span>
            <span className="flex items-center gap-2">
              <span className="text-lime-400">{getIcon('check', 'w-5 h-5')}</span>
              Flexible EMI Options
            </span>
            <span className="flex items-center gap-2">
              <span className="text-lime-400">{getIcon('check', 'w-5 h-5')}</span>
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCTA;