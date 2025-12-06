// src/components/courses/CourseCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { getIcon } from './icons';

const CourseCard = ({ course }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 border border-gray-800 hover:border-lime-400/50 rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-[1.02]">
      {/* Popular Badge */}
      {course.isPopular && (
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-gradient-to-r from-lime-400 to-green-500 text-black px-3 py-1 rounded-full text-xs font-bold">
            {course.badge}
          </span>
        </div>
      )}

      {/* Discount Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          {course.discount}
        </span>
      </div>

      {/* Course Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${course.theme.gradient} opacity-20`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-50">
            {course.id.includes('ai') ? '🤖' : 
             course.id.includes('web') ? '🌐' : 
             course.id.includes('python') ? '🐍' : 
             course.id.includes('data') ? '📊' : '📚'}
          </span>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/courses/${course.slug}`}
            className="bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Level & Duration */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
            {course.level}
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            {getIcon('clock', 'w-3 h-3')}
            {course.duration.split(' ')[0]} {course.duration.split(' ')[1]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.cardFeatures.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="text-xs text-lime-400/80 bg-lime-400/10 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1 text-yellow-400">
            {getIcon('star', 'w-4 h-4')}
            <span>{course.stats.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            {getIcon('users', 'w-4 h-4')}
            <span>{course.stats.studentsEnrolled}+ Students</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-4">
          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-500 line-through text-sm">
                {formatPrice(course.originalPrice)}
              </span>
              <div className="text-2xl font-bold text-lime-400">
                {formatPrice(course.price)}
              </div>
            </div>
            <Link
              to={`/courses/${course.slug}`}
              className={`bg-gradient-to-r ${course.theme.gradient} text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2`}
            >
              Enroll
              {getIcon('arrow', 'w-4 h-4')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;