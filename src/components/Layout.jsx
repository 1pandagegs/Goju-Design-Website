// src/components/Layout.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Only show the back button on specific service detail paths
  const serviceIds = [
    "brand-identity",
    "ui-ux-design",
    "web-design",
    "mobile-apps",
    "digital-marketing",
    "consulting",
    "ai-agent-building",
  ];

  const shouldShowBackButton = serviceIds.some(id =>
    location.pathname.includes(id)
  );

  // Don't show floating contact button on contact page
  const shouldShowFloatingContactButton = !location.pathname.includes('/contact');

  // Check if we're on the home page
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="w-full min-h-screen font-exo flex flex-col m-0 p-0" style={{ margin: 0, padding: 0 }}>
      {/* Main content area */}
      <div className="flex-1 m-0 p-0">
        {/* Conditional padding and spacing based on page */}
        <div className={isHomePage ? "m-0 p-0" : "pt-24 px-4 md:px-20"}>
          {shouldShowBackButton && (
            <div className="mb-6">
              <button
                onClick={() => navigate(-1)}
                className="inline-block bg-[#B17F4A] text-white py-2 px-4 rounded-md shadow hover:bg-[#9d6e3f] transition duration-300"
              >
                ← Back
              </button>
            </div>
          )}
          {children}
        </div>
      </div>

      {/* Floating Contact Button - appears on all pages except contact */}
      {shouldShowFloatingContactButton && (
        <button
          onClick={handleContactClick}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-16 h-16 sm:w-14 sm:h-14 bg-[#B17F4A] hover:bg-[#9A6B3A] text-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
          aria-label="Contact Us"
        >
          <FaCommentDots className="text-xl sm:text-lg group-hover:animate-bounce" />
        </button>
      )}

      {/* Footer - Positioned at bottom with no spacing */}
      <Footer className="mt-0 mb-0 -mt-4" style={{ marginTop: '-1rem', marginBottom: 0, paddingBottom: 0 }} />
    </div>
  );
};

export default Layout;