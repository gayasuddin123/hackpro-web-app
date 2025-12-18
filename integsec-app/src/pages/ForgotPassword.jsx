import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const response = await axios.post(`${API_URL}/auth/forgot-password`, {
        email: email.toLowerCase().trim(),
      });
      
      if (response.data.success) {
        setIsSubmitted(true);
      }
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to send reset email. Please try again.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 z-10 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
        
        {/* Background Effects */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(234, 179, 8, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(234, 179, 8, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Main Card */}
        <div className="relative z-10 w-full max-w-md">
          <div className="relative bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl shadow-black/50">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 via-amber-500/10 to-yellow-500/20 rounded-3xl blur opacity-30" />
            <div className="absolute inset-0 bg-gray-900/80 rounded-3xl" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-2xl animate-pulse scale-150" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border border-yellow-500/40 flex items-center justify-center shadow-2xl shadow-yellow-500/20">
                    {isSubmitted ? (
                      <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                  {isSubmitted ? 'Check Your Email' : 'Forgot Password?'}
                </h1>
                <p className="text-gray-400 text-lg">
                  {isSubmitted 
                    ? 'We\'ve sent a password reset link to your email'
                    : 'Enter your email to reset your password'
                  }
                </p>
              </div>

              {isSubmitted ? (
                <div className="space-y-6">
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center">
                    <p>If an account exists for <strong>{email}</strong>, you will receive a password reset link shortly.</p>
                  </div>
                  
                  <p className="text-gray-400 text-sm text-center">
                    Didn't receive the email? Check your spam folder or{' '}
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2"
                    >
                      try again
                    </button>
                  </p>

                  <Link 
                    to="/login"
                    className="block w-full py-4 px-6 bg-gray-800 text-white font-bold text-lg rounded-xl text-center hover:bg-gray-700 transition-all duration-300"
                  >
                    Back to Login
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center animate-fadeIn">
                      {error}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <div className="relative group">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-0 transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-30' : 'group-hover:opacity-20'}`} />
                      <div className="relative flex items-center">
                        <div className="absolute left-4 z-10">
                          <svg 
                            className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-yellow-400' : 'text-gray-500'}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-12 pr-4 py-4 bg-gray-950/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="Enter your email"
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative w-full group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full py-4 px-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 font-bold text-lg rounded-xl hover:from-yellow-400 hover:to-amber-400 focus:outline-none focus:ring-4 focus:ring-yellow-500/30 transition-all duration-300 shadow-lg shadow-yellow-500/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                      {isLoading ? (
                        <>
                          <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Reset Link</span>
                      )}
                    </div>
                  </button>

                  <div className="text-center">
                    <Link 
                      to="/login"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 hover:underline underline-offset-4 inline-flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back to Login
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-yellow-500/20 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-yellow-500/20 rounded-br-3xl" />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>
    </Layout>
  );
};

export default ForgotPassword;