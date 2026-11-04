import React, { useRef, useState, useEffect } from "react";
import { FiPhone, FiMail, FiGlobe, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// Custom Threads Icon
const ThreadsIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 192 192" 
    className={className}
    fill="currentColor"
    aria-label="Threads"
  >
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.35 61.6848C97.4200 61.6848 97.4876 61.6866 97.5566 61.6879C110.987 61.7443 122.584 70.546 125.696 86.6853C124.427 86.3985 123.143 86.1273 121.846 85.8717C115.94 84.7181 109.446 84.0981 102.593 84.0981C78.3953 84.0981 59.7028 98.4174 59.7028 116.742C59.7028 135.067 78.3953 149.386 102.593 149.386C118.851 149.386 132.132 143.35 140.132 133.344C145.235 126.842 147.597 118.724 147.597 109.961C147.597 104.664 146.24 99.9129 143.813 95.9259C142.958 94.9306 142.026 93.9991 141.024 93.1429C141.188 91.3967 141.537 90.1382 141.537 88.9883Z"/>
  </svg>
);

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsIntersecting(true);
        setHasAnimated(true);
      }
    }, { threshold: 0.1, ...options });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return [elementRef, isIntersecting];
};

const ContactSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const navigate = useNavigate();

  return (
    <section ref={ref} className="w-full pb-0 px-6 md:px-20 bg-white text-black font-exo">
      <div className={`transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Let's Work Together</h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Ready to transform your business with exceptional design? Get in touch with us today and let us discuss how we can bring your vision to life.
        </p>
      </div>

      {/* Contact Cards - Three separate cards like "How to Reach Us" */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone Card */}
          <div className={`bg-white rounded-lg shadow-md p-6 text-center transition-all duration-700 ease-out hover:shadow-xl hover:scale-105 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="w-12 h-12 bg-[#B17F4A] rounded-full flex items-center justify-center mx-auto mb-4">
              <FiPhone className="text-white" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Call Us</h3>
            <a
              href="tel:+2347038649237"
              className="text-[#B17F4A] hover:text-[#9c6f3f] transition-colors duration-300 hover:underline font-medium text-sm"
            >
              +234 703 864 9237
            </a>
            <p className="text-gray-500 text-xs mt-1">Mon-Fri, 9AM - 6PM WAT</p>
          </div>

          {/* Email Card */}
          <div className={`bg-white rounded-lg shadow-md p-6 text-center transition-all duration-700 ease-out hover:shadow-xl hover:scale-105 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="w-12 h-12 bg-[#B17F4A] rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMail className="text-white" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Email Us</h3>
            <a
              href="mailto:Info.gojudesign@gmail.com"
              className="text-[#B17F4A] hover:text-[#9c6f3f] transition-colors duration-300 hover:underline font-medium text-sm"
            >
              info.gojudesign@gmail.com
            </a>
            <p className="text-gray-500 text-xs mt-1">We respond within 24 hours</p>
          </div>

          {/* Social Media Card */}
          <div className={`bg-white rounded-lg shadow-md p-6 text-center transition-all duration-700 ease-out hover:shadow-xl hover:scale-105 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="w-12 h-12 bg-[#B17F4A] rounded-full flex items-center justify-center mx-auto mb-4">
              <FiInstagram className="text-white" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">Follow Us</h3>
            <div className="flex justify-center space-x-3 mb-2">
              <a 
                href="https://www.threads.net/@gojudesign" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B17F4A] hover:text-white hover:bg-[#B17F4A] p-1.5 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Threads"
              >
                <ThreadsIcon size={16} />
              </a>
              <a 
                href="https://x.com/gojudesigns?s=21&t=2MmXrfnpHULioIpxUNiLKA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B17F4A] hover:text-white hover:bg-[#B17F4A] p-1.5 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Twitter/X"
              >
                <FiTwitter size={16} />
              </a>
              <a 
                href="https://www.instagram.com/gojudesign?igsh=MWRzM3l5MHp3dnRsNA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B17F4A] hover:text-white hover:bg-[#B17F4A] p-1.5 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <FiInstagram size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/company/gojudesign/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B17F4A] hover:text-white hover:bg-[#B17F4A] p-1.5 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Follow us on LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
            </div>
            <p className="text-gray-500 text-xs">Stay updated with our work</p>
          </div>
        </div>
      </div>

      {/* Contact Us Button - Centered below the cards */}
      <div className={`text-center mb-8 transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
      }`} style={{ transitionDelay: '500ms' }}>
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#B17F4A] hover:bg-[#9c6f3f] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-3 text-lg"
        >
          <FiMail size={20} />
          Contact Us
        </button>
      </div>


    </section>
  );
};

export default ContactSection;