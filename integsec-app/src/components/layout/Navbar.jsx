import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobileUserMenuOpen, setIsMobileUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ==================== AUTH STATE ====================
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check authentication status on mount and when localStorage changes
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');
      
      if (token && userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setIsAuthenticated(true);
          setUser(parsedUser);
        } catch (error) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    window.addEventListener('authChange', checkAuth);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setIsAuthenticated(true);
        setUser(parsedUser);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileUserMenuOpen(false);
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  };

  const getUserInitials = () => {
    if (!user || !user.name) return 'U';
    const names = user.name.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return names[0][0].toUpperCase();
  };

  // Navigation Links Data
  const navLinks = [
    { id: 1, name: "Home", path: "/", hasDropdown: false },
    { id: 2, name: "Course", path: "/course", hasDropdown: false },
    { id: 3, name: "Our Free Courses", path: "/free-courses", hasDropdown: false },
    {
      id: 4,
      name: "Training & Placement",
      path: "/training",
      hasDropdown: true,
      subLinks: [
        { id: 41, name: "Training & Placement", path: "/training-placement" },
        { id: 42, name: "Certificate", path: "/training/certificate" },
        { id: 43, name: "Verify Certification", path: "/training/verify" },
      ],
    },
    { id: 5, name: "Blog", path: "/blog", hasDropdown: false },
    { id: 6, name: "Contact Us", path: "/contact", hasDropdown: false },
  ];

  // User Menu Links (when logged in)
  const userMenuLinks = [
    { 
      id: 1, 
      name: "Dashboard", 
      path: "/dashboard", 
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
    },
    { 
      id: 2, 
      name: "My Courses", 
      path: "/my-courses", 
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
    },
    { 
      id: 3, 
      name: "My Certificates", 
      path: "/my-certificates", 
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
    },
    { 
      id: 4, 
      name: "Profile Settings", 
      path: "/profile", 
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
    },
  ];

  // Social Links Data
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
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
    setIsUserMenuOpen(false);
    setIsMobileUserMenuOpen(false);
  }, [location]);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
        setIsMobileUserMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileDropdownOpen(false);
      setIsMobileUserMenuOpen(false);
    }
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
    setIsMobileUserMenuOpen(false);
  };

  const toggleMobileDropdown = (e) => {
    e.preventDefault();
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const toggleMobileUserMenu = (e) => {
    e.preventDefault();
    setIsMobileUserMenuOpen(!isMobileUserMenuOpen);
  };

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-lime-400/5'
            : 'bg-black/90 backdrop-blur-md'
        } border-b border-gray-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 z-50">
              <div className="px-2 py-1 sm:px-3 sm:py-2">
                <div className="relative">
                  <img
                    src={logo}
                    className="absolute inset-0 w-full blur-3xl opacity-60"
                    alt=""
                    aria-hidden="true"
                    style={{ filter: 'brightness(1.8)' }}
                  />
                  <img
                    src={logo}
                    className="absolute inset-0 w-full blur-xl opacity-70"
                    alt=""
                    aria-hidden="true"
                    style={{ filter: 'brightness(1.6)' }}
                  />
                  <img
                    src={logo}
                    className="absolute inset-0 w-full blur-md opacity-80"
                    alt=""
                    aria-hidden="true"
                    style={{ filter: 'brightness(1.4)' }}
                  />
                  <img
                    src={logo}
                    className="relative w-12 sm:w-14 md:w-16 rounded-md drop-shadow-[0_0_20px_#84cc16] drop-shadow-[0_0_10px_#84cc16]"
                    alt="HackPro Academy Logo"
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <div key={link.id} className="relative group">
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        className={`flex items-center gap-1 px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm xl:text-base ${
                          isActiveLink(link.path)
                            ? 'text-lime-400 bg-lime-400/10'
                            : 'text-gray-300 hover:text-lime-400 hover:bg-gray-800/50'
                        }`}
                      >
                        {link.name}
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isDropdownOpen ? 'rotate-180' : ''
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

                      <div
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        className={`absolute top-full left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-xl shadow-black/50 overflow-hidden transition-all duration-300 ${
                          isDropdownOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-lime-400/5 to-transparent pointer-events-none" />
                        <div className="relative py-2">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.id}
                              to={subLink.path}
                              onClick={() => setIsDropdownOpen(false)}
                              className={`flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
                                location.pathname === subLink.path
                                  ? 'text-lime-400 bg-lime-400/10'
                                  : 'text-gray-300 hover:text-lime-400 hover:bg-gray-800/50'
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-lime-400/10 border border-lime-400/30 flex items-center justify-center">
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
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <div className="font-medium">{subLink.name}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm xl:text-base ${
                        isActiveLink(link.path)
                          ? 'text-lime-400 bg-lime-400/10'
                          : 'text-gray-300 hover:text-lime-400 hover:bg-gray-800/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* ==================== AUTH SECTION (DESKTOP) ==================== */}
              <div className="flex items-center gap-2 ml-4">
                {isAuthenticated && user ? (
                  <div className="relative user-menu-container">
                    <button
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                    >
                      {user.avatar?.url ? (
                        <img
                          src={user.avatar.url}
                          alt={user.name}
                          className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-lime-400 object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-black font-bold text-sm border-2 border-lime-400">
                          {getUserInitials()}
                        </div>
                      )}
                      
                      <div className="hidden lg:block text-left">
                        <div className="text-xs md:text-sm font-medium text-white truncate max-w-[80px] md:max-w-[100px]">
                          {user.name?.split(' ')[0] || 'User'}
                        </div>
                        <div className="text-xs text-gray-400">
                          {user.role === 'admin' ? 'Admin' : 'Student'}
                        </div>
                      </div>
                      
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                          isUserMenuOpen ? 'rotate-180' : ''
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

                    {/* User Dropdown Menu */}
                    <div
                      className={`absolute top-full right-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-xl shadow-black/50 overflow-hidden transition-all duration-300 ${
                        isUserMenuOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="px-4 py-4 border-b border-gray-800 bg-gradient-to-r from-lime-400/10 to-transparent">
                        <div className="flex items-center gap-3">
                          {user.avatar?.url ? (
                            <img
                              src={user.avatar.url}
                              alt={user.name}
                              className="w-12 h-12 rounded-full border-2 border-lime-400 object-cover"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-black font-bold text-lg border-2 border-lime-400">
                              {getUserInitials()}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-white truncate">
                              {user.name || 'User'}
                            </div>
                            <div className="text-sm text-gray-400 truncate">
                              {user.email || ''}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="py-2">
                        {userMenuLinks.map((menuLink) => (
                          <Link
                            key={menuLink.id}
                            to={menuLink.path}
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-lime-400 hover:bg-gray-800/50 transition-all duration-300"
                          >
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
                                d={menuLink.icon}
                              />
                            </svg>
                            <span>{menuLink.name}</span>
                          </Link>
                        ))}
                      </div>

                      <div className="border-t border-gray-800 p-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-all duration-300"
                        >
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
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="px-4 xl:px-5 py-2 text-gray-300 hover:text-lime-400 transition-all duration-300 text-sm xl:text-base"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="bg-lime-400 text-black px-4 xl:px-6 py-2 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 text-sm xl:text-base shadow-lg shadow-lime-400/25"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-lime-400 focus:outline-none z-50"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-lime-400 rounded-full transform transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-lime-400 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-lime-400 rounded-full transform transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ==================== MOBILE MENU OVERLAY ==================== */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/98 backdrop-blur-xl"
          onClick={handleNavClick}
        />

        <div className="relative h-full flex flex-col pt-20 pb-8 overflow-y-auto">
          
          {/* ========== MOBILE USER INFO (if logged in) ========== */}
          {isAuthenticated && user && (
            <div
              className={`px-6 mb-4 transform transition-all duration-500 ${
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-4">
                <div className="flex items-center gap-4">
                  {user.avatar?.url ? (
                    <img
                      src={user.avatar.url}
                      alt={user.name}
                      className="w-14 h-14 rounded-full border-2 border-lime-400 object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-black font-bold text-xl border-2 border-lime-400">
                      {getUserInitials()}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-lg truncate">
                      {user.name || 'User'}
                    </div>
                    <div className="text-gray-400 text-sm truncate">
                      {user.email || ''}
                    </div>
                    <div className="text-lime-400 text-xs mt-1">
                      {user.role === 'admin' ? '👑 Admin' : '🎓 Student'}
                    </div>
                  </div>
                </div>

                {/* Mobile User Menu Toggle */}
                <button
                  onClick={toggleMobileUserMenu}
                  className="w-full mt-4 flex items-center justify-between px-4 py-3 bg-gray-800/50 rounded-lg text-gray-300 hover:text-lime-400 transition-all duration-300"
                >
                  <span className="font-medium">My Account</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isMobileUserMenuOpen ? 'rotate-180' : ''
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

                {/* Mobile User Menu Links */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isMobileUserMenuOpen ? 'max-h-96 mt-2' : 'max-h-0'
                  }`}
                >
                  <div className="space-y-1">
                    {userMenuLinks.map((menuLink) => (
                      <Link
                        key={menuLink.id}
                        to={menuLink.path}
                        onClick={handleNavClick}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          location.pathname === menuLink.path
                            ? 'text-lime-400 bg-lime-400/10'
                            : 'text-gray-400 hover:text-lime-400 hover:bg-gray-800/30'
                        }`}
                      >
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
                            d={menuLink.icon}
                          />
                        </svg>
                        <span className="font-medium">{menuLink.name}</span>
                      </Link>
                    ))}
                    
                    {/* Logout in dropdown */}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-all duration-300"
                    >
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
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <div className="flex flex-col px-6 space-y-2">
            {navLinks.map((link, index) => (
              <div
                key={link.id}
                className={`transform transition-all duration-500 ${
                  isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${(index + 1) * 75}ms` : '0ms',
                }}
              >
                {link.hasDropdown ? (
                  <div className="w-full">
                    <button
                      onClick={toggleMobileDropdown}
                      className={`w-full flex items-center justify-between text-lg font-semibold transition-all duration-300 py-3 px-4 rounded-lg ${
                        isActiveLink(link.path)
                          ? 'text-lime-400 bg-lime-400/10'
                          : 'text-gray-300 hover:bg-gray-800/50'
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isMobileDropdownOpen ? 'rotate-180' : ''
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

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileDropdownOpen ? 'max-h-60 mt-2' : 'max-h-0'
                      }`}
                    >
                      <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-2 ml-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.id}
                            to={subLink.path}
                            onClick={handleNavClick}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                              location.pathname === subLink.path
                                ? 'text-lime-400 bg-lime-400/10'
                                : 'text-gray-400 hover:text-lime-400'
                            }`}
                          >
                            <div className="w-6 h-6 rounded-md bg-lime-400/10 border border-lime-400/30 flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-lime-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4"
                                />
                              </svg>
                            </div>
                            <span className="text-base font-medium">
                              {subLink.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={handleNavClick}
                    className={`block text-lg font-semibold transition-all duration-300 py-3 px-4 rounded-lg ${
                      isActiveLink(link.path)
                        ? 'text-lime-400 bg-lime-400/10'
                        : 'text-gray-300 hover:text-lime-400 hover:bg-gray-800/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* ==================== MOBILE AUTH SECTION (Not logged in) ==================== */}
          {!isAuthenticated && (
            <div
              className={`flex flex-col items-center gap-4 mt-8 px-6 transform transition-all duration-500 ${
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${navLinks.length * 75 + 100}ms`
                  : '0ms',
              }}
            >
              <Link
                to="/login"
                onClick={handleNavClick}
                className="w-full max-w-xs text-center px-8 py-3 text-gray-300 border-2 border-gray-700 rounded-lg font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300 text-lg"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={handleNavClick}
                className="w-full max-w-xs text-center bg-lime-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-lime-300 transition-all duration-300 text-lg shadow-lg shadow-lime-400/25"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Social Links */}
          <div
            className={`flex items-center justify-center gap-4 mt-auto pt-8 transform transition-all duration-500 ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${navLinks.length * 75 + 200}ms`
                : '0ms',
            }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-all duration-300"
                aria-label={social.name}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>

          {/* Brand Name */}
          <div
            className={`text-center text-gray-600 text-sm mt-4 transform transition-all duration-500 ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${navLinks.length * 75 + 300}ms`
                : '0ms',
            }}
          >
            <span className="text-lime-400">●</span> HackPro Academy
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;