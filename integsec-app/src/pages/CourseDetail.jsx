// src/pages/CourseDetail.jsx

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { getCourseBySlug } from '../data/coursesData';

// Import all course components
import CourseHero from '../components/courses/CourseHero';
import CourseHighlights from '../components/courses/CourseHighlights';
import CourseTechnologies from '../components/courses/CourseTechnologies';
import CourseCurriculum from '../components/courses/CourseCurriculum';
import CourseBenefits from '../components/courses/CourseBenefits';
import CourseFAQ from '../components/courses/CourseFAQ';
import CourseCTA from '../components/courses/CourseCTA';
import CoursePromo from '../components/courses/CoursePromo';

const CourseDetail = () => {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  // Redirect to courses page if course not found
  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <Layout>
      <CourseHero course={course} />
      <CourseHighlights highlights={course.highlights} />
      <CourseTechnologies technologies={course.technologies} />
      <CourseCurriculum modules={course.modules} courseTitle={course.title} />
      <CourseBenefits benefits={course.benefits} />
      <CourseFAQ faqs={course.faqs} />
      <CourseCTA course={course} />
      <CoursePromo course={course} />
    </Layout>
  );
};

export default CourseDetail;