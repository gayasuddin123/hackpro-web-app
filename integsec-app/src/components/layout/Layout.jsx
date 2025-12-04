import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const backgroundRef = useRef(null);

  // Background Animation
  useEffect(() => {
    const words = [
      "5cr6e", "Sorge", "b2c6gt", "FLG83a", "brZ6eT", "sFJsgm",
      "cnEqsVP", "64763xn", "us6aC4", "rEEe61a", "n90Y6", "64763xn",
    ];

    if (backgroundRef.current) {
      backgroundRef.current.innerHTML = "";

      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.style.position = "absolute";
        span.style.color = "#84cc16";
        span.style.fontFamily = "monospace";
        span.style.fontWeight = "600";
        span.style.left = `${Math.random() * 100}%`;
        span.style.fontSize = `${Math.random() * 20 + 30}px`;
        span.style.textShadow = "0 0 10px rgba(132, 204, 22, 0.5)";
        span.style.animation = `scrollDown 15s linear infinite ${index * 0.5}s`;
        backgroundRef.current.appendChild(span);
      });
    }

    const style = document.createElement("style");
    style.id = "scroll-animation";
    style.textContent = `
      @keyframes scrollDown {
        0% { transform: translateY(-100px); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
    `;

    if (!document.getElementById("scroll-animation")) {
      document.head.appendChild(style);
    }

    return () => {
      const existingStyle = document.getElementById("scroll-animation");
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Background Animation */}
      <div
        ref={backgroundRef}
        className="fixed top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none z-0"
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;