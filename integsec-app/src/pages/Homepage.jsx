import React, { useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import logo from '../assets/images/logo.jpeg';

const Homepage = () => {
  const logoRef = useRef(null);

  // ==================== ANIMATIONS ====================
  useEffect(() => {
    // Floating animation for logo
    let logoY = 0;
    let logoDirection = 1;
    const logoSpeed = 0.3;
    let animationId;

    const animateLogo = () => {
      if (logoRef.current) {
        logoY += logoSpeed * logoDirection;
        if (logoY > 15 || logoY < -15) {
          logoDirection *= -1;
        }
        logoRef.current.style.transform = `translateY(${logoY}px)`;
      }
      animationId = requestAnimationFrame(animateLogo);
    };

    animateLogo();

    return () => cancelAnimationFrame(animationId);
  }, []);

  // ==================== DATA ====================

  // Hero Stats
  const heroStats = [
    { id: 1, value: "500+", label: "Clients Protected" },
    { id: 2, value: "99.9%", label: "Threat Prevention" },
    { id: 3, value: "24/7", label: "Monitoring" },
  ];

  // Services Data
  const services = [
    {
      id: 1,
      title: "Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities before attackers do.",
      icon: "shield",
    },
    {
      id: 2,
      title: "Network Security",
      description: "Advanced network protection and monitoring solutions for your infrastructure.",
      icon: "lock",
    },
    {
      id: 3,
      title: "Security Audits",
      description: "Thorough security assessments and compliance auditing services.",
      icon: "eye",
    },
    {
      id: 4,
      title: "Threat Intelligence",
      description: "Real-time threat detection and analysis to stay ahead of cyber attacks.",
      icon: "lightning",
    },
  ];

  // Stats Data
  const stats = [
    { id: 1, value: "500+", label: "Clients Protected", delay: "0s" },
    { id: 2, value: "1000+", label: "Threats Blocked", delay: "0.5s" },
    { id: 3, value: "50+", label: "Security Experts", delay: "1s" },
    { id: 4, value: "15+", label: "Years Experience", delay: "1.5s" },
  ];

  // Features Data
  const features = [
    "Advanced threat detection and prevention",
    "24/7 security monitoring and support",
    "Compliance with industry standards",
    "Customized security solutions",
    "Experienced cybersecurity professionals",
    "Proven track record of success",
  ];

  // Dashboard Status Items
  const dashboardStatus = {
    security: [
      { text: "Networks are safe", status: "success" },
      { text: "Virus free", status: "success" },
    ],
    privacy: [
      { text: "21 privacy settings to fix", status: "warning" },
      { text: "Email not monitored", status: "error" },
    ],
  };

  // Clients Data
  const clients = [
    { id: 1, name: "TechCorp" },
    { id: 2, name: "SecureBank" },
    { id: 3, name: "CloudNet" },
    { id: 4, name: "DataVault" },
    { id: 5, name: "CyberFirst" },
    { id: 6, name: "ShieldTech" },
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      quote: "INTEGSEC has been instrumental in securing our infrastructure. Their expertise and proactive approach have given us peace of mind.",
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
    },
    {
      id: 2,
      quote: "Outstanding service and cutting-edge security solutions. The team is highly professional and responsive.",
      name: "Michael Chen",
      role: "Security Director, FinanceHub",
    },
    {
      id: 3,
      quote: "The best cybersecurity partner we have worked with. Their advanced threat detection saved us from multiple attacks.",
      name: "Emily Rodriguez",
      role: "CEO, DataSafe Inc",
    },
  ];

  // CTA Trust Badges
  const trustBadges = [
    "No Credit Card Required",
    "Free Security Assessment",
    "24/7 Expert Support",
  ];

  // ==================== ICON COMPONENTS ====================
  const getIcon = (iconName, className = "w-8 h-8") => {
    const icons = {
      shield: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      lock: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      eye: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      lightning: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      check: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      warning: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        </svg>
      ),
      error: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      ),
      quote: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      ),
      user: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      arrow: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      ),
      shieldFill: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
      lockFill: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </svg>
      ),
      checkCircle: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    };
    return icons[iconName] || null;
  };

  return (
    <Layout>
      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <button className="border-2 border-lime-400 text-lime-400 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm hover:bg-lime-400 hover:text-black transition-all duration-300">
                Next Level Cyber Defense
              </button>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Advanced Cyber Security Solutions
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                Protecting your digital world with next-gen defense systems.
                Stay secure with our cutting-edge cybersecurity solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
                <button className="bg-lime-400 text-black px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-lime-300 transition-all duration-300 shadow-lg shadow-lime-400/50 text-sm sm:text-base">
                  Get Started
                </button>
                <button className="border-2 border-gray-600 text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300 text-sm sm:text-base">
                  Contact Us
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
                {heroStats.map((stat) => (
                  <div key={stat.id}>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-lime-400">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - 3D Logo Animation */}
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              <div ref={logoRef} className="relative transition-transform duration-100">
                {/* Outer glow circle */}
                <div className="absolute inset-0 rounded-full bg-lime-400/10 blur-3xl animate-pulse" />

                {/* Main circle with border */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-lime-400/30 flex items-center justify-center">
                  {/* Inner circles */}
                  <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full border border-lime-400/20" />
                  <div className="absolute inset-8 sm:inset-12 md:inset-16 rounded-full border border-lime-400/10" />

                  {/* Animated dots */}
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] top-[10%] left-1/2 -translate-x-1/2 animate-[dotFloat_3s_ease-in-out_infinite]" />
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] top-[30%] right-[15%] animate-[dotFloat_3s_ease-in-out_infinite_0.5s]" />
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] bottom-[30%] right-[10%] animate-[dotFloat_3s_ease-in-out_infinite_1s]" />
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] bottom-[10%] left-1/2 -translate-x-1/2 animate-[dotFloat_3s_ease-in-out_infinite_1.5s]" />
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] bottom-[30%] left-[10%] animate-[dotFloat_3s_ease-in-out_infinite_2s]" />
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] top-[30%] left-[15%] animate-[dotFloat_3s_ease-in-out_infinite_2.5s]" />

                  {/* Center logo */}
                  <div className="relative z-10 w-1/2">
                    <img
                      src={logo}
                      className="w-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg shadow-2xl shadow-lime-400/50"
                      alt="Logo"
                    />
                  </div>

                  {/* Vertical line top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 sm:h-12 md:h-16 bg-gradient-to-b from-lime-400 to-transparent" />

                  {/* Vertical line bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 sm:h-12 md:h-16 bg-gradient-to-t from-lime-400 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: SERVICES ==================== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
              Comprehensive cybersecurity solutions tailored to protect your
              business from evolving threats.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-lime-400 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-lime-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-lime-900/30 border-2 border-lime-400/50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-lime-400/20 group-hover:border-lime-400 transition-all duration-300">
                    <span className="text-lime-400">
                      {getIcon(service.icon, 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-lime-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center">
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 text-base sm:text-lg font-semibold transition-colors duration-300"
            >
              View All Services
              {getIcon('arrow', 'w-4 h-4 sm:w-5 sm:h-5')}
            </a>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: STATS ==================== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="relative bg-gradient-to-br from-lime-900/40 to-lime-950/20 border border-lime-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden"
              >
                {/* Animated Glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-lime-400/30 via-lime-600/20 to-transparent animate-pulse"
                  style={{ animationDelay: stat.delay }}
                />

                <div className="relative z-10 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-lime-400 mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: WHY CHOOSE US ==================== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose INTEGSEC?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                We provide enterprise-grade security solutions with cutting-edge
                technology and expert support.
              </p>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 justify-center lg:justify-start"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-lime-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-lime-400">
                        {getIcon('check', 'w-3 h-3 sm:w-5 sm:h-5')}
                      </span>
                    </div>
                    <span className="text-white text-sm sm:text-base md:text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-teal-900/50 to-teal-950/30 border-2 border-lime-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                {/* Dashboard Header - Icons */}
                <div className="flex justify-around mb-4 sm:mb-6 md:mb-8">
                  {/* Security Icon */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1 sm:mb-2 transform rotate-12">
                        <span className="text-teal-900">
                          {getIcon('shieldFill', 'w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10')}
                        </span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-teal-900">
                        <span className="text-white">
                          {getIcon('check', 'w-2 h-2 sm:w-3 sm:h-3')}
                        </span>
                      </div>
                    </div>
                    <div className="text-white text-xs sm:text-sm font-semibold">
                      Security
                    </div>
                  </div>

                  {/* Privacy Icon */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1 sm:mb-2 transform -rotate-6">
                        <span className="text-teal-900">
                          {getIcon('lockFill', 'w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10')}
                        </span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-teal-900 text-white text-[8px] sm:text-xs font-bold">
                        3
                      </div>
                    </div>
                    <div className="text-white text-xs sm:text-sm font-semibold">
                      Privacy
                    </div>
                  </div>

                  {/* Performance Icon */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1 sm:mb-2 transform rotate-6">
                        <span className="text-teal-900">
                          {getIcon('checkCircle', 'w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10')}
                        </span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-teal-900 text-white text-[8px] sm:text-xs font-bold">
                        2
                      </div>
                    </div>
                    <div className="text-white text-xs sm:text-sm font-semibold">
                      Performance
                    </div>
                  </div>
                </div>

                {/* Status Items */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6">
                  {/* Security Status */}
                  <div className="space-y-1 sm:space-y-2">
                    {dashboardStatus.security.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-green-400 text-xs sm:text-sm">
                        {getIcon('check', 'w-3 h-3 sm:w-4 sm:h-4')}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Privacy Status */}
                  <div className="space-y-1 sm:space-y-2">
                    {dashboardStatus.privacy.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-2 text-xs sm:text-sm ${
                          item.status === 'warning' ? 'text-yellow-400' : 'text-red-400'
                        }`}
                      >
                        {getIcon(item.status, 'w-3 h-3 sm:w-4 sm:h-4')}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 sm:gap-4">
                  <button className="flex-1 bg-teal-700/50 hover:bg-teal-700 text-gray-300 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base">
                    Fix Issues
                  </button>
                  <button className="flex-1 bg-teal-700/50 hover:bg-teal-700 text-gray-300 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: TRUSTED BY ==================== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Trusted by Industry Leaders
            </h2>
          </div>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group bg-black border border-gray-800 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-center hover:border-lime-400 transition-all duration-300 cursor-pointer"
              >
                <span className="text-gray-400 text-sm sm:text-base md:text-lg font-semibold group-hover:text-lime-400 transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: TESTIMONIALS ==================== */}
      <section
        className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 z-10"
        style={{ backgroundColor: '#111' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Hear from businesses that trust us to protect their digital assets.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] border border-gray-800 hover:border-lime-400/50 transition-all duration-500 group"
                style={{ backgroundColor: '#181818' }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <span className="text-lime-400">
                    {getIcon('quote', 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12')}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Client Profile */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Profile Image with Neon Glow */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-lime-400 blur-md opacity-60 animate-pulse" />
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-lime-400 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <span className="text-lime-400">
                        {getIcon('user', 'w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8')}
                      </span>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base md:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Glow Effect on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: CTA ==================== */}
      <section
        className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden z-10"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        {/* Radial Grid Pattern Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Animated Radar Rings */}
          <div className="absolute w-[200%] h-[200%] opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] rounded-full border border-lime-400/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full border border-lime-400/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] rounded-full border border-lime-400/15" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[900px] h-[450px] sm:h-[900px] rounded-full border border-lime-400/10" />
          </div>

          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-lime-400/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-100 mb-4 sm:mb-6 tracking-tight">
            Ready to Secure Your Business?
          </h2>

          {/* Subheading */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
            Get started with our advanced cybersecurity solutions today.
          </p>

          {/* CTA Button with Neon Glow */}
          <div className="relative inline-block group">
            <div className="absolute -inset-2 bg-lime-400 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
            <div className="absolute -inset-1 bg-lime-400 rounded-lg blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <button className="relative bg-lime-400 hover:bg-lime-300 text-black font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(132,204,22,0.5)] hover:shadow-[0_0_50px_rgba(132,204,22,0.8)]">
              Get Free Consultation
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-gray-500 text-xs sm:text-sm">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-lime-400">
                  {getIcon('check', 'w-4 h-4 sm:w-5 sm:h-5')}
                </span>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Corner Decorative Elements */}
        <div className="hidden sm:block absolute top-4 sm:top-8 left-4 sm:left-8 w-8 sm:w-16 h-8 sm:h-16 border-l-2 border-t-2 border-lime-400/20 rounded-tl-lg" />
        <div className="hidden sm:block absolute top-4 sm:top-8 right-4 sm:right-8 w-8 sm:w-16 h-8 sm:h-16 border-r-2 border-t-2 border-lime-400/20 rounded-tr-lg" />
        <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-8 sm:w-16 h-8 sm:h-16 border-l-2 border-b-2 border-lime-400/20 rounded-bl-lg" />
        <div className="hidden sm:block absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-8 sm:w-16 h-8 sm:h-16 border-r-2 border-b-2 border-lime-400/20 rounded-br-lg" />
      </section>

      {/* ==================== ANIMATIONS ==================== */}
      <style jsx>{`
        @keyframes dotFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </Layout>
  );
};

export default Homepage;