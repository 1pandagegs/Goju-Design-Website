// src/components/Footer.jsx
import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { FaThreads } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import gojuLogo from '../assets/goju-logo-white.png';

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    services: false,
    legal: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => {
      const newState = {
        quickLinks: false,
        services: false,
        legal: false
      };
      newState[section] = !prev[section];
      return newState;
    });
  };

  return (
    <footer className="bg-gradient-to-br from-[#B17F4A] via-[#A6723F] to-[#9B6538] text-white font-exo w-full relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      {/* CTA Section */}
      <div className="w-full relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white bg-gradient-to-r from-white via-white to-white/80 bg-clip-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-white text-[#B17F4A] hover:bg-white/95 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            Start Your Project
            <div className="w-2 h-2 bg-[#B17F4A] rounded-full group-hover:animate-bounce"></div>
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-white/10 w-full relative z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* GOJU Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={gojuLogo}
                    alt="Goju Logo"
                    className="max-w-[140px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="relative">
                <p className="text-sm opacity-90 mb-6 leading-relaxed text-white/90">
                  We craft exceptional digital experiences through innovative design, 
                  strategic thinking, and cutting-edge technology. Your brand deserves extraordinary.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-white/20 to-transparent rounded-full"></div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-white/90">Connect With Us</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: "https://x.com/gojudesigns?s=21&t=2MmXrfnpHULioIpxUNiLKA", icon: Twitter, label: "X" },
                  { href: "https://www.linkedin.com/company/gojudesign/", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://www.instagram.com/gojudesign?igsh=MWRzM3l5MHp3dnRsNA==", icon: Instagram, label: "Instagram" },
                  { href: "https://www.threads.com/@gojudesign?xmt=AQF0u-TQMInkH6IVeo_fdhIF6pmpxnttW945sR-oT9MYWKM", icon: FaThreads,  label: "Threads" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative w-10 h-10 bg-white/10 hover:bg-white text-white hover:text-[#B17F4A] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                    target="_blank" 
                    rel="noopener noreferrer"
                    title={social.label}
                  >
                    <social.icon size={18} />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <div 
                className="flex items-center justify-between sm:justify-start cursor-pointer sm:cursor-default group"
                onClick={() => toggleSection('quickLinks')}
              >
                <h3 className="font-semibold text-lg mb-0 sm:mb-4 text-white flex items-center gap-2">
                  Quick Links
                  <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                </h3>
                <div className="sm:hidden transition-transform duration-300" style={{
                  transform: openSections.quickLinks ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  <ChevronDown size={20} className="text-white/70" />
                </div>
              </div>
              <ul className={`space-y-3 text-sm transition-all duration-500 ease-in-out overflow-hidden ${
                openSections.quickLinks ? 'max-h-96 opacity-100 sm:max-h-none' : 'max-h-0 opacity-0 sm:max-h-none sm:opacity-100'
              }`}>
                {[
                  { to: "/", label: "Home" },
                  { to: "/our-services", label: "Our Services" },
                  { to: "/portfolio", label: "Portfolio" },
                  { to: "/about", label: "About Us" },
                  { to: "/contact", label: "Contact" }
                ].map((link, index) => (
                  <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                    <Link 
                      to={link.to} 
                      className="text-white/80 hover:text-white flex items-center gap-2 group relative py-1"
                    >
                      <div className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white group-hover:w-2 transition-all duration-300"></div>
                      {link.label}
                      <div className="absolute bottom-0 left-4 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <div 
                className="flex items-center justify-between sm:justify-start cursor-pointer sm:cursor-default group"
                onClick={() => toggleSection('services')}
              >
                <h3 className="font-semibold text-lg mb-0 sm:mb-4 text-white flex items-center gap-2">
                  Services
                  <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                </h3>
                <div className="sm:hidden transition-transform duration-300" style={{
                  transform: openSections.services ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  <ChevronDown size={20} className="text-white/70" />
                </div>
              </div>
              <ul className={`space-y-3 text-sm transition-all duration-500 ease-in-out overflow-hidden ${
                openSections.services ? 'max-h-96 opacity-100 sm:max-h-none' : 'max-h-0 opacity-0 sm:max-h-none sm:opacity-100'
              }`}>
                {[
                  { to: "/services/brand-identity", label: "Brand Identity" },
                  { to: "/services/web-design", label: "Web Design" },
                  { to: "/services/mobile-apps", label: "Mobile Apps" },
                  { to: "/services/digital-marketing", label: "Digital Marketing" },
                  { to: "/services/ui-ux-design", label: "UI/UX Design" },
                  { to: "/services/consulting", label: "Consulting" },
                  { to: "/services/ai-agent-building", label: "AI Agent Building" }
                ].map((service, index) => (
                  <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                    <Link 
                      to={service.to} 
                      className="text-white/80 hover:text-white flex items-center gap-2 group relative py-1"
                    >
                      <div className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white group-hover:w-2 transition-all duration-300"></div>
                      {service.label}
                      <div className="absolute bottom-0 left-4 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <div 
                className="flex items-center justify-between sm:justify-start cursor-pointer sm:cursor-default group"
                onClick={() => toggleSection('legal')}
              >
                <h3 className="font-semibold text-lg mb-0 sm:mb-4 text-white flex items-center gap-2">
                  Legal
                  <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                </h3>
                <div className="sm:hidden transition-transform duration-300" style={{
                  transform: openSections.legal ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  <ChevronDown size={20} className="text-white/70" />
                </div>
              </div>
              <ul className={`space-y-3 text-sm transition-all duration-500 ease-in-out overflow-hidden ${
                openSections.legal ? 'max-h-96 opacity-100 sm:max-h-none' : 'max-h-0 opacity-0 sm:max-h-none sm:opacity-100'
              }`}>
                {[
                  { to: "/faq", label: "FAQ" },
                  { to: "/privacy", label: "Privacy Policy" },
                  { to: "/terms-of-service", label: "Terms of Service" },
                  { to: "/cookie", label: "Cookie Policy" }
                ].map((legal, index) => (
                  <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
                    <Link 
                      to={legal.to} 
                      className="text-white/80 hover:text-white flex items-center gap-2 group relative py-1"
                    >
                      <div className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white group-hover:w-2 transition-all duration-300"></div>
                      {legal.label}
                      <div className="absolute bottom-0 left-4 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 w-full relative z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center sm:text-left text-white/70 flex items-center gap-2">
            <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
            © 2025 Goju Design Solutions Ltd. All rights reserved
          </div>
          <div className="flex flex-wrap gap-6 justify-center sm:justify-end">
            {[
              { to: "/faq", label: "FAQ" },
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms-of-service", label: "Terms of Service" },
              { to: "/cookie", label: "Cookie Policy" }
            ].map((link, index) => (
              <Link 
                key={index}
                to={link.to} 
                className="text-white/70 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;