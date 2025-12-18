import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

const MyCertificates = () => {
  const [loading, setLoading] = useState(true);
  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/users/my-certificates`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setCertificates(response.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load certificates');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleDownload = async (certificate) => {
    // For now, just open in new tab. You can implement PDF generation later
    window.open(`/certificate/${certificate.certificateId}`, '_blank');
  };

  const handleShare = async (certificate) => {
    const shareUrl = `${window.location.origin}/training/verify?code=${certificate.verificationCode}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Certificate - ${certificate.course?.title}`,
          text: `I earned a certificate in ${certificate.course?.title} from HackPro Academy!`,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error
        copyToClipboard(shareUrl);
      }
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Certificate link copied to clipboard!');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">My Certificates</h1>
              <p className="text-gray-400 mt-1">
                {certificates.length} certificate{certificates.length !== 1 ? 's' : ''} earned
              </p>
            </div>
            <Link
              to="/training/verify"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-lime-400 text-lime-400 font-semibold rounded-lg hover:bg-lime-400 hover:text-black transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verify Certificate
            </Link>
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
                onClick={fetchCertificates}
                className="px-6 py-2 bg-lime-400 text-black rounded-lg font-semibold"
              >
                Retry
              </button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && certificates.length === 0 && (
            <div className="text-center py-20 bg-gray-900/50 border border-gray-800 rounded-2xl">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-400/20 to-lime-400/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No certificates yet</h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Complete your courses to earn certificates. Certificates prove your skills to employers and clients.
              </p>
              <Link
                to="/my-courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-all"
              >
                Go to My Courses
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          )}

          {/* Certificates Grid */}
          {!loading && !error && certificates.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert._id}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all group"
                >
                  {/* Certificate Preview */}
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-purple-900/30 via-gray-900 to-lime-900/30 p-6">
                    {/* Decorative Border */}
                    <div className="absolute inset-4 border-2 border-dashed border-gray-700 rounded-lg"></div>
                    
                    {/* Certificate Content Preview */}
                    <div className="relative h-full flex flex-col items-center justify-center text-center">
                      {/* Logo/Badge */}
                      <div className="w-16 h-16 mb-3 bg-gradient-to-br from-lime-400 to-purple-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      
                      <div className="text-gray-500 text-xs mb-1">CERTIFICATE OF COMPLETION</div>
                      <div className="text-white font-semibold text-sm line-clamp-2">
                        {cert.course?.title}
                      </div>
                      
                      {/* Course Thumbnail */}
                      {cert.course?.thumbnail?.url && (
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-lg overflow-hidden border border-gray-700">
                          <img
                            src={cert.course.thumbnail.url}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={() => handleDownload(cert)}
                        className="px-4 py-2 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-all flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-5">
                    {/* Course Title */}
                    <h3 className="font-semibold text-white mb-2 line-clamp-2">
                      {cert.course?.title}
                    </h3>

                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-purple-400/10 text-purple-400 text-xs font-medium rounded">
                        {cert.course?.category}
                      </span>
                    </div>

                    {/* Certificate ID */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                      <span className="font-mono">{cert.certificateId}</span>
                    </div>

                    {/* Issue Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Issued on {formatDate(cert.issuedAt)}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDownload(cert)}
                        className="flex-1 py-2.5 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-all flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                      <button
                        onClick={() => handleShare(cert)}
                        className="px-4 py-2.5 border border-gray-700 text-gray-400 rounded-lg hover:border-purple-400 hover:text-purple-400 transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                      <Link
                        to={`/training/verify?code=${cert.verificationCode}`}
                        className="px-4 py-2.5 border border-gray-700 text-gray-400 rounded-lg hover:border-lime-400 hover:text-lime-400 transition-all"
                        title="Verify Certificate"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </Link>
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

export default MyCertificates;