import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(true);
  const [isTokenChecking, setIsTokenChecking] = useState(true);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  // Password strength calculation
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]/)) strength += 25;
    if (password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/) || password.match(/[^a-zA-Z0-9]/)) strength += 25;
    return strength;
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const getStrengthColor = () => {
    if (passwordStrength <= 25) return 'bg-red-500';
    if (passwordStrength <= 50) return 'bg-orange-500';
    if (passwordStrength <= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (passwordStrength <= 25) return 'Weak';
    if (passwordStrength <= 50) return 'Fair';
    if (passwordStrength <= 75) return 'Good';
    return 'Strong';
  };

  // Verify token on mount
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsTokenValid(false);
        setIsTokenChecking(false);
        return;
      }

      try {
        // Optional: You can add a verify-reset-token endpoint
        // For now, we'll just check if token exists and proceed
        // The actual validation happens when user submits
        setIsTokenValid(true);
      } catch (error) {
        setIsTokenValid(false);
      } finally {
        setIsTokenChecking(false);
      }
    };

    verifyToken();
  }, [token]);

  // Clear API error after 5 seconds
  useEffect(() => {
    if (apiError) {
      const timer = setTimeout(() => setApiError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [apiError]);

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
    
    setApiError('');
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, number and special character';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setApiError('');
    
    try {
      const response = await axios.put(`${API_URL}/auth/reset-password/${token}`, {
        password: formData.password,
      });
      
      if (response.data.success) {
        setIsSuccess(true);
        
        // Store token if returned
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        
        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (error) {
      console.error('Reset password error:', error);
      
      const message = error.response?.data?.message || 'Failed to reset password. Please try again.';
      
      // Check if token is invalid/expired
      if (error.response?.status === 400 && message.toLowerCase().includes('invalid')) {
        setIsTokenValid(false);
      } else {
        setApiError(message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state while checking token
  if (isTokenChecking) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <svg className="w-12 h-12 animate-spin text-yellow-500" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <p className="text-gray-400">Verifying reset link...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Invalid/Expired token state
  if (!isTokenValid) {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Card */}
          <div className="relative z-10 w-full max-w-md">
            <div className="relative bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl shadow-black/50">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 via-orange-500/10 to-red-500/20 rounded-3xl blur opacity-30" />
              <div className="absolute inset-0 bg-gray-900/80 rounded-3xl" />
              
              <div className="relative z-10 text-center">
                {/* Error Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/30 rounded-full blur-2xl animate-pulse scale-150" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/40 flex items-center justify-center shadow-2xl shadow-red-500/20">
                      <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-white mb-3">Link Expired</h1>
                <p className="text-gray-400 mb-8">
                  This password reset link is invalid or has expired. Please request a new one.
                </p>

                <div className="space-y-4">
                  <Link 
                    to="/forgot-password"
                    className="block w-full py-4 px-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 font-bold text-lg rounded-xl hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-yellow-500/30"
                  >
                    Request New Link
                  </Link>
                  
                  <Link 
                    to="/login"
                    className="block w-full py-4 px-6 bg-gray-800 text-white font-bold text-lg rounded-xl hover:bg-gray-700 transition-all duration-300"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-red-500/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-red-500/20 rounded-br-3xl" />
        </div>
      </Layout>
    );
  }

  // Success state
  if (isSuccess) {
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Card */}
          <div className="relative z-10 w-full max-w-md">
            <div className="relative bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl shadow-black/50">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 via-emerald-500/10 to-green-500/20 rounded-3xl blur opacity-30" />
              <div className="absolute inset-0 bg-gray-900/80 rounded-3xl" />
              
              <div className="relative z-10 text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/30 rounded-full blur-2xl animate-pulse scale-150" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/40 flex items-center justify-center shadow-2xl shadow-green-500/20">
                      <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-white mb-3">Password Reset!</h1>
                <p className="text-gray-400 mb-6">
                  Your password has been successfully reset.
                </p>
                
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 mb-8">
                  <p>Redirecting to login page in 3 seconds...</p>
                </div>

                <Link 
                  to="/login"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-xl hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-green-500/30"
                >
                  Go to Login Now
                </Link>
              </div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-green-500/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-green-500/20 rounded-br-3xl" />
        </div>
      </Layout>
    );
  }

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
        
        {/* Main Card */}
        <div className="relative z-10 w-full max-w-md">
          <div className="relative bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl shadow-black/50">
            
            {/* Card Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 via-amber-500/10 to-yellow-500/20 rounded-3xl blur opacity-30" />
            <div className="absolute inset-0 bg-gray-900/80 rounded-3xl" />
            
            {/* Card Content */}
            <div className="relative z-10">
              
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-2xl animate-pulse scale-150" />
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl animate-pulse scale-125" style={{ animationDelay: '0.5s' }} />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border border-yellow-500/40 flex items-center justify-center shadow-2xl shadow-yellow-500/20">
                    <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                  Reset Password
                </h1>
                <p className="text-gray-400 text-lg">
                  Create a new secure password
                </p>
              </div>

              {/* API Error Message */}
              {apiError && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center animate-fadeIn">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{apiError}</span>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* New Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    New Password
                  </label>
                  <div className="relative group">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-0 transition-opacity duration-300 ${focusedField === 'password' ? 'opacity-30' : 'group-hover:opacity-20'}`} />
                    
                    <div className="relative flex items-center">
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
                        placeholder="Enter new password"
                        disabled={isLoading}
                      />
                      
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 z-10 text-gray-500 hover:text-yellow-400 transition-colors duration-300"
                        disabled={isLoading}
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
                  
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="mt-3 space-y-2">
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                              i < passwordStrength / 25 ? getStrengthColor() : 'bg-gray-700'
                            }`}
                          />
                        ))}
                      </div>
                      <p className={`text-sm ${
                        passwordStrength <= 25 ? 'text-red-400' :
                        passwordStrength <= 50 ? 'text-orange-400' :
                        passwordStrength <= 75 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        Password strength: {getStrengthText()}
                      </p>
                    </div>
                  )}
                  
                  {errors.password && (
                    <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Confirm Password
                  </label>
                  <div className="relative group">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-0 transition-opacity duration-300 ${focusedField === 'confirmPassword' ? 'opacity-30' : 'group-hover:opacity-20'}`} />
                    
                    <div className="relative flex items-center">
                      <div className="absolute left-4 z-10">
                        <svg 
                          className={`w-5 h-5 transition-colors duration-300 ${focusedField === 'confirmPassword' ? 'text-yellow-400' : 'text-gray-500'}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('confirmPassword')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-12 py-4 bg-gray-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 ${errors.confirmPassword ? 'border-red-500' : formData.confirmPassword && formData.password === formData.confirmPassword ? 'border-green-500' : 'border-gray-700'}`}
                        placeholder="Confirm new password"
                        disabled={isLoading}
                      />
                      
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 z-10 text-gray-500 hover:text-yellow-400 transition-colors duration-300"
                        disabled={isLoading}
                      >
                        {showConfirmPassword ? (
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
                  
                  {/* Password Match Indicator */}
                  {formData.confirmPassword && formData.password === formData.confirmPassword && (
                    <p className="text-green-400 text-sm flex items-center gap-1 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Passwords match
                    </p>
                  )}
                  
                  {errors.confirmPassword && (
                    <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Password Requirements */}
                <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <p className="text-sm text-gray-400 mb-2">Password must contain:</p>
                  <ul className="space-y-1 text-sm">
                    <li className={`flex items-center gap-2 ${formData.password.length >= 8 ? 'text-green-400' : 'text-gray-500'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={formData.password.length >= 8 ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                      </svg>
                      At least 8 characters
                    </li>
                    <li className={`flex items-center gap-2 ${/[a-z]/.test(formData.password) ? 'text-green-400' : 'text-gray-500'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={/[a-z]/.test(formData.password) ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                      </svg>
                      One lowercase letter
                    </li>
                    <li className={`flex items-center gap-2 ${/[A-Z]/.test(formData.password) ? 'text-green-400' : 'text-gray-500'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={/[A-Z]/.test(formData.password) ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                      </svg>
                      One uppercase letter
                    </li>
                    <li className={`flex items-center gap-2 ${/\d/.test(formData.password) ? 'text-green-400' : 'text-gray-500'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={/\d/.test(formData.password) ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                      </svg>
                      One number
                    </li>
                    <li className={`flex items-center gap-2 ${/[@$!%*?&]/.test(formData.password) ? 'text-green-400' : 'text-gray-500'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={/[@$!%*?&]/.test(formData.password) ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                      </svg>
                      One special character (@$!%*?&)
                    </li>
                  </ul>
                </div>

                {/* Submit Button */}
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
                        <span>Resetting Password...</span>
                      </>
                    ) : (
                      <>
                        <span>Reset Password</span>
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

                {/* Back to Login */}
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
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Your password is encrypted and secure</span>
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

export default ResetPassword;