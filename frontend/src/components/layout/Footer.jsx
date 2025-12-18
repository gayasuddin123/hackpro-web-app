import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Contact Info
  const contactInfo = {
    address: "A76 CHANDGANJ GARDEN KAPOORTHALA LUCKNOW 226024",
    phone: "+919026764985",
    email: "INFO@CODEVIRUSSEC.IN",
    companyName: "HackPro Academy",
  };

  // Quick Links
  const quickLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Course", path: "/course" },
    { id: 3, name: "Our Free Courses", path: "/free-courses" },
    { id: 4, name: "Blog", path: "/blog" },
  ];

  // Services Links
  const servicesLinks = [
    { id: 1, name: "Training & Placement", path: "/training" },
    { id: 2, name: "Certificate", path: "/training/certificate" },
    { id: 3, name: "Verify Certification", path: "/training/verify" },
    { id: 4, name: "Contact Us", path: "/contact" },
  ];

  // Legal Links
  const legalLinks = [
    { id: 1, name: "Privacy Policy", path: "/privacy-policy" },
    { id: 2, name: "Terms of Service", path: "/terms-of-service" },
    { id: 3, name: "Refund Policy", path: "/refund-policy" },
  ];

  // Social Links
  const socialLinks = [
    {
      id: 1,
      name: "Twitter",
      href: "https://twitter.com",
      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      id: 2,
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      id: 3,
      name: "GitHub",
      href: "https://github.com",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      id: 4,
      name: "YouTube",
      href: "https://youtube.com",
      icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
    {
      id: 5,
      name: "Instagram",
      href: "https://instagram.com",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
  ];

  // Handle newsletter submit
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 z-10 bg-[#0d0d0d]">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 mb-12 sm:mb-16">
          {/* Column 1 - Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
<Link to="/" className="inline-block">
  <div className="relative w-20 h-20 sm:w-24 sm:h-24"> {/* Container size */}
    
    {/* 1. Ultra Wide Atmospheric Glow (The "Aura") */}
    <img
      src={logo}
      className="absolute inset-0 w-full blur-[40px] opacity-70"
      alt=""
      aria-hidden="true"
      style={{ filter: 'brightness(2) saturate(2)' }} 
    />
    
    {/* 2. Strong Outer Glow */}
    <img
      src={logo}
      className="absolute inset-0 w-full blur-3xl opacity-80"
      alt=""
      aria-hidden="true"
      style={{ filter: 'brightness(2) saturate(1.5)' }}
    />
    
    {/* 3. Core Intense Glow (Hot Center) */}
    <img
      src={logo}
      className="absolute inset-0 w-full blur-xl opacity-90"
      alt=""
      aria-hidden="true"
      style={{ filter: 'brightness(2.2)' }}
    />
    
    {/* 4. Main Sharp Logo with Heavy Drop Shadows */}
    <img
      src={logo}
      className="relative w-full z-10"
      alt="HackPro Academy"
      style={{ 
        filter: ` 
          drop-shadow(0 0 50px #84cc16) 
          brightness(1.1)
        `
      }}
    />
  </div>
</Link>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering the next generation of cybersecurity professionals with
              cutting-edge training and industry-recognized certifications.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-lime-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <svg
                      className="w-3 h-3 text-lime-400/50 group-hover:text-lime-400 group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full" />
              Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-lime-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <svg
                      className="w-3 h-3 text-lime-400/50 group-hover:text-lime-400 group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact & Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full" />
              Contact Us
            </h4>

            {/* Contact Info */}
            <ul className="space-y-4 mb-8">
              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-lime-400/10 border border-lime-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-lime-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">
                  {contactInfo.address}
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-lime-400/10 border border-lime-400/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-lime-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 text-sm hover:text-lime-400 transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-lime-400/10 border border-lime-400/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-lime-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 text-sm hover:text-lime-400 transition-colors duration-300 break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h5 className="text-white text-sm font-semibold mb-3">
                Subscribe to Newsletter
              </h5>
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-lime-400 hover:bg-lime-300 text-black p-2.5 rounded-lg transition-all duration-300 flex-shrink-0 group"
                  >
                    <svg
                      className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>

                {/* Success Message */}
                {isSubscribed && (
                  <div className="absolute -bottom-8 left-0 text-lime-400 text-xs flex items-center gap-1">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Successfully subscribed!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

        {/* Bottom Footer Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="text-lime-400 font-medium">
              {contactInfo.companyName}
            </span>
            . All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.id}>
                <Link
                  to={link.path}
                  className="text-gray-500 text-sm hover:text-lime-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="hidden sm:block text-gray-700">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-lime-400 hover:bg-lime-300 text-black rounded-full flex items-center justify-center shadow-lg shadow-lime-400/30 transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;