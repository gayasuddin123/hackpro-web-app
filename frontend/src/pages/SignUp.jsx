import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    countryCode: "+91",
    mobileNumber: "",
    skillLevel: "",
    interestedIn: [],
    goal: "",
    collegeName: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const skillLevels = ["Beginner", "Intermediate", "Advanced"];
  const interests = ["Cybersecurity", "AI", "Python"];
  const goals = ["Job", "Skill Upgrade", "College"];

  const countryCodes = [
    { code: "+91", country: "India", flag: "🇮🇳" },
    { code: "+1", country: "USA", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+61", country: "Australia", flag: "🇦🇺" },
    { code: "+971", country: "UAE", flag: "🇦🇪" },
    { code: "+65", country: "Singapore", flag: "🇸🇬" },
    { code: "+49", country: "Germany", flag: "🇩🇪" },
    { code: "+33", country: "France", flag: "🇫🇷" },
    { code: "+81", country: "Japan", flag: "🇯🇵" },
    { code: "+86", country: "China", flag: "🇨🇳" },
  ];

  // Clear API error after 5 seconds
  useEffect(() => {
    if (apiError) {
      const timer = setTimeout(() => setApiError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [apiError]);

  // Password strength calculation
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]/)) strength += 25;
    if (password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/) || password.match(/[^a-zA-Z0-9]/))
      strength += 25;
    return strength;
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const getStrengthColor = () => {
    if (passwordStrength <= 25) return "bg-red-500";
    if (passwordStrength <= 50) return "bg-orange-500";
    if (passwordStrength <= 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStrengthText = () => {
    if (passwordStrength <= 25) return "Weak";
    if (passwordStrength <= 50) return "Fair";
    if (passwordStrength <= 75) return "Good";
    return "Strong";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear college name if goal is not college
    if (name === "goal" && value !== "College") {
      setFormData((prev) => ({
        ...prev,
        collegeName: "",
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear API error
    setApiError("");
  };

  const handleCountryCodeChange = (code) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code,
    }));
    setShowCountryDropdown(false);
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(interest)
        ? prev.interestedIn.filter((i) => i !== interest)
        : [...prev.interestedIn, interest],
    }));

    if (errors.interestedIn) {
      setErrors((prev) => ({
        ...prev,
        interestedIn: "",
      }));
    }
  };

  const validateMobileNumber = () => {
    if (!formData.mobileNumber.trim()) {
      return "Mobile number is required";
    }
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      return "Please enter a valid 10-digit mobile number";
    }
    return "";
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)
    ) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number and special character";
    }

    const mobileError = validateMobileNumber();
    if (mobileError) {
      newErrors.mobileNumber = mobileError;
    }

    if (!formData.skillLevel) {
      newErrors.skillLevel = "Please select your skill level";
    }

    if (formData.interestedIn.length === 0) {
      newErrors.interestedIn = "Please select at least one interest";
    }

    if (!formData.goal) {
      newErrors.goal = "Please select your goal";
    }

    if (formData.goal === "College" && !formData.collegeName.trim()) {
      newErrors.collegeName = "Please enter your college name";
    }

    if (!agreeToTerms) {
      newErrors.terms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setApiError("");
    setSuccessMessage("");

    try {
      const response = await axios.post(`${API_URL}/api/v1/auth/register`, {
        fullName: formData.fullName.trim(),
        email: formData.email.toLowerCase().trim(),
        password: formData.password,
        countryCode: formData.countryCode,
        mobileNumber: formData.mobileNumber,
        skillLevel: formData.skillLevel,
        interestedIn: formData.interestedIn,
        goal: formData.goal,
        collegeName:
          formData.goal === "College" ? formData.collegeName.trim() : "",
        agreedToTerms: true,
      });

      if (response.data.success) {
        // Store token in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        window.dispatchEvent(new Event("authChange"));

        setSuccessMessage(
          "Registration successful! Redirecting to dashboard..."
        );

        // Redirect after short delay
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.error("Registration error:", error);

      const message =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      setApiError(message);

      // Handle specific field errors from validation
      if (error.response?.data?.errors) {
        const fieldErrors = {};
        error.response.data.errors.forEach((err) => {
          fieldErrors[err.field] = err.message;
        });
        setErrors((prev) => ({ ...prev, ...fieldErrors }));
      }

      // Scroll to top to show error
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsLoading(false);
    }
  };

  // Google Sign Up
  const handleGoogleSignUp = () => {
    const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const redirectUri = `${window.location.origin}/auth/google/callback`;
    const scope = "email profile";

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=code&scope=${encodeURIComponent(
      scope
    )}&access_type=offline&prompt=consent`;

    window.location.href = googleAuthUrl;
  };

  // GitHub Sign Up
  const handleGitHubSignUp = () => {
    const githubClientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = `${window.location.origin}/auth/github/callback`;
    const scope = "user:email";

    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scope)}`;

    window.location.href = githubAuthUrl;
  };

  const selectedCountry = countryCodes.find(
    (c) => c.code === formData.countryCode
  );

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
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient Blur Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80" />

        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div
          className="absolute top-20 right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        {/* 3D Lighting Effect - Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent blur-sm" />

        {/* Main Sign Up Card */}
        <div className="relative z-10 w-full max-w-lg my-8">
          {/* Glassmorphism Card */}
          <div className="relative bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl shadow-black/50">
            {/* Card Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 via-amber-500/10 to-yellow-500/20 rounded-3xl blur opacity-30" />
            <div className="absolute inset-0 bg-gray-900/80 rounded-3xl" />

            {/* Card Content */}
            <div className="relative z-10">
              {/* Glowing User/Shield Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* Glow Rings */}
                  <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-2xl animate-pulse scale-150" />
                  <div
                    className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl animate-pulse scale-125"
                    style={{ animationDelay: "0.5s" }}
                  />

                  {/* Icon Container */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border border-yellow-500/40 flex items-center justify-center shadow-2xl shadow-yellow-500/20">
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
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                  Create Account
                </h1>
                <p className="text-gray-400 text-lg">Sign up to get started</p>
              </div>

              {/* Success Message */}
              {successMessage && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center animate-fadeIn">
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {successMessage}
                  </div>
                </div>
              )}

              {/* API Error Message */}
              {apiError && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center animate-fadeIn">
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {apiError}
                  </div>
                </div>
              )}

              {/* Sign Up Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <div className="relative group">
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-0 transition-opacity duration-300 ${
                        focusedField === "fullName"
                          ? "opacity-30"
                          : "group-hover:opacity-20"
                      }`}
                    />

                    <div className="relative flex items-center">
                      <div className="absolute left-4 z-10">
                        <svg
                          className={`w-5 h-5 transition-colors duration-300 ${
                            focusedField === "fullName"
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>

                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("fullName")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 ${
                          errors.fullName ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Enter your full name"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  {errors.fullName && (
                    <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-0 transition-opacity duration-300 ${
                        focusedField === "email"
                          ? "opacity-30"
                          : "group-hover:opacity-20"
                      }`}
                    />

                    <div className="relative flex items-center">
                      <div className="absolute left-4 z-10">
                        <svg
                          className={`w-5 h-5 transition-colors duration-300 ${
                            focusedField === "email"
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 ${
                          errors.email ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Enter your email"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Mobile Number Field (Simplified - No OTP) */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Mobile Number
                  </label>
                  <div className="relative group">
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-0 transition-opacity duration-300 ${
                        focusedField === "mobileNumber"
                          ? "opacity-30"
                          : "group-hover:opacity-20"
                      }`}
                    />

                    <div className="relative flex items-center">
                      {/* Country Code Dropdown */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() =>
                            !isLoading &&
                            setShowCountryDropdown(!showCountryDropdown)
                          }
                          disabled={isLoading}
                          className={`flex items-center gap-1 h-full pl-4 pr-2 py-4 bg-gray-950/80 border-r-0 rounded-l-xl text-white focus:outline-none transition-all duration-300 ${
                            errors.mobileNumber
                              ? "border border-red-500"
                              : "border border-gray-700"
                          } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                        >
                          <span className="text-lg">
                            {selectedCountry?.flag}
                          </span>
                          <span className="text-sm text-gray-300">
                            {formData.countryCode}
                          </span>
                          <svg
                            className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                              showCountryDropdown ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Country Code Dropdown Menu */}
                        {showCountryDropdown && (
                          <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl shadow-black/50 z-50 max-h-60 overflow-y-auto">
                            {countryCodes.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() =>
                                  handleCountryCodeChange(country.code)
                                }
                                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition-colors duration-200 ${
                                  formData.countryCode === country.code
                                    ? "bg-yellow-500/10 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              >
                                <span className="text-lg">{country.flag}</span>
                                <span className="text-sm">
                                  {country.country}
                                </span>
                                <span className="text-sm text-gray-500 ml-auto">
                                  {country.code}
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Mobile Number Input */}
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("mobileNumber")}
                        onBlur={() => setFocusedField(null)}
                        disabled={isLoading}
                        maxLength={10}
                        className={`flex-1 pl-4 pr-4 py-4 bg-gray-950/80 border-l-0 rounded-r-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                          errors.mobileNumber
                            ? "border-y border-r border-red-500"
                            : "border-y border-r border-gray-700"
                        } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                        placeholder="Enter 10-digit mobile number"
                      />
                    </div>
                  </div>

                  {errors.mobileNumber && (
                    <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="relative group">
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-0 transition-opacity duration-300 ${
                        focusedField === "password"
                          ? "opacity-30"
                          : "group-hover:opacity-20"
                      }`}
                    />

                    <div className="relative flex items-center">
                      <div className="absolute left-4 z-10">
                        <svg
                          className={`w-5 h-5 transition-colors duration-300 ${
                            focusedField === "password"
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }`}
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
                      </div>

                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("password")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-12 py-4 bg-gray-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 ${
                          errors.password ? "border-red-500" : "border-gray-700"
                        }`}
                        placeholder="Create a password"
                        disabled={isLoading}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 z-10 text-gray-500 hover:text-yellow-400 transition-colors duration-300"
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
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
                              i < passwordStrength / 25
                                ? getStrengthColor()
                                : "bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                      <p
                        className={`text-sm ${
                          passwordStrength <= 25
                            ? "text-red-400"
                            : passwordStrength <= 50
                            ? "text-orange-400"
                            : passwordStrength <= 75
                            ? "text-yellow-400"
                            : "text-green-400"
                        }`}
                      >
                        Password strength: {getStrengthText()}
                      </p>
                    </div>
                  )}

                  {errors.password && (
                    <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Skill Level Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Skill Level
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {skillLevels.map((level) => (
                      <label
                        key={level}
                        className={`relative flex items-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 group ${
                          formData.skillLevel === level
                            ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-400"
                            : errors.skillLevel
                            ? "bg-gray-950/80 border-red-500 text-gray-400 hover:border-yellow-500/30"
                            : "bg-gray-950/80 border-gray-700 text-gray-400 hover:border-yellow-500/30"
                        } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                      >
                        <input
                          type="radio"
                          name="skillLevel"
                          value={level}
                          checked={formData.skillLevel === level}
                          onChange={handleInputChange}
                          className="sr-only"
                          disabled={isLoading}
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            formData.skillLevel === level
                              ? "border-yellow-500 bg-yellow-500"
                              : "border-gray-600 group-hover:border-yellow-500/50"
                          }`}
                        >
                          {formData.skillLevel === level && (
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                          )}
                        </div>
                        <span className="text-sm font-medium">{level}</span>
                      </label>
                    ))}
                  </div>
                  {errors.skillLevel && (
                    <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {errors.skillLevel}
                    </p>
                  )}
                </div>

                {/* Interested In Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Interested In{" "}
                    <span className="text-gray-500 text-xs">
                      (Select all that apply)
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest) => (
                      <label
                        key={interest}
                        className={`relative flex items-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 group ${
                          formData.interestedIn.includes(interest)
                            ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-400"
                            : errors.interestedIn
                            ? "bg-gray-950/80 border-red-500 text-gray-400 hover:border-yellow-500/30"
                            : "bg-gray-950/80 border-gray-700 text-gray-400 hover:border-yellow-500/30"
                        } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.interestedIn.includes(interest)}
                          onChange={() =>
                            !isLoading && handleInterestChange(interest)
                          }
                          className="sr-only"
                          disabled={isLoading}
                        />
                        <div
                          className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                            formData.interestedIn.includes(interest)
                              ? "border-yellow-500 bg-yellow-500"
                              : "border-gray-600 group-hover:border-yellow-500/50"
                          }`}
                        >
                          {formData.interestedIn.includes(interest) && (
                            <svg
                              className="w-2.5 h-2.5 text-gray-900"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm font-medium">{interest}</span>
                        {interest === "Cybersecurity" && (
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        )}
                        {interest === "AI" && (
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                        {interest === "Python" && (
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        )}
                      </label>
                    ))}
                  </div>
                  {errors.interestedIn && (
                    <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {errors.interestedIn}
                    </p>
                  )}
                </div>

                {/* Goal Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Goal
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {goals.map((goal) => (
                      <label
                        key={goal}
                        className={`relative flex items-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 group ${
                          formData.goal === goal
                            ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-400"
                            : errors.goal
                            ? "bg-gray-950/80 border-red-500 text-gray-400 hover:border-yellow-500/30"
                            : "bg-gray-950/80 border-gray-700 text-gray-400 hover:border-yellow-500/30"
                        } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                      >
                        <input
                          type="radio"
                          name="goal"
                          value={goal}
                          checked={formData.goal === goal}
                          onChange={handleInputChange}
                          className="sr-only"
                          disabled={isLoading}
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            formData.goal === goal
                              ? "border-yellow-500 bg-yellow-500"
                              : "border-gray-600 group-hover:border-yellow-500/50"
                          }`}
                        >
                          {formData.goal === goal && (
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                          )}
                        </div>
                        <span className="text-sm font-medium">{goal}</span>
                        {goal === "Job" && (
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                        {goal === "Skill Upgrade" && (
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                        )}
                        {goal === "College" && (
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                          </svg>
                        )}
                      </label>
                    ))}
                  </div>
                  {errors.goal && (
                    <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {errors.goal}
                    </p>
                  )}
                </div>

                {/* College Name Field - Conditional */}
                {formData.goal === "College" && (
                  <div className="space-y-2 animate-fadeIn">
                    <label className="block text-sm font-medium text-gray-300">
                      College Name
                    </label>
                    <div className="relative group">
                      <div
                        className={`absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-0 transition-opacity duration-300 ${
                          focusedField === "collegeName"
                            ? "opacity-30"
                            : "group-hover:opacity-20"
                        }`}
                      />

                      <div className="relative flex items-center">
                        <div className="absolute left-4 z-10">
                          <svg
                            className={`w-5 h-5 transition-colors duration-300 ${
                              focusedField === "collegeName"
                                ? "text-yellow-400"
                                : "text-gray-500"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>

                        <input
                          type="text"
                          name="collegeName"
                          value={formData.collegeName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("collegeName")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-4 bg-gray-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 ${
                            errors.collegeName
                              ? "border-red-500"
                              : "border-gray-700"
                          }`}
                          placeholder="Enter your college name"
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                    {errors.collegeName && (
                      <p className="text-red-400 text-sm flex items-center gap-1 mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {errors.collegeName}
                      </p>
                    )}
                  </div>
                )}

                {/* Terms Agreement Checkbox */}
                <div className="space-y-2">
                  <label
                    className={`flex items-start gap-3 cursor-pointer group ${
                      isLoading ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  >
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={agreeToTerms}
                        onChange={(e) =>
                          !isLoading && setAgreeToTerms(e.target.checked)
                        }
                        className="sr-only"
                        disabled={isLoading}
                      />
                      <div
                        className={`w-5 h-5 rounded border-2 transition-all duration-300 flex items-center justify-center ${
                          agreeToTerms
                            ? "bg-yellow-500 border-yellow-500"
                            : errors.terms
                            ? "border-red-500"
                            : "border-gray-600 group-hover:border-yellow-500/50"
                        }`}
                      >
                        {agreeToTerms && (
                          <svg
                            className="w-3 h-3 text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="text-yellow-400 hover:text-yellow-300 hover:underline underline-offset-2"
                      >
                        Terms of Service
                      </Link>{" "}
                      &{" "}
                      <Link
                        to="/privacy"
                        className="text-yellow-400 hover:text-yellow-300 hover:underline underline-offset-2"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors.terms && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {errors.terms}
                    </p>
                  )}
                </div>

                {/* Sign Up Button */}
                <button
                  type="submit"
                  disabled={isLoading || successMessage}
                  className="relative w-full group mt-6"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative w-full py-4 px-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 font-bold text-lg rounded-xl hover:from-yellow-400 hover:to-amber-400 focus:outline-none focus:ring-4 focus:ring-yellow-500/30 transition-all duration-300 shadow-lg shadow-yellow-500/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <svg
                          className="w-6 h-6 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Creating Account...</span>
                      </>
                    ) : successMessage ? (
                      <>
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Account Created!</span>
                      </>
                    ) : (
                      <>
                        <span>Sign Up</span>
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
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
                    Or sign up with
                  </span>
                </div>
              </div>

              {/* Social Sign Up Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={handleGoogleSignUp}
                  disabled={isLoading}
                  className="relative group flex items-center justify-center gap-3 py-4 px-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                  <div className="relative flex items-center gap-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-white font-medium">Google</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={handleGitHubSignUp}
                  disabled={isLoading}
                  className="relative group flex items-center justify-center gap-3 py-4 px-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-gray-500/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                  <div className="relative flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                      />
                    </svg>
                    <span className="text-white font-medium">GitHub</span>
                  </div>
                </button>
              </div>

              {/* Sign In Link */}
              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300 hover:underline underline-offset-4"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-yellow-500"
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
              <span>Secure Data Storage</span>
            </div>
          </div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-500/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-yellow-500/20 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-yellow-500/20 rounded-br-3xl" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-yellow-500/10 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-yellow-500/10 rounded-bl-3xl" />
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

export default SignUp;