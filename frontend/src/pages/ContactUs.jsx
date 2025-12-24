import React, { useState } from 'react';
import Layout from '../components/layout/Layout'; // Adjust the import path based on your project structure

const ContactUs = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Service options for dropdown
  const serviceOptions = [
    'Select a service',
    'Security Assessment',
    'Penetration Testing',
    'Incident Response',
    'Security Consulting',
    'Compliance Audit',
    'Managed Security Services',
    'Vulnerability Management',
    'Cloud Security',
    'Other'
  ];

  // FAQ data
  const faqData = [
    {
      question: 'What is your response time for security incidents?',
      answer: 'Our security operations center operates 24/7/365 with an average initial response time of under 15 minutes for critical incidents. We prioritize rapid containment, thorough investigation, and complete remediation to minimize potential damage to your infrastructure and data.'
    },
    {
      question: 'Do you offer custom security solutions?',
      answer: 'Absolutely! We understand that every organization has unique security requirements. Our team of experts works closely with you to design and implement tailored security solutions that align with your specific business objectives, industry regulations, and risk tolerance levels.'
    },
    {
      question: 'What certifications does your team hold?',
      answer: 'Our team holds industry-leading certifications including CISSP, CEH, OSCP, CISM, CompTIA Security+, GIAC, and ISO 27001 Lead Auditor. We continuously invest in professional development to stay ahead of emerging threats and evolving security landscapes.'
    },
    {
      question: 'How do you ensure data confidentiality?',
      answer: 'We implement military-grade encryption (AES-256), strict access controls, and comprehensive security protocols. All operations comply with GDPR, HIPAA, SOC 2, and PCI-DSS standards. Client data is handled under binding NDAs with regular security audits and penetration testing of our own systems.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We serve diverse industries including finance, healthcare, government, technology, e-commerce, manufacturing, and critical infrastructure. Our solutions are specifically designed to meet the unique regulatory requirements and threat landscapes of each sector.'
    },
    {
      question: 'Do you provide ongoing security monitoring?',
      answer: 'Yes, we offer comprehensive 24/7 security monitoring through our Security Operations Center (SOC). This includes real-time threat detection, log analysis, vulnerability scanning, and proactive threat hunting to identify and neutralize threats before they impact your business.'
    }
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout>
      <div className=" relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 z-10 bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen">
        
        {/* ==================== SECTION 1: HERO SECTION ==================== */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Grid Pattern Background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-gray-900/50" />

          {/* Animated Glow Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />

          {/* Content Container */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Glass-morphism Button */}
            <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 rounded-full bg-green-500/10 backdrop-blur-xl border border-green-500/30 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:bg-green-500/15 transition-all duration-500 cursor-pointer group">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-semibold text-sm tracking-widest uppercase">
                Get in Touch
              </span>
              <svg 
                className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              <span className="text-white">Contact </span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Us
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Have questions? We're here to help you secure your digital infrastructure.
            </p>

            {/* Decorative Elements */}
            <div className="mt-16 flex items-center justify-center gap-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-green-500/50 to-green-500" />
              <div className="w-3 h-3 bg-green-500/50 rounded-full animate-pulse" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-green-500/50 to-green-500" />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <svg 
                className="w-6 h-6 text-green-400/50" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* ==================== SECTION 2: CONTACT FORM & INFO ==================== */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
          
          {/* Top Border Glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

          {/* Glow Effects */}
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Send Us a </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Fill out the form below and our security experts will get back to you within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Left Side - Contact Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="relative">
                  {/* Form Card */}
                  <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl shadow-black/50">
                    {/* Success Message */}
                    {submitSuccess && (
                      <div className="mb-8 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-green-400 font-medium">Message sent successfully! We'll be in touch soon.</p>
                      </div>
                    )}

                    {/* Name Fields Row */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          First Name <span className="text-green-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 bg-gray-950/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 hover:border-gray-600"
                          placeholder="John"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Last Name <span className="text-green-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 bg-gray-950/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 hover:border-gray-600"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Email Address <span className="text-green-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 bg-gray-950/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 hover:border-gray-600"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-gray-950/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 hover:border-gray-600"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    {/* Service Interest Dropdown */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Service Interest <span className="text-green-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 bg-gray-950/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 hover:border-gray-600 appearance-none cursor-pointer"
                        >
                          {serviceOptions.map((option, index) => (
                            <option 
                              key={index} 
                              value={index === 0 ? '' : option}
                              disabled={index === 0}
                              className="bg-gray-900 text-white"
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Message <span className="text-green-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-5 py-4 bg-gray-950/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 hover:border-gray-600 resize-none"
                        placeholder="Describe your security needs or ask us anything..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 px-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-xl hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-500/30 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg 
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Side - Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information Card */}
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-green-500/30 transition-all duration-500 shadow-2xl shadow-black/30">
                  <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/10">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Address</p>
                        <p className="text-white text-lg font-medium">Lucknow, Uttar Pradesh</p>
                        <p className="text-gray-300">India</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/10">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Phone</p>
                        <p className="text-white text-lg font-medium">+919918103909</p>
                        {/* <p className="text-gray-300">+1 (555) 987-6543</p> */}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/10">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Email</p>
                        <p className="text-white text-lg font-medium">contact@hackrpo.acedmey</p>
                        {/* <p className="text-gray-300">support@cybersecure.com</p> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-green-500/30 transition-all duration-500 shadow-2xl shadow-black/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Business Hours</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-800">
                      <span className="text-white font-medium">Monday - Friday</span>
                      <span className="text-gray-400">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-800">
                      <span className="text-white font-medium">Saturday</span>
                      <span className="text-gray-400">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-800">
                      <span className="text-white font-medium">Sunday</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  </div>

                  {/* 24/7 Support Highlight */}
                  <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <p className="text-green-400 font-bold text-lg">24/7 Emergency Support Available</p>
                    </div>
                    <p className="text-gray-400 text-sm mt-2 ml-6">For critical security incidents</p>
                  </div>
                </div>

                {/* Live Chat Card */}
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 backdrop-blur-xl rounded-3xl p-8 border border-green-500/30 hover:border-green-500/50 transition-all duration-500 cursor-pointer group shadow-2xl shadow-green-500/10 hover:shadow-green-500/20">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">Live Chat</h3>
                      <p className="text-gray-400">Chat with our team now</p>
                    </div>
                    <svg 
                      className="w-6 h-6 text-green-400 group-hover:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-gray-900" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-gray-900" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-gray-900" />
                    </div>
                    <span className="text-gray-400 text-sm">5 agents online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION 3 & 4: FAQ SECTION ==================== */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Grid Pattern Background */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
          
          {/* Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Frequently Asked </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Quick answers to common questions about our services.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 overflow-hidden shadow-xl shadow-black/20"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  >
                    <span className="text-lg md:text-xl font-medium text-white pr-6 group-hover:text-green-400 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div 
                      className={`w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0 transition-all duration-500 shadow-lg shadow-green-500/10 ${
                        openFaq === index ? 'bg-green-500/20 rotate-180' : ''
                      }`}
                    >
                      <svg 
                        className="w-5 h-5 text-green-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <div className="h-px bg-gradient-to-r from-green-500/50 via-gray-700 to-transparent mb-6" />
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions CTA */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                <p className="text-gray-400">Still have questions?</p>
                <button className="px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 font-medium hover:bg-green-500/20 transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECTION 5: LOCATION SECTION ==================== */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />

          {/* Top Border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-gray-800 hover:border-green-500/30 transition-all duration-500 text-center shadow-2xl shadow-black/30">
              {/* Glowing Map Pin Icon */}
              <div className="relative inline-flex mb-10">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-green-500/30 rounded-full blur-2xl animate-pulse scale-150" />
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse scale-125" style={{ animationDelay: '0.5s' }} />
                
                {/* Icon Container */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/40 flex items-center justify-center shadow-2xl shadow-green-500/20">
                  <svg 
                    className="w-12 h-12 text-green-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Our </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Location
                </span>
              </h2>

              {/* Address */}
              <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
                123 Cyber Street, Tech City, TC 12345
              </p>

              {/* Location Tags */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-300">United States</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-300">Pacific Time Zone</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-300">Global Headquarters</span>
                </div>
              </div>

              {/* Decorative Divider */}
              <div className="mt-12 flex items-center justify-center gap-3">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-green-500/50" />
                <div className="w-3 h-3 bg-green-500/30 rounded-full border border-green-500/50" />
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-green-500/50" />
              </div>

              {/* Get Directions Button */}
              <div className="mt-10">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 font-semibold hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group">
                  <span>Get Directions</span>
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== BOTTOM CTA SECTION ==================== */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-gray-900" />
          
          {/* Border Lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500" />
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500" />
            </div>
            
            <p className="text-gray-400 text-xl">
              Ready to secure your digital assets?{' '}
              <span className="text-green-400 font-semibold cursor-pointer hover:underline underline-offset-4">
                Schedule a free consultation
              </span>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactUs;