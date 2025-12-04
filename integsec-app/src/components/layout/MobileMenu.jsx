import React from 'react';
import SocialIcons from '../common/SocialIcons';
import { navLinks } from '../../data/navLinks';
import { contactInfo } from '../../data/contactInfo';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/98 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Menu Content */}
      <div className="relative h-full flex flex-col items-center justify-center pt-16">
        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              onClick={onClose}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-500 transform ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              } ${
                link.active
                  ? "text-lime-400"
                  : "text-gray-300 hover:text-lime-400 active:text-lime-400"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Login Button */}
        <div
          className={`mt-10 transition-all duration-500 transform ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: isOpen ? `${navLinks.length * 75}ms` : "0ms",
          }}
        >
          <button
            onClick={onClose}
            className="border-2 border-lime-400 text-lime-400 px-10 py-4 rounded-lg hover:bg-lime-400 hover:text-black transition-all duration-300 text-xl font-semibold"
          >
            Login
          </button>
        </div>

        {/* Social Links */}
        <div
          className={`mt-12 transition-all duration-500 transform ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: isOpen ? `${(navLinks.length + 1) * 75}ms` : "0ms",
          }}
        >
          <SocialIcons size="default" />
        </div>

        {/* Company Name */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 text-sm">
          <span className="text-lime-400">●</span> {contactInfo.companyName}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;