import React, { useEffect, useState, useRef } from "react";
import { FaStar, FaHandshake, FaLightbulb, FaHeart } from "react-icons/fa";

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

const OurValues = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const values = [
    {
      icon: <FaStar className="text-[#B17F4A] text-2xl sm:text-3xl" />,
      title: "Excellence",
      description: "We strive for perfection in every project we undertake",
    },
    {
      icon: <FaHandshake className="text-[#B17F4A] text-2xl sm:text-3xl" />,
      title: "Collaboration",
      description: "We work closely with our clients as true partners",
    },
    {
      icon: <FaLightbulb className="text-[#B17F4A] text-2xl sm:text-3xl" />,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions",
    },
    {
      icon: <FaHeart className="text-[#B17F4A] text-2xl sm:text-3xl" />,
      title: "Passion",
      description: "We love what we do and it shows in our work",
    },
  ];

  return (
    <section ref={ref} className="bg-white py-12 px-4 sm:px-6 md:px-20 text-center font-exo">
      <div className={`transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B17F4A] mb-10">
          Our Values
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {values.map((value, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center space-y-3 transition-all duration-700 ease-out hover:scale-105 ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 border-[#B17F4A] transition-all duration-300 hover:bg-[#B17F4A] hover:text-white group">
              <div className="transition-transform duration-300 group-hover:scale-110">
                {value.icon}
              </div>
            </div>
            <h3 className="text-[#B17F4A] font-semibold text-base sm:text-lg">{value.title}</h3>
            <p className="text-sm text-gray-700 max-w-[240px] mx-auto">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;