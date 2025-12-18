import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

const MyCourses = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('-purchasedAt');

  useEffect(() => {
    fetchCourses();
  }, [filter, sort]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      let url = `${API_URL}/users/my-courses?sort=${sort}`;
      if (filter !== 'all') {
        url += `&status=${filter}`;
      }

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setCourses(response.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load courses');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatDuration = (minutes) => {
    if (!minutes) return '0h 0m';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getProgressColor = (progress) => {
    if (progress === 100) return 'bg-green-400';
    if (progress >= 50) return 'bg-yellow-400';
    return 'bg-lime-400';
  };

  const filters = [
    { value: 'all', label: 'All Courses' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'not-started', label: 'Not Started' },
  ];

  const sortOptions = [
    { value: '-purchasedAt', label: 'Recently Purchased' },
    { value: 'purchasedAt', label: 'Oldest First' },
    { value: '-progress', label: 'Highest Progress' },
    { value: 'progress', label: 'Lowest Progress' },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">My Courses</h1>
              <p className="text-gray-400 mt-1">{courses.length} course{courses.length !== 1 ? 's' : ''} enrolled</p>
            </div>
            <Link
              to="/course"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Browse More
            </Link>
          </div>

          {/* Filters & Sort */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === f.value
                      ? 'bg-lime-400 text-black'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="sm:ml-auto">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-lime-400"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-20">
              <div className="text-red-400 mb-4">{error}</div>
              <button
                onClick={fetchCourses}
                className="px-6 py-2 bg-lime-400 text-black rounded-lg font-semibold"
              >
                Retry
              </button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && courses.length === 0 && (
            <div className="text-center py-20 bg-gray-900/50 border border-gray-800 rounded-2xl">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {filter === 'all' ? 'No courses yet' : `No ${filter.replace('-', ' ')} courses`}
              </h3>
              <p className="text-gray-400 mb-6">
                {filter === 'all'
                  ? 'Start your learning journey by enrolling in a course'
                  : 'Check back later or try a different filter'}
              </p>
              <Link
                to="/course"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-all"
              >
                Browse Courses
              </Link>
            </div>
          )}

          {/* Courses Grid */}
          {!loading && !error && courses.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((item) => (
                <div
                  key={item.course._id}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-lime-400/50 transition-all group"
                >
                  {/* Thumbnail */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.course.thumbnail?.url || '/placeholder-course.jpg'}
                      alt={item.course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Progress Badge */}
                    <div className="absolute top-3 right-3">
                      {item.progress === 100 ? (
                        <span className="px-3 py-1 bg-green-400 text-black text-xs font-semibold rounded-full flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Completed
                        </span>
                      ) : item.progress > 0 ? (
                        <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full">
                          {item.progress}% Done
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-gray-700 text-white text-xs font-semibold rounded-full">
                          Not Started
                        </span>
                      )}
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-black/60 text-lime-400 text-xs font-medium rounded">
                        {item.course.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Title */}
                    <h3 className="font-semibold text-white text-lg mb-2 line-clamp-2 group-hover:text-lime-400 transition-colors">
                      {item.course.title}
                    </h3>

                    {/* Instructor */}
                    <div className="flex items-center gap-2 mb-3">
                      {item.course.instructor?.avatar?.url ? (
                        <img
                          src={item.course.instructor.avatar.url}
                          alt={item.course.instructor.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">
                          {item.course.instructor?.name?.[0] || 'I'}
                        </div>
                      )}
                      <span className="text-gray-400 text-sm">{item.course.instructor?.name}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formatDuration(item.course.totalDuration)}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        {item.course.totalLectures} lectures
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white font-medium">{item.progress || 0}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getProgressColor(item.progress || 0)} transition-all duration-500`}
                          style={{ width: `${item.progress || 0}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Link
                        to={`/courses/${item.course.slug}/learn`}
                        className="flex-1 py-2.5 bg-lime-400 text-black font-semibold rounded-lg text-center hover:bg-lime-300 transition-all"
                      >
                        {item.progress > 0 ? 'Continue' : 'Start'} Learning
                      </Link>
                      <Link
                        to={`/courses/${item.course.slug}`}
                        className="px-4 py-2.5 border border-gray-700 text-gray-400 rounded-lg hover:border-lime-400 hover:text-lime-400 transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </Link>
                    </div>

                    {/* Purchased Date */}
                    <div className="mt-3 text-xs text-gray-500 text-center">
                      Enrolled on {formatDate(item.purchasedAt)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MyCourses;