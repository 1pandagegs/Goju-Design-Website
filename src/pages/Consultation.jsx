import React, { useRef, useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaCalendarAlt, FaGlobe, FaArrowDown } from "react-icons/fa";

const Consultation = () => {
  const bookingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-16 pb-8 px-4 md:px-8 lg:px-16">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#B17F4A] text-white px-4 py-2 rounded text-sm font-medium mb-4 shadow-lg">
              <FaCalendarAlt className="animate-pulse text-sm" />
              Free Consultation Available
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#B17F4A] mb-4 leading-tight">
              Schedule Your Free Consultation
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl mx-auto leading-relaxed">
              We're excited to hear about your project! Book a time that works for you and we'll take it from there.
            </p>
            
            <button 
              onClick={scrollToBooking}
              className="group inline-flex items-center gap-2 bg-[#B17F4A] hover:bg-[#9A6B3A] text-white px-6 py-3 rounded font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Now
              <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300 text-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Contact Info Section */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-6">
                {/* Contact Details Card */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#B17F4A]/20 hover:shadow-xl transition-all duration-500">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-[#B17F4A] rounded-full flex items-center justify-center">
                        <FaPhoneAlt className="text-white text-sm" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Contact Details</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-[#B17F4A]/5 rounded-lg hover:bg-[#B17F4A]/10 transition-all duration-300 group">
                        <div className="w-8 h-8 bg-[#B17F4A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaPhoneAlt className="text-white text-xs" />
                        </div>
                        <span className="text-gray-700 font-medium text-base">+234 703 864 9237</span>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-[#B17F4A]/5 rounded-lg hover:bg-[#B17F4A]/10 transition-all duration-300 group">
                        <div className="w-8 h-8 bg-[#B17F4A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaEnvelope className="text-white text-xs" />
                        </div>
                        <span className="text-gray-700 font-medium text-base">info.gojudesign@gmail.com</span>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-[#B17F4A]/5 rounded-lg hover:bg-[#B17F4A]/10 transition-all duration-300 group">
                        <div className="w-8 h-8 bg-[#B17F4A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaGlobe className="text-white text-xs" />
                        </div>
                        <span className="text-gray-700 font-medium text-base">www.gojudesign.com</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-[#B17F4A] text-white p-6 rounded-xl shadow-lg">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                    <div className="absolute bottom-0 left-0 w-18 h-18 bg-white/10 rounded-full translate-y-9 -translate-x-9"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <FaCalendarAlt className="text-white text-xs" />
                        </div>
                        <h3 className="text-base font-bold">Ready to Start Your Project?</h3>
                      </div>
                      <p className="text-white/90 leading-relaxed text-sm">
                        Book a free consultation to discuss your design needs and goals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Card */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#B17F4A]/20 hover:shadow-xl transition-all duration-500">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#B17F4A] to-[#9A6B3A] rounded-full flex items-center justify-center">
                        <FaEnvelope className="text-white text-sm" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">Want to Contact Us Directly?</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      Prefer to reach out through our contact form? Get in touch with us directly and we'll respond as soon as possible.
                    </p>
                    
                    <a 
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B17F4A] to-[#9A6B3A] hover:from-[#9A6B3A] hover:to-[#8A5B2A] text-white px-6 py-3 rounded font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <FaEnvelope className="text-sm" />
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Section */}
            <div 
              ref={bookingRef} 
              className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#B17F4A]/20 hover:shadow-xl transition-all duration-500">
                <div className="bg-[#B17F4A] p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <FaCalendarAlt className="text-white text-sm" />
                    </div>
                    <h3 className="text-base font-bold text-white">Select Your Preferred Time</h3>
                  </div>
                </div>
                
                <div className="p-3">
                  <div className="relative overflow-hidden rounded-lg">
                    <iframe
                      src="https://calendly.com/info-gojudesign/30min"
                      width="100%"
                      height="500"
                      frameBorder="0"
                      className="w-full rounded-lg"
                      style={{ minHeight: '450px' }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <button
          onClick={scrollToBooking}
          className="w-12 h-12 bg-[#B17F4A] hover:bg-[#9A6B3A] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
        >
          <FaCalendarAlt className="text-base" />
        </button>
      </div>
    </div>
  );
};

export default Consultation;