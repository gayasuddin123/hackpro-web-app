// src/data/coursesData.js

export const coursesData = [
  {
    id: "ai-6-months",
    slug: "6-months-artificial-intelligence-program",
    isPopular: true,
    badge: "🔥 Most Popular Program",
    
    // Basic Info
    title: "6 Months Artificial Intelligence Program",
    shortTitle: "AI Program",
    subtitle: "A job-oriented, project-based AI program designed for beginners to advanced learners focusing on real-world applications, ML, DL, Python, and Gen-AI.",
    description: "Master AI from scratch with hands-on projects, industry mentorship, and guaranteed placement support.",
    
    // Course Meta
    duration: "6 Months (24 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    language: "Hindi + English",
    
    // Pricing
    price: 49999,
    originalPrice: 79999,
    discount: "37% OFF",
    emiAvailable: true,
    
    // Thumbnail/Images
    thumbnail: "/images/courses/ai-program.jpg",
    heroImage: "/images/courses/ai-hero.jpg",
    
    // Stats
    stats: {
      studentsEnrolled: 500,
      rating: 4.9,
      reviews: 120,
      projectsCount: 15,
    },
    
    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "6 Months", subtitle: "Duration" },
      { id: 2, icon: "projects", title: "15+", subtitle: "Live Projects" },
      { id: 3, icon: "certificate", title: "Certified", subtitle: "Program" },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentorship" },
      { id: 5, icon: "placement", title: "100%", subtitle: "Placement Support" },
      { id: 6, icon: "internship", title: "Internship", subtitle: "Included" },
    ],
    
    // Technologies
    technologies: [
      "Python", "TensorFlow", "Keras", "PyTorch", "Pandas", "NumPy",
      "Scikit-learn", "OpenCV", "YOLO", "LangChain", "Streamlit",
      "Flask", "FastAPI", "Git", "HuggingFace", "GPT", "Transformers"
    ],
    
    // Student Benefits
    benefits: [
      { id: 1, title: "HackPro AI Certification", description: "Industry-recognized 6-month certificate", icon: "certificate" },
      { id: 2, title: "Live Projects + Internship", description: "Hands-on experience with real projects", icon: "projects" },
      { id: 3, title: "Placement Support", description: "Complete job assistance and guidance", icon: "placement" },
      { id: 4, title: "1:1 Mentor Support", description: "Personal mentorship throughout", icon: "mentor" },
      { id: 5, title: "Lifetime Access", description: "Notes + Code Repository forever", icon: "lifetime" },
      { id: 6, title: "Interview Preparation", description: "Mock interviews & resume building", icon: "interview" },
    ],
    
    // Modules/Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Python, Math & Foundations",
        weeks: "Weeks 1–4",
        color: "from-blue-500 to-cyan-500",
        icon: "python",
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
      },
      {
        id: 2,
        month: "Month 2",
        title: "Machine Learning",
        weeks: "Weeks 5–8",
        color: "from-purple-500 to-pink-500",
        icon: "ml",
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
      },
      {
        id: 3,
        month: "Month 3",
        title: "Deep Learning",
        weeks: "Weeks 9–12",
        color: "from-orange-500 to-red-500",
        icon: "dl",
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
      },
      {
        id: 4,
        month: "Month 4",
        title: "NLP & Generative AI",
        weeks: "Weeks 13–16",
        color: "from-green-500 to-emerald-500",
        icon: "nlp",
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
      },
      {
        id: 5,
        month: "Month 5",
        title: "Computer Vision + Deployment",
        weeks: "Weeks 17–20",
        color: "from-cyan-500 to-blue-500",
        icon: "cv",
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
      },
      {
        id: 6,
        month: "Month 6",
        title: "Real-World Projects + Internship",
        weeks: "Weeks 21–24",
        color: "from-lime-500 to-green-500",
        icon: "capstone",
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
      },
    ],
    
    // FAQs
    faqs: [
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
    ],
    
    // Card Features (for listing page)
    cardFeatures: [
      "Python to Advanced AI",
      "15+ Live Projects",
      "Placement Support",
      "Industry Certification",
    ],
    
    // Theme Colors
    theme: {
      primary: "lime",
      gradient: "from-lime-400 to-green-500",
    },
  },
  
  // ==================== COURSE 2 ====================
  {
    id: "web-dev-3-months",
    slug: "3-months-full-stack-web-development",
    isPopular: false,
    badge: "🚀 Career Booster",
    
    title: "3 Months Full Stack Web Development",
    shortTitle: "Web Development",
    subtitle: "Learn modern web development from scratch. Master React, Node.js, MongoDB, and build production-ready applications.",
    description: "Become a job-ready Full Stack Developer with hands-on projects and industry mentorship.",
    
    duration: "3 Months (12 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",
    
    price: 29999,
    originalPrice: 49999,
    discount: "40% OFF",
    emiAvailable: true,
    
    thumbnail: "/images/courses/web-dev.jpg",
    heroImage: "/images/courses/web-dev-hero.jpg",
    
    stats: {
      studentsEnrolled: 300,
      rating: 4.8,
      reviews: 85,
      projectsCount: 10,
    },
    
    highlights: [
      { id: 1, icon: "clock", title: "3 Months", subtitle: "Duration" },
      { id: 2, icon: "projects", title: "10+", subtitle: "Live Projects" },
      { id: 3, icon: "certificate", title: "Certified", subtitle: "Program" },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentorship" },
      { id: 5, icon: "placement", title: "100%", subtitle: "Placement Support" },
      { id: 6, icon: "internship", title: "Internship", subtitle: "Included" },
    ],
    
    technologies: [
      "HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js",
      "MongoDB", "Git", "GitHub", "Tailwind CSS", "REST APIs", "JWT",
      "Redux", "Next.js", "Vercel", "Netlify"
    ],
    
    benefits: [
      { id: 1, title: "HackPro Web Dev Certification", description: "Industry-recognized certificate", icon: "certificate" },
      { id: 2, title: "10+ Live Projects", description: "Build real-world applications", icon: "projects" },
      { id: 3, title: "Placement Support", description: "Complete job assistance", icon: "placement" },
      { id: 4, title: "1:1 Mentor Support", description: "Personal mentorship", icon: "mentor" },
      { id: 5, title: "Lifetime Access", description: "Course materials forever", icon: "lifetime" },
      { id: 6, title: "Interview Preparation", description: "Mock interviews & resume", icon: "interview" },
    ],
    
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Frontend Fundamentals",
        weeks: "Weeks 1–4",
        color: "from-blue-500 to-cyan-500",
        icon: "frontend",
        topics: [
          {
            category: "HTML & CSS",
            items: ["HTML5 Semantic Elements", "CSS3 Flexbox & Grid", "Responsive Design", "CSS Animations"],
          },
          {
            category: "JavaScript",
            items: ["ES6+ Features", "DOM Manipulation", "Async/Await", "Fetch API"],
          },
          {
            category: "Tools",
            items: ["VS Code", "Git & GitHub", "Chrome DevTools", "npm"],
          },
        ],
        projects: ["Portfolio Website", "Weather App"],
      },
      {
        id: 2,
        month: "Month 2",
        title: "React.js & Modern Frontend",
        weeks: "Weeks 5–8",
        color: "from-cyan-500 to-blue-500",
        icon: "react",
        topics: [
          {
            category: "React Fundamentals",
            items: ["Components & Props", "State & Hooks", "Context API", "React Router"],
          },
          {
            category: "Advanced React",
            items: ["Redux Toolkit", "Custom Hooks", "Performance Optimization", "Testing"],
          },
          {
            category: "Styling",
            items: ["Tailwind CSS", "Styled Components", "Material UI"],
          },
        ],
        projects: ["E-commerce Frontend", "Task Management App"],
      },
      {
        id: 3,
        month: "Month 3",
        title: "Backend & Deployment",
        weeks: "Weeks 9–12",
        color: "from-green-500 to-emerald-500",
        icon: "backend",
        topics: [
          {
            category: "Node.js & Express",
            items: ["REST API Design", "Authentication (JWT)", "File Uploads", "Error Handling"],
          },
          {
            category: "Database",
            items: ["MongoDB", "Mongoose ODM", "Data Modeling", "Aggregation"],
          },
          {
            category: "Deployment",
            items: ["Vercel", "Netlify", "Railway", "CI/CD Basics"],
          },
        ],
        projects: ["Full Stack E-commerce", "Blog Platform"],
      },
    ],
    
    faqs: [
      {
        id: 1,
        question: "Who is this program for?",
        answer: "This program is for anyone who wants to become a Full Stack Web Developer. No prior experience required.",
      },
      {
        id: 2,
        question: "Do I need programming experience?",
        answer: "No, we start from the basics and gradually move to advanced concepts.",
      },
      {
        id: 3,
        question: "What projects will I build?",
        answer: "You'll build 10+ projects including portfolio website, e-commerce platform, blog, and more.",
      },
      {
        id: 4,
        question: "Is placement support provided?",
        answer: "Yes, we provide 100% placement support with resume building, mock interviews, and job referrals.",
      },
    ],
    
    cardFeatures: [
      "HTML to Full Stack",
      "10+ Live Projects",
      "React & Node.js",
      "Industry Certification",
    ],
    
    theme: {
      primary: "cyan",
      gradient: "from-cyan-400 to-blue-500",
    },
  },
  
  // ==================== COURSE 3 ====================
  {
    id: "python-2-months",
    slug: "2-months-python-programming",
    isPopular: false,
    badge: "🐍 Beginner Friendly",
    
    title: "2 Months Python Programming Bootcamp",
    shortTitle: "Python Bootcamp",
    subtitle: "Master Python programming from zero to hero. Learn data structures, OOP, file handling, and build real projects.",
    description: "Perfect for beginners who want to learn programming and prepare for AI/ML or Web Development.",
    
    duration: "2 Months (8 Weeks)",
    mode: "Online / Offline",
    level: "Beginner",
    language: "Hindi + English",
    
    price: 14999,
    originalPrice: 24999,
    discount: "40% OFF",
    emiAvailable: true,
    
    thumbnail: "/images/courses/python.jpg",
    heroImage: "/images/courses/python-hero.jpg",
    
    stats: {
      studentsEnrolled: 800,
      rating: 4.9,
      reviews: 200,
      projectsCount: 8,
    },
    
    highlights: [
      { id: 1, icon: "clock", title: "2 Months", subtitle: "Duration" },
      { id: 2, icon: "projects", title: "8+", subtitle: "Projects" },
      { id: 3, icon: "certificate", title: "Certified", subtitle: "Program" },
      { id: 4, icon: "mentor", title: "Doubt", subtitle: "Sessions" },
      { id: 5, icon: "placement", title: "Job", subtitle: "Ready Skills" },
      { id: 6, icon: "lifetime", title: "Lifetime", subtitle: "Access" },
    ],
    
    technologies: [
      "Python 3", "Jupyter Notebook", "VS Code", "Git", "Pandas",
      "NumPy", "Matplotlib", "File Handling", "APIs", "OOP"
    ],
    
    benefits: [
      { id: 1, title: "Python Certification", description: "Industry-recognized certificate", icon: "certificate" },
      { id: 2, title: "8+ Projects", description: "Hands-on project experience", icon: "projects" },
      { id: 3, title: "Doubt Sessions", description: "Weekly doubt clearing", icon: "mentor" },
      { id: 4, title: "Lifetime Access", description: "Course materials forever", icon: "lifetime" },
      { id: 5, title: "AI/ML Ready", description: "Foundation for AI courses", icon: "brain" },
      { id: 6, title: "Interview Prep", description: "Coding interview questions", icon: "interview" },
    ],
    
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Python Fundamentals",
        weeks: "Weeks 1–4",
        color: "from-yellow-500 to-orange-500",
        icon: "python",
        topics: [
          {
            category: "Basics",
            items: ["Variables & Data Types", "Operators", "Conditionals", "Loops"],
          },
          {
            category: "Data Structures",
            items: ["Lists", "Tuples", "Dictionaries", "Sets"],
          },
          {
            category: "Functions",
            items: ["Function Definition", "Arguments", "Lambda", "Recursion"],
          },
        ],
        projects: ["Calculator", "Number Guessing Game", "To-Do List"],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Advanced Python",
        weeks: "Weeks 5–8",
        color: "from-blue-500 to-purple-500",
        icon: "advanced",
        topics: [
          {
            category: "OOP Concepts",
            items: ["Classes & Objects", "Inheritance", "Polymorphism", "Encapsulation"],
          },
          {
            category: "File Handling",
            items: ["Read/Write Files", "CSV & JSON", "Exception Handling"],
          },
          {
            category: "Libraries",
            items: ["NumPy Basics", "Pandas Basics", "Matplotlib", "APIs"],
          },
        ],
        projects: ["Library Management", "Expense Tracker", "Weather App", "Data Analyzer"],
      },
    ],
    
    faqs: [
      {
        id: 1,
        question: "Is this course for complete beginners?",
        answer: "Yes! This course is designed for absolute beginners with no prior programming experience.",
      },
      {
        id: 2,
        question: "Can I take AI course after this?",
        answer: "Absolutely! This course provides the perfect foundation for our AI/ML program.",
      },
      {
        id: 3,
        question: "What will I be able to build?",
        answer: "You'll build 8+ projects including games, automation scripts, data analysis tools, and more.",
      },
    ],
    
    cardFeatures: [
      "Zero to Hero",
      "8+ Projects",
      "OOP & Libraries",
      "AI/ML Foundation",
    ],
    
    theme: {
      primary: "yellow",
      gradient: "from-yellow-400 to-orange-500",
    },
  },

  // ==================== COURSE 4 ====================
  {
    id: "data-science-4-months",
    slug: "4-months-data-science-analytics",
    isPopular: true,
    badge: "📊 High Demand",
    
    title: "4 Months Data Science & Analytics Program",
    shortTitle: "Data Science",
    subtitle: "Master data analysis, visualization, statistics, and machine learning. Become job-ready for Data Analyst/Scientist roles.",
    description: "Comprehensive data science program covering Python, SQL, Statistics, ML, and Business Intelligence tools.",
    
    duration: "4 Months (16 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    language: "Hindi + English",
    
    price: 39999,
    originalPrice: 59999,
    discount: "33% OFF",
    emiAvailable: true,
    
    thumbnail: "/images/courses/data-science.jpg",
    heroImage: "/images/courses/data-science-hero.jpg",
    
    stats: {
      studentsEnrolled: 350,
      rating: 4.8,
      reviews: 95,
      projectsCount: 12,
    },
    
    highlights: [
      { id: 1, icon: "clock", title: "4 Months", subtitle: "Duration" },
      { id: 2, icon: "projects", title: "12+", subtitle: "Projects" },
      { id: 3, icon: "certificate", title: "Certified", subtitle: "Program" },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentorship" },
      { id: 5, icon: "placement", title: "100%", subtitle: "Placement Support" },
      { id: 6, icon: "internship", title: "Internship", subtitle: "Included" },
    ],
    
    technologies: [
      "Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn",
      "Scikit-learn", "Tableau", "Power BI", "Excel", "Statistics",
      "Machine Learning", "Git", "Jupyter"
    ],
    
    benefits: [
      { id: 1, title: "Data Science Certification", description: "Industry-recognized certificate", icon: "certificate" },
      { id: 2, title: "12+ Projects", description: "Real-world data projects", icon: "projects" },
      { id: 3, title: "Placement Support", description: "Job assistance & referrals", icon: "placement" },
      { id: 4, title: "1:1 Mentorship", description: "Personal guidance", icon: "mentor" },
      { id: 5, title: "Portfolio Building", description: "Showcase-ready projects", icon: "lifetime" },
      { id: 6, title: "Interview Prep", description: "Technical + HR rounds", icon: "interview" },
    ],
    
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Python & Statistics",
        weeks: "Weeks 1–4",
        color: "from-blue-500 to-indigo-500",
        icon: "python",
        topics: [
          {
            category: "Python for Data Science",
            items: ["Python Basics", "NumPy", "Pandas", "Data Manipulation"],
          },
          {
            category: "Statistics",
            items: ["Descriptive Stats", "Probability", "Distributions", "Hypothesis Testing"],
          },
        ],
        projects: ["Data Cleaning Pipeline", "Statistical Analysis Report"],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Data Visualization & SQL",
        weeks: "Weeks 5–8",
        color: "from-purple-500 to-pink-500",
        icon: "visualization",
        topics: [
          {
            category: "Data Visualization",
            items: ["Matplotlib", "Seaborn", "Plotly", "Dashboard Design"],
          },
          {
            category: "SQL & Databases",
            items: ["SQL Queries", "Joins", "Aggregations", "Window Functions"],
          },
        ],
        projects: ["Sales Dashboard", "Customer Analysis"],
      },
      {
        id: 3,
        month: "Month 3",
        title: "Machine Learning",
        weeks: "Weeks 9–12",
        color: "from-green-500 to-teal-500",
        icon: "ml",
        topics: [
          {
            category: "ML Algorithms",
            items: ["Regression", "Classification", "Clustering", "Model Evaluation"],
          },
          {
            category: "Feature Engineering",
            items: ["Feature Selection", "Encoding", "Scaling", "Handling Imbalance"],
          },
        ],
        projects: ["Churn Prediction", "Sales Forecasting"],
      },
      {
        id: 4,
        month: "Month 4",
        title: "BI Tools & Capstone",
        weeks: "Weeks 13–16",
        color: "from-orange-500 to-red-500",
        icon: "capstone",
        topics: [
          {
            category: "Business Intelligence",
            items: ["Tableau", "Power BI", "Excel Advanced", "Storytelling"],
          },
          {
            category: "Capstone Project",
            items: ["End-to-End Project", "Presentation", "Documentation"],
          },
        ],
        projects: ["BI Dashboard", "Complete Data Science Project"],
      },
    ],
    
    faqs: [
      {
        id: 1,
        question: "What's the difference between Data Science and AI?",
        answer: "Data Science focuses on analyzing data and deriving insights, while AI focuses on building intelligent systems. Our AI course covers more advanced topics like Deep Learning and Gen-AI.",
      },
      {
        id: 2,
        question: "Do I need math background?",
        answer: "Basic math knowledge is helpful, but we cover all necessary statistics and math concepts from scratch.",
      },
      {
        id: 3,
        question: "What job roles can I apply for?",
        answer: "Data Analyst, Business Analyst, Data Scientist, BI Analyst, and more.",
      },
    ],
    
    cardFeatures: [
      "Python + SQL + ML",
      "12+ Projects",
      "Tableau & Power BI",
      "Placement Support",
    ],
    
    theme: {
      primary: "purple",
      gradient: "from-purple-400 to-pink-500",
    },
  },
];

// Helper function to get course by slug
export const getCourseBySlug = (slug) => {
  return coursesData.find(course => course.slug === slug);
};

// Helper function to get course by ID
export const getCourseById = (id) => {
  return coursesData.find(course => course.id === id);
};

// Get featured/popular courses
export const getPopularCourses = () => {
  return coursesData.filter(course => course.isPopular);
};

// Get all courses
export const getAllCourses = () => {
  return coursesData;
};