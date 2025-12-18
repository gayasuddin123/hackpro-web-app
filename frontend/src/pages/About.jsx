import React from 'react';
import Layout from '../components/layout/Layout';

const About = () => {
  // ==================== DATA ====================

  // Hero Data
  const aboutHero = {
    badge: "About CyberShield",
    headline: "Securing Digital Infrastructure Since 2010",
    description:
      "We are a team of dedicated cybersecurity professionals committed to protecting businesses from evolving digital threats. With over 15 years of experience, we've helped hundreds of organizations safeguard their critical assets and maintain operational resilience in an increasingly complex threat landscape.",
  };

  // Mission & Vision Data
  const missionVision = [
    {
      id: 1,
      type: "mission",
      title: "Our Mission",
      icon: "target",
      description:
        "To provide world-class cybersecurity solutions that protect businesses from digital threats while enabling them to innovate and grow with confidence. We strive to make the digital world safer for everyone.",
    },
    {
      id: 2,
      type: "vision",
      title: "Our Vision",
      icon: "eye",
      description:
        "To be the global leader in cybersecurity innovation, setting new standards for threat detection, prevention, and response. We envision a future where businesses can operate securely in the digital landscape.",
    },
  ];

  // Core Values Data
  const coreValues = [
    {
      id: 1,
      title: "Integrity",
      icon: "shield",
      description: "We uphold the highest ethical standards in everything we do.",
      highlighted: false,
    },
    {
      id: 2,
      title: "Vigilance",
      icon: "eye",
      description: "Constant monitoring and proactive threat detection 24/7.",
      highlighted: true,
    },
    {
      id: 3,
      title: "Collaboration",
      icon: "team",
      description: "Working together with clients to achieve security goals.",
      highlighted: false,
    },
    {
      id: 4,
      title: "Innovation",
      icon: "lightning",
      description: "Staying ahead with cutting-edge security technologies.",
      highlighted: false,
    },
  ];

  // Journey/Timeline Data
  const journey = [
    {
      id: 1,
      year: "2010",
      title: "Company Founded",
      description: "Started with a vision to revolutionize cybersecurity.",
      position: "left",
    },
    {
      id: 2,
      year: "2013",
      title: "First 100 Clients",
      description: "Reached milestone of protecting 100 businesses.",
      position: "right",
    },
    {
      id: 3,
      year: "2016",
      title: "Expanded Services",
      description: "Launched advanced security monitoring solutions.",
      position: "left",
    },
    {
      id: 4,
      year: "2019",
      title: "Global Presence",
      description: "Opened offices in three international regions.",
      position: "right",
    },
    {
      id: 5,
      year: "2021",
      title: "AI-Powered Threat Detection",
      description: "Integrated AI systems into security workflows.",
      position: "left",
    },
    {
      id: 6,
      year: "2024",
      title: "Industry Recognition",
      description: "Awarded for excellence in cybersecurity innovation.",
      position: "right",
    },
  ];

  // Team Data
  const team = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Chief Security Officer",
    },
    {
      id: 2,
      name: "Sarah Martinez",
      role: "Lead Penetration Tester",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Network Security Expert",
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "Threat Intelligence Analyst",
    },
  ];

  // Stats Data
  const aboutStats = [
    { id: 1, value: "500+", label: "Clients Protected" },
    { id: 2, value: "15+", label: "Years Experience" },
    { id: 3, value: "50+", label: "Security Experts" },
    { id: 4, value: "99.9%", label: "Client Satisfaction" },
  ];

  // ==================== ICON COMPONENTS ====================

  const getIcon = (iconName, className = "w-8 h-8") => {
    const icons = {
      target: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <circle cx="12" cy="12" r="6" strokeWidth={2} />
          <circle cx="12" cy="12" r="2" strokeWidth={2} />
        </svg>
      ),
      eye: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      shield: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      team: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      lightning: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      server: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      user: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    };
    return icons[iconName] || null;
  };

  return (
    <Layout>
      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 z-10 overflow-hidden">
        {/* Background Grid Pattern */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <span className="inline-block bg-lime-400/10 border-2 border-lime-400 text-lime-400 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold mb-6 sm:mb-8">
                {aboutHero.badge}
              </span>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8">
                {aboutHero.headline}
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                {aboutHero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">
                <button className="bg-lime-400 text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 shadow-lg shadow-lime-400/30">
                  Our Services
                </button>
                <button className="border-2 border-gray-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative order-1 lg:order-2">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-lime-400/20 rounded-3xl blur-2xl opacity-60" />

              {/* Image Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-lime-400/30 shadow-2xl shadow-lime-400/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 relative">
                  {/* Simulated Server Room Pattern */}
                  <div className="absolute inset-0 opacity-60">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 h-6 sm:h-8 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"
                        style={{ top: `${i * 8.33}%` }}
                      >
                        {/* LED Lights */}
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 flex gap-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-lime-400 rounded-full animate-pulse shadow-[0_0_6px_#84cc16]" />
                          <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-lime-400 rounded-full animate-pulse shadow-[0_0_6px_#84cc16]"
                            style={{ animationDelay: '0.5s' }}
                          />
                          <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_6px_#facc15]"
                            style={{ animationDelay: '1s' }}
                          />
                        </div>
                        {/* Cable Pattern */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-0.5">
                          {[...Array(6)].map((_, j) => (
                            <div
                              key={j}
                              className="w-1 h-3 sm:h-4 rounded-full"
                              style={{
                                backgroundColor:
                                  j % 3 === 0 ? '#84cc16' : j % 3 === 1 ? '#3b82f6' : '#f97316',
                                opacity: 0.7,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Center Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-black/60 backdrop-blur-sm border border-lime-400/50 flex items-center justify-center">
                      <span className="text-lime-400">
                        {getIcon('server', 'w-10 h-10 sm:w-14 sm:h-14')}
                      </span>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-lime-400/30 rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-lime-400/30 rounded-bl-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: MISSION & VISION ==================== */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {missionVision.map((item) => (
              <div key={item.id} className="relative group">
                {/* Outer Glow */}
                <div className="absolute -inset-1 bg-lime-400/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-lime-950/30 border-2 border-lime-400/40 hover:border-lime-400/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 h-full">
                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 via-transparent to-lime-400/10 rounded-2xl sm:rounded-3xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative mb-6 sm:mb-8">
                      <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-lime-400/30 rounded-xl blur-lg" />
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-lime-900/50 border-2 border-lime-400 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(132,204,22,0.4)]">
                        <span className="text-lime-400 drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]">
                          {getIcon(item.icon, 'w-8 h-8 sm:w-10 sm:h-10')}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: CORE VALUES ==================== */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              The principles that guide our approach to cybersecurity and client service.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className={`relative group rounded-2xl p-6 sm:p-8 transition-all duration-500 overflow-hidden ${
                  value.highlighted
                    ? 'bg-gradient-to-br from-lime-900/40 to-lime-950/20 border-2 border-lime-400'
                    : 'bg-gradient-to-br from-gray-900/80 to-gray-950/60 border border-gray-800 hover:border-lime-400/50'
                }`}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                    value.highlighted
                      ? 'bg-lime-400/10 opacity-100'
                      : 'bg-lime-400/5 opacity-0 group-hover:opacity-100'
                  }`}
                />

                {/* Outer Glow for Highlighted */}
                {value.highlighted && (
                  <div className="absolute -inset-1 bg-lime-400/20 rounded-2xl blur-xl opacity-60" />
                )}

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 ${
                      value.highlighted
                        ? 'bg-lime-400/30 border-2 border-lime-400 shadow-[0_0_20px_rgba(132,204,22,0.5)]'
                        : 'bg-lime-900/30 border-2 border-lime-400/50 group-hover:bg-lime-400/20 group-hover:border-lime-400'
                    }`}
                  >
                    <span
                      className={`text-lime-400 ${
                        value.highlighted ? 'drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]' : ''
                      }`}
                    >
                      {getIcon(value.icon, 'w-7 h-7 sm:w-8 sm:h-8')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 ${
                      value.highlighted ? 'text-lime-400' : 'text-white group-hover:text-lime-400'
                    }`}
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: OUR JOURNEY ==================== */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Milestones that shaped our company and the cybersecurity industry.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-12 sm:mt-16">
            {/* Center Line - Hidden on mobile */}
            <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400 via-lime-400/50 to-lime-400/10" />

            {/* Mobile Left Line */}
            <div className="sm:hidden absolute left-1.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400 via-lime-400/50 to-lime-400/10" />

            {/* Timeline Items */}
            <div className="relative pl-8 sm:pl-0">
              {journey.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative flex items-center ${
                    item.position === 'left' ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } w-full mb-8 sm:mb-12`}
                >
                  {/* Card */}
                  <div
                    className={`w-full sm:w-5/12 ${
                      item.position === 'left' ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'
                    }`}
                  >
                    <div className="relative group">
                      {/* Glow Effect */}
                      <div className="absolute -inset-1 bg-lime-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                      {/* Card Content */}
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/70 border border-gray-800 hover:border-lime-400/50 rounded-2xl p-5 sm:p-6 transition-all duration-500">
                        {/* Year */}
                        <span className="inline-block text-lime-400 text-sm sm:text-base font-bold mb-2 drop-shadow-[0_0_8px_rgba(132,204,22,0.5)]">
                          {item.year}
                        </span>

                        {/* Title */}
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors duration-300">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="text-gray-400 text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Center - Hidden on mobile, shown on sm+ */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
                    {/* Glowing Dot */}
                    <div className="relative">
                      <div className="absolute inset-0 w-5 h-5 bg-lime-400 rounded-full blur-md opacity-80 animate-pulse" />
                      <div className="relative w-5 h-5 bg-lime-400 rounded-full border-4 border-black shadow-[0_0_15px_rgba(132,204,22,0.8)]" />
                    </div>

                    {/* Connecting Line */}
                    {index !== journey.length - 1 && (
                      <div className="w-0.5 h-16 sm:h-20 bg-gradient-to-b from-lime-400 to-lime-400/20" />
                    )}
                  </div>

                  {/* Mobile Timeline Indicator */}
                  <div className="sm:hidden absolute left-0 top-0 bottom-0 flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 w-3 h-3 bg-lime-400 rounded-full blur-sm opacity-80" />
                      <div className="relative w-3 h-3 bg-lime-400 rounded-full border-2 border-black" />
                    </div>
                    {index !== journey.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-lime-400 to-lime-400/20" />
                    )}
                  </div>

                  {/* Empty Space for other side */}
                  <div className="hidden sm:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: MEET OUR TEAM ==================== */}
      <section
        className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Expert cybersecurity professionals dedicated to protecting your business.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-lime-400/50 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Placeholder Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
                          `,
                          backgroundSize: '20px 20px',
                        }}
                      />
                      {/* Terminal Lines */}
                      <div className="absolute inset-0 flex flex-col justify-center px-4 space-y-2">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="h-2 bg-lime-400/20 rounded"
                            style={{ width: `${Math.random() * 60 + 40}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* User Icon */}
                    <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-4 border-lime-400/30 flex items-center justify-center">
                      <span className="text-lime-400/60">
                        {getIcon('user', 'w-12 h-12 sm:w-16 sm:h-16')}
                      </span>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-lime-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-lime-400 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-lime-400 text-sm sm:text-base font-medium drop-shadow-[0_0_8px_rgba(132,204,22,0.5)]">
                    {member.role}
                  </p>
                </div>

                {/* Border Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-lime-400/30 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: STATS ==================== */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Circular Tech Patterns */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-lime-400/10" />
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-lime-400/5" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-lime-400/10" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-lime-400/5" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {aboutStats.map((stat) => (
              <div key={stat.id} className="text-center group">
                {/* Number with Glow */}
                <div className="relative inline-block mb-3 sm:mb-4">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-lime-400/30 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-150" />

                  {/* Inner Glow */}
                  <div className="absolute inset-0 bg-lime-400/20 rounded-full blur-xl opacity-80" />

                  {/* Number */}
                  <span
                    className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lime-400 drop-shadow-[0_0_30px_rgba(132,204,22,0.6)]"
                    style={{
                      textShadow: '0 0 40px rgba(132, 204, 22, 0.5), 0 0 80px rgba(132, 204, 22, 0.3)',
                    }}
                  >
                    {stat.value}
                  </span>
                </div>

                {/* Label */}
                <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium">
                  {stat.label}
                </p>

                {/* Decorative Line */}
                <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-lime-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;