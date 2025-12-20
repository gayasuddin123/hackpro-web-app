// src/data/coursesData.js

export const coursesData = [
  {
    id: "cisco-firewall",
    slug: "cisco-firewall-training-course",
    isPopular: true,
    badge: "🔥 Cisco Firewall Specialist",

    // Basic Info
    title: "Cisco Firewall Configuration & Security Training",
    shortTitle: "Cisco Firewall",
    subtitle:
      "Learn enterprise-grade firewall security using Cisco ASA and Firepower with real-world configuration, policies, NAT, VPN, and threat protection.",
    description:
      "This course is designed to make you job-ready in Cisco Firewall technologies. You will learn Cisco ASA and Firepower fundamentals, firewall rules, ACLs, NAT, site-to-site VPN, remote access VPN, intrusion prevention basics, logging, and troubleshooting through hands-on labs.",

    // Course Meta
    duration: "1 Month (4 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 9999,
    originalPrice: 14999,
    discount: "33% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/cisco-firewall.jpg",
    heroImage: "/images/courses/cisco-firewall-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 180,
      rating: 4.8,
      reviews: 35,
      projectsCount: 3,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "4 Weeks", subtitle: "Focused Training" },
      { id: 2, icon: "projects", title: "3+", subtitle: "Hands-on Labs" },
      {
        id: 3,
        icon: "shield",
        title: "Enterprise",
        subtitle: "Firewall Skills",
      },
      { id: 4, icon: "mentor", title: "Live", subtitle: "Mentor Support" },
      {
        id: 5,
        icon: "certificate",
        title: "Cisco",
        subtitle: "Firewall Certificate",
      },
      { id: 6, icon: "career", title: "SOC / Network", subtitle: "Job Ready" },
    ],

    // Technologies / Tools
    technologies: [
      "Cisco ASA",
      "Cisco Firepower",
      "ACL",
      "NAT",
      "Site-to-Site VPN",
      "Remote Access VPN",
      "Firewall Zones",
      "Stateful Inspection",
      "IPS Basics",
      "Syslog",
      "Packet Tracer",
      "GNS3",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Cisco Firewall Certification",
        description:
          "Industry-focused certificate for Cisco Firewall training.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Hands-on Firewall Labs",
        description:
          "Configure real firewall rules, NAT, VPNs, and security policies.",
        icon: "projects",
      },
      {
        id: 3,
        title: "SOC & Network Security Ready",
        description:
          "Prepares you for SOC Analyst, Network Security Engineer roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "Live Mentor Support",
        description: "Real-time doubt solving and configuration guidance.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Recorded Sessions",
        description: "Lifetime access to recorded classes and notes.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description:
          "Cisco firewall interview questions and scenario-based discussions.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Cisco Firewall Fundamentals & Configuration",
        weeks: "Weeks 1–4",
        color: "from-orange-500 to-red-500",
        icon: "firewall",

        topics: [
          {
            category: "Firewall Fundamentals",
            items: [
              "Introduction to Firewalls",
              "Types of Firewalls (Stateful, Stateless, NGFW)",
              "Cisco Firewall Architecture",
              "Firewall Zones & Security Levels",
            ],
          },
          {
            category: "Cisco ASA & Firepower Configuration",
            items: [
              "Cisco ASA Basic Configuration",
              "Access Control Lists (ACL)",
              "Network Address Translation (NAT)",
              "Object Groups & Policies",
            ],
          },
          {
            category: "VPN, Logging & Troubleshooting",
            items: [
              "Site-to-Site VPN Configuration",
              "Remote Access VPN Concepts",
              "Logging, Monitoring & Syslog",
              "Basic Firewall Troubleshooting",
            ],
          },
        ],

        projects: [
          "Configure Cisco Firewall with ACL & NAT",
          "Site-to-Site VPN Design & Configuration",
          "Firewall Logging & Traffic Analysis Report",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the Cisco Firewall course?",
        answer:
          "This course is ideal for networking students, SOC aspirants, system admins, and cyber security beginners who want to learn enterprise firewall security.",
      },
      {
        id: 2,
        question: "Do I need prior Cisco knowledge?",
        answer:
          "Basic networking knowledge is helpful but not mandatory. We start from firewall fundamentals and guide step-by-step.",
      },
      {
        id: 3,
        question: "Will I get hands-on experience?",
        answer:
          "Yes, the course includes practical labs using Cisco ASA and simulated firewall environments.",
      },
      {
        id: 4,
        question: "Is this course useful for SOC roles?",
        answer:
          "Yes, firewall monitoring and rule analysis are core SOC skills, and this course supports SOC Analyst preparation.",
      },
      {
        id: 5,
        question: "Will I receive a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s Cisco Firewall Certification after course completion.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, flexible EMI options are available for this course.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "Cisco ASA & Firepower Training",
      "Real Firewall Configuration Labs",
      "SOC & Network Security Focused",
      "Certificate Included",
    ],

    // Theme Colors
    theme: {
      primary: "orange",
      gradient: "from-orange-500 to-red-500",
    },
  },
  {
    id: "soc-security-operations-center",
    slug: "soc-security-operations-center-training",
    isPopular: true,
    badge: "🛡️ SOC Analyst Program",

    // Basic Info
    title: "SOC (Security Operations Center) Analyst Program",
    shortTitle: "SOC Analyst",
    subtitle:
      "Become job-ready SOC Analyst by mastering monitoring, log analysis, SIEM, incident response, threat detection, and real-world SOC workflows.",
    description:
      "This program is designed to train you as a Security Operations Center (SOC) Analyst. You will learn SOC fundamentals, SIEM tools, log analysis, alert monitoring, incident response lifecycle, threat intelligence, and hands-on SOC case studies used in real enterprises.",

    // Course Meta
    duration: "2 Months (8 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 15999,
    originalPrice: 24999,
    discount: "36% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/soc-analyst.jpg",
    heroImage: "/images/courses/soc-analyst-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 260,
      rating: 4.9,
      reviews: 55,
      projectsCount: 6,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "8 Weeks", subtitle: "SOC Training" },
      { id: 2, icon: "projects", title: "6+", subtitle: "SOC Labs & Cases" },
      {
        id: 3,
        icon: "shield",
        title: "Blue Team",
        subtitle: "Security Skills",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentor Support" },
      {
        id: 5,
        icon: "placement",
        title: "Career",
        subtitle: "SOC Analyst Roles",
      },
      {
        id: 6,
        icon: "certificate",
        title: "SOC",
        subtitle: "Analyst Certificate",
      },
    ],

    // Technologies / Tools
    technologies: [
      "SIEM Tools",
      "Splunk",
      "ELK Stack",
      "Log Analysis",
      "Threat Intelligence",
      "Incident Response",
      "Firewalls",
      "IDS/IPS",
      "EDR Concepts",
      "Windows Logs",
      "Linux Logs",
      "MITRE ATT&CK",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro SOC Analyst Certification",
        description:
          "Industry-oriented SOC Analyst certification with practical exposure.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Real SOC Labs",
        description:
          "Hands-on log analysis, alert triage, and incident investigation.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Job-Oriented Training",
        description:
          "Designed specifically for SOC Analyst and Blue Team roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description:
          "Live mentor guidance for SOC workflows and case handling.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description: "Lifetime access to recordings, notes, and SOC playbooks.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description: "SOC interview questions, scenarios, and mock interviews.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "SOC Fundamentals & Monitoring",
        weeks: "Weeks 1–4",
        color: "from-blue-500 to-indigo-500",
        icon: "soc",

        topics: [
          {
            category: "SOC Fundamentals",
            items: [
              "Introduction to SOC",
              "SOC Roles & Responsibilities",
              "SOC Levels (L1, L2, L3)",
              "SOC Architecture & Workflow",
            ],
          },
          {
            category: "Log Monitoring & Analysis",
            items: [
              "Windows & Linux Log Basics",
              "Network Logs & Firewall Logs",
              "Event Correlation Concepts",
              "Alert Triage & Prioritization",
            ],
          },
          {
            category: "SIEM Basics",
            items: [
              "Introduction to SIEM",
              "Using Splunk / ELK (Overview)",
              "Dashboards & Alerts",
              "Basic SOC Use Cases",
            ],
          },
        ],

        projects: [
          "SOC Alert Monitoring & Triage Lab",
          "Log Analysis & Incident Identification Report",
          "SIEM Dashboard & Alert Configuration (Lab)",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Incident Response, Threat Intel & SOC Operations",
        weeks: "Weeks 5–8",
        color: "from-indigo-500 to-purple-500",
        icon: "incident",

        topics: [
          {
            category: "Incident Response",
            items: [
              "Incident Response Lifecycle",
              "Detection & Analysis",
              "Containment, Eradication & Recovery",
              "Incident Documentation & Reporting",
            ],
          },
          {
            category: "Threat Intelligence",
            items: [
              "Introduction to Threat Intelligence",
              "Indicators of Compromise (IOCs)",
              "MITRE ATT&CK Framework",
              "Threat Hunting Basics",
            ],
          },
          {
            category: "SOC Career Preparation",
            items: [
              "SOC Resume & LinkedIn Optimization",
              "SOC Case Study Discussions",
              "Common SOC Interview Questions",
            ],
          },
        ],

        projects: [
          "Incident Response Case Study Report",
          "Threat Intelligence Analysis Project",
          "SOC Capstone: End-to-End Incident Handling",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the SOC Analyst course?",
        answer:
          "This course is ideal for beginners, cyber security students, networking professionals, and anyone aiming for SOC Analyst or Blue Team roles.",
      },
      {
        id: 2,
        question: "Do I need prior cyber security experience?",
        answer:
          "Basic networking or security knowledge is helpful but not mandatory. We start from SOC fundamentals.",
      },
      {
        id: 3,
        question: "Is this course hands-on?",
        answer:
          "Yes, the course includes real-world SOC labs, SIEM exercises, and incident response case studies.",
      },
      {
        id: 4,
        question: "Which tools will I learn?",
        answer:
          "You will learn SIEM tools like Splunk/ELK, log analysis, alert monitoring, and threat intelligence basics.",
      },
      {
        id: 5,
        question: "Will I get a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s SOC Analyst Certification after completion.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment payment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "SOC Analyst Job-Oriented Program",
      "Real SOC Labs & Case Studies",
      "SIEM & Incident Response Focused",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "indigo",
      gradient: "from-blue-500 to-indigo-500",
    },
  },
  {
    id: "flutter-app-development",
    slug: "flutter-app-development-course",
    isPopular: true,
    badge: "📱 Flutter App Development",

    // Basic Info
    title: "Flutter Mobile App Development Program",
    shortTitle: "Flutter",
    subtitle:
      "Learn to build high-performance cross-platform mobile apps using Flutter and Dart for Android and iOS with real-world projects.",
    description:
      "This course is designed to make you a professional Flutter developer. You will learn Dart programming, Flutter widgets, UI design, state management, API integration, Firebase, and deployment of real-world Android and iOS applications.",

    // Course Meta
    duration: "2 Months (8 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 14999,
    originalPrice: 24999,
    discount: "40% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/flutter.jpg",
    heroImage: "/images/courses/flutter-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 300,
      rating: 4.9,
      reviews: 60,
      projectsCount: 6,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "8 Weeks", subtitle: "App Development" },
      { id: 2, icon: "projects", title: "6+", subtitle: "Real Apps" },
      {
        id: 3,
        icon: "mobile",
        title: "Android + iOS",
        subtitle: "Single Codebase",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentor Support" },
      {
        id: 5,
        icon: "placement",
        title: "Career",
        subtitle: "Developer Roles",
      },
      {
        id: 6,
        icon: "certificate",
        title: "Flutter",
        subtitle: "Developer Certificate",
      },
    ],

    // Technologies / Tools
    technologies: [
      "Flutter",
      "Dart",
      "Android Studio",
      "VS Code",
      "Flutter Widgets",
      "State Management",
      "REST APIs",
      "Firebase",
      "SQLite",
      "Git & GitHub",
      "Google Play Console",
      "App Store Basics",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Flutter Developer Certification",
        description:
          "Industry-recognized certificate for Flutter app development.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Real App Projects",
        description: "Build real-world mobile applications from scratch.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Job-Oriented Skills",
        description:
          "Prepare for Flutter Developer and Mobile App Developer roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description:
          "Personal mentor guidance for app development and debugging.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description:
          "Lifetime access to recorded sessions, notes, and updates.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description:
          "Flutter interview questions, coding rounds, and mock interviews.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Dart & Flutter Fundamentals",
        weeks: "Weeks 1–4",
        color: "from-blue-400 to-cyan-500",
        icon: "flutter",

        topics: [
          {
            category: "Dart Programming",
            items: [
              "Introduction to Dart",
              "Variables, Data Types & Functions",
              "OOP Concepts in Dart",
              "Asynchronous Programming (Future, Async/Await)",
            ],
          },
          {
            category: "Flutter Basics",
            items: [
              "Flutter Architecture",
              "Widgets & Widget Tree",
              "Layouts, Navigation & Routing",
              "Material & Cupertino Widgets",
            ],
          },
          {
            category: "UI Design & State",
            items: [
              "Stateful vs Stateless Widgets",
              "Forms & Validation",
              "Responsive UI Design",
              "Basic State Management",
            ],
          },
        ],

        projects: [
          "Flutter UI Clone App",
          "Form Validation & Navigation App",
          "Mini Dart Programming Project",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Advanced Flutter, Backend Integration & Deployment",
        weeks: "Weeks 5–8",
        color: "from-cyan-500 to-indigo-500",
        icon: "mobile",

        topics: [
          {
            category: "API & Database Integration",
            items: [
              "REST API Integration",
              "JSON Parsing",
              "Local Storage using SQLite",
              "HTTP & Dio Packages",
            ],
          },
          {
            category: "Firebase & Advanced Features",
            items: [
              "Firebase Authentication",
              "Cloud Firestore",
              "Push Notifications (FCM)",
              "App Security Basics",
            ],
          },
          {
            category: "Testing & Deployment",
            items: [
              "Debugging & Performance Optimization",
              "App Build & Release Process",
              "Publishing on Play Store (Overview)",
              "Flutter Career & Freelancing Guidance",
            ],
          },
        ],

        projects: [
          "API-Based Flutter Application",
          "Firebase Auth & Database App",
          "Capstone: Complete Flutter Mobile App",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the Flutter course?",
        answer:
          "Beginners, students, and professionals who want to build Android and iOS apps using a single codebase.",
      },
      {
        id: 2,
        question: "Do I need prior programming knowledge?",
        answer:
          "No. We start from Dart basics and gradually move to advanced Flutter concepts.",
      },
      {
        id: 3,
        question: "Is this course project-based?",
        answer:
          "Yes, the course focuses heavily on hands-on projects and real app development.",
      },
      {
        id: 4,
        question: "Will I learn Firebase?",
        answer:
          "Yes, Firebase authentication, database, and notifications are included.",
      },
      {
        id: 5,
        question: "Will I get a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s Flutter Developer Certification.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment payment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "Cross-Platform App Development",
      "Real-World Flutter Projects",
      "Firebase & API Integration",
      "Certificate Included",
    ],

    // Theme Colors
    theme: {
      primary: "cyan",
      gradient: "from-blue-400 to-cyan-500",
    },
  },
  {
    id: "iot-penetration-testing",
    slug: "iot-penetration-testing-course",
    isPopular: true,
    badge: "🔐 IoT Pentesting Specialist",

    // Basic Info
    title: "IoT Penetration Testing & Security Program",
    shortTitle: "IoT Pentesting",
    subtitle:
      "Learn to identify and exploit security vulnerabilities in IoT devices, firmware, networks, and protocols using real-world penetration testing techniques.",
    description:
      "This course focuses on offensive security for Internet of Things (IoT). You will learn IoT architecture, device hacking, firmware analysis, hardware attacks, wireless attacks, protocol exploitation, and real-world IoT penetration testing methodologies used by security professionals.",

    // Course Meta
    duration: "2 Months (8 Weeks)",
    mode: "Online / Offline",
    level: "Intermediate to Advanced",
    language: "Hindi + English",

    // Pricing
    price: 17999,
    originalPrice: 27999,
    discount: "36% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/iot-pentesting.jpg",
    heroImage: "/images/courses/iot-pentesting-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 140,
      rating: 4.8,
      reviews: 28,
      projectsCount: 6,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "8 Weeks", subtitle: "Advanced Training" },
      { id: 2, icon: "projects", title: "6+", subtitle: "IoT Labs & Attacks" },
      {
        id: 3,
        icon: "chip",
        title: "Hardware + Software",
        subtitle: "Pentesting",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Expert Mentorship" },
      {
        id: 5,
        icon: "placement",
        title: "Career",
        subtitle: "IoT Security Roles",
      },
      {
        id: 6,
        icon: "certificate",
        title: "IoT",
        subtitle: "Pentest Certificate",
      },
    ],

    // Technologies / Tools
    technologies: [
      "IoT Architecture",
      "Firmware Analysis",
      "UART / JTAG",
      "SPI / I2C",
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Binwalk",
      "Ghidra",
      "Metasploit",
      "MQTT",
      "Zigbee",
      "Bluetooth Low Energy (BLE)",
      "RF Attacks",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro IoT Pentesting Certification",
        description:
          "Industry-focused certification for IoT penetration testing.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Real IoT Attack Labs",
        description:
          "Hands-on exploitation of vulnerable IoT devices and firmware.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Advanced Security Skills",
        description: "Prepare for IoT Security Engineer and Pentester roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description:
          "Expert guidance on hardware, firmware, and protocol attacks.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description:
          "Lifetime access to recorded sessions, tools, and attack notes.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description:
          "IoT security interview questions and real attack scenarios.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "IoT Fundamentals & Device Security",
        weeks: "Weeks 1–4",
        color: "from-emerald-500 to-teal-500",
        icon: "iot",

        topics: [
          {
            category: "IoT Fundamentals",
            items: [
              "Introduction to IoT & Threat Landscape",
              "IoT Architecture & Components",
              "Common IoT Vulnerabilities",
              "IoT Attack Surface Mapping",
            ],
          },
          {
            category: "Firmware & Hardware Attacks",
            items: [
              "Firmware Extraction Techniques",
              "Firmware Analysis using Binwalk & Ghidra",
              "UART, JTAG & Debug Interfaces",
              "Hardware Reconnaissance Basics",
            ],
          },
          {
            category: "Network & Wireless Attacks",
            items: [
              "IoT Network Scanning & Enumeration",
              "Wireless Protocol Attacks (BLE, Zigbee)",
              "Traffic Capture & Analysis",
              "Default Credentials & Misconfigurations",
            ],
          },
        ],

        projects: [
          "IoT Device Reconnaissance & Vulnerability Report",
          "Firmware Extraction & Analysis Lab",
          "Wireless IoT Attack Simulation",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Advanced IoT Pentesting & Capstone",
        weeks: "Weeks 5–8",
        color: "from-teal-500 to-cyan-500",
        icon: "pentest",

        topics: [
          {
            category: "Protocol & Application Attacks",
            items: [
              "MQTT Security & Exploitation",
              "REST API Attacks in IoT",
              "Authentication & Authorization Flaws",
              "Cloud-IoT Integration Risks",
            ],
          },
          {
            category: "Advanced Exploitation",
            items: [
              "Reverse Engineering IoT Firmware",
              "Backdoor & Hardcoded Credential Discovery",
              "Privilege Escalation in Embedded Systems",
              "Persistence Techniques",
            ],
          },
          {
            category: "Reporting & Career Preparation",
            items: [
              "IoT Pentest Reporting Standards",
              "Risk Assessment & Mitigation",
              "IoT Security Interview Preparation",
            ],
          },
        ],

        projects: [
          "IoT Protocol Exploitation Case Study",
          "Advanced Firmware Reverse Engineering Project",
          "Capstone: End-to-End IoT Penetration Testing Report",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the IoT Penetration Testing course?",
        answer:
          "This course is ideal for cyber security professionals, ethical hackers, and pentesters who want to specialize in IoT security.",
      },
      {
        id: 2,
        question: "Do I need hardware knowledge?",
        answer:
          "Basic networking and security knowledge is required. Hardware concepts are taught from fundamentals.",
      },
      {
        id: 3,
        question: "Is this course hands-on?",
        answer:
          "Yes, it includes real IoT devices, firmware analysis, and wireless attack labs.",
      },
      {
        id: 4,
        question: "Which tools will I learn?",
        answer:
          "You will work with tools like Binwalk, Ghidra, Wireshark, Metasploit, and protocol analyzers.",
      },
      {
        id: 5,
        question: "Will I get a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s IoT Penetration Testing Certification.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment payment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "Specialized IoT Pentesting Training",
      "Hardware, Firmware & Wireless Attacks",
      "Advanced Offensive Security Skills",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "teal",
      gradient: "from-emerald-500 to-teal-500",
    },
  },
  {
    id: "ai-with-cybersecurity",
    slug: "ai-with-cybersecurity-course",
    isPopular: true,
    badge: "🤖 AI Powered Cybersecurity",

    // Basic Info
    title: "AI with Cybersecurity Program",
    shortTitle: "AI + Cybersecurity",
    subtitle:
      "Learn how Artificial Intelligence and Machine Learning are applied in modern cybersecurity for threat detection, SOC automation, and attack prevention.",
    description:
      "This program bridges the gap between Artificial Intelligence and Cybersecurity. You will learn how AI and ML are used in threat detection, malware analysis, anomaly detection, SIEM automation, phishing detection, and predictive security with hands-on projects and real-world case studies.",

    // Course Meta
    duration: "3 Months (12 Weeks)",
    mode: "Online / Offline",
    level: "Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 24999,
    originalPrice: 39999,
    discount: "38% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/ai-with-cybersecurity.jpg",
    heroImage: "/images/courses/ai-with-cybersecurity-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 190,
      rating: 4.9,
      reviews: 42,
      projectsCount: 8,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "12 Weeks", subtitle: "AI + Security" },
      {
        id: 2,
        icon: "projects",
        title: "8+",
        subtitle: "AI Security Projects",
      },
      {
        id: 3,
        icon: "brain",
        title: "ML Models",
        subtitle: "Threat Detection",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Expert Guidance" },
      {
        id: 5,
        icon: "placement",
        title: "Career",
        subtitle: "AI Security Roles",
      },
      {
        id: 6,
        icon: "certificate",
        title: "AI",
        subtitle: "Cybersecurity Certificate",
      },
    ],

    // Technologies / Tools
    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "SIEM Tools",
      "Splunk",
      "Log Analysis",
      "Threat Intelligence",
      "MITRE ATT&CK",
      "Anomaly Detection",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro AI Cybersecurity Certification",
        description:
          "Industry-recognized certification combining AI and cybersecurity skills.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Real AI Security Projects",
        description:
          "Build AI models for threat detection, malware, and phishing analysis.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Future-Ready Skills",
        description:
          "Prepare for roles like AI Security Analyst and SOC Automation Engineer.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description:
          "Expert mentorship on AI models and cybersecurity use cases.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description:
          "Lifetime access to recordings, datasets, notebooks, and tools.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description:
          "AI + Cybersecurity interview questions and real-world scenarios.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "AI & Machine Learning Fundamentals for Security",
        weeks: "Weeks 1–4",
        color: "from-purple-500 to-indigo-500",
        icon: "ai",

        topics: [
          {
            category: "AI & ML Basics",
            items: [
              "Introduction to Artificial Intelligence",
              "Machine Learning Concepts & Types",
              "Supervised vs Unsupervised Learning",
              "Data Preprocessing for Security Data",
            ],
          },
          {
            category: "Python for Cybersecurity",
            items: [
              "Python Basics for Security",
              "Working with Logs & Datasets",
              "Data Analysis using Pandas",
              "Visualization for Security Insights",
            ],
          },
          {
            category: "Security Data Understanding",
            items: [
              "Network & System Logs",
              "Threat Data & Indicators",
              "Labeling Security Data",
              "Challenges in Security Datasets",
            ],
          },
        ],

        projects: [
          "Security Log Analysis using Python",
          "Anomaly Detection on Network Traffic",
          "ML Dataset Preparation for Cybersecurity",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "AI in Threat Detection & SOC Automation",
        weeks: "Weeks 5–8",
        color: "from-indigo-500 to-blue-500",
        icon: "soc-ai",

        topics: [
          {
            category: "AI for Threat Detection",
            items: [
              "Intrusion Detection using ML",
              "Anomaly-Based Detection Techniques",
              "Malware Classification using ML",
              "Phishing Detection Models",
            ],
          },
          {
            category: "SOC Automation",
            items: [
              "SIEM Log Correlation using AI",
              "Alert Noise Reduction",
              "Automated Incident Triage",
              "SOAR Concepts (Overview)",
            ],
          },
          {
            category: "Model Evaluation & Optimization",
            items: [
              "Accuracy, Precision, Recall",
              "Handling Imbalanced Datasets",
              "Reducing False Positives",
              "Model Optimization Techniques",
            ],
          },
        ],

        projects: [
          "AI-Based Intrusion Detection System",
          "Phishing Email Detection Model",
          "SOC Alert Prioritization System",
        ],
      },
      {
        id: 3,
        month: "Month 3",
        title: "Advanced AI Security Use Cases & Capstone",
        weeks: "Weeks 9–12",
        color: "from-blue-500 to-cyan-500",
        icon: "capstone",

        topics: [
          {
            category: "Advanced AI Security",
            items: [
              "Behavioral Analytics",
              "UEBA Concepts",
              "Predictive Security Analytics",
              "Adversarial Machine Learning Basics",
            ],
          },
          {
            category: "AI Security Integration",
            items: [
              "Integrating AI Models with SIEM",
              "Cloud & AI Security Overview",
              "Ethics & Risks of AI in Security",
              "AI Security Case Studies",
            ],
          },
          {
            category: "Career & Interview Preparation",
            items: [
              "AI Cybersecurity Resume Building",
              "Project Portfolio Review",
              "AI Security Interview Questions",
            ],
          },
        ],

        projects: [
          "UEBA Anomaly Detection Project",
          "Predictive Threat Detection System",
          "Capstone: End-to-End AI Powered Cybersecurity Solution",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the AI with Cybersecurity course?",
        answer:
          "This course is ideal for cybersecurity professionals, SOC analysts, and students who want to apply AI and ML in security.",
      },
      {
        id: 2,
        question: "Do I need AI or ML experience?",
        answer:
          "No prior AI experience is required. We start from fundamentals and gradually move to advanced use cases.",
      },
      {
        id: 3,
        question: "Is this course practical?",
        answer:
          "Yes, the course is highly practical with real datasets, labs, and AI-based security projects.",
      },
      {
        id: 4,
        question: "Which tools and languages are used?",
        answer:
          "Python, machine learning libraries, SIEM tools, and cybersecurity datasets are used throughout the course.",
      },
      {
        id: 5,
        question: "Will I get a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s AI with Cybersecurity Certification.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "AI + Cybersecurity Integrated Program",
      "Real-World AI Security Projects",
      "SOC Automation & Threat Detection",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "purple",
      gradient: "from-purple-500 to-indigo-500",
    },
  },
  {
    id: "data-analytics-with-generative-ai",
    slug: "data-analytics-with-generative-ai-course",
    isPopular: true,
    badge: "📊 Data Analyst with GenAI",

    // Basic Info
    title: "Data Analytics / Data Analyst Program with Generative AI",
    shortTitle: "Data Analytics + GenAI",
    subtitle:
      "Become a job-ready Data Analyst by mastering data analysis, visualization, SQL, Python, and Generative AI tools for modern analytics workflows.",
    description:
      "This program is designed to train you as a modern Data Analyst with Generative AI skills. You will learn Excel, SQL, Python, data visualization, statistics, business analytics, and how Generative AI tools like ChatGPT enhance data analysis, reporting, and decision-making through real-world projects.",

    // Course Meta
    duration: "3 Months (12 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 22999,
    originalPrice: 37999,
    discount: "39% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/data-analytics-generative-ai.jpg",
    heroImage: "/images/courses/data-analytics-generative-ai-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 340,
      rating: 4.9,
      reviews: 72,
      projectsCount: 8,
    },

    // Highlights
    highlights: [
      {
        id: 1,
        icon: "clock",
        title: "12 Weeks",
        subtitle: "Analytics Training",
      },
      { id: 2, icon: "projects", title: "8+", subtitle: "Real Data Projects" },
      {
        id: 3,
        icon: "ai",
        title: "Generative AI",
        subtitle: "Smart Analytics",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentor Support" },
      {
        id: 5,
        icon: "placement",
        title: "Career",
        subtitle: "Data Analyst Roles",
      },
      {
        id: 6,
        icon: "certificate",
        title: "Data",
        subtitle: "Analyst Certificate",
      },
    ],

    // Technologies / Tools
    technologies: [
      "Microsoft Excel",
      "Advanced Excel",
      "SQL",
      "MySQL / PostgreSQL",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Tableau",
      "Statistics",
      "Generative AI Tools",
      "ChatGPT",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Data Analyst Certification",
        description:
          "Industry-recognized certification for Data Analytics with Generative AI.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Real Data Analytics Projects",
        description:
          "Work on real business datasets and analytics case studies.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Job-Oriented Skills",
        description:
          "Prepare for Data Analyst, Business Analyst, and MIS roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description:
          "Personal mentorship for analytics, projects, and career guidance.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description:
          "Lifetime access to recordings, datasets, dashboards, and notes.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description:
          "Data analyst interview questions, SQL tests, and mock interviews.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Data Analytics Foundations",
        weeks: "Weeks 1–4",
        color: "from-green-500 to-emerald-500",
        icon: "analytics",

        topics: [
          {
            category: "Excel & Data Handling",
            items: [
              "Introduction to Data Analytics",
              "Excel Basics & Data Cleaning",
              "Advanced Excel Functions",
              "Pivot Tables & Dashboards",
            ],
          },
          {
            category: "Statistics for Data Analysis",
            items: [
              "Descriptive Statistics",
              "Probability & Distributions",
              "Correlation & Regression Basics",
              "Business Statistics Use Cases",
            ],
          },
          {
            category: "Data Understanding",
            items: [
              "Structured vs Unstructured Data",
              "Data Quality & Data Validation",
              "Exploratory Data Analysis (EDA)",
              "Data-Driven Decision Making",
            ],
          },
        ],

        projects: [
          "Excel Sales Analytics Dashboard",
          "Data Cleaning & Reporting Project",
          "EDA on Business Dataset",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "SQL, Python & Data Visualization",
        weeks: "Weeks 5–8",
        color: "from-emerald-500 to-cyan-500",
        icon: "data",

        topics: [
          {
            category: "SQL for Data Analytics",
            items: [
              "SQL Basics & Joins",
              "Subqueries & Window Functions",
              "Data Aggregation & Analysis",
              "Real-World SQL Case Studies",
            ],
          },
          {
            category: "Python for Data Analysis",
            items: [
              "Python Basics for Analytics",
              "Pandas & NumPy",
              "Data Visualization using Matplotlib & Seaborn",
              "Automating Data Analysis Tasks",
            ],
          },
          {
            category: "BI Tools & Dashboards",
            items: [
              "Power BI / Tableau Basics",
              "Interactive Dashboards",
              "Data Storytelling",
              "Business Insights Presentation",
            ],
          },
        ],

        projects: [
          "SQL Business Analysis Project",
          "Python Data Analysis Notebook",
          "Interactive Power BI / Tableau Dashboard",
        ],
      },
      {
        id: 3,
        month: "Month 3",
        title: "Generative AI for Data Analysts & Capstone",
        weeks: "Weeks 9–12",
        color: "from-cyan-500 to-blue-500",
        icon: "genai",

        topics: [
          {
            category: "Generative AI for Analytics",
            items: [
              "Introduction to Generative AI",
              "Using ChatGPT for Data Analysis",
              "AI-Assisted SQL & Python Coding",
              "Prompt Engineering for Analysts",
            ],
          },
          {
            category: "AI-Powered Analytics",
            items: [
              "Automated Insights Generation",
              "Narrative Reporting using AI",
              "Forecasting & Trend Analysis (Overview)",
              "Ethics & Limitations of AI in Analytics",
            ],
          },
          {
            category: "Career & Interview Preparation",
            items: [
              "Data Analyst Resume & Portfolio",
              "Business Case Study Discussions",
              "Data Analyst Interview Questions",
            ],
          },
        ],

        projects: [
          "AI-Assisted Data Analysis Project",
          "Business Insights Report using Generative AI",
          "Capstone: End-to-End Data Analytics Project",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question:
          "Who should join the Data Analytics with Generative AI course?",
        answer:
          "This course is ideal for students, freshers, and professionals who want to start or grow a career as a Data Analyst using modern AI tools.",
      },
      {
        id: 2,
        question: "Do I need prior programming knowledge?",
        answer:
          "No. We start from basics of Excel and SQL and gradually move to Python and Generative AI tools.",
      },
      {
        id: 3,
        question: "Is this course practical?",
        answer:
          "Yes, the course is highly practical with real datasets, dashboards, and AI-assisted analytics projects.",
      },
      {
        id: 4,
        question: "Which tools will I learn?",
        answer:
          "You will learn Excel, SQL, Python, Power BI/Tableau, and Generative AI tools like ChatGPT.",
      },
      {
        id: 5,
        question: "Will I get a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s Data Analyst with Generative AI Certification.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment payment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "Data Analytics + Generative AI Program",
      "Real Business Data Projects",
      "SQL, Python & BI Tools",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "emerald",
      gradient: "from-green-500 to-emerald-500",
    },
  },
  {
    id: "artificial-intelligence",
    slug: "artificial-intelligence-course",
    isPopular: true,
    badge: "🤖 Artificial Intelligence",

    // Basic Info
    title: "Artificial Intelligence (AI) Program",
    shortTitle: "AI",
    subtitle:
      "Master Artificial Intelligence concepts including machine learning, deep learning, NLP, computer vision, and real-world AI applications.",
    description:
      "This program is designed to build strong foundations and advanced skills in Artificial Intelligence. You will learn AI concepts, machine learning algorithms, deep learning, neural networks, NLP, computer vision, and deployment of AI models through hands-on projects and industry use cases.",

    // Course Meta
    duration: "4 Months (16 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    language: "Hindi + English",

    // Pricing
    price: 29999,
    originalPrice: 49999,
    discount: "40% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/artificial-intelligence.jpg",
    heroImage: "/images/courses/artificial-intelligence-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 410,
      rating: 4.9,
      reviews: 88,
      projectsCount: 10,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "16 Weeks", subtitle: "AI Training" },
      { id: 2, icon: "projects", title: "10+", subtitle: "AI Projects" },
      { id: 3, icon: "brain", title: "ML & DL", subtitle: "Core AI Skills" },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Expert Mentorship" },
      {
        id: 5,
        icon: "placement",
        title: "Career",
        subtitle: "AI Engineer Roles",
      },
      {
        id: 6,
        icon: "certificate",
        title: "AI",
        subtitle: "Professional Certificate",
      },
    ],

    // Technologies / Tools
    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "NLP",
      "Computer Vision",
      "OpenCV",
      "Generative AI",
      "ChatGPT",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Artificial Intelligence Certification",
        description:
          "Industry-recognized certification for Artificial Intelligence program.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Real AI Projects",
        description: "Hands-on projects in ML, DL, NLP, and computer vision.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Job-Oriented Skills",
        description:
          "Prepare for AI Engineer, ML Engineer, and Data Scientist roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description:
          "Personal mentorship on AI concepts, projects, and career guidance.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description:
          "Lifetime access to recordings, notebooks, datasets, and updates.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description:
          "AI interview questions, coding rounds, and mock interviews.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "AI & Python Foundations",
        weeks: "Weeks 1–4",
        color: "from-indigo-500 to-purple-500",
        icon: "ai",

        topics: [
          {
            category: "Python for AI",
            items: [
              "Python Basics",
              "Data Structures & Functions",
              "OOP Concepts",
              "Working with Data using Pandas & NumPy",
            ],
          },
          {
            category: "AI & ML Fundamentals",
            items: [
              "Introduction to Artificial Intelligence",
              "Types of AI",
              "Machine Learning Overview",
              "AI Use Cases Across Industries",
            ],
          },
          {
            category: "Data Preparation",
            items: [
              "Data Cleaning",
              "Feature Engineering",
              "Data Visualization",
              "Handling Missing Data",
            ],
          },
        ],

        projects: [
          "Python Data Analysis Project",
          "AI Use Case Research Report",
          "Data Preparation & Visualization Project",
        ],
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
            category: "Supervised Learning",
            items: [
              "Linear & Logistic Regression",
              "Decision Trees & Random Forest",
              "KNN & Naive Bayes",
              "Model Evaluation Metrics",
            ],
          },
          {
            category: "Unsupervised Learning",
            items: [
              "Clustering (K-Means, Hierarchical)",
              "Dimensionality Reduction",
              "Anomaly Detection",
              "Use Cases in Real Data",
            ],
          },
          {
            category: "Model Optimization",
            items: [
              "Overfitting & Underfitting",
              "Hyperparameter Tuning",
              "Cross Validation",
              "Model Deployment Basics",
            ],
          },
        ],

        projects: [
          "Machine Learning Prediction Model",
          "Customer Segmentation Project",
          "Anomaly Detection System",
        ],
      },
      {
        id: 3,
        month: "Month 3",
        title: "Deep Learning, NLP & Computer Vision",
        weeks: "Weeks 9–12",
        color: "from-pink-500 to-red-500",
        icon: "dl",

        topics: [
          {
            category: "Deep Learning",
            items: [
              "Neural Networks & Backpropagation",
              "CNN & RNN",
              "TensorFlow & PyTorch",
              "Deep Learning Optimization",
            ],
          },
          {
            category: "Natural Language Processing",
            items: [
              "Text Preprocessing",
              "Sentiment Analysis",
              "Text Classification",
              "Chatbots & Language Models",
            ],
          },
          {
            category: "Computer Vision",
            items: [
              "Image Processing Basics",
              "Object Detection",
              "Face Recognition",
              "OpenCV Applications",
            ],
          },
        ],

        projects: [
          "Image Classification using CNN",
          "NLP Sentiment Analysis Project",
          "Computer Vision Object Detection App",
        ],
      },
      {
        id: 4,
        month: "Month 4",
        title: "Advanced AI, Generative AI & Capstone",
        weeks: "Weeks 13–16",
        color: "from-red-500 to-orange-500",
        icon: "capstone",

        topics: [
          {
            category: "Generative AI",
            items: [
              "Introduction to Generative AI",
              "Large Language Models (LLMs)",
              "Prompt Engineering",
              "Using AI APIs",
            ],
          },
          {
            category: "AI Deployment & Ethics",
            items: [
              "Model Deployment Concepts",
              "AI in Cloud (Overview)",
              "Ethical AI & Bias",
              "AI Security Basics",
            ],
          },
          {
            category: "Career & Interview Preparation",
            items: [
              "AI Resume & Portfolio",
              "Project Review",
              "AI Interview Questions",
            ],
          },
        ],

        projects: [
          "Generative AI Application Project",
          "End-to-End AI Model Deployment",
          "Capstone: Complete Artificial Intelligence Solution",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the Artificial Intelligence course?",
        answer:
          "This course is ideal for students, freshers, and professionals who want to build a career in Artificial Intelligence.",
      },
      {
        id: 2,
        question: "Do I need prior programming knowledge?",
        answer:
          "No prior programming experience is required. We start from Python basics.",
      },
      {
        id: 3,
        question: "Is this course practical?",
        answer:
          "Yes, the course includes extensive hands-on projects and real-world AI applications.",
      },
      {
        id: 4,
        question: "Which roles can I apply for after this course?",
        answer:
          "You can apply for AI Engineer, ML Engineer, Data Scientist, and AI Developer roles.",
      },
      {
        id: 5,
        question: "Will I get a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s Artificial Intelligence Certification.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "Complete Artificial Intelligence Program",
      "ML, DL, NLP & Computer Vision",
      "Generative AI & Real Projects",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "purple",
      gradient: "from-indigo-500 to-purple-500",
    },
  },
  {
    id: "threat-intelligence",
    slug: "threat-intelligence-course",
    isPopular: true,
    badge: "🧠 Cyber Threat Intelligence",

    // Basic Info
    title: "Cyber Threat Intelligence (CTI) Program",
    shortTitle: "Threat Intelligence",
    subtitle:
      "Learn how to collect, analyze, and operationalize cyber threat intelligence to proactively defend organizations against cyber attacks.",
    description:
      "This program focuses on Cyber Threat Intelligence (CTI) used by SOC teams and security analysts. You will learn threat intelligence lifecycle, data sources, IOC analysis, TTP mapping, MITRE ATT&CK, threat hunting support, and strategic, tactical, and operational intelligence with real-world case studies.",

    // Course Meta
    duration: "2 Months (8 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 16999,
    originalPrice: 26999,
    discount: "37% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/threat-intelligence.jpg",
    heroImage: "/images/courses/threat-intelligence-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 210,
      rating: 4.9,
      reviews: 46,
      projectsCount: 5,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "8 Weeks", subtitle: "CTI Training" },
      {
        id: 2,
        icon: "projects",
        title: "5+",
        subtitle: "Threat Intel Projects",
      },
      { id: 3, icon: "target", title: "MITRE ATT&CK", subtitle: "TTP Mapping" },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Expert Guidance" },
      {
        id: 5,
        icon: "placement",
        title: "Career",
        subtitle: "SOC & CTI Roles",
      },
      {
        id: 6,
        icon: "certificate",
        title: "CTI",
        subtitle: "Analyst Certificate",
      },
    ],

    // Technologies / Tools
    technologies: [
      "Threat Intelligence Platforms (TIP)",
      "Open Source Intelligence (OSINT)",
      "MITRE ATT&CK",
      "Indicators of Compromise (IOCs)",
      "VirusTotal",
      "MISP",
      "AlienVault OTX",
      "MalwareBazaar",
      "Threat Feeds",
      "SIEM Integration",
      "Python for CTI (Basics)",
      "STIX / TAXII",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Threat Intelligence Certification",
        description:
          "Industry-recognized certification in Cyber Threat Intelligence.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Real CTI Case Studies",
        description:
          "Analyze real-world threat actors, campaigns, and attack patterns.",
        icon: "projects",
      },
      {
        id: 3,
        title: "SOC & Blue Team Ready",
        description:
          "Strengthen SOC detection and threat hunting capabilities.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description: "Expert mentorship on CTI analysis and reporting.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description:
          "Lifetime access to CTI tools, reports, and learning resources.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description:
          "CTI analyst interview questions and scenario-based discussions.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Threat Intelligence Fundamentals & Analysis",
        weeks: "Weeks 1–4",
        color: "from-slate-500 to-gray-700",
        icon: "intelligence",

        topics: [
          {
            category: "Threat Intelligence Basics",
            items: [
              "Introduction to Cyber Threat Intelligence",
              "Threat Intelligence Lifecycle",
              "Types of Threat Intelligence (Strategic, Tactical, Operational)",
              "CTI Use Cases in SOC",
            ],
          },
          {
            category: "Threat Data Sources & OSINT",
            items: [
              "Open Source Intelligence (OSINT)",
              "Commercial vs Open Threat Feeds",
              "IOC Types & Validation",
              "Threat Actor Profiling",
            ],
          },
          {
            category: "MITRE ATT&CK & TTP Mapping",
            items: [
              "Understanding Tactics, Techniques & Procedures",
              "Mapping IOCs to MITRE ATT&CK",
              "Campaign & Intrusion Analysis",
              "Using ATT&CK for Detection Gaps",
            ],
          },
        ],

        projects: [
          "Threat Actor Profile & Campaign Analysis",
          "IOC Collection & Validation Report",
          "MITRE ATT&CK Mapping Project",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Operational CTI, Automation & Reporting",
        weeks: "Weeks 5–8",
        color: "from-gray-700 to-zinc-800",
        icon: "analysis",

        topics: [
          {
            category: "Operational Threat Intelligence",
            items: [
              "Threat Intelligence in SOC Operations",
              "CTI Integration with SIEM",
              "Supporting Incident Response",
              "Threat Hunting Enablement",
            ],
          },
          {
            category: "Automation & Tools",
            items: [
              "Using MISP & Threat Intel Platforms",
              "STIX / TAXII Concepts",
              "Automating IOC Enrichment (Basics)",
              "Python for CTI Automation (Intro)",
            ],
          },
          {
            category: "Reporting & Career Preparation",
            items: [
              "Threat Intelligence Reporting Standards",
              "Executive vs Technical Reports",
              "CTI Resume & Interview Preparation",
            ],
          },
        ],

        projects: [
          "Operational Threat Intelligence Report",
          "CTI Feed Enrichment & Analysis Project",
          "Capstone: End-to-End Threat Intelligence Case Study",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the Threat Intelligence course?",
        answer:
          "This course is ideal for SOC analysts, blue team members, and cyber security professionals interested in threat intelligence roles.",
      },
      {
        id: 2,
        question: "Do I need prior cyber security experience?",
        answer:
          "Basic understanding of cybersecurity or SOC concepts is helpful but not mandatory.",
      },
      {
        id: 3,
        question: "Is this course hands-on?",
        answer:
          "Yes, the course includes practical OSINT research, IOC analysis, and CTI projects.",
      },
      {
        id: 4,
        question: "Which frameworks and tools are covered?",
        answer:
          "MITRE ATT&CK, MISP, VirusTotal, AlienVault OTX, and threat intelligence platforms are covered.",
      },
      {
        id: 5,
        question: "Will I get a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s Cyber Threat Intelligence Certification.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment payment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "Cyber Threat Intelligence Program",
      "MITRE ATT&CK & OSINT Focused",
      "SOC & Threat Hunting Support",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "slate",
      gradient: "from-slate-500 to-gray-700",
    },
  },
  {
    id: "licensed-penetration-tester",
    slug: "licensed-penetration-tester-lpt-course",
    isPopular: true,
    badge: "🎯 Licensed Penetration Tester (LPT)",

    // Basic Info
    title: "Licensed Penetration Tester (LPT) Program",
    shortTitle: "LPT",
    subtitle:
      "Become a certified Licensed Penetration Tester by mastering advanced ethical hacking, exploitation, red teaming, and real-world penetration testing methodologies.",
    description:
      "This advanced program is designed for serious penetration testing aspirants. You will learn end-to-end penetration testing including reconnaissance, exploitation, privilege escalation, post-exploitation, red teaming tactics, reporting, and legal compliance, aligned with global penetration testing standards.",

    // Course Meta
    duration: "4 Months (16 Weeks)",
    mode: "Online / Offline",
    level: "Advanced",
    language: "Hindi + English",

    // Pricing
    price: 39999,
    originalPrice: 64999,
    discount: "38% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/lpt.jpg",
    heroImage: "/images/courses/lpt-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 150,
      rating: 4.9,
      reviews: 34,
      projectsCount: 12,
    },

    // Highlights
    highlights: [
      {
        id: 1,
        icon: "clock",
        title: "16 Weeks",
        subtitle: "Advanced Pentesting",
      },
      { id: 2, icon: "projects", title: "12+", subtitle: "Real Attack Labs" },
      {
        id: 3,
        icon: "shield",
        title: "Red Team",
        subtitle: "Offensive Skills",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Expert Mentorship" },
      {
        id: 5,
        icon: "placement",
        title: "Career",
        subtitle: "Pentester Roles",
      },
      {
        id: 6,
        icon: "certificate",
        title: "LPT",
        subtitle: "Licensed Certificate",
      },
    ],

    // Technologies / Tools
    technologies: [
      "Kali Linux",
      "Advanced Nmap",
      "Burp Suite Pro",
      "Metasploit",
      "Nessus",
      "OWASP Top 10",
      "Active Directory Attacks",
      "Privilege Escalation",
      "Web & Network Exploitation",
      "Post-Exploitation",
      "Red Team Tactics",
      "Custom Payloads",
      "Reporting Tools",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Licensed Penetration Tester Certification",
        description: "Advanced industry-recognized LPT certification.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Advanced Real-World Labs",
        description:
          "Hands-on exploitation, red team labs, and live attack simulations.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Elite Offensive Security Skills",
        description:
          "Prepare for senior penetration tester and red team roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Expert Mentor Support",
        description:
          "Personal mentorship from experienced penetration testers.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description:
          "Lifetime access to labs, reports, tools, and learning material.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview & Certification Prep",
        description:
          "Scenario-based interviews, exam guidance, and report reviews.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Advanced Reconnaissance & Vulnerability Analysis",
        weeks: "Weeks 1–4",
        color: "from-red-600 to-orange-600",
        icon: "recon",

        topics: [
          {
            category: "Advanced Reconnaissance",
            items: [
              "Advanced Footprinting Techniques",
              "OSINT for Penetration Testers",
              "Network & Web Enumeration",
              "Attack Surface Mapping",
            ],
          },
          {
            category: "Vulnerability Assessment",
            items: [
              "Automated vs Manual Scanning",
              "Advanced Nessus & OpenVAS Usage",
              "False Positive Validation",
              "Risk Rating & Prioritization",
            ],
          },
          {
            category: "Exploitation Basics",
            items: [
              "Exploit Research",
              "Payload Generation",
              "Initial Access Techniques",
              "Shell Management",
            ],
          },
        ],

        projects: [
          "Enterprise Reconnaissance & Enumeration Report",
          "Validated Vulnerability Assessment Project",
          "Initial Access Exploitation Lab",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Web, Network & Active Directory Exploitation",
        weeks: "Weeks 5–8",
        color: "from-orange-600 to-yellow-500",
        icon: "exploit",

        topics: [
          {
            category: "Advanced Web Penetration Testing",
            items: [
              "Advanced SQL Injection",
              "Authentication & Authorization Bypass",
              "Business Logic Flaws",
              "OWASP Top 10 Deep Dive",
            ],
          },
          {
            category: "Network & AD Attacks",
            items: [
              "Active Directory Enumeration",
              "Kerberoasting & Pass-the-Hash",
              "Lateral Movement",
              "Domain Privilege Escalation",
            ],
          },
          {
            category: "Post-Exploitation",
            items: [
              "Persistence Techniques",
              "Credential Dumping",
              "Covering Tracks (Theory)",
              "Data Exfiltration Concepts",
            ],
          },
        ],

        projects: [
          "Advanced Web Application Pentest Report",
          "Active Directory Attack Simulation",
          "Privilege Escalation Case Study",
        ],
      },
      {
        id: 3,
        month: "Month 3",
        title: "Red Team Operations & Evasion",
        weeks: "Weeks 9–12",
        color: "from-yellow-500 to-amber-500",
        icon: "redteam",

        topics: [
          {
            category: "Red Team Methodology",
            items: [
              "Red Team vs Blue Team",
              "Attack Campaign Planning",
              "Command & Control Concepts",
              "Red Team Infrastructure Basics",
            ],
          },
          {
            category: "Evasion Techniques",
            items: [
              "AV & EDR Evasion (Conceptual)",
              "Living-off-the-Land Techniques",
              "Custom Payload Obfuscation",
              "Detection Avoidance",
            ],
          },
          {
            category: "Legal & Compliance",
            items: [
              "Rules of Engagement",
              "Legal Aspects of Penetration Testing",
              "Ethical Boundaries",
              "Documentation Standards",
            ],
          },
        ],

        projects: [
          "Red Team Attack Simulation",
          "Evasion Technique Demonstration",
          "Rules of Engagement & Legal Compliance Report",
        ],
      },
      {
        id: 4,
        month: "Month 4",
        title: "Reporting, Capstone & Career Preparation",
        weeks: "Weeks 13–16",
        color: "from-amber-500 to-red-600",
        icon: "capstone",

        topics: [
          {
            category: "Professional Reporting",
            items: [
              "Penetration Testing Report Writing",
              "Executive & Technical Reporting",
              "Risk Communication",
              "Remediation Recommendations",
            ],
          },
          {
            category: "Capstone Engagement",
            items: [
              "End-to-End Penetration Testing",
              "Client Simulation",
              "Defense Evasion & Persistence",
              "Final Assessment",
            ],
          },
          {
            category: "Career & Interview Preparation",
            items: [
              "Pentester Resume & Portfolio",
              "Advanced Interview Scenarios",
              "Certification & Career Roadmap",
            ],
          },
        ],

        projects: [
          "Full Scope Licensed Penetration Testing Report",
          "Capstone: Real-World Red Team Engagement",
          "Final Professional Pentest Documentation",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the LPT course?",
        answer:
          "This course is ideal for experienced ethical hackers, pentesters, and cyber security professionals aiming for advanced penetration testing roles.",
      },
      {
        id: 2,
        question: "Is this course beginner friendly?",
        answer:
          "No. This is an advanced program and requires prior knowledge of ethical hacking and networking.",
      },
      {
        id: 3,
        question: "Is this course fully hands-on?",
        answer:
          "Yes, it focuses heavily on real-world labs, attack simulations, and professional reporting.",
      },
      {
        id: 4,
        question: "Will I get a license or certificate?",
        answer:
          "You will receive HackPro Academy’s Licensed Penetration Tester Certification.",
      },
      {
        id: 5,
        question: "Does this help in red team roles?",
        answer:
          "Yes, this course is specifically designed for red team and advanced pentesting careers.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "Licensed Penetration Tester Program",
      "Advanced Red Team & Exploitation",
      "Real-World Pentest Engagements",
      "Elite Industry Certification",
    ],

    // Theme Colors
    theme: {
      primary: "red",
      gradient: "from-red-600 to-orange-600",
    },
  },
  {
    id: "juniper-firewall",
    slug: "juniper-firewall-training-course",
    isPopular: true,
    badge: "🔥 Juniper Firewall Specialist",

    // Basic Info
    title: "Juniper Firewall Configuration & Network Security Program",
    shortTitle: "Juniper Firewall",
    subtitle:
      "Learn enterprise-grade firewall security using Juniper SRX, security policies, NAT, VPNs, UTM features, and real-world firewall troubleshooting.",
    description:
      "This course is designed to make you job-ready in Juniper firewall technologies. You will learn Juniper SRX architecture, firewall zones, security policies, NAT, VPN configuration, UTM features, logging, monitoring, and troubleshooting with hands-on labs used in real enterprise networks.",

    // Course Meta
    duration: "1 Month (4 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 10999,
    originalPrice: 16999,
    discount: "35% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/juniper-firewall.jpg",
    heroImage: "/images/courses/juniper-firewall-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 140,
      rating: 4.8,
      reviews: 30,
      projectsCount: 3,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "4 Weeks", subtitle: "Focused Training" },
      { id: 2, icon: "projects", title: "3+", subtitle: "Hands-on Labs" },
      {
        id: 3,
        icon: "shield",
        title: "Enterprise",
        subtitle: "Firewall Skills",
      },
      { id: 4, icon: "mentor", title: "Live", subtitle: "Mentor Support" },
      {
        id: 5,
        icon: "certificate",
        title: "Juniper",
        subtitle: "Firewall Certificate",
      },
      { id: 6, icon: "career", title: "SOC / Network", subtitle: "Job Ready" },
    ],

    // Technologies / Tools
    technologies: [
      "Juniper SRX",
      "JunOS",
      "Security Zones",
      "Security Policies",
      "NAT",
      "Site-to-Site VPN",
      "Remote Access VPN",
      "UTM Features",
      "IPS Concepts",
      "Application Firewall",
      "Syslog",
      "J-Web",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Juniper Firewall Certification",
        description:
          "Industry-focused certification for Juniper firewall training.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Hands-on Juniper Labs",
        description:
          "Configure real Juniper SRX firewall policies, NAT, and VPNs.",
        icon: "projects",
      },
      {
        id: 3,
        title: "SOC & Network Security Ready",
        description:
          "Prepare for Network Security Engineer and SOC Analyst roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "Live Mentor Support",
        description: "Real-time guidance during firewall configuration labs.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Recorded Sessions",
        description:
          "Lifetime access to recorded classes and learning resources.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description:
          "Juniper firewall interview questions and scenario discussions.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Juniper Firewall Fundamentals & Configuration",
        weeks: "Weeks 1–4",
        color: "from-green-600 to-emerald-600",
        icon: "firewall",

        topics: [
          {
            category: "Juniper Firewall Fundamentals",
            items: [
              "Introduction to Juniper SRX",
              "JunOS Architecture",
              "Firewall Zones & Interfaces",
              "Security Policy Framework",
            ],
          },
          {
            category: "Policy, NAT & VPN Configuration",
            items: [
              "Security Policies & Rule Order",
              "Source & Destination NAT",
              "Site-to-Site VPN Configuration",
              "Remote Access VPN Overview",
            ],
          },
          {
            category: "UTM, Logging & Troubleshooting",
            items: [
              "UTM Features (AV, IDP, Web Filtering)",
              "Logging & Monitoring",
              "Syslog & Traffic Analysis",
              "Basic Firewall Troubleshooting",
            ],
          },
        ],

        projects: [
          "Juniper SRX Firewall Policy & NAT Lab",
          "Site-to-Site VPN Configuration Project",
          "Firewall Logging & Traffic Analysis Report",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the Juniper Firewall course?",
        answer:
          "This course is ideal for networking students, system administrators, SOC aspirants, and cyber security beginners.",
      },
      {
        id: 2,
        question: "Do I need prior Juniper knowledge?",
        answer:
          "Basic networking knowledge is helpful but not mandatory. We start from Juniper firewall fundamentals.",
      },
      {
        id: 3,
        question: "Is this course hands-on?",
        answer:
          "Yes, the course includes real-world Juniper SRX configuration labs.",
      },
      {
        id: 4,
        question: "Is this useful for SOC roles?",
        answer:
          "Yes, firewall monitoring and log analysis are core SOC responsibilities.",
      },
      {
        id: 5,
        question: "Will I get a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s Juniper Firewall Certification.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment payment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "Juniper SRX Firewall Training",
      "Real Firewall Configuration Labs",
      "SOC & Network Security Focused",
      "Certificate Included",
    ],

    // Theme Colors
    theme: {
      primary: "green",
      gradient: "from-green-600 to-emerald-600",
    },
  },
  {
    id: "comptia-a-plus",
    slug: "comptia-a-plus-certification-course",
    isPopular: true,
    badge: "🖥️ CompTIA A+ Certified",

    // Basic Info
    title: "CompTIA A+ Core IT Support & Hardware Program",
    shortTitle: "CompTIA A+",
    subtitle:
      "Build a strong foundation in IT support, hardware, networking, operating systems, troubleshooting, and security aligned with CompTIA A+ certification.",
    description:
      "This program prepares you for the CompTIA A+ certification and entry-level IT roles. You will learn computer hardware, operating systems, networking basics, mobile devices, troubleshooting methodologies, security fundamentals, and real-world IT support scenarios through hands-on labs.",

    // Course Meta
    duration: "2 Months (8 Weeks)",
    mode: "Online / Offline",
    level: "Beginner Friendly",
    language: "Hindi + English",

    // Pricing
    price: 15999,
    originalPrice: 25999,
    discount: "38% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/comptia-a-plus.jpg",
    heroImage: "/images/courses/comptia-a-plus-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 360,
      rating: 4.9,
      reviews: 78,
      projectsCount: 5,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "8 Weeks", subtitle: "IT Foundations" },
      { id: 2, icon: "projects", title: "5+", subtitle: "Hands-on Labs" },
      {
        id: 3,
        icon: "hardware",
        title: "Hardware + OS",
        subtitle: "Core Skills",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentor Support" },
      {
        id: 5,
        icon: "placement",
        title: "Career",
        subtitle: "IT Support Roles",
      },
      { id: 6, icon: "certificate", title: "CompTIA", subtitle: "A+ Ready" },
    ],

    // Technologies / Tools
    technologies: [
      "Computer Hardware",
      "PC Assembly",
      "Windows OS",
      "Linux Basics",
      "macOS Overview",
      "Networking Basics",
      "TCP/IP",
      "Mobile Devices",
      "Troubleshooting Tools",
      "BIOS / UEFI",
      "Virtualization Basics",
      "Security Fundamentals",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro CompTIA A+ Certification Support",
        description:
          "Complete training aligned with CompTIA A+ (Core 1 & Core 2).",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Hands-on Hardware Labs",
        description:
          "PC assembly, hardware replacement, and troubleshooting labs.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Job-Oriented IT Skills",
        description:
          "Prepare for IT Support Technician, Help Desk, and Desktop Support roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description:
          "Personal guidance for labs, exams, and IT career roadmap.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description:
          "Lifetime access to recordings, notes, and practice material.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview & Exam Preparation",
        description:
          "CompTIA A+ exam prep, mock tests, and interview questions.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Hardware, Networking & Mobile Devices",
        weeks: "Weeks 1–4",
        color: "from-sky-500 to-blue-600",
        icon: "hardware",

        topics: [
          {
            category: "Computer Hardware",
            items: [
              "PC Components & Functions",
              "CPU, RAM, Storage & Motherboards",
              "Power Supplies & Cooling",
              "PC Assembly & Disassembly",
            ],
          },
          {
            category: "Networking Basics",
            items: [
              "Network Types & Topologies",
              "TCP/IP & Ports",
              "Wi-Fi Standards",
              "Basic Network Troubleshooting",
            ],
          },
          {
            category: "Mobile Devices",
            items: [
              "Laptops, Smartphones & Tablets",
              "Mobile OS Overview",
              "Mobile Device Troubleshooting",
              "Peripheral Devices",
            ],
          },
        ],

        projects: [
          "PC Assembly & Hardware Troubleshooting Lab",
          "Basic Network Setup & Testing",
          "Mobile Device Support Case Study",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Operating Systems, Security & IT Support",
        weeks: "Weeks 5–8",
        color: "from-blue-600 to-indigo-600",
        icon: "os",

        topics: [
          {
            category: "Operating Systems",
            items: [
              "Windows Installation & Configuration",
              "Linux Basics",
              "macOS Overview",
              "OS Maintenance & Updates",
            ],
          },
          {
            category: "Security Fundamentals",
            items: [
              "Malware Types",
              "Basic Cyber Security Concepts",
              "User Authentication & Permissions",
              "Data Protection Basics",
            ],
          },
          {
            category: "IT Support & Troubleshooting",
            items: [
              "Troubleshooting Methodology",
              "Help Desk Operations",
              "Customer Support Skills",
              "Documentation & Ticketing",
            ],
          },
        ],

        projects: [
          "OS Installation & Configuration Lab",
          "Security Incident Basics Case Study",
          "IT Support Troubleshooting Simulation",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the CompTIA A+ course?",
        answer:
          "This course is ideal for beginners, students, and anyone who wants to start a career in IT support or hardware roles.",
      },
      {
        id: 2,
        question: "Is CompTIA A+ suitable for beginners?",
        answer:
          "Yes, CompTIA A+ is a beginner-friendly certification and this course starts from basic IT concepts.",
      },
      {
        id: 3,
        question: "Does this course prepare for the CompTIA A+ exam?",
        answer:
          "Yes, the course is aligned with CompTIA A+ Core 1 and Core 2 exam objectives.",
      },
      {
        id: 4,
        question: "Will I get hands-on practice?",
        answer:
          "Yes, the course includes hardware labs, OS installation, and troubleshooting exercises.",
      },
      {
        id: 5,
        question: "Will I receive a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s CompTIA A+ Training Certificate.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "CompTIA A+ Core 1 & Core 2 Aligned",
      "Hands-on Hardware & OS Labs",
      "Beginner-Friendly IT Program",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "sky",
      gradient: "from-sky-500 to-blue-600",
    },
  },
  {
    id: "comptia-network-plus",
    slug: "comptia-network-plus-certification-course",
    isPopular: true,
    badge: "🌐 CompTIA Network+ Certified",

    // Basic Info
    title: "CompTIA Network+ (N+) Networking Fundamentals Program",
    shortTitle: "CompTIA Network+",
    subtitle:
      "Build strong networking foundations and prepare for the CompTIA Network+ (N+) certification with hands-on labs and real-world scenarios.",
    description:
      "This program prepares you for the CompTIA Network+ (N+) certification and networking roles. You will learn networking concepts, protocols, IP addressing, subnetting, routing, switching, wireless networking, network security, troubleshooting, and real-world enterprise networking scenarios.",

    // Course Meta
    duration: "2 Months (8 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 17999,
    originalPrice: 28999,
    discount: "38% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/comptia-network-plus.jpg",
    heroImage: "/images/courses/comptia-network-plus-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 320,
      rating: 4.9,
      reviews: 70,
      projectsCount: 6,
    },

    // Highlights
    highlights: [
      {
        id: 1,
        icon: "clock",
        title: "8 Weeks",
        subtitle: "Networking Training",
      },
      { id: 2, icon: "projects", title: "6+", subtitle: "Networking Labs" },
      {
        id: 3,
        icon: "network",
        title: "Routing & Switching",
        subtitle: "Core Skills",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentor Support" },
      { id: 5, icon: "placement", title: "Career", subtitle: "Network Roles" },
      { id: 6, icon: "certificate", title: "CompTIA", subtitle: "N+ Ready" },
    ],

    // Technologies / Tools
    technologies: [
      "TCP/IP",
      "OSI Model",
      "IPv4 & IPv6",
      "Subnetting",
      "Routing Protocols",
      "Switching Concepts",
      "Wireless Networking",
      "Firewalls",
      "Network Security",
      "DNS & DHCP",
      "Packet Tracer",
      "Wireshark",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro CompTIA Network+ Certification Support",
        description:
          "Complete training aligned with CompTIA Network+ (N+) objectives.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Hands-on Networking Labs",
        description:
          "Subnetting, routing, switching, and troubleshooting labs.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Job-Oriented Networking Skills",
        description:
          "Prepare for Network Technician, Network Support, and NOC roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description:
          "Guidance for labs, certification prep, and networking career path.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description: "Lifetime access to recordings, notes, and practice labs.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview & Exam Preparation",
        description: "Network+ exam prep, mock tests, and interview questions.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Networking Fundamentals & Infrastructure",
        weeks: "Weeks 1–4",
        color: "from-emerald-500 to-green-600",
        icon: "network",

        topics: [
          {
            category: "Networking Fundamentals",
            items: [
              "Introduction to Computer Networks",
              "Network Types & Topologies",
              "OSI & TCP/IP Models",
              "Network Cables & Devices",
            ],
          },
          {
            category: "IP Addressing & Routing",
            items: [
              "IPv4 & IPv6 Addressing",
              "Subnetting Techniques",
              "Routing Concepts",
              "Static vs Dynamic Routing",
            ],
          },
          {
            category: "Switching & Wireless",
            items: [
              "Switching Concepts",
              "VLAN Basics",
              "Wireless Standards",
              "Wireless Security",
            ],
          },
        ],

        projects: [
          "Network Design & Topology Project",
          "Subnetting & IP Planning Lab",
          "Wireless Network Setup & Testing",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Network Security, Operations & Troubleshooting",
        weeks: "Weeks 5–8",
        color: "from-green-600 to-teal-600",
        icon: "security",

        topics: [
          {
            category: "Network Security",
            items: [
              "Network Security Concepts",
              "Firewalls & IDS/IPS",
              "VPN Basics",
              "Network Hardening",
            ],
          },
          {
            category: "Network Operations",
            items: [
              "DNS & DHCP",
              "Network Monitoring",
              "High Availability Concepts",
              "Cloud Networking Overview",
            ],
          },
          {
            category: "Troubleshooting & Support",
            items: [
              "Network Troubleshooting Methodology",
              "Using Wireshark",
              "Common Network Issues",
              "Documentation & Change Management",
            ],
          },
        ],

        projects: [
          "Network Security Configuration Case Study",
          "Network Monitoring & Analysis Lab",
          "End-to-End Network Troubleshooting Project",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the CompTIA Network+ course?",
        answer:
          "This course is ideal for students, beginners, and IT professionals who want to build a career in networking.",
      },
      {
        id: 2,
        question: "Is CompTIA Network+ beginner friendly?",
        answer:
          "Yes, basic IT knowledge is enough. The course starts from networking fundamentals.",
      },
      {
        id: 3,
        question: "Does this course prepare for the Network+ exam?",
        answer:
          "Yes, it is aligned with CompTIA Network+ (N+) exam objectives.",
      },
      {
        id: 4,
        question: "Will I get hands-on practice?",
        answer:
          "Yes, subnetting, routing, switching, and troubleshooting labs are included.",
      },
      {
        id: 5,
        question: "Will I receive a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s CompTIA Network+ Training Certificate.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "CompTIA Network+ (N+) Aligned",
      "Hands-on Networking Labs",
      "Routing, Switching & Security",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "emerald",
      gradient: "from-emerald-500 to-green-600",
    },
  },
  {
    id: "comptia-security-plus",
    slug: "comptia-security-plus-certification-course",
    isPopular: true,
    badge: "🔐 CompTIA Security+ Certified",

    // Basic Info
    title: "CompTIA Security+ (SY0-701) Cybersecurity Fundamentals Program",
    shortTitle: "CompTIA Security+",
    subtitle:
      "Build strong cybersecurity foundations and prepare for the CompTIA Security+ certification with hands-on labs and real-world security scenarios.",
    description:
      "This program prepares you for the CompTIA Security+ certification and entry-to-mid level cybersecurity roles. You will learn security fundamentals, threats and vulnerabilities, network security, cryptography, identity and access management, risk management, and incident response aligned with the latest CompTIA Security+ objectives.",

    // Course Meta
    duration: "2 Months (8 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 18999,
    originalPrice: 30999,
    discount: "39% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/comptia-security-plus.jpg",
    heroImage: "/images/courses/comptia-security-plus-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 350,
      rating: 4.9,
      reviews: 82,
      projectsCount: 6,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "8 Weeks", subtitle: "Security Training" },
      { id: 2, icon: "projects", title: "6+", subtitle: "Security Labs" },
      {
        id: 3,
        icon: "shield",
        title: "Core Security",
        subtitle: "Fundamentals",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentor Support" },
      { id: 5, icon: "placement", title: "Career", subtitle: "Security Roles" },
      {
        id: 6,
        icon: "certificate",
        title: "CompTIA",
        subtitle: "Security+ Ready",
      },
    ],

    // Technologies / Tools
    technologies: [
      "Network Security",
      "Threats & Vulnerabilities",
      "Firewalls",
      "IDS / IPS",
      "Cryptography",
      "PKI",
      "Identity & Access Management",
      "Risk Management",
      "Incident Response",
      "SIEM Basics",
      "Security Policies",
      "Compliance & Governance",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro CompTIA Security+ Certification Support",
        description:
          "Complete training aligned with CompTIA Security+ (SY0-701) objectives.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Hands-on Security Labs",
        description:
          "Practical labs covering threats, vulnerabilities, and defenses.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Job-Oriented Security Skills",
        description:
          "Prepare for SOC Analyst, Security Analyst, and Cybersecurity roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description:
          "Guidance for labs, exam prep, and cybersecurity career roadmap.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description:
          "Lifetime access to recordings, notes, and practice questions.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview & Exam Preparation",
        description:
          "Security+ exam prep, mock tests, and interview questions.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Security Fundamentals, Threats & Network Defense",
        weeks: "Weeks 1–4",
        color: "from-red-500 to-rose-600",
        icon: "security",

        topics: [
          {
            category: "Security Fundamentals",
            items: [
              "Introduction to Cybersecurity",
              "CIA Triad",
              "Security Controls",
              "Security Architecture Basics",
            ],
          },
          {
            category: "Threats & Vulnerabilities",
            items: [
              "Malware Types",
              "Social Engineering Attacks",
              "Application Vulnerabilities",
              "Threat Modeling Basics",
            ],
          },
          {
            category: "Network Security",
            items: [
              "Firewalls & Network Segmentation",
              "IDS / IPS",
              "VPN Concepts",
              "Wireless Security",
            ],
          },
        ],

        projects: [
          "Threat & Vulnerability Analysis Report",
          "Network Security Configuration Lab",
          "Security Controls Mapping Exercise",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Identity, Cryptography, Risk & Incident Response",
        weeks: "Weeks 5–8",
        color: "from-rose-600 to-pink-600",
        icon: "risk",

        topics: [
          {
            category: "Identity & Access Management",
            items: [
              "Authentication Methods",
              "Authorization Models",
              "Access Control Types",
              "Privileged Access Management",
            ],
          },
          {
            category: "Cryptography & PKI",
            items: [
              "Encryption Basics",
              "Symmetric vs Asymmetric Cryptography",
              "Hashing & Digital Signatures",
              "Public Key Infrastructure (PKI)",
            ],
          },
          {
            category: "Risk, Governance & Incident Response",
            items: [
              "Risk Assessment & Management",
              "Security Policies & Compliance",
              "Incident Response Lifecycle",
              "Disaster Recovery & Business Continuity",
            ],
          },
        ],

        projects: [
          "IAM Policy Design Case Study",
          "Cryptography & PKI Lab",
          "Incident Response Simulation Project",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the CompTIA Security+ course?",
        answer:
          "This course is ideal for students, beginners, and IT professionals who want to start or grow a career in cybersecurity.",
      },
      {
        id: 2,
        question: "Is CompTIA Security+ beginner friendly?",
        answer:
          "Yes, basic IT or networking knowledge is helpful, and we cover security fundamentals from scratch.",
      },
      {
        id: 3,
        question: "Does this course prepare for the Security+ exam?",
        answer:
          "Yes, it is fully aligned with the latest CompTIA Security+ (SY0-701) exam objectives.",
      },
      {
        id: 4,
        question: "Will I get hands-on labs?",
        answer: "Yes, practical labs and security simulations are included.",
      },
      {
        id: 5,
        question: "Will I receive a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s CompTIA Security+ Training Certificate.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "CompTIA Security+ (SY0-701) Aligned",
      "Hands-on Cybersecurity Labs",
      "Threats, Defense & Incident Response",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "rose",
      gradient: "from-red-500 to-rose-600",
    },
  },
  {
    id: "comptia-cysa-plus",
    slug: "comptia-cysa-plus-certification-course",
    isPopular: true,
    badge: "🛡️ CompTIA CySA+ Certified",

    // Basic Info
    title: "CompTIA CySA+ (Cybersecurity Analyst) Program",
    shortTitle: "CompTIA CySA+",
    subtitle:
      "Develop advanced blue team and SOC skills and prepare for the CompTIA CySA+ certification with hands-on threat detection and response labs.",
    description:
      "This program prepares you for the CompTIA CySA+ certification and cybersecurity analyst roles. You will learn threat detection, security monitoring, vulnerability management, incident response, threat intelligence, SIEM operations, and security analytics aligned with CySA+ exam objectives.",

    // Course Meta
    duration: "2.5 Months (10 Weeks)",
    mode: "Online / Offline",
    level: "Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 21999,
    originalPrice: 35999,
    discount: "39% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/comptia-cysa-plus.jpg",
    heroImage: "/images/courses/comptia-cysa-plus-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 280,
      rating: 4.9,
      reviews: 64,
      projectsCount: 7,
    },

    // Highlights
    highlights: [
      {
        id: 1,
        icon: "clock",
        title: "10 Weeks",
        subtitle: "Blue Team Training",
      },
      { id: 2, icon: "projects", title: "7+", subtitle: "SOC Labs & Cases" },
      {
        id: 3,
        icon: "shield",
        title: "Threat Detection",
        subtitle: "Analytics Skills",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Expert Support" },
      {
        id: 5,
        icon: "placement",
        title: "Career",
        subtitle: "Cyber Analyst Roles",
      },
      { id: 6, icon: "certificate", title: "CompTIA", subtitle: "CySA+ Ready" },
    ],

    // Technologies / Tools
    technologies: [
      "SIEM Tools",
      "Splunk",
      "ELK Stack",
      "Threat Intelligence",
      "Vulnerability Management",
      "Nessus",
      "MITRE ATT&CK",
      "Log Analysis",
      "Incident Response",
      "Network Traffic Analysis",
      "Security Analytics",
      "SOAR Basics",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro CompTIA CySA+ Certification Support",
        description:
          "Complete training aligned with CompTIA CySA+ exam objectives.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Hands-on SOC & Blue Team Labs",
        description:
          "Threat detection, log analysis, and incident response labs.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Job-Oriented Analyst Skills",
        description:
          "Prepare for SOC Analyst, Cybersecurity Analyst, and Blue Team roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description:
          "Expert guidance for labs, exam prep, and cybersecurity career growth.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description: "Lifetime access to recordings, notes, and SOC playbooks.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview & Exam Preparation",
        description:
          "CySA+ exam prep, mock tests, and analyst interview questions.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Threat Detection, Security Monitoring & Analytics",
        weeks: "Weeks 1–4",
        color: "from-indigo-500 to-blue-600",
        icon: "monitor",

        topics: [
          {
            category: "Security Monitoring",
            items: [
              "Cybersecurity Analyst Role",
              "Security Monitoring Concepts",
              "Log Sources & Event Correlation",
              "SOC Workflow & Alert Triage",
            ],
          },
          {
            category: "Threat Detection & Analysis",
            items: [
              "Indicators of Compromise (IOCs)",
              "MITRE ATT&CK Mapping",
              "Behavioral Analysis",
              "Network Traffic Analysis",
            ],
          },
          {
            category: "SIEM & Analytics",
            items: [
              "SIEM Architecture",
              "Splunk / ELK Overview",
              "Dashboards & Alerts",
              "Reducing False Positives",
            ],
          },
        ],

        projects: [
          "SOC Monitoring & Alert Analysis Lab",
          "Threat Detection using MITRE ATT&CK",
          "SIEM Dashboard & Alert Configuration",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Vulnerability Management & Incident Response",
        weeks: "Weeks 5–8",
        color: "from-blue-600 to-cyan-600",
        icon: "incident",

        topics: [
          {
            category: "Vulnerability Management",
            items: [
              "Vulnerability Scanning & Assessment",
              "Risk Prioritization",
              "Patch Management",
              "Vulnerability Reporting",
            ],
          },
          {
            category: "Incident Response",
            items: [
              "Incident Response Lifecycle",
              "Containment, Eradication & Recovery",
              "Forensics Basics",
              "Post-Incident Reporting",
            ],
          },
          {
            category: "Threat Intelligence",
            items: [
              "Using Threat Feeds",
              "Threat Actor Analysis",
              "Supporting SOC with CTI",
              "Automation Concepts",
            ],
          },
        ],

        projects: [
          "Vulnerability Assessment & Risk Report",
          "Incident Response Simulation",
          "Threat Intelligence Case Study",
        ],
      },
      {
        id: 3,
        month: "Month 3",
        title: "Security Operations, Automation & Exam Prep",
        weeks: "Weeks 9–10",
        color: "from-cyan-600 to-teal-600",
        icon: "automation",

        topics: [
          {
            category: "Security Operations",
            items: [
              "SOC Metrics & KPIs",
              "Security Operations Best Practices",
              "Collaboration with Red & Blue Teams",
              "Compliance Considerations",
            ],
          },
          {
            category: "Automation & SOAR",
            items: [
              "SOAR Overview",
              "Automating Security Tasks",
              "Playbooks & Workflows",
              "Alert Enrichment Automation",
            ],
          },
          {
            category: "Exam & Career Preparation",
            items: [
              "CySA+ Exam Domains Review",
              "Practice Questions & Mock Tests",
              "Resume & Interview Preparation",
            ],
          },
        ],

        projects: [
          "SOC Operations Optimization Case Study",
          "Automation Playbook Design",
          "Capstone: End-to-End Cybersecurity Analysis Project",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the CompTIA CySA+ course?",
        answer:
          "This course is ideal for SOC analysts, cybersecurity professionals, and candidates aiming for analyst or blue team roles.",
      },
      {
        id: 2,
        question: "Is CompTIA CySA+ beginner friendly?",
        answer:
          "No, it is an intermediate-level certification. Basic Security+ or SOC knowledge is recommended.",
      },
      {
        id: 3,
        question: "Does this course prepare for the CySA+ exam?",
        answer:
          "Yes, it is fully aligned with the latest CompTIA CySA+ exam objectives.",
      },
      {
        id: 4,
        question: "Will I get hands-on labs?",
        answer:
          "Yes, extensive SOC, SIEM, threat detection, and incident response labs are included.",
      },
      {
        id: 5,
        question: "Will I receive a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s CompTIA CySA+ Training Certificate.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "CompTIA CySA+ Aligned Program",
      "Advanced SOC & Threat Detection",
      "SIEM, CTI & Incident Response",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "indigo",
      gradient: "from-indigo-500 to-blue-600",
    },
  },
  {
    id: "comptia-pentest-plus",
    slug: "comptia-pentest-plus-certification-course",
    isPopular: true,
    badge: "🧪 CompTIA PenTest+ Certified",

    // Basic Info
    title: "CompTIA PenTest+ Ethical Hacking & Penetration Testing Program",
    shortTitle: "CompTIA PenTest+",
    subtitle:
      "Master hands-on penetration testing, vulnerability exploitation, and reporting to prepare for the CompTIA PenTest+ certification.",
    description:
      "This program prepares you for the CompTIA PenTest+ certification and practical penetration testing roles. You will learn planning and scoping, information gathering, vulnerability scanning, exploitation, post-exploitation, reporting, and legal compliance using real-world pentesting scenarios.",

    // Course Meta
    duration: "3 Months (12 Weeks)",
    mode: "Online / Offline",
    level: "Intermediate to Advanced",
    language: "Hindi + English",

    // Pricing
    price: 24999,
    originalPrice: 39999,
    discount: "37% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/comptia-pentest-plus.jpg",
    heroImage: "/images/courses/comptia-pentest-plus-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 270,
      rating: 4.9,
      reviews: 58,
      projectsCount: 9,
    },

    // Highlights
    highlights: [
      {
        id: 1,
        icon: "clock",
        title: "12 Weeks",
        subtitle: "Pentesting Training",
      },
      { id: 2, icon: "projects", title: "9+", subtitle: "Hands-on Labs" },
      {
        id: 3,
        icon: "shield",
        title: "Offensive Security",
        subtitle: "Core Skills",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Expert Support" },
      {
        id: 5,
        icon: "placement",
        title: "Career",
        subtitle: "Pentester Roles",
      },
      {
        id: 6,
        icon: "certificate",
        title: "CompTIA",
        subtitle: "PenTest+ Ready",
      },
    ],

    // Technologies / Tools
    technologies: [
      "Kali Linux",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Nessus",
      "OWASP Top 10",
      "Web & Network Pentesting",
      "Active Directory Attacks",
      "Privilege Escalation",
      "Post-Exploitation",
      "Reporting Tools",
      "Python Basics for Pentesting",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro CompTIA PenTest+ Certification Support",
        description:
          "Complete training aligned with CompTIA PenTest+ exam objectives.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Real Penetration Testing Labs",
        description:
          "Hands-on exploitation, enumeration, and attack simulations.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Job-Oriented Pentesting Skills",
        description: "Prepare for Penetration Tester and Ethical Hacker roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description: "Guidance on tools, attacks, and professional reporting.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description:
          "Lifetime access to labs, notes, and practice environments.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview & Exam Preparation",
        description:
          "PenTest+ exam prep, mock tests, and pentester interviews.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Planning, Reconnaissance & Vulnerability Discovery",
        weeks: "Weeks 1–4",
        color: "from-purple-600 to-indigo-600",
        icon: "recon",

        topics: [
          {
            category: "Planning & Scoping",
            items: [
              "Penetration Testing Methodology",
              "Rules of Engagement",
              "Legal & Compliance Considerations",
              "Scoping & Authorization",
            ],
          },
          {
            category: "Reconnaissance & Enumeration",
            items: [
              "Passive & Active Reconnaissance",
              "Network & Service Enumeration",
              "Web Application Enumeration",
              "OSINT for Pentesters",
            ],
          },
          {
            category: "Vulnerability Analysis",
            items: [
              "Vulnerability Scanning Tools",
              "Manual Vulnerability Validation",
              "Risk Rating",
              "False Positive Analysis",
            ],
          },
        ],

        projects: [
          "Pentest Scope & Authorization Document",
          "Reconnaissance & Enumeration Report",
          "Validated Vulnerability Assessment Project",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Exploitation, Web & Network Attacks",
        weeks: "Weeks 5–8",
        color: "from-indigo-600 to-blue-600",
        icon: "exploit",

        topics: [
          {
            category: "Exploitation Techniques",
            items: [
              "Exploit Development Basics",
              "Payloads & Shells",
              "Privilege Escalation Techniques",
              "Password Attacks",
            ],
          },
          {
            category: "Web Application Pentesting",
            items: [
              "OWASP Top 10 Attacks",
              "Authentication & Session Attacks",
              "SQL Injection & XSS",
              "Business Logic Flaws",
            ],
          },
          {
            category: "Network & AD Attacks",
            items: [
              "Network Exploitation",
              "Active Directory Basics",
              "Credential Attacks",
              "Lateral Movement",
            ],
          },
        ],

        projects: [
          "Web Application Penetration Testing Report",
          "Network Exploitation Lab",
          "Privilege Escalation Case Study",
        ],
      },
      {
        id: 3,
        month: "Month 3",
        title: "Post-Exploitation, Reporting & Capstone",
        weeks: "Weeks 9–12",
        color: "from-blue-600 to-cyan-600",
        icon: "report",

        topics: [
          {
            category: "Post-Exploitation",
            items: [
              "Persistence Techniques",
              "Credential Dumping Concepts",
              "Data Exfiltration Basics",
              "Covering Tracks (Theory)",
            ],
          },
          {
            category: "Professional Reporting",
            items: [
              "Pentest Report Writing",
              "Executive & Technical Reports",
              "Risk & Remediation Mapping",
              "Client Communication",
            ],
          },
          {
            category: "Exam & Career Preparation",
            items: [
              "PenTest+ Exam Domains Review",
              "Practice Questions & Labs",
              "Pentester Resume & Interview Prep",
            ],
          },
        ],

        projects: [
          "Post-Exploitation Analysis Report",
          "Professional Penetration Testing Report",
          "Capstone: End-to-End CompTIA PenTest+ Engagement",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the CompTIA PenTest+ course?",
        answer:
          "This course is ideal for cybersecurity professionals, ethical hackers, and analysts who want to move into penetration testing roles.",
      },
      {
        id: 2,
        question: "Is CompTIA PenTest+ beginner friendly?",
        answer:
          "No, it is an intermediate-level certification. Security+ or basic pentesting knowledge is recommended.",
      },
      {
        id: 3,
        question: "Does this course prepare for the PenTest+ exam?",
        answer:
          "Yes, it is fully aligned with the latest CompTIA PenTest+ exam objectives.",
      },
      {
        id: 4,
        question: "Will I get hands-on labs?",
        answer:
          "Yes, extensive real-world pentesting labs and attack simulations are included.",
      },
      {
        id: 5,
        question: "Will I receive a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s CompTIA PenTest+ Training Certificate.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "CompTIA PenTest+ Aligned Program",
      "Hands-on Ethical Hacking Labs",
      "Web, Network & AD Pentesting",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "indigo",
      gradient: "from-purple-600 to-indigo-600",
    },
  },
  {
    id: "palo-alto-firewall",
    slug: "palo-alto-firewall-training-course",
    isPopular: true,
    badge: "🔥 Palo Alto Firewall Specialist",

    // Basic Info
    title: "Palo Alto Firewall Configuration & Network Security Program",
    shortTitle: "Palo Alto Firewall",
    subtitle:
      "Master next-generation firewall security using Palo Alto Networks with hands-on policy management, App-ID, User-ID, NAT, VPN, and threat prevention.",
    description:
      "This program trains you on Palo Alto Networks next-generation firewall technology. You will learn firewall architecture, security zones, policies, App-ID, User-ID, Content-ID, NAT, VPNs, logging, threat prevention, and real-world enterprise firewall troubleshooting with practical labs.",

    // Course Meta
    duration: "1 Month (4 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 11999,
    originalPrice: 18999,
    discount: "37% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/palo-alto-firewall.jpg",
    heroImage: "/images/courses/palo-alto-firewall-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 170,
      rating: 4.9,
      reviews: 38,
      projectsCount: 3,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "4 Weeks", subtitle: "Focused Training" },
      { id: 2, icon: "projects", title: "3+", subtitle: "Hands-on Labs" },
      { id: 3, icon: "shield", title: "NGFW", subtitle: "Security Skills" },
      { id: 4, icon: "mentor", title: "Live", subtitle: "Mentor Support" },
      {
        id: 5,
        icon: "certificate",
        title: "Palo Alto",
        subtitle: "Firewall Certificate",
      },
      { id: 6, icon: "career", title: "SOC / Network", subtitle: "Job Ready" },
    ],

    // Technologies / Tools
    technologies: [
      "Palo Alto Networks Firewall",
      "PAN-OS",
      "App-ID",
      "User-ID",
      "Content-ID",
      "Security Zones",
      "Security Policies",
      "NAT",
      "Site-to-Site VPN",
      "Remote Access VPN",
      "Threat Prevention",
      "WildFire",
      "Panorama",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Palo Alto Firewall Certification",
        description:
          "Industry-focused certification for Palo Alto firewall training.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Hands-on Palo Alto Labs",
        description:
          "Configure real firewall rules, App-ID policies, NAT, and VPNs.",
        icon: "projects",
      },
      {
        id: 3,
        title: "SOC & Network Security Ready",
        description:
          "Prepare for Network Security Engineer and SOC Analyst roles.",
        icon: "placement",
      },
      {
        id: 4,
        title: "Live Mentor Support",
        description:
          "Real-time guidance during firewall configuration and labs.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Recorded Sessions",
        description:
          "Lifetime access to recorded classes and learning resources.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description:
          "Palo Alto firewall interview questions and scenario discussions.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Palo Alto Firewall Fundamentals & Configuration",
        weeks: "Weeks 1–4",
        color: "from-red-600 to-orange-600",
        icon: "firewall",

        topics: [
          {
            category: "Palo Alto Firewall Fundamentals",
            items: [
              "Introduction to Palo Alto Networks",
              "NGFW Architecture",
              "Security Zones & Interfaces",
              "PAN-OS Overview",
            ],
          },
          {
            category: "Policies, NAT & VPN",
            items: [
              "Security Policy Configuration",
              "App-ID & User-ID Concepts",
              "Source & Destination NAT",
              "Site-to-Site & Remote Access VPN",
            ],
          },
          {
            category: "Threat Prevention & Monitoring",
            items: [
              "Content-ID & Threat Prevention",
              "WildFire Overview",
              "Logging & Monitoring",
              "Basic Firewall Troubleshooting",
            ],
          },
        ],

        projects: [
          "Palo Alto Firewall Policy & NAT Lab",
          "VPN Configuration Case Study",
          "Firewall Logging & Threat Analysis Report",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join the Palo Alto Firewall course?",
        answer:
          "This course is ideal for networking students, SOC aspirants, system administrators, and cybersecurity professionals.",
      },
      {
        id: 2,
        question: "Do I need prior Palo Alto experience?",
        answer:
          "No prior experience is required. Basic networking knowledge is sufficient to start.",
      },
      {
        id: 3,
        question: "Is this course hands-on?",
        answer:
          "Yes, it includes real-world Palo Alto firewall configuration and security labs.",
      },
      {
        id: 4,
        question: "Is this useful for SOC roles?",
        answer:
          "Yes, Palo Alto firewall monitoring and threat prevention are core SOC skills.",
      },
      {
        id: 5,
        question: "Will I get a certificate?",
        answer:
          "Yes, you will receive HackPro Academy’s Palo Alto Firewall Certification.",
      },
      {
        id: 6,
        question: "Is EMI available?",
        answer: "Yes, EMI and installment options are available.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "Palo Alto NGFW Training",
      "App-ID, User-ID & Threat Prevention",
      "Real Firewall Configuration Labs",
      "Certificate Included",
    ],

    // Theme Colors
    theme: {
      primary: "red",
      gradient: "from-red-600 to-orange-600",
    },
  },
  {
    id: "cybersecurity-6-months",
    slug: "6-months-cyber-security-program",
    isPopular: true,
    badge: "🛡️ Best Cyber Security Program",

    // Basic Info
    title: "6 Months Cyber Security & Ethical Hacking Program",
    shortTitle: "Cyber Security Program",
    subtitle:
      "A job-oriented, practical cyber security and ethical hacking program from fundamentals to advanced red teaming, SOC, and incident response.",
    description:
      "Become a cyber security professional from scratch with hands-on labs, real-world attack simulations, blue team skills, and placement support.",

    // Course Meta
    duration: "6 Months (24 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    language: "Hindi + English",

    // Pricing
    price: 44999,
    originalPrice: 69999,
    discount: "35% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/cyber-security-program.jpg",
    heroImage: "/images/courses/cyber-security-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 380,
      rating: 4.9,
      reviews: 95,
      projectsCount: 12,
    },

    // Highlights
    highlights: [
      {
        id: 1,
        icon: "clock",
        title: "6 Months",
        subtitle: "Intensive Training",
      },
      {
        id: 2,
        icon: "projects",
        title: "12+",
        subtitle: "Practical Labs & Projects",
      },
      {
        id: 3,
        icon: "shield",
        title: "Offensive + Defensive",
        subtitle: "Skills",
      },
      { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentor Guidance" },
      {
        id: 5,
        icon: "placement",
        title: "100%",
        subtitle: "Placement Support",
      },
      { id: 6, icon: "internship", title: "Internship", subtitle: "Included" },
    ],

    // Technologies / Tools
    technologies: [
      "Kali Linux",
      "Linux",
      "Windows Server",
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "OWASP ZAP",
      "Hydra",
      "Nessus",
      "Splunk",
      "SIEM Tools",
      "Firewall & IDS/IPS",
      "VirtualBox / VMware",
      "AWS Security",
      "Docker Security",
      "Git & GitHub",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Cyber Security Certification",
        description:
          "Industry-recognized certificate for 6-month cyber security program.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Real Attack Labs",
        description:
          "Hands-on practice on real-world attack & defense scenarios.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Placement Support",
        description:
          "Job assistance for roles like SOC Analyst, Pentester, Security Analyst.",
        icon: "placement",
      },
      {
        id: 4,
        title: "1:1 Mentor Support",
        description:
          "Doubt-solving, profile guidance, and career roadmap discussions.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description:
          "Lifetime access to notes, tools list, and important resources.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description:
          "HR + technical interview prep, resume and LinkedIn optimization.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Cyber Security Fundamentals",
        weeks: "Weeks 1–4",
        color: "from-emerald-500 to-lime-500",
        icon: "fundamentals",
        topics: [
          {
            category: "Cyber Security Fundamentals (Module 1)",
            items: [
              "Introduction to Cybersecurity",
              "Indian Job Market Demand",
              "Roles and Career Paths in Cyber Security",
              "Linux Basics and Commands",
              "Basic Networking for Cybersecurity",
            ],
          },
          {
            category: "Security Concepts",
            items: [
              "CIA Triad (Confidentiality, Integrity, Availability)",
              "Types of Hackers (Black Hat, White Hat, Grey Hat)",
              "Types of Attacks (Malware, Phishing, DoS, Ransomware)",
            ],
          },
          {
            category: "Lab Setup",
            items: [
              "Installing VirtualBox / VMware",
              "Setting up Kali Linux & vulnerable machines",
              "Introduction to security distributions and tools",
            ],
          },
        ],
        projects: [
          "Cyber Security Career & Roadmap Report",
          "Basic Network & Linux Commands Lab",
        ],
      },
      {
        id: 2,
        month: "Month 2",
        title: "Networking, OS & System Security",
        weeks: "Weeks 5–8",
        color: "from-blue-500 to-cyan-500",
        icon: "network",
        topics: [
          {
            category: "Computer Networks for Security",
            items: [
              "OSI & TCP/IP Models",
              "IP Addressing, Subnetting, DNS, DHCP",
              "Ports, Protocols & Common Services",
              "Packet Flow & Routing Basics",
            ],
          },
          {
            category: "Linux & Windows Security",
            items: [
              "User & Permission Management",
              "File System Security & Logging",
              "Windows Security Basics & Group Policy",
            ],
          },
          {
            category: "Network Security Basics",
            items: [
              "Firewalls, IDS/IPS Concepts",
              "VPNs & Secure Tunneling",
              "Email & Web Security Basics",
            ],
          },
        ],
        projects: [
          "Network Scanning & Mapping Lab using Nmap",
          "Hardening a Linux System",
        ],
      },
      {
        id: 3,
        month: "Month 3",
        title: "Ethical Hacking & Vulnerability Assessment",
        weeks: "Weeks 9–12",
        color: "from-purple-500 to-pink-500",
        icon: "hacking",
        topics: [
          {
            category: "Ethical Hacking Methodology",
            items: [
              "Reconnaissance (Active & Passive)",
              "Footprinting & Information Gathering",
              "Scanning & Enumeration",
            ],
          },
          {
            category: "Vulnerability Assessment",
            items: [
              "Using tools like Nessus & OpenVAS",
              "Finding & validating vulnerabilities",
              "Reporting vulnerabilities ethically",
            ],
          },
          {
            category: "Password & Wireless Attacks",
            items: [
              "Password Cracking Basics (Hydra, John)",
              "Brute Force & Dictionary Attacks",
              "Wi-Fi Attacks (WEP/WPA concepts)",
            ],
          },
        ],
        projects: [
          "Complete Vulnerability Assessment Report",
          "Password Audit & Security Recommendations",
        ],
      },
      {
        id: 4,
        month: "Month 4",
        title: "Web Application & Network Penetration Testing",
        weeks: "Weeks 13–16",
        color: "from-red-500 to-orange-500",
        icon: "web",
        topics: [
          {
            category: "Web Application Security",
            items: [
              "OWASP Top 10 Overview",
              "SQL Injection, XSS, CSRF Basics",
              "Authentication & Session Attacks",
            ],
          },
          {
            category: "Burp Suite & Manual Testing",
            items: [
              "Proxy Setup & Traffic Interception",
              "Request Modification, Repeater & Intruder",
              "Finding common web vulnerabilities",
            ],
          },
          {
            category: "Network Penetration Testing",
            items: [
              "Exploitation with Metasploit Framework",
              "Post-Exploitation Basics",
              "Maintaining Access & Covering Tracks (theory)",
            ],
          },
        ],
        projects: [
          "Web Application Pentest Report",
          "Internal Network Pentest Simulation",
        ],
      },
      {
        id: 5,
        month: "Month 5",
        title: "Security Tools, SIEM & Cloud Security",
        weeks: "Weeks 17–20",
        color: "from-cyan-500 to-indigo-500",
        icon: "siem",
        topics: [
          {
            category: "Log Analysis & SIEM",
            items: [
              "Introduction to SIEM (Splunk / ELK Overview)",
              "Log Collection, Parsing & Correlation Concepts",
              "Basic Alert Rules & Dashboards",
            ],
          },
          {
            category: "Endpoint & Email Security",
            items: [
              "Antivirus, EDR Concepts",
              "Email Security & Phishing Analysis",
              "Data Loss Prevention Basics",
            ],
          },
          {
            category: "Cloud & Container Security (Overview)",
            items: [
              "Cloud Security Basics (AWS/Azure Overview)",
              "Identity & Access Management Concepts",
              "Basic Docker / Container Security Concepts",
            ],
          },
        ],
        projects: [
          "Security Incident Log Analysis Lab",
          "Basic Cloud Security Posture Review (theoretical case study)",
        ],
      },
      {
        id: 6,
        month: "Month 6",
        title: "SOC Operations, Incident Response & Capstone",
        weeks: "Weeks 21–24",
        color: "from-lime-500 to-green-500",
        icon: "capstone",
        topics: [
          {
            category: "SOC Analyst Skills",
            items: [
              "SOC Structure & Responsibilities",
              "Use Cases & Playbooks Basics",
              "Alert Triage & Escalation Workflow",
            ],
          },
          {
            category: "Incident Response Lifecycle",
            items: [
              "Preparation, Detection & Analysis",
              "Containment, Eradication, Recovery",
              "Post-Incident Review & Reporting",
            ],
          },
          {
            category: "Career & Interview Preparation",
            items: [
              "Cyber Security Resume & LinkedIn",
              "Portfolio Building with Reports & Labs",
              "Common Interview Questions for SOC / Pentest",
            ],
          },
        ],
        projects: [
          "Capstone 1: End-to-End Vulnerability Assessment & Pentest Report",
          "Capstone 2: SOC Incident Case Study & Response Plan",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who is this cyber security program for?",
        answer:
          "This program is designed for beginners, students, working professionals, and career switchers who want to start or grow a career in cyber security and ethical hacking.",
      },
      {
        id: 2,
        question: "Do I need prior technical or programming knowledge?",
        answer:
          "No. We start from basics such as Linux, networking, and security fundamentals. Basic computer knowledge is enough, and we guide you step-by-step.",
      },
      {
        id: 3,
        question: "What is the mode of training?",
        answer:
          "We offer both online and offline classes. Online classes are live with recordings provided, and offline batches are conducted at our Lucknow center.",
      },
      {
        id: 4,
        question: "Will I get placement assistance?",
        answer:
          "Yes, we provide 100% placement support including resume building, LinkedIn optimization, mock interviews, and job referrals for roles like SOC Analyst and Security Analyst.",
      },
      {
        id: 5,
        question: "What certification will I receive?",
        answer:
          "You will receive HackPro Academy's Cyber Security & Ethical Hacking Certification along with project reports and lab work to showcase to employers.",
      },
      {
        id: 6,
        question: "Is EMI or installment payment available?",
        answer:
          "Yes, we provide flexible EMI options. You can pay the fees in 3 or 6 monthly installments with easy and student-friendly plans.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "From Basics to Ethical Hacking",
      "12+ Hands-on Labs & Projects",
      "SOC & Pentest Oriented",
      "Industry-Recognized Certification",
    ],

    // Theme Colors
    theme: {
      primary: "lime",
      gradient: "from-emerald-400 to-lime-500",
    },
  },
  {
    id: "networking-for-cybersecurity",
    slug: "networking-for-cybersecurity-course",
    isPopular: true,
    badge: "🌐 Core Networking for Cybersecurity",

    // Basic Info
    title: "Networking for Cybersecurity",
    shortTitle: "Networking for Cybersec",
    subtitle:
      "Learn the essential networking concepts required to become a cyber security professional, including OSI, TCP/IP, subnetting, VLANs, ACLs, IDS/IPS, and firewalls.",
    description:
      "This course focuses on the core networking skills every cyber security engineer, SOC analyst, or ethical hacker must know. From network types and devices to IPv4/IPv6, VLANs, ACLs, NAT, port security, IDS/IPS, and firewall concepts, you will build a strong foundation with hands-on practice.",

    // Course Meta
    duration: "1 Month (4 Weeks)",
    mode: "Online / Offline",
    level: "Beginner Friendly",
    language: "Hindi + English",

    // Pricing
    price: 7999,
    originalPrice: 11999,
    discount: "33% OFF",
    emiAvailable: true,

    // Thumbnail/Images
    thumbnail: "/images/courses/networking-for-cybersecurity.jpg",
    heroImage: "/images/courses/networking-for-cybersecurity-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 220,
      rating: 4.8,
      reviews: 40,
      projectsCount: 3,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "4 Weeks", subtitle: "Focused Training" },
      { id: 2, icon: "projects", title: "3+", subtitle: "Practical Labs" },
      {
        id: 3,
        icon: "certificate",
        title: "Networking",
        subtitle: "Certificate",
      },
      { id: 4, icon: "mentor", title: "Live", subtitle: "Doubt Support" },
      { id: 5, icon: "placement", title: "Career", subtitle: "Cybersec Ready" },
      { id: 6, icon: "internship", title: "Pathway", subtitle: "to SOC / EH" },
    ],

    // Technologies / Tools
    technologies: [
      "TCP/IP",
      "IPv4",
      "IPv6",
      "Subnetting",
      "VLAN",
      "ACL",
      "NAT",
      "Switches",
      "Routers",
      "Firewalls",
      "IDS/IPS",
      "Wireshark",
      "Nmap",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Networking Certificate",
        description:
          "Course completion certificate focused on networking for cyber security.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Hands-on Networking Labs",
        description:
          "Realistic labs for subnetting, VLANs, ACLs, and basic firewall rules.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Foundation for Cybersecurity Courses",
        description:
          "Perfect starting point before SOC, ethical hacking, or advanced cyber security programs.",
        icon: "placement",
      },
      {
        id: 4,
        title: "Live Doubt Support",
        description: "Ask questions directly to mentors during or after class.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Recorded Sessions",
        description:
          "Get access to class recordings and notes for future revision.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview-Oriented Content",
        description:
          "Important networking questions asked in cyber security interviews.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 1,
        month: "Month 1",
        title: "Networking for Cybersecurity",
        weeks: "Weeks 1–4",
        color: "from-blue-500 to-cyan-500",
        icon: "networking",

        topics: [
          {
            // EXACTLY your handwritten topics
            category: "Core Networking for Cybersecurity",
            items: [
              "Network Types and Devices", // 2.1
              "OSI and TCP/IP Models", // 2.2
              "IPv4, Subnetting, IPv6", // 2.3
              "VLANs, ACL, NAT", // 2.4
              "Port Security", // 2.5
              "IDS/IPS Basics", // 2.6
              "Firewall Concepts", // 2.7
            ],
          },
          {
            category: "Practical Understanding",
            items: [
              "Identifying real devices: switches, routers, firewalls, access points",
              "Reading and understanding network diagrams",
              "Visualizing how packets move across OSI & TCP/IP layers",
              "Real-world examples of ACL, NAT and firewall usage",
            ],
          },
          {
            category: "Tools & Labs",
            items: [
              "Using Packet Tracer / GNS3 (conceptual or actual, as per lab setup)",
              "Basic scanning with Nmap",
              "Traffic capture and analysis with Wireshark",
              "Designing a small secure network for an office (mini project)",
            ],
          },
        ],

        projects: [
          "Design a Secure Small Office Network (with IP plan, subnetting & VLANs)",
          "Firewall and ACL Rule Planning Document",
          "Wireshark + Nmap Lab Report for Basic Network Analysis",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Who should join this Networking for Cybersecurity course?",
        answer:
          "Students, beginners, and professionals who want to build strong networking fundamentals specifically for cyber security, SOC analyst, or ethical hacking roles.",
      },
      {
        id: 2,
        question: "Do I need prior networking knowledge?",
        answer:
          "No, this course starts from basics like network types and devices and gradually moves to OSI, TCP/IP, IPv4/IPv6, VLANs, ACLs, and firewalls.",
      },
      {
        id: 3,
        question: "Is this course enough to start cyber security?",
        answer:
          "Yes, this course gives you the networking foundation needed for most cyber security and ethical hacking programs. It is an ideal first step.",
      },
      {
        id: 4,
        question: "Will I get recordings and notes?",
        answer:
          "Yes, you will get access to recorded sessions, notes, and reference diagrams for revision.",
      },
      {
        id: 5,
        question: "Is there any certificate?",
        answer:
          "Yes, after completing the course and assignments, you will receive HackPro Academy’s Networking for Cybersecurity certificate.",
      },
      {
        id: 6,
        question: "Can I pay in installments?",
        answer:
          "Yes, EMI options are available. You can pay the fee in 2 easy installments.",
      },
    ],

    // Card Features (for listing page)
    cardFeatures: [
      "Designed for Cybersecurity Aspirants",
      "All Core Networking Concepts",
      "Hands-on Labs & Tools",
      "Certificate Included",
    ],

    // Theme Colors
    theme: {
      primary: "blue",
      gradient: "from-blue-500 to-cyan-500",
    },
  },
  {
    id: "ethical-hacking-red-team",
    slug: "ethical-hacking-and-red-team-course",
    isPopular: true,
    badge: "🔥 Ethical Hacking + Red Team Special",

    // Basic Info
    title: "Ethical Hacking & Red Teaming",
    shortTitle: "Ethical Hacking",
    subtitle:
      "Master Ethical Hacking, Red Teaming, and Offensive Security with hands-on attack simulations, system hacking, web app exploitation, WiFi hacking, and more.",
    description:
      "A practical, attack-focused ethical hacking course covering information gathering, footprinting, system hacking, SQL injection, WiFi hacking, IoT hacking, social engineering, and red team strategies. Includes real-world labs and tools like Nmap, Metasploit, Hydra, Burp Suite, Nessus, and Wireshark.",

    // Course Meta
    duration: "1.5 Months (6 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 11999,
    originalPrice: 17999,
    discount: "33% OFF",
    emiAvailable: true,

    // Images
    thumbnail: "/images/courses/ethical-hacking.jpg",
    heroImage: "/images/courses/ethical-hacking-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 310,
      rating: 4.9,
      reviews: 70,
      projectsCount: 5,
    },

    // Highlights
    highlights: [
      {
        id: 1,
        icon: "clock",
        title: "6 Weeks",
        subtitle: "Intensive Training",
      },
      {
        id: 2,
        icon: "attack",
        title: "Red Team",
        subtitle: "Attack Simulations",
      },
      { id: 3, icon: "projects", title: "5+", subtitle: "Live Hacking Labs" },
      {
        id: 4,
        icon: "certificate",
        title: "Ethical Hacking",
        subtitle: "Certificate",
      },
      { id: 5, icon: "tools", title: "10+ Tools", subtitle: "Nmap, MSF, Burp" },
      { id: 6, icon: "mentor", title: "1:1", subtitle: "Doubt Support" },
    ],

    // Technologies / Tools (from your notebook + essential ones)
    technologies: [
      "Nmap",
      "Metasploit",
      "Hydra",
      "Nessus",
      "Burp Suite",
      "Wireshark",
      "John the Ripper",
      "Aircrack-ng",
      "Setoolkit",
      "Gobuster",
      "Nikto",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Ethical Hacking Certificate",
        description:
          "Earn an industry-recognized Ethical Hacking & Red Team certification.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Hands-on Red Team Labs",
        description:
          "Perform live attacks in guided lab environments with expert mentors.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Tool-Based Training",
        description:
          "Master essential tools like Metasploit, Hydra, Burp, and Wireshark.",
        icon: "tools",
      },
      {
        id: 4,
        title: "Cybersecurity Roadmap",
        description:
          "Guidance for becoming a Pentester, Red Teamer, or Bug Bounty Hunter.",
        icon: "mentor",
      },
      {
        id: 5,
        title: "Recorded Videos",
        description:
          "Lifetime access to recorded sessions, notes, and lab reports.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Interview Preparation",
        description:
          "Pentesting interview Q&A, reporting guidance, and resume support.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 3,
        month: "Month 1",
        title: "Ethical Hacking & Red Teaming",
        weeks: "Weeks 1–6",
        color: "from-red-500 to-orange-500",
        icon: "hacking",

        topics: [
          {
            category: "Ethical Hacking & Red Team (Module 3)",
            items: [
              "Information Gathering", // 3.1
              "Footprinting and Enumeration", // 3.2
              "System Hacking (Windows and Linux)", // 3.3
              "Web App Hacking", // 3.4
              "SQL Injection", // 3.5
              "Session Hijacking", // 3.6
              "DoS and DDoS", // 3.7
              "Malware Basics", // 3.8
              "WiFi and Mobile Hacking", // 3.9
              "IoT Hacking", // 3.10
              "Social Engineering", // 3.11
              "Honeypot and Firewall Bypass", // 3.12
            ],
          },
          {
            category: "Red Team Skills",
            items: [
              "Attack Lifecycle (Recon → Exploitation → Privilege Escalation → Persistence)",
              "Password Attacks using Hydra & John",
              "Privilege Escalation on Windows & Linux (conceptual)",
              "Pivoting & Tunneling (overview)",
              "Understanding Blue Team Countermeasures",
            ],
          },
          {
            category: "Tools You Will Use",
            items: [
              "Nmap – Scanning & Enumeration",
              "Metasploit Framework – Exploitation",
              "Hydra – Password Cracking",
              "Nessus – Vulnerability Scanning",
              "Burp Suite – Web App Testing",
              "Wireshark – Packet Analysis",
            ],
          },
        ],

        projects: [
          "Complete Web Application Pentest Report (SQLi, XSS, Enumeration)",
          "System Hacking Lab (Windows or Linux VM)",
          "WiFi Attack Simulation (handshake capture + cracking demo)",
          "Social Engineering Case Study",
          "Red Team Attack Simulation Documentation",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Do I need prior cybersecurity knowledge?",
        answer:
          "No, this ethical hacking course starts from basic reconnaissance and scanning concepts. Basic computer knowledge is enough.",
      },
      {
        id: 2,
        question: "Will I get practical hacking experience?",
        answer:
          "Yes! Every topic includes hands-on labs using tools like Nmap, Metasploit, Burp Suite, Hydra, and Wireshark.",
      },
      {
        id: 3,
        question: "Does this course include Red Team content?",
        answer:
          "Yes, it covers attack lifecycle, privilege escalation basics, lateral movement concepts, and bypassing security controls.",
      },
      {
        id: 4,
        question: "What career paths can I take after this course?",
        answer:
          "You can move toward roles such as Ethical Hacker, Penetration Tester, Red Team Trainee, or Bug Bounty Hunter.",
      },
      {
        id: 5,
        question: "Will I get the certificate?",
        answer:
          "Yes, after completing the labs and assignments, you will receive the HackPro Ethical Hacking & Red Team certificate.",
      },
      {
        id: 6,
        question: "Are installments available?",
        answer: "Yes, EMI options with 0% additional charges are available.",
      },
    ],

    // Card Features
    cardFeatures: [
      "Ethical Hacking Fundamentals",
      "Red Team Basic Attack Flows",
      "Hands-on Tools & Labs",
      "Industry Certification",
    ],

    // Theme Colors
    theme: {
      primary: "red",
      gradient: "from-red-500 to-orange-500",
    },
  },
  {
    id: "penetration-testing-bug-bounty",
    slug: "penetration-testing-and-bug-bounty-course",
    isPopular: true,
    badge: "🕵️ Advanced Web Pentesting + Bug Bounty",

    // Basic Info
    title: "Penetration Testing & Bug Bounty",
    shortTitle: "Pentesting & Bug Bounty",
    subtitle:
      "Master advanced web penetration testing, OWASP Top 10, Burp Suite, reconnaissance, and bug bounty automation with live projects.",
    description:
      "A practical and advanced course on web application penetration testing and bug bounty hunting. Learn OWASP Top 10, HTTP deep analysis, advanced Burp Suite, recon, subdomain enumeration, Nuclei automation, vulnerability scanning, and reporting with a final live web PT project.",

    // Course Meta
    duration: "1.5 Months (6 Weeks)",
    mode: "Online / Offline",
    level: "Intermediate to Advanced",
    language: "Hindi + English",

    // Pricing
    price: 14999,
    originalPrice: 19999,
    discount: "25% OFF",
    emiAvailable: true,

    // Images
    thumbnail: "/images/courses/pentesting-bugbounty.jpg",
    heroImage: "/images/courses/pentesting-bugbounty-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 260,
      rating: 4.9,
      reviews: 55,
      projectsCount: 4,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "https", title: "HTTP", subtitle: "Deep Understanding" },
      { id: 2, icon: "owasp", title: "OWASP", subtitle: "Top 10 Coverage" },
      { id: 3, icon: "burp", title: "Burp Suite", subtitle: "Advanced Usage" },
      { id: 4, icon: "bug", title: "Bug Bounty", subtitle: "Automation" },
      { id: 5, icon: "projects", title: "4+", subtitle: "Hack Labs" },
      {
        id: 6,
        icon: "certificate",
        title: "Certification",
        subtitle: "Included",
      },
    ],

    // Tools & Technologies
    technologies: [
      "Burp Suite",
      "Nuclei",
      "Subfinder",
      "Amass",
      "Dirsearch",
      "FFUF",
      "Nmap",
      "OWASP ZAP",
      "Wayback Machine",
      "Katana",
      "HTTP Toolkit",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "HackPro Pentesting Certificate",
        description: "Industry-recognized certificate for PT & Bug Bounty.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Advanced Recon Skills",
        description: "Learn deep recon, automation, and subdomain enumeration.",
        icon: "search",
      },
      {
        id: 3,
        title: "Bug Bounty Automation",
        description:
          "Use Nuclei and directory fuzzing tools to automate discovery.",
        icon: "automation",
      },
      {
        id: 4,
        title: "Real Web PT Project",
        description: "Work on a real live website for penetration testing.",
        icon: "projects",
      },
      {
        id: 5,
        title: "Lifetime Access",
        description: "Notes, scripts, recon tools, and recorded sessions.",
        icon: "lifetime",
      },
      {
        id: 6,
        title: "Reporting Skills",
        description: "Learn professional bug bounty and pentest reporting.",
        icon: "report",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 4,
        month: "Month 1",
        title: "Penetration Testing & Bug Bounty",
        weeks: "Weeks 1–6",
        color: "from-purple-500 to-indigo-500",
        icon: "bug-bounty",

        topics: [
          {
            category: "Penetration Testing & Bug Bounty (Module 4)",
            items: [
              "Web and Security Basics", // 4.1
              "HTTP Deep Dive", // 4.2
              "OWASP Top 10", // 4.3
              "Web Attacks", // 4.4
              "Burp Suite Advanced", // 4.5
              "Vulnerability Scanning", // 4.6
              "Recon and Subdomain Enumeration", // 4.7
              "Nuclei Automation", // 4.8
              "Bug Bounty Workflow", // 4.9
              "Reporting and Documentation", // 4.10
              "Final Live Web PT Project", // 4.11
            ],
          },
          {
            category: "Web Pentesting Skills",
            items: [
              "Understanding request-response lifecycle",
              "Fuzzing endpoints & directories",
              "Manually finding SQLi, XSS, CSRF, SSRF (overview)",
              "Authentication & Session-related vulnerabilities",
              "Bypassing common security filters",
            ],
          },
          {
            category: "Bug Bounty Recon & Automation",
            items: [
              "Passive Recon (OSINT, wayback, crt.sh, etc.)",
              "Active Recon (subdomain brute-force, port scans)",
              "Directory Fuzzing with FFUF/Dirsearch",
              "Automating scans with Nuclei",
              "Finding low-hanging fruits quickly",
            ],
          },
          {
            category: "Advanced Tools",
            items: [
              "Burp Suite: Intruder, Extender, Sequencer, Repeater Advanced",
              "Nuclei: Templates, Automating Vulnerability Discovery",
              "Subfinder & Amass: Subdomain Enumeration",
              "Katana: Crawling & URL extraction",
            ],
          },
        ],

        projects: [
          "Recon + Subdomain Enumeration Report",
          "Burp Suite Advanced Testing Lab",
          "Nuclei Automation Output + Fuzzing Report",
          "Final Web Penetration Testing Project (Live Website)",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Do I need ethical hacking knowledge before this?",
        answer:
          "Basic understanding of networking and cybersecurity is recommended. Prior ethical hacking knowledge is helpful but not mandatory.",
      },
      {
        id: 2,
        question: "Will I learn Burp Suite in depth?",
        answer:
          "Yes, you will learn advanced Burp Suite modules including Intruder, Repeater, Extender, Sequencer, and custom extensions.",
      },
      {
        id: 3,
        question: "Will I be able to do bug bounty after this course?",
        answer:
          "Absolutely! The course teaches complete bug bounty workflow including recon, automation, testing, and reporting.",
      },
      {
        id: 4,
        question: "Is there a final project?",
        answer:
          "Yes, you will perform a complete penetration test on a live website and submit a professional PT report.",
      },
      {
        id: 5,
        question: "Will I learn automation?",
        answer:
          "Yes, tools like Nuclei, FFUF, Subfinder, and Amass help automate bug bounty tasks.",
      },
      {
        id: 6,
        question: "Can I pay the fee in installments?",
        answer: "Yes, EMI options are available for this course.",
      },
    ],

    // Card Features
    cardFeatures: [
      "OWASP Top 10",
      "Bug Bounty Automation",
      "Advanced Burp Suite",
      "Live Web PT Project",
    ],

    // Theme Colors
    theme: {
      primary: "purple",
      gradient: "from-purple-500 to-indigo-500",
    },
  },
  {
    id: "soc-analyst-blue-team",
    slug: "soc-analyst-and-blue-team-course",
    isPopular: true,
    badge: "🔵 SOC Analyst + Blue Team Program",

    // Basic Info
    title: "SOC Analyst & Blue Team Program",
    shortTitle: "SOC Analyst",
    subtitle:
      "Learn SIEM, log monitoring, incident response, malware traffic analysis, forensics, MITRE ATT&CK, and SOC use cases with hands-on labs.",
    description:
      "This course prepares you for real SOC Analyst roles with practical training in SIEM (Wazuh/Splunk), log analysis, alerts, forensics, malware traffic analysis, MITRE ATT&CK, and SOC use case building. Ideal for Blue Team careers.",

    // Course Meta
    duration: "1 Month (4 Weeks)",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    language: "Hindi + English",

    // Pricing
    price: 12999,
    originalPrice: 18999,
    discount: "32% OFF",
    emiAvailable: true,

    // Images
    thumbnail: "/images/courses/soc-analyst.jpg",
    heroImage: "/images/courses/soc-analyst-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 180,
      rating: 4.9,
      reviews: 38,
      projectsCount: 4,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "siem", title: "SIEM Tools", subtitle: "Wazuh / Splunk" },
      { id: 2, icon: "alert", title: "Alert", subtitle: "Analysis" },
      { id: 3, icon: "incident", title: "Incident", subtitle: "Response" },
      { id: 4, icon: "forensics", title: "Digital", subtitle: "Forensics" },
      { id: 5, icon: "mitre", title: "MITRE", subtitle: "ATT&CK Mapping" },
      {
        id: 6,
        icon: "usecase",
        title: "SOC Use Cases",
        subtitle: "Realistic Labs",
      },
    ],

    // Tools & Technologies
    technologies: [
      "Wazuh",
      "Splunk",
      "ELK Stack",
      "Wireshark",
      "Suricata",
      "Zeek",
      "MITRE ATT&CK",
      "VirusTotal",
      "Any.Run",
      "TCPDump",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "SOC Analyst Certification",
        description: "Get certified as a Blue Team & SOC Analyst.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Real SIEM Experience",
        description:
          "Hands-on labs using Wazuh/Splunk with live log monitoring.",
        icon: "siem",
      },
      {
        id: 3,
        title: "Incident Handling Skills",
        description:
          "Learn step-by-step incident response and IR documentation.",
        icon: "incident",
      },
      {
        id: 4,
        title: "Forensics & Malware Basics",
        description:
          "Understand malware behavior & forensic investigation workflow.",
        icon: "forensics",
      },
      {
        id: 5,
        title: "SOC Use Case Building",
        description: "Create detection rules, alerts, and SOC playbooks.",
        icon: "usecase",
      },
      {
        id: 6,
        title: "Lifetime Notes & Recordings",
        description: "Access to notes, cheat sheets, and recording sessions.",
        icon: "lifetime",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 5,
        month: "Month 1",
        title: "SOC Analyst & Blue Team",
        weeks: "Weeks 1–4",
        color: "from-blue-500 to-indigo-500",
        icon: "blue-team",

        topics: [
          {
            category: "SOC Analyst & Blue Team (Module 5)",
            items: [
              "SIEM (Wazuh / Splunk)", // 5.1
              "Log Monitoring", // 5.2
              "Incident Response", // 5.3
              "Alert Analysis", // 5.4
              "Malware Traffic Analysis", // 5.5
              "Forensics Basics", // 5.6
              "MITRE ATT&CK", // 5.7
              "SOC Use Case Understanding", // 5.8
            ],
          },
          {
            category: "Blue Team Skills",
            items: [
              "Understanding SOC Architecture",
              "Detecting suspicious log patterns",
              "Triage levels (L1 → L2 → L3)",
              "Indicator of Compromise (IOC) Analysis",
              "How SOC teams respond to alerts",
            ],
          },
          {
            category: "Malware & Forensics Essentials",
            items: [
              "PCAP Analysis with Wireshark",
              "Basic malware traffic behavior",
              "Understanding file hashes (MD5/SHA256)",
              "Memory & disk forensic basics",
            ],
          },
          {
            category: "SIEM & MITRE Techniques",
            items: [
              "Creating Detection Rules",
              "Mapping alerts to MITRE ATT&CK",
              "Building simple SOC use cases",
              "Threat detection logic examples",
            ],
          },
        ],

        projects: [
          "Incident Response Report (IR Case Study)",
          "SIEM Log Monitoring Lab (Wazuh / Splunk)",
          "Malware Traffic PCAP Analysis Project",
          "MITRE ATT&CK Use Case Mapping Exercise",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Do I need prior experience for SOC Analyst?",
        answer:
          "No, this course is beginner-friendly. Basic cybersecurity or IT knowledge is helpful but not mandatory.",
      },
      {
        id: 2,
        question: "Will I learn a real SIEM tool?",
        answer:
          "Yes, you will work hands-on with SIEM tools like Wazuh or Splunk for log monitoring and alert analysis.",
      },
      {
        id: 3,
        question: "Is this useful for Blue Team careers?",
        answer:
          "Absolutely. This is a perfect starting point for SOC Analyst, Blue Team, or Digital Forensics roles.",
      },
      {
        id: 4,
        question: "Will I learn malware analysis?",
        answer:
          "Yes, you will learn malware traffic basics and how to analyze PCAP files.",
      },
      {
        id: 5,
        question: "What projects will I complete?",
        answer:
          "Projects include SIEM log monitoring, malware analysis, MITRE mapping, and an incident response report.",
      },
      {
        id: 6,
        question: "Can I pay the fee in EMI?",
        answer: "Yes, EMI options are available.",
      },
    ],

    // Card Features
    cardFeatures: [
      "SIEM (Wazuh/Splunk)",
      "Incident Response",
      "Malware & Forensics",
      "SOC Use Case Development",
    ],

    // Theme Colors
    theme: {
      primary: "blue",
      gradient: "from-blue-500 to-indigo-500",
    },
  },
  {
    id: "cloud-security-mini-module",
    slug: "cloud-security-mini-module",
    isPopular: false,
    badge: "☁️ Cloud Security Mini Module",

    // Basic Info
    title: "Cloud Security (Mini Module)",
    shortTitle: "Cloud Security",
    subtitle:
      "Learn the fundamentals of cloud security including AWS IAM, S3 Security, Shared Responsibility Model, and common misconfigurations.",
    description:
      "This mini module introduces cloud security essentials required for cybersecurity, SOC, and ethical hacking roles. Understand IAM, S3 security, shared responsibility, and how attackers exploit cloud misconfigurations in real-world environments.",

    // Course Meta
    duration: "1 Week",
    mode: "Online / Offline",
    level: "Beginner Friendly",
    language: "Hindi + English",

    // Pricing
    price: 3999,
    originalPrice: 6999,
    discount: "42% OFF",
    emiAvailable: false,

    // Images
    thumbnail: "/images/courses/cloud-security.jpg",
    heroImage: "/images/courses/cloud-security-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 140,
      rating: 4.8,
      reviews: 22,
      projectsCount: 1,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "cloud", title: "AWS", subtitle: "Security Basics" },
      { id: 2, icon: "shield", title: "IAM", subtitle: "Access Control" },
      {
        id: 3,
        icon: "alert",
        title: "Misconfigurations",
        subtitle: "Real-World Cases",
      },
      { id: 4, icon: "security", title: "S3", subtitle: "Bucket Security" },
      { id: 5, icon: "project", title: "1 Project", subtitle: "Mini Hands-on" },
    ],

    // Technologies
    technologies: [
      "AWS IAM",
      "S3 Security",
      "Shared Responsibility Model",
      "CloudTrail",
      "CloudWatch",
      "Identity & Access Control",
      "Cloud Misconfigurations",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "Cloud Security Certificate",
        description: "Get certified in cloud security fundamentals.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Understand Cloud Threats",
        description: "Learn common cloud attacks & misconfigurations.",
        icon: "threats",
      },
      {
        id: 3,
        title: "Practical AWS Concepts",
        description: "Basics of IAM, S3, and cloud monitoring tools.",
        icon: "aws",
      },
      {
        id: 4,
        title: "Cloud Career Booster",
        description:
          "Perfect add-on to SOC, cyber security, and ethical hacking courses.",
        icon: "career",
      },
      {
        id: 5,
        title: "Quick Completion",
        description: "Short 1-week module to boost cloud fundamentals.",
        icon: "clock",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 6,
        month: "Mini Module",
        title: "Cloud Security",
        weeks: "Week 1",
        color: "from-indigo-500 to-blue-500",
        icon: "cloud",

        topics: [
          {
            category: "Cloud Security (Mini Module)",
            items: [
              "Cloud Security Overview", // 6.1
              "Shared Responsibility Model", // 6.2
              "AWS IAM Basics", // 6.3
              "S3 Security Basics", // 6.4
              "Common Cloud Misconfigurations", // 6.5
            ],
          },
          {
            category: "Deep Cloud Concepts",
            items: [
              "IAM Users, Groups, Policies Overview",
              "Public vs Private S3 Buckets",
              "Cloud Misconfigurations used by Hackers",
              "Cloud Logging (CloudTrail & CloudWatch) Basics",
            ],
          },
          {
            category: "Real-world Cloud Security",
            items: [
              "How attackers exploit weak IAM permissions",
              "Impact of public S3 buckets",
              "Cloud data leaks case studies",
            ],
          },
        ],

        projects: ["AWS IAM & S3 Policy Review Mini Project"],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Is prior cloud knowledge required?",
        answer:
          "No, this is a beginner-friendly mini module for students and cybersecurity learners.",
      },
      {
        id: 2,
        question: "Do I need an AWS account?",
        answer:
          "Not mandatory. Demonstrations will be provided. If you want, you can use a free AWS account.",
      },
      {
        id: 3,
        question: "Will this help in cybersecurity roles?",
        answer:
          "Yes. Cloud security is essential for SOC, pentesting, and cyber security interviews.",
      },
      {
        id: 4,
        question: "Will I get a certificate?",
        answer:
          "Yes, after the module is completed, you will get a Cloud Security Fundamentals Certificate.",
      },
      {
        id: 5,
        question: "Can this be completed in 1 week?",
        answer:
          "Yes, this is designed as a fast-track cloud security foundation module.",
      },
    ],

    // Card Features
    cardFeatures: [
      "AWS Security Basics",
      "IAM + S3 Concepts",
      "Misconfigurations",
      "Mini Hands-on Project",
    ],

    // Theme Colors
    theme: {
      primary: "blue",
      gradient: "from-indigo-500 to-blue-500",
    },
  },
  {
    id: "python-for-cybersecurity",
    slug: "python-for-cybersecurity-course",
    isPopular: false,
    badge: "🐍 Python Automation for Cybersecurity",

    // Basic Info
    title: "Python for Cybersecurity",
    shortTitle: "Python for CyberSec",
    subtitle:
      "Learn Python scripting for cybersecurity, focusing on automation, log parsing, recon automation, and security tool development.",
    description:
      "A practical mini-module designed to teach Python scripting focused on cybersecurity tasks such as automation, log parsing, recon automation, and writing security-focused scripts. Ideal for SOC analysts, ethical hackers, and red team beginners.",

    // Course Meta
    duration: "1 Week",
    mode: "Online / Offline",
    level: "Beginner Friendly",
    language: "Hindi + English",

    // Pricing
    price: 2999,
    originalPrice: 5999,
    discount: "50% OFF",
    emiAvailable: false,

    // Images
    thumbnail: "/images/courses/python-cybersec.jpg",
    heroImage: "/images/courses/python-cybersec-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 160,
      rating: 4.9,
      reviews: 30,
      projectsCount: 2,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "python", title: "Python", subtitle: "Scripting Basics" },
      { id: 2, icon: "automation", title: "Security", subtitle: "Automation" },
      { id: 3, icon: "logs", title: "Log Parsing", subtitle: "Hands-on" },
      { id: 4, icon: "recon", title: "Recon", subtitle: "Automation" },
      { id: 5, icon: "project", title: "2 Projects", subtitle: "Included" },
    ],

    // Tools & Technologies
    technologies: [
      "Python",
      "Requests",
      "BeautifulSoup",
      "JSON & CSV Parsing",
      "OS & Sys Modules",
      "Regex",
      "Logging Module",
      "Subprocess Automation",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "Automation Skills",
        description: "Learn to automate cybersecurity tasks with Python.",
        icon: "automation",
      },
      {
        id: 2,
        title: "Practical Cyber Scripts",
        description:
          "Create real cybersecurity scripts: recon, log parsing & scanning.",
        icon: "script",
      },
      {
        id: 3,
        title: "Foundational Python",
        description:
          "Build Python basics needed for cyber roles and SOC tasks.",
        icon: "python",
      },
      {
        id: 4,
        title: "Hands-on Mini Projects",
        description:
          "Get practical experience through step-by-step coding tasks.",
        icon: "projects",
      },
      {
        id: 5,
        title: "Interview Advantage",
        description:
          "Python automation knowledge boosts cybersecurity job prospects.",
        icon: "interview",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 7,
        month: "Mini Module",
        title: "Python for Cybersecurity",
        weeks: "Week 1",
        color: "from-yellow-500 to-orange-500",
        icon: "python",

        topics: [
          {
            category: "Python for Cybersecurity (Module 7)",
            items: [
              "Python Basics", // 7.1
              "Automation Scripts", // 7.2
              "Log Parsing Automation", // 7.3
              "Recon Automation", // 7.4
            ],
          },
          {
            category: "Python Scripting Essentials",
            items: [
              "Variables, Loops, Conditions",
              "Reading/Writing Files",
              "Working with JSON & CSV",
              "Using OS, Sys & Subprocess modules",
              "Regex for log analysis",
            ],
          },
          {
            category: "Cybersecurity Automations",
            items: [
              "Parsing logs for errors, alerts & suspicious activity",
              "Auto directory scanning scripts",
              "Automated recon tool (subdomain check, HTTP status scan)",
              "Scraping public data for OSINT",
            ],
          },
        ],

        projects: [
          "Log Parsing Automation Script",
          "Recon Automation Python Tool",
        ],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Do I need coding experience?",
        answer:
          "No, this module starts from Python basics and gradually builds into cybersecurity scripting.",
      },
      {
        id: 2,
        question: "Will I be able to automate tasks?",
        answer:
          "Yes! You will build automation scripts for logs, recon, and basic scanning.",
      },
      {
        id: 3,
        question: "Is this module useful for SOC or Pentesting?",
        answer:
          "Absolutely. Python automation is highly valuable for SOC analysts, ethical hackers, and red teamers.",
      },
      {
        id: 4,
        question: "Will I get projects?",
        answer:
          "Yes, two hands-on projects are included: log parsing automation & recon automation.",
      },
      {
        id: 5,
        question: "Can I complete this in one week?",
        answer:
          "Yes, it is designed as a fast-track practical scripting module.",
      },
    ],

    // Card Features
    cardFeatures: [
      "Python Basics",
      "Cybersecurity Automation",
      "Log Parsing",
      "Recon Automation",
    ],

    // Theme Colors
    theme: {
      primary: "yellow",
      gradient: "from-yellow-500 to-orange-500",
    },
  },
  {
    id: "soft-skills-career-building",
    slug: "soft-skills-and-career-building-course",
    isPopular: false,
    badge: "🎯 Career Building Module",

    // Basic Info
    title: "Soft Skills & Career Building",
    shortTitle: "Career Building",
    subtitle:
      "Develop essential career skills including resume building, LinkedIn optimization, GitHub portfolio setup, interview preparation, and project showcase guidance.",
    description:
      "This module focuses on improving soft skills and preparing you for cybersecurity industry roles. Learn how to build a strong resume, optimize LinkedIn, create a professional GitHub portfolio, prepare for interviews, and present your projects confidently.",

    // Course Meta
    duration: "1 Week",
    mode: "Online / Offline",
    level: "Beginner Friendly",
    language: "Hindi + English",

    // Pricing
    price: 1999,
    originalPrice: 3999,
    discount: "50% OFF",
    emiAvailable: false,

    // Images
    thumbnail: "/images/courses/soft-skills.jpg",
    heroImage: "/images/courses/soft-skills-hero.jpg",

    // Stats
    stats: {
      studentsEnrolled: 210,
      rating: 4.8,
      reviews: 40,
      projectsCount: 1,
    },

    // Highlights
    highlights: [
      { id: 1, icon: "resume", title: "Resume", subtitle: "Optimization" },
      { id: 2, icon: "linkedin", title: "LinkedIn", subtitle: "Branding" },
      {
        id: 3,
        icon: "portfolio",
        title: "Portfolio",
        subtitle: "GitHub Setup",
      },
      { id: 4, icon: "interview", title: "Interview", subtitle: "Preparation" },
      { id: 5, icon: "showcase", title: "Project", subtitle: "Showcase Guide" },
    ],

    // Tools & Technologies
    technologies: [
      "LinkedIn Optimization",
      "GitHub Portfolio",
      "Resume Templates",
      "Mock Interview Tools",
      "Presentation Techniques",
    ],

    // Student Benefits
    benefits: [
      {
        id: 1,
        title: "Professional Resume",
        description:
          "Get guidance to create a clean, impactful, and job-ready resume.",
        icon: "resume",
      },
      {
        id: 2,
        title: "LinkedIn Branding",
        description:
          "Learn LinkedIn optimization techniques to increase recruiter visibility.",
        icon: "linkedin",
      },
      {
        id: 3,
        title: "GitHub Portfolio",
        description:
          "Set up a professional GitHub showcasing your cybersecurity and coding projects.",
        icon: "portfolio",
      },
      {
        id: 4,
        title: "Interview Confidence",
        description:
          "Prepare for HR and technical interviews with mock questions & tips.",
        icon: "interview",
      },
      {
        id: 5,
        title: "Project Showcase Skills",
        description:
          "Learn how to present your projects effectively in interviews.",
        icon: "showcase",
      },
    ],

    // Modules / Curriculum
    modules: [
      {
        id: 8,
        month: "Mini Module",
        title: "Soft Skills & Career Building",
        weeks: "Week 1",
        color: "from-pink-500 to-red-500",
        icon: "career",

        topics: [
          {
            category: "Soft Skills & Career Building (Module 8)",
            items: [
              "Resume & LinkedIn Optimization", // 8.1
              "Portfolio & GitHub Setup", // 8.2
              "Interview Preparation", // 8.3
              "Project Showcase Guidance", // 8.4
            ],
          },
          {
            category: "Career Skill Development",
            items: [
              "Professional profile building",
              "GitHub readme & project structuring",
              "Common HR and technical questions",
              "How to showcase cybersecurity projects",
              "Building personal branding for job search",
            ],
          },
          {
            category: "Communication Skills",
            items: [
              "Speaking confidently in interviews",
              "Email & message etiquette",
              "Storytelling for project explanation",
            ],
          },
        ],

        projects: ["Resume + GitHub Portfolio Setup Project"],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Is this module important?",
        answer:
          "Yes! Soft skills, resume quality, and professional branding are essential to crack interviews.",
      },
      {
        id: 2,
        question: "Will I get help building my resume?",
        answer:
          "Yes, you will create and optimize your resume with expert guidance.",
      },
      {
        id: 3,
        question: "Will this module help me get a job?",
        answer:
          "Absolutely. This module prepares you to present your skills, portfolio, and interviews professionally.",
      },
      {
        id: 4,
        question: "Do I need GitHub knowledge?",
        answer: "No, we will teach you how to set it up and use it properly.",
      },
      {
        id: 5,
        question: "Will I get a certificate?",
        answer:
          "Yes, you will receive a Soft Skills & Career Building Certificate.",
      },
    ],

    // Card Features
    cardFeatures: [
      "Resume Building",
      "LinkedIn Optimization",
      "GitHub Portfolio Setup",
      "Interview Preparation",
    ],

    // Theme Colors
    theme: {
      primary: "pink",
      gradient: "from-pink-500 to-red-500",
    },
  },
  // In src/data/coursesData.js - Update the free courses section

  // Free Courses (with all required properties)
  {
    id: "free-1",
    slug: "html-css-fundamentals",
    title: "HTML & CSS Fundamentals",
    shortTitle: "HTML & CSS",
    description:
      "Learn the building blocks of web development. Master HTML5 and CSS3 from scratch with hands-on projects.",
    subtitle: "Master HTML5 & CSS3 basics for web development",

    // Images
    thumbnail: "/images/courses/html-css.jpg",
    image: "/images/courses/html-css.jpg",
    heroImage: "/images/courses/html-css-hero.jpg",

    // Course Meta
    category: "Web Development",
    level: "Beginner",
    duration: "8 Hours",
    mode: "Online",
    language: "Hindi + English",

    // Pricing
    price: 0,
    originalPrice: 4999,
    discount: "100% OFF",
    isFree: true,
    emiAvailable: false,

    // Badges
    isPopular: true,
    isNew: false,
    isFeatured: true,
    badge: "✨ Free Course",

    // Instructor
    instructor: "John Smith",

    // Stats
    stats: {
      rating: 4.9,
      reviews: 2450,
      studentsEnrolled: 15000,
      projectsCount: 3,
    },
    rating: 4.9,
    reviewCount: 2450,
    enrollmentCount: 15000,
    totalLessons: 25,
    totalDuration: "8 hours",

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "8 Hours", subtitle: "Video Content" },
      { id: 2, icon: "projects", title: "3+", subtitle: "Projects" },
      { id: 3, icon: "certificate", title: "Free", subtitle: "Certificate" },
      { id: 4, icon: "lifetime", title: "Lifetime", subtitle: "Access" },
    ],

    // Technologies
    technologies: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],

    // Benefits
    benefits: [
      {
        id: 1,
        title: "Free Certificate",
        description: "Get a completion certificate at no cost.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Hands-on Projects",
        description: "Build 3 real projects to add to your portfolio.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Lifetime Access",
        description: "Access course content forever, learn at your pace.",
        icon: "lifetime",
      },
    ],

    // What You'll Learn
    whatYouWillLearn: [
      "HTML5 semantic elements",
      "CSS3 styling and layouts",
      "Responsive design basics",
      "Build 3 real projects",
    ],

    // Requirements
    requirements: [
      "No prior experience needed",
      "A computer with internet",
      "Eagerness to learn",
    ],

    // Card Features
    cardFeatures: [
      "HTML5 Fundamentals",
      "CSS3 Styling",
      "Responsive Design",
      "Free Certificate",
    ],

    // Theme
    theme: {
      primary: "orange",
      gradient: "from-orange-400 to-red-500",
    },

    // Modules
    modules: [
      {
        id: 1,
        month: "Week 1",
        title: "HTML Fundamentals",
        weeks: "Days 1-3",
        color: "from-orange-500 to-red-500",
        icon: "html",
        topics: [
          {
            category: "HTML Basics",
            items: [
              "Introduction to HTML",
              "HTML Document Structure",
              "Text Elements & Formatting",
              "Links and Images",
              "Lists and Tables",
            ],
          },
        ],
        projects: ["Personal Portfolio Page"],
      },
      {
        id: 2,
        month: "Week 2",
        title: "CSS Fundamentals",
        weeks: "Days 4-7",
        color: "from-blue-500 to-purple-500",
        icon: "css",
        topics: [
          {
            category: "CSS Basics",
            items: [
              "CSS Selectors",
              "Colors and Typography",
              "Box Model",
              "Flexbox Layout",
              "CSS Grid Basics",
            ],
          },
        ],
        projects: ["Responsive Landing Page"],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Is this course really free?",
        answer: "Yes! This course is 100% free with no hidden charges.",
      },
      {
        id: 2,
        question: "Will I get a certificate?",
        answer: "Yes, you will receive a free certificate upon completion.",
      },
      {
        id: 3,
        question: "Do I need any prior experience?",
        answer: "No, this course is designed for complete beginners.",
      },
    ],
  },
  {
    id: "free-2",
    slug: "javascript-basics-beginners",
    title: "JavaScript Basics for Beginners",
    shortTitle: "JavaScript Basics",
    description:
      "Start your programming journey with JavaScript. Learn variables, functions, loops, and DOM manipulation.",
    subtitle: "Learn JavaScript from scratch",

    // Images
    thumbnail: "/images/courses/javascript.jpg",
    image: "/images/courses/javascript.jpg",
    heroImage: "/images/courses/javascript-hero.jpg",

    // Course Meta
    category: "Programming",
    level: "Beginner",
    duration: "10 Hours",
    mode: "Online",
    language: "Hindi + English",

    // Pricing
    price: 0,
    originalPrice: 5999,
    discount: "100% OFF",
    isFree: true,
    emiAvailable: false,

    // Badges
    isPopular: true,
    isNew: false,
    isFeatured: true,
    badge: "✨ Free Course",

    // Instructor
    instructor: "Sarah Johnson",

    // Stats
    stats: {
      rating: 4.8,
      reviews: 1890,
      studentsEnrolled: 12000,
      projectsCount: 4,
    },
    rating: 4.8,
    reviewCount: 1890,
    enrollmentCount: 12000,
    totalLessons: 30,
    totalDuration: "10 hours",

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "10 Hours", subtitle: "Video Content" },
      { id: 2, icon: "projects", title: "4+", subtitle: "Projects" },
      { id: 3, icon: "certificate", title: "Free", subtitle: "Certificate" },
      { id: 4, icon: "lifetime", title: "Lifetime", subtitle: "Access" },
    ],

    // Technologies
    technologies: ["JavaScript", "ES6+", "DOM", "Events", "JSON"],

    // Benefits
    benefits: [
      {
        id: 1,
        title: "Free Certificate",
        description: "Get a completion certificate at no cost.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Hands-on Projects",
        description: "Build 4 interactive projects.",
        icon: "projects",
      },
      {
        id: 3,
        title: "Lifetime Access",
        description: "Access course content forever.",
        icon: "lifetime",
      },
    ],

    // What You'll Learn
    whatYouWillLearn: [
      "JavaScript fundamentals",
      "DOM manipulation",
      "Events and handlers",
      "Build interactive web pages",
    ],

    // Requirements
    requirements: ["Basic HTML & CSS knowledge", "Text editor installed"],

    // Card Features
    cardFeatures: [
      "JavaScript Basics",
      "DOM Manipulation",
      "Event Handling",
      "Free Certificate",
    ],

    // Theme
    theme: {
      primary: "yellow",
      gradient: "from-yellow-400 to-orange-500",
    },

    // Modules
    modules: [
      {
        id: 1,
        month: "Week 1",
        title: "JavaScript Fundamentals",
        weeks: "Days 1-4",
        color: "from-yellow-500 to-orange-500",
        icon: "javascript",
        topics: [
          {
            category: "JS Basics",
            items: [
              "Variables and Data Types",
              "Operators",
              "Control Structures",
              "Functions",
              "Arrays and Objects",
            ],
          },
        ],
        projects: ["Calculator App"],
      },
      {
        id: 2,
        month: "Week 2",
        title: "DOM & Events",
        weeks: "Days 5-7",
        color: "from-orange-500 to-red-500",
        icon: "dom",
        topics: [
          {
            category: "DOM Manipulation",
            items: [
              "Selecting Elements",
              "Modifying Elements",
              "Event Listeners",
              "Form Handling",
              "Local Storage",
            ],
          },
        ],
        projects: ["To-Do List App", "Quiz App"],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Is this course really free?",
        answer: "Yes! This course is 100% free with no hidden charges.",
      },
      {
        id: 2,
        question: "Do I need HTML/CSS knowledge?",
        answer: "Basic HTML & CSS knowledge is recommended but not required.",
      },
    ],
  },
  {
    id: "free-3",
    slug: "introduction-to-cybersecurity",
    title: "Introduction to Cybersecurity",
    shortTitle: "Intro to Cybersec",
    description:
      "Start your cybersecurity journey with this free introductory course. Learn basic concepts, threats, and career paths.",
    subtitle: "Free introduction to the world of cybersecurity",

    // Images
    thumbnail: "/images/courses/intro-cybersec.jpg",
    image: "/images/courses/intro-cybersec.jpg",
    heroImage: "/images/courses/intro-cybersec-hero.jpg",

    // Course Meta
    category: "Cybersecurity",
    level: "Beginner",
    duration: "6 Hours",
    mode: "Online",
    language: "Hindi + English",

    // Pricing
    price: 0,
    originalPrice: 3999,
    discount: "100% OFF",
    isFree: true,
    emiAvailable: false,

    // Badges
    isPopular: true,
    isNew: true,
    isFeatured: true,
    badge: "🔒 Free Security Course",

    // Instructor
    instructor: "HackPro Team",

    // Stats
    stats: {
      rating: 4.9,
      reviews: 850,
      studentsEnrolled: 8000,
      projectsCount: 2,
    },
    rating: 4.9,
    reviewCount: 850,
    enrollmentCount: 8000,
    totalLessons: 15,
    totalDuration: "6 hours",

    // Highlights
    highlights: [
      { id: 1, icon: "clock", title: "6 Hours", subtitle: "Video Content" },
      { id: 2, icon: "shield", title: "Security", subtitle: "Fundamentals" },
      { id: 3, icon: "certificate", title: "Free", subtitle: "Certificate" },
      { id: 4, icon: "career", title: "Career", subtitle: "Roadmap" },
    ],

    // Technologies
    technologies: [
      "Cybersecurity Basics",
      "Threat Types",
      "Security Tools",
      "Career Paths",
    ],

    // Benefits
    benefits: [
      {
        id: 1,
        title: "Free Certificate",
        description: "Get a completion certificate at no cost.",
        icon: "certificate",
      },
      {
        id: 2,
        title: "Career Guidance",
        description: "Learn about various cybersecurity career paths.",
        icon: "career",
      },
      {
        id: 3,
        title: "Foundation Course",
        description: "Perfect starting point for cybersecurity.",
        icon: "foundation",
      },
    ],

    // What You'll Learn
    whatYouWillLearn: [
      "What is Cybersecurity",
      "Types of Cyber Threats",
      "Security Fundamentals",
      "Career Paths in Cybersecurity",
    ],

    // Requirements
    requirements: [
      "No prior experience needed",
      "Basic computer knowledge",
      "Interest in security",
    ],

    // Card Features
    cardFeatures: [
      "Cybersecurity Basics",
      "Threat Landscape",
      "Career Guidance",
      "Free Certificate",
    ],

    // Theme
    theme: {
      primary: "cyan",
      gradient: "from-cyan-400 to-blue-500",
    },

    // Modules
    modules: [
      {
        id: 1,
        month: "Module 1",
        title: "Cybersecurity Fundamentals",
        weeks: "Lessons 1-8",
        color: "from-cyan-500 to-blue-500",
        icon: "security",
        topics: [
          {
            category: "Security Basics",
            items: [
              "What is Cybersecurity",
              "CIA Triad",
              "Types of Hackers",
              "Common Threats",
              "Security Best Practices",
            ],
          },
        ],
        projects: ["Security Assessment Checklist"],
      },
      {
        id: 2,
        month: "Module 2",
        title: "Career in Cybersecurity",
        weeks: "Lessons 9-15",
        color: "from-blue-500 to-indigo-500",
        icon: "career",
        topics: [
          {
            category: "Career Paths",
            items: [
              "SOC Analyst Role",
              "Ethical Hacker Role",
              "Security Engineer Role",
              "Required Skills",
              "Certifications Overview",
            ],
          },
        ],
        projects: ["Personal Career Roadmap"],
      },
    ],

    // FAQs
    faqs: [
      {
        id: 1,
        question: "Is this course really free?",
        answer: "Yes! This introductory course is 100% free.",
      },
      {
        id: 2,
        question: "Can I start cybersecurity after this?",
        answer:
          "Yes, this gives you the foundation to pursue advanced courses.",
      },
    ],
  },
];
// Add these improved helper functions at the end of coursesData.js

// Helper functions with error handling
export const getAllCourses = () => {
  return coursesData || [];
};

export const getFreeCourses = () => {
  return (
    coursesData.filter(
      (course) => course && (course.isFree || course.price === 0)
    ) || []
  );
};

export const getPaidCourses = () => {
  return (
    coursesData.filter(
      (course) => course && !course.isFree && course.price > 0
    ) || []
  );
};

export const getCourseBySlug = (slug) => {
  if (!slug) return null;
  return coursesData.find((course) => course && course.slug === slug) || null;
};

export const getCourseById = (id) => {
  if (!id) return null;
  return coursesData.find((course) => course && course.id === id) || null;
};

export const getPopularCourses = (limit = 6) => {
  return (
    coursesData
      .filter((course) => course && course.isPopular)
      .slice(0, limit) || []
  );
};

export const getFeaturedCourses = (limit = 6) => {
  return (
    coursesData
      .filter((course) => course && (course.isPopular || course.isFeatured))
      .slice(0, limit) || []
  );
};

export const getCoursesByCategory = (category) => {
  if (!category) return [];
  return (
    coursesData.filter(
      (course) =>
        course && course.category?.toLowerCase() === category.toLowerCase()
    ) || []
  );
};
