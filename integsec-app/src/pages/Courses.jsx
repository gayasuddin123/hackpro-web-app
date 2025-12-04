import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const Courses = () => {
  const [activeMonth, setActiveMonth] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);

  // ==================== DATA ====================

  // Course Hero Data
  const courseHero = {
    badge: "🔥 Most Popular Program",
    title: "6 Months Artificial Intelligence Program",
    subtitle: "A job-oriented, project-based AI program designed for beginners to advanced learners focusing on real-world applications, ML, DL, Python, and Gen-AI.",
    duration: "6 Months (24 Weeks)",
    mode: "Online / Offline",
    price: "₹49,999",
    originalPrice: "₹79,999",
    discount: "37% OFF",
  };

  // Course Highlights
  const highlights = [
    { id: 1, icon: "clock", title: "6 Months", subtitle: "Duration" },
    { id: 2, icon: "projects", title: "15+", subtitle: "Live Projects" },
    { id: 3, icon: "certificate", title: "Certified", subtitle: "Program" },
    { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentorship" },
    { id: 5, icon: "placement", title: "100%", subtitle: "Placement Support" },
    { id: 6, icon: "internship", title: "Internship", subtitle: "Included" },
  ];

  // What Students Get
  const studentBenefits = [
    { id: 1, title: "HackPro AI Certification", description: "Industry-recognized 6-month certificate", icon: "certificate" },
    { id: 2, title: "Live Projects + Internship", description: "Hands-on experience with real projects", icon: "projects" },
    { id: 3, title: "Placement Support", description: "Complete job assistance and guidance", icon: "placement" },
    { id: 4, title: "1:1 Mentor Support", description: "Personal mentorship throughout", icon: "mentor" },
    { id: 5, title: "Lifetime Access", description: "Notes + Code Repository forever", icon: "lifetime" },
    { id: 6, title: "Interview Preparation", description: "Mock interviews & resume building", icon: "interview" },
  ];

  // Modules Data (6 Months)
  const modules = [
    {
      id: 1,
      month: "Month 1",
      title: "Python, Math & Foundations",
      weeks: "Weeks 1–4",
      color: "from-blue-500 to-cyan-500",
      topics: [
        {
          category: "Python Programming (Beginner to Intermediate)",
          items: ["Variables, Data Types, Loops, Functions", "File Handling", "OOP Concepts", "Modules & Packages"],
        },
        {
          category: "Essential Math for AI",
          items: ["Linear Algebra Basics", "Probability & Statistics", "Calculus for ML intuition"],
        },
        {
          category: "Tools Setup",
          items: ["Jupyter Notebook", "Anaconda", "Git & GitHub", "VS Code"],
        },
      ],
      projects: ["Calculator App", "Data Visualization Dashboard"],
      icon: "python",
    },
    {
      id: 2,
      month: "Month 2",
      title: "Machine Learning",
      weeks: "Weeks 5–8",
      color: "from-purple-500 to-pink-500",
      topics: [
        {
          category: "Data Handling & Cleaning",
          items: ["Pandas, NumPy", "Handling Missing Data", "Feature Engineering", "Data Preprocessing & Scaling"],
        },
        {
          category: "Core ML Algorithms",
          items: ["Linear & Logistic Regression", "Decision Trees", "Random Forest", "Naive Bayes", "KNN", "SVM"],
        },
        {
          category: "Model Evaluation",
          items: ["Confusion Matrix", "Classification Report", "Overfitting & Underfitting", "Cross-Validation"],
        },
      ],
      projects: ["Spam Classifier", "House Price Prediction"],
      icon: "ml",
    },
    {
      id: 3,
      month: "Month 3",
      title: "Deep Learning",
      weeks: "Weeks 9–12",
      color: "from-orange-500 to-red-500",
      topics: [
        {
          category: "Neural Networks Basics",
          items: ["Perceptron", "Activation Functions", "Backpropagation", "Loss Functions"],
        },
        {
          category: "TensorFlow / Keras",
          items: ["Creating NN from scratch", "Training, Testing, Validation"],
        },
        {
          category: "Image AI (CNN)",
          items: ["Convolution, Pooling", "CNN Architectures (VGG, ResNet)"],
        },
      ],
      projects: ["Digit Recognition (MNIST)", "Image Classifier"],
      icon: "dl",
    },
    {
      id: 4,
      month: "Month 4",
      title: "NLP & Generative AI",
      weeks: "Weeks 13–16",
      color: "from-green-500 to-emerald-500",
      topics: [
        {
          category: "Natural Language Processing",
          items: ["Tokenization", "Stopwords", "Stemming/Lemmatization", "TF-IDF, Word2Vec"],
        },
        {
          category: "Generative AI Models",
          items: ["Transformers", "GPT Architecture Basics", "LLM Prompt Engineering", "Fine-Tuning LLM"],
        },
        {
          category: "Chatbot Development",
          items: ["LangChain Basics", "RAG (Retrieval Augmented Generation)"],
        },
      ],
      projects: ["Sentiment Analyzer", "Custom AI Chatbot"],
      icon: "nlp",
    },
    {
      id: 5,
      month: "Month 5",
      title: "Computer Vision + Deployment",
      weeks: "Weeks 17–20",
      color: "from-cyan-500 to-blue-500",
      topics: [
        {
          category: "Computer Vision Advanced",
          items: ["YOLO (Object Detection)", "Face Recognition", "Image Segmentation"],
        },
        {
          category: "Model Deployment",
          items: ["Flask API", "FastAPI", "Streamlit App", "Hosting on Render / HuggingFace"],
        },
      ],
      projects: ["Object Detection System", "AI Attendance System"],
      icon: "cv",
    },
    {
      id: 6,
      month: "Month 6",
      title: "Real-World Projects + Internship",
      weeks: "Weeks 21–24",
      color: "from-lime-500 to-green-500",
      topics: [
        {
          category: "Capstone Projects (Choose Any 2)",
          items: ["AI Chatbot for Businesses", "Fraud Detection AI", "Voice Assistant", "Recommendation System", "Face Mask Detection", "Resume Analyzer AI"],
        },
        {
          category: "Industry Training",
          items: ["Version Control", "Project Documentation", "API Integration", "Portfolio Building"],
        },
        {
          category: "Interview Preparation",
          items: ["Resume Building", "GitHub Portfolio", "AI Interview Questions", "Mock Interview Rounds"],
        },
      ],
      projects: ["2 Capstone Projects of Your Choice"],
      icon: "capstone",
    },
  ];

  // FAQ Data
  const faqs = [
    {
      id: 1,
      question: "Who is this program for?",
      answer: "This program is designed for beginners to advanced learners who want to build a career in AI/ML. Whether you're a student, working professional, or career switcher, this course will help you master AI skills.",
    },
    {
      id: 2,
      question: "Do I need prior programming experience?",
      answer: "No prior experience is required. We start from Python basics and gradually move to advanced AI concepts. However, basic computer knowledge is recommended.",
    },
    {
      id: 3,
      question: "What is the mode of training?",
      answer: "We offer both online and offline modes. Online classes are conducted live with recordings available. Offline classes are held at our Lucknow center.",
    },
    {
      id: 4,
      question: "Is placement assistance guaranteed?",
      answer: "We provide 100% placement support including resume building, mock interviews, and job referrals. However, final placement depends on your skills and interview performance.",
    },
    {
      id: 5,
      question: "What certification will I receive?",
      answer: "You'll receive HackPro Academy's AI Certification which is industry-recognized. Additionally, you'll have projects and internship experience to showcase.",
    },
    {
      id: 6,
      question: "Can I pay in installments?",
      answer: "Yes, we offer flexible EMI options. You can pay in 3 or 6 monthly installments with no additional interest charges.",
    },
  ];

  // Technologies/Tools
  const technologies = [
    "Python", "TensorFlow", "Keras", "PyTorch", "Pandas", "NumPy", 
    "Scikit-learn", "OpenCV", "YOLO", "LangChain", "Streamlit", 
    "Flask", "FastAPI", "Git", "HuggingFace", "GPT", "Transformers"
  ];

  // ==================== ICON COMPONENT ====================
  const getIcon = (iconName, className = "w-6 h-6") => {
    const icons = {
      clock: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      projects: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      certificate: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      mentor: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      placement: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      internship: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      lifetime: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      interview: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      check: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      arrow: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      ),
      arrowDown: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      ),
      play: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      ),
      brain: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      code: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      rocket: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    };
    return icons[iconName] || null;
  };

  // Module Icon Component
  const getModuleIcon = (iconName) => {
    const icons = {
      python: "🐍",
      ml: "🤖",
      dl: "🧠",
      nlp: "🗣️",
      cv: "👁️",
      capstone: "💼",
    };
    return icons[iconName] || "📘";
  };

  return (
    <Layout>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 z-10 overflow-hidden">
        {/* Background Elements */}
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400/20 to-green-400/20 border border-lime-400/50 text-lime-400 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold mb-6">
                {courseHero.badge}
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">
                  {courseHero.title}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {courseHero.subtitle}
              </p>

              {/* Course Meta */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-lime-400">{getIcon('clock', 'w-5 h-5')}</span>
                  <span className="text-sm sm:text-base">{courseHero.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-lime-400">{getIcon('placement', 'w-5 h-5')}</span>
                  <span className="text-sm sm:text-base">{courseHero.mode}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group relative bg-lime-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-lime-300 transition-all duration-300 shadow-lg shadow-lime-400/30 hover:shadow-lime-400/50 hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    Enroll Now
                    {getIcon('arrow', 'w-5 h-5 group-hover:translate-x-1 transition-transform')}
                  </span>
                </button>
                <button className="group flex items-center justify-center gap-2 border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
                  <span className="w-10 h-10 rounded-full bg-lime-400/20 flex items-center justify-center group-hover:bg-lime-400/30 transition-colors">
                    {getIcon('play', 'w-5 h-5 text-lime-400')}
                  </span>
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Content - Price Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-lime-400/20 to-green-400/20 rounded-3xl blur-2xl opacity-60" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-950/95 border-2 border-lime-400/30 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
                  {/* Discount Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {courseHero.discount}
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-gray-500 line-through text-xl mb-1">
                      {courseHero.originalPrice}
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold text-lime-400">
                      {courseHero.price}
                    </div>
                    <div className="text-gray-400 text-sm mt-2">
                      EMI options available
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {[
                      "6 Months Comprehensive Training",
                      "15+ Live Projects",
                      "Industry Certification",
                      "1:1 Mentorship",
                      "Placement Support",
                      "Lifetime Access to Resources",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <span className="w-5 h-5 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0">
                          {getIcon('check', 'w-3 h-3 text-lime-400')}
                        </span>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enroll Button */}
                  <button className="w-full bg-gradient-to-r from-lime-400 to-green-500 text-black py-4 rounded-xl font-bold text-lg hover:from-lime-300 hover:to-green-400 transition-all duration-300 shadow-lg shadow-lime-400/30">
                    Enroll Now - Limited Seats!
                  </button>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-4 mt-4 text-gray-500 text-xs">
                    <span>🔒 Secure Payment</span>
                    <span>•</span>
                    <span>💳 EMI Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HIGHLIGHTS SECTION ==================== */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {highlights.map((item) => (
              <div
                key={item.id}
                className="group bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 hover:border-lime-400/50 rounded-2xl p-4 sm:p-6 text-center transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 group-hover:bg-lime-400/20 transition-colors">
                  {getIcon(item.icon, 'w-6 h-6 sm:w-7 sm:h-7')}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {item.title}
                </div>
                <div className="text-gray-400 text-sm">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGIES SECTION ==================== */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies You'll Master
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get hands-on experience with industry-leading tools and frameworks
            </p>
          </div>

          {/* Scrolling Tech Badges */}
          <div className="relative">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-900/80 border border-gray-800 hover:border-lime-400/50 rounded-full text-gray-300 hover:text-lime-400 text-sm sm:text-base font-medium transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CURRICULUM SECTION ==================== */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
              📚 Complete Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              6 Months Module Breakdown
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              A structured learning path from basics to advanced AI concepts
            </p>
          </div>

          {/* Month Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveMonth(module.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeMonth === module.id
                    ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/30'
                    : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-lime-400/50 hover:text-lime-400'
                }`}
              >
                <span className="mr-2">{getModuleIcon(module.icon)}</span>
                {module.month}
              </button>
            ))}
          </div>

          {/* Active Module Content */}
          {modules.map((module) => (
            <div
              key={module.id}
              className={`transition-all duration-500 ${
                activeMonth === module.id
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible absolute'
              }`}
            >
              {activeMonth === module.id && (
                <div className="relative">
                  {/* Module Header Card */}
                  <div className={`relative bg-gradient-to-r ${module.color} p-1 rounded-2xl mb-8`}>
                    <div className="bg-gray-950 rounded-xl p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <div className="text-4xl sm:text-5xl mb-2">{getModuleIcon(module.icon)}</div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            {module.title}
                          </h3>
                          <p className="text-gray-400">{module.weeks}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {module.projects.map((project, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-lime-400/10 border border-lime-400/30 rounded-lg text-lime-400 text-sm font-medium"
                            >
                              🚀 {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {module.topics.map((topic, topicIdx) => (
                      <div
                        key={topicIdx}
                        className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-lime-400/30 transition-all duration-300"
                      >
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-lime-400 rounded-full" />
                          {topic.category}
                        </h4>
                        <ul className="space-y-2">
                          {topic.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2 text-gray-400 text-sm"
                            >
                              <span className="text-lime-400 mt-1">
                                {getIcon('check', 'w-4 h-4')}
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== WHAT STUDENTS GET SECTION ==================== */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
              🎓 Program Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              What You'll Get
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Everything you need to kickstart your AI career
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="group relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 border border-gray-800 hover:border-lime-400/50 rounded-2xl p-6 sm:p-8 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(benefit.icon, 'w-7 h-7 sm:w-8 sm:h-8')}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
              ❓ Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-lime-400/30"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 transition-transform duration-300 ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  >
                    {getIcon('arrowDown', 'w-5 h-5')}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === faq.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-400 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Questions CTA */}
          <div className="text-center mt-10">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <button className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 text-lime-400 px-6 py-3 rounded-xl font-semibold hover:bg-lime-400/20 transition-all duration-300">
              Contact Our Team
              {getIcon('arrow', 'w-5 h-5')}
            </button>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-gradient-to-r from-lime-400/10 to-green-400/10 border border-lime-400/30 rounded-3xl p-8 sm:p-12 md:p-16 text-center">
            {/* Badge */}
            <span className="inline-block bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-bold mb-6">
              🔥 Limited Time Offer
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Start Your AI Journey Today!
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ students who have transformed their careers with our AI program.
              Limited seats available for the upcoming batch.
            </p>

            {/* Price & CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="text-center">
                <span className="text-gray-500 line-through text-lg">₹79,999</span>
                <div className="text-4xl sm:text-5xl font-bold text-lime-400">₹49,999</div>
              </div>
              <button className="group bg-lime-400 text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-lime-300 transition-all duration-300 shadow-lg shadow-lime-400/30 hover:shadow-lime-400/50 hover:scale-105">
                <span className="flex items-center gap-2">
                  Enroll Now
                  {getIcon('rocket', 'w-5 h-5 group-hover:translate-x-1 transition-transform')}
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-lime-400">{getIcon('check', 'w-5 h-5')}</span>
                No-Risk Money Back Guarantee
              </span>
              <span className="flex items-center gap-2">
                <span className="text-lime-400">{getIcon('check', 'w-5 h-5')}</span>
                Flexible EMI Options
              </span>
              <span className="flex items-center gap-2">
                <span className="text-lime-400">{getIcon('check', 'w-5 h-5')}</span>
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROMO BANNER ==================== */}
      <section className="relative py-8 sm:py-10 px-4 sm:px-6 z-10 bg-gradient-to-r from-lime-400 to-green-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="text-black">
              <span className="text-2xl sm:text-3xl font-bold">HackPro Academy</span>
              <span className="mx-2">–</span>
              <span className="text-lg sm:text-xl">6 Months AI Program</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-black/80 text-sm font-medium">
              <span className="px-3 py-1 bg-black/10 rounded-full">Python</span>
              <span className="px-3 py-1 bg-black/10 rounded-full">Machine Learning</span>
              <span className="px-3 py-1 bg-black/10 rounded-full">Deep Learning</span>
              <span className="px-3 py-1 bg-black/10 rounded-full">Gen-AI</span>
              <span className="px-3 py-1 bg-black/10 rounded-full">NLP</span>
              <span className="px-3 py-1 bg-black/10 rounded-full">Computer Vision</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;     