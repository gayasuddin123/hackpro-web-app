// src/components/courses/CourseHero.jsx

import React from 'react';
import { getIcon } from './icons';

const CourseHero = ({ course }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const priceCardFeatures = [
    `${course.duration.split(' ')[0]} ${course.duration.split(' ')[1]} Comprehensive Training`,
    `${course.stats.projectsCount}+ Live Projects`,
    "Industry Certification",
    "1:1 Mentorship",
    "Placement Support",
    "Lifetime Access to Resources",
  ];

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <span className={`inline-flex items-center gap-2 bg-gradient-to-r ${course.theme.gradient}/20 border border-lime-400/50 text-lime-400 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold mb-6`}>
              {course.badge}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${course.theme.gradient}`}>
                {course.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {course.subtitle}
            </p>

            {/* Course Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-lime-400">{getIcon('clock', 'w-5 h-5')}</span>
                <span className="text-sm sm:text-base">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-lime-400">{getIcon('placement', 'w-5 h-5')}</span>
                <span className="text-sm sm:text-base">{course.mode}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-lime-400">{getIcon('star', 'w-5 h-5')}</span>
                <span className="text-sm sm:text-base">{course.stats.rating} Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className={`group relative bg-gradient-to-r ${course.theme.gradient} text-black px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-lime-400/30 hover:shadow-lime-400/50 hover:scale-105`}>
                <span className="flex items-center justify-center gap-2">
                  Enroll Now
                  {getIcon('arrow', 'w-5 h-5 group-hover:translate-x-1 transition-transform')}
                </span>
              </button>
              <button className="group flex items-center justify-center gap-2 border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
                <span className="w-10 h-10 rounded-full bg-lime-400/20 flex items-center justify-center group-hover:bg-lime-400/30 transition-colors">
                  {getIcon('play', 'w-5 h-5 text-lime-400')}
                </span>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Price Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${course.theme.gradient}/20 rounded-3xl blur-2xl opacity-60`} />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-950/95 border-2 border-lime-400/30 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
                {/* Discount Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {course.discount}
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-gray-500 line-through text-xl mb-1">
                    {formatPrice(course.originalPrice)}
                  </div>
                  <div className={`text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${course.theme.gradient}`}>
                    {formatPrice(course.price)}
                  </div>
                  {course.emiAvailable && (
                    <div className="text-gray-400 text-sm mt-2">
                      EMI options available
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {priceCardFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0">
                        {getIcon('check', 'w-3 h-3 text-lime-400')}
                      </span>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Enroll Button */}
                <button className={`w-full bg-gradient-to-r ${course.theme.gradient} text-black py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-lime-400/30`}>
                  Enroll Now - Limited Seats!
                </button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 mt-4 text-gray-500 text-xs">
                  <span>🔒 Secure Payment</span>
                  <span>•</span>
                  <span>💳 EMI Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;