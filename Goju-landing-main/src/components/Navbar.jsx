import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/goju-logo.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinkStyle = (path) =>
    `relative transition-all duration-300 group ${
      location.pathname === path 
        ? "text-[#B17F4A] font-semibold" 
        : "text-gray-600 hover:text-[#B17F4A]"
    }`;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/our-services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 font-exo transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
        : "bg-white shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50 group">
            <div className="relative">
              <img
                src={logo}
                alt="Goju Designs Logo"
                width="160"
                height="40"
                className="h-8 lg:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: '4/1' }}
              />
              <div className="absolute -inset-2 bg-[#B17F4A]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center gap-8 xl:gap-10 text-sm font-medium">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className={navLinkStyle(link.to)}>
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#B17F4A] transition-all duration-300 ${
                      location.pathname === link.to 
                        ? "w-full" 
                        : "w-0 group-hover:w-full"
                    }`}></span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <Link
              to="/consultation"
              className="ml-8 xl:ml-10 group relative overflow-hidden px-6 py-2.5 bg-[#B17F4A] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#A6723F] hover:shadow-lg hover:scale-105"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#B17F4A] to-[#A6723F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button 
              onClick={toggleMenu}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  menuOpen 
                    ? 'rotate-45 translate-x-[-50%] translate-y-[-50%]' 
                    : 'rotate-0 translate-x-[-50%] translate-y-[-8px]'
                }`}></span>
                <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  menuOpen 
                    ? 'opacity-0 translate-x-[-50%] translate-y-[-50%]' 
                    : 'opacity-100 translate-x-[-50%] translate-y-[-50%]'
                }`}></span>
                <span className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  menuOpen 
                    ? '-rotate-45 translate-x-[-50%] translate-y-[-50%]' 
                    : 'rotate-0 translate-x-[-50%] translate-y-[6px]'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute left-0 top-full w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100 transition-all duration-300 ${
        menuOpen 
          ? "opacity-100 translate-y-0 visible" 
          : "opacity-0 translate-y-[-10px] invisible"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                onClick={toggleMenu}
                className={`group flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? "text-[#B17F4A] bg-[#B17F4A]/5 border-l-4 border-[#B17F4A]"
                    : "text-gray-700 hover:text-[#B17F4A] hover:bg-[#B17F4A]/5"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    location.pathname === link.to
                      ? "bg-[#B17F4A] scale-100"
                      : "bg-gray-400 scale-75 group-hover:bg-[#B17F4A] group-hover:scale-100"
                  }`}></div>
                  {link.label}
                </div>
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                to="/consultation"
                onClick={toggleMenu}
                className="group flex items-center justify-center w-full px-6 py-3 bg-[#B17F4A] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#A6723F] hover:shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Consultation
                  <div className="w-2 h-2 bg-white/60 rounded-full group-hover:animate-bounce"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#B17F4A] to-[#A6723F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

    
    </nav>
  );
};

export default Navbar;