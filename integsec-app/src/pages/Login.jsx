import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get redirect path from location state (if user was redirected to login)
  const from = location.state?.from?.pathname || '/';
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTime, setLockoutTime] = useState(0);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  // Load remembered email
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setFormData(prev => ({ ...prev, email: rememberedEmail }));
      setRememberMe(true);
    }
  }, []);

  // Clear API error after 5 seconds
  useEffect(() => {
    if (apiError) {
      const timer = setTimeout(() => setApiError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [apiError]);

  // Lockout countdown timer
  useEffect(() => {
    let interval;
    if (lockoutTime > 0) {
      interval = setInterval(() => {
        setLockoutTime(prev => {
          if (prev <= 1) {
            setIsLocked(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [lockoutTime]);

  // Format lockout time
  const formatLockoutTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear API error
    setApiError('');
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Login Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    if (isLocked) {
      setApiError(`Account is locked. Please try again in ${formatLockoutTime(lockoutTime)}`);
      return;
    }
    
    setIsLoading(true);
    setApiError('');
    setSuccessMessage('');
    setRemainingAttempts(null);
    
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: formData.email.toLowerCase().trim(),
        password: formData.password,
      });
      
      if (response.data.success) {
        // Handle Remember Me
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', formData.email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
        
        // Store token and user data
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Set axios default header for future requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

        window.dispatchEvent(new Event('authChange'));
        
        setSuccessMessage('Login successful! Redirecting...');
        
        // Redirect after short delay
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);
      }
    } catch (error) {
      console.error('Login error:', error);
      
      const errorData = error.response?.data;
      const message = errorData?.message || 'Login failed. Please try again.';
      
      setApiError(message);
      
      // Handle remaining attempts
      if (errorData?.remainingAttempts !== undefined) {
        setRemainingAttempts(errorData.remainingAttempts);
      }
      
      // Handle account lockout
      if (error.response?.status === 423) {
        setIsLocked(true);
        // Extract lockout time from message (e.g., "try again in 30 minutes")
        const timeMatch = message.match(/(\d+)\s*minutes?/);
        if (timeMatch) {
          setLockoutTime(parseInt(timeMatch[1]) * 60);
        } else {
          setLockoutTime(30 * 60); // Default 30 minutes
        }
      }
      
      // Handle specific field errors
      if (errorData?.errors) {
        const fieldErrors = {};
        errorData.errors.forEach(err => {
          fieldErrors[err.field] = err.message;
        });
        setErrors(prev => ({ ...prev, ...fieldErrors }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = () => {
    const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    
    if (!googleClientId) {
      setApiError('Google login is not configured. Please contact support.');
      return;
    }
    
    const redirectUri = `${window.location.origin}/auth/google/callback`;
    const scope = 'email profile';
    
    // Store the intended redirect path
    sessionStorage.setItem('authRedirect', from);
    
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scope)}&access_type=offline&prompt=consent`;
    
    window.location.href = googleAuthUrl;
  };

  // GitHub Login
  const handleGitHubLogin = () => {
    const githubClientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    
    if (!githubClientId) {
      setApiError('GitHub login is not configured. Please contact support.');
      return;
    }
    
    const redirectUri = `${window.location.origin}/auth/github/callback`;
    const scope = 'user:email';
    
    // Store the intended redirect path
    sessionStorage.setItem('authRedirect', from);
    
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;
    
    window.location.href = githubAuthUrl;
  };

  return (
    <Layout>
      <div className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 z-10 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
        
        {/* Animated Grid Background */}
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

        {/* Gradient Blur Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80" />

        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-3xl" />

        {/* 3D Lighting Effect - Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent blur-sm" />
        
        {/* Main Login Card */}
        <div className="relative z-10 w-full max-w-md">
          {/* Glassmorphism Card */}
          <div className="relative bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl shadow-black/50">
            
            {/* Card Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 via-amber-500/10 to-yellow-500/20 rounded-3xl blur opacity-30" />
            <div className="absolute inset-0 bg-gray-900/80 rounded-3xl" />
            
            {/* Card Content */}
            <div className="relative z-10">
              
              {/* Glowing Lock Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* Glow Rings */}
                  <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-2xl animate-pulse scale-150" />
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl animate-pulse scale-125" style={{ animationDelay: '0.5s' }} />
                  
                  {/* Icon Container */}
                  <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border flex items-center justify-center shadow-2xl shadow-yellow-500/20 ${isLocked ? 'border-red-500/50' : 'border-yellow-500/40'}`}>
                    {isLocked ? (
                      <svg 
                        className="w-10 h-10 text-red-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                        />
                      </svg>
                    ) : (
                      <svg 
                        className="w-10 h-10 text-yellow-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                  {isLocked ? 'Account Locked' : 'Welcome Back'}
                </h1>
                <p className="text-gray-400 text-lg">
                  {isLocked 
                    ? `Try again in ${formatLockoutTime(lockoutTime)}` 
                    : 'Sign in to your account'
                  }
                </p>
              </div>

              {/* Success Message */}
              {successMessage && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center animate-fadeIn">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {successMessage}
                  </div>
                </div>
              )}

              {/* API Error Message */}
              {apiError && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center animate-fadeIn">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{apiError}</span>
                  </div>
                  {remainingAttempts !== null && remainingAttempts > 0 && (
                    <p className="mt-2 text-sm text-red-300">
                      {remainingAttempts} attempt{remainingAttempts !== 1 ? 's' : ''} remaining before lockout
                    </p>
                  )}
                </div>
              )}

              {/* Lockout Warning */}
              {isLocked && (
                <div className="mb-6 p-4 bg-orange-500/20 border border-orange-500/50 rounded-xl text-orange-400 text-center animate-fadeIn">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Too many failed attempts</span>
                  </div>
                  <div className="mt-2 text-2xl font-bold text-orange-300">
                    {formatLockoutTime(lockoutTime)}
                  </div>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="relative group">
                    {/* Input Glow on Focus */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-0 transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-30' : 'group-hover:opacity-20'}`} />
                    
                    <div className="relative flex items-center">
                      {/* Email Icon */}
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
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
                        placeholder="Enter your email"
                        disabled={isLoading || isLocked}
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="relative group">
                    {/* Input Glow on Focus */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-0 transition-opacity duration-300 ${focusedField === 'password' ? 'opacity-30' : 'group-hover:opacity-20'}`} />
                    
                    <div className="relative flex items-center">
                      {/* Lock Icon */}
                      <div className="absolute left-4 z-10">
                        <svg 
                          className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'password' ? 'text-yellow-400' : 'text-gray-500'}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('password')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-12 py-4 bg-gray-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 ${errors.password ? 'border-red-500' : 'border-gray-700'}`}
                        placeholder="Enter your password"
                        disabled={isLoading || isLocked}
                        autoComplete="current-password"
                      />
                      
                      {/* Toggle Password Visibility */}
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 z-10 text-gray-500 hover:text-yellow-400 transition-colors duration-300"
                        disabled={isLoading || isLocked}
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  {/* Remember Me Checkbox */}
                  <label className={`flex items-center gap-3 cursor-pointer group ${isLoading || isLocked ? 'opacity-60 cursor-not-allowed' : ''}`}>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => !isLoading && !isLocked && setRememberMe(e.target.checked)}
                        className="sr-only"
                        disabled={isLoading || isLocked}
                      />
                      <div className={`w-5 h-5 rounded border-2 transition-all duration-300 flex items-center justify-center ${
                        rememberMe 
                          ? 'bg-yellow-500 border-yellow-500' 
                          : 'border-gray-600 group-hover:border-yellow-500/50'
                      }`}>
                        {rememberMe && (
                          <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Remember me
                    </span>
                  </label>

                  {/* Forgot Password Link */}
                  <Link 
                    to="/forgot-password"
                    className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300 hover:underline underline-offset-4"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  disabled={isLoading || isLocked || successMessage}
                  className="relative w-full group"
                >
                  {/* Button Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r rounded-xl blur transition-opacity duration-300 ${isLocked ? 'from-red-500 to-orange-500 opacity-50' : 'from-yellow-500 to-amber-500 opacity-70 group-hover:opacity-100'}`} />
                  
                  <div className={`relative w-full py-4 px-6 font-bold text-lg rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 ${
                    isLocked 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-red-500/30' 
                      : 'bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 hover:from-yellow-400 hover:to-amber-400 focus:ring-yellow-500/30 shadow-yellow-500/30'
                  }`}>
                    {isLoading ? (
                      <>
                        <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Signing in...</span>
                      </>
                    ) : successMessage ? (
                      <>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Success!</span>
                      </>
                    ) : isLocked ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Account Locked</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <svg 
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </div>
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-900 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                {/* Google Button */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={isLoading || isLocked}
                  className="relative group flex items-center justify-center gap-3 py-4 px-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {/* Hover Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center gap-3">
                    {/* Google Icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span className="text-white font-medium">Google</span>
                  </div>
                </button>

                {/* GitHub Button */}
                <button
                  type="button"
                  onClick={handleGitHubLogin}
                  disabled={isLoading || isLocked}
                  className="relative group flex items-center justify-center gap-3 py-4 px-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {/* Hover Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-gray-500/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center gap-3">
                    {/* GitHub Icon */}
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                    <span className="text-white font-medium">GitHub</span>
                  </div>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  Don't have an account?{' '}
                  <Link 
                    to="/signup"
                    className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300 hover:underline underline-offset-4"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Protected by enterprise-grade security</span>
          </div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-500/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-yellow-500/20 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-yellow-500/20 rounded-br-3xl" />
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </Layout>
  );
};

export default Login;