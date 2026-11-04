import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaPaintBrush,
  FaLaptopCode,
  FaMobileAlt,
  FaIdBadge,
  FaBullhorn,
  FaHandsHelping,
} from "react-icons/fa";

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

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences tailored to your audience.",
    icon: <FaPaintBrush className="text-[#B17F4A] text-3xl" />,
    link: null,
  },
  {
    title: "Web Design",
    description: "Building visually stunning and highly responsive websites from scratch.",
    icon: <FaLaptopCode className="text-[#B17F4A] text-3xl" />,
    link: null,
  },
  {
    title: "Mobile Apps",
    description: "Designing high-performing mobile applications for Android and iOS platforms.",
    icon: <FaMobileAlt className="text-[#B17F4A] text-3xl" />,
    link: null,
  },
  {
    title: "Brand Identity",
    description: "Crafting a unique and memorable brand identity that stands out.",
    icon: <FaIdBadge className="text-[#B17F4A] text-3xl" />,
    link: null,
  },
  {
    title: "Digital Marketing",
    description: "Driving traffic and boosting online presence through effective marketing strategies.",
    icon: <FaBullhorn className="text-[#B17F4A] text-3xl" />,
    link: null,
  },
  {
    title: "Consulting",
    description: "Offering expert guidance to help your business scale and succeed.",
    icon: <FaHandsHelping className="text-[#B17F4A] text-3xl" />,
    link: null,
  },
];

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <section
      ref={ref}
      id="our-services"
      className="w-full pt-24 pb-16 px-6 md:px-20 bg-white text-black font-exo"
    >
      <div className={`transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#B17F4A] mb-4 text-center">
          Our Services
        </h2>

        <p className="text-center text-gray-700 mb-12">
          Tailored solutions crafted to bring your brand digital presence to life
          with purpose and impact.
        </p>
      </div>

      {/* Responsive grid with flex fallback on mobile */}
      <div className="max-w-6xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
        {services.map((service, index) => {
          const card = (
            <div
              key={index}
              className={`bg-white shadow-xl rounded-md p-8 space-y-4 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl min-w-[16rem] max-w-sm flex-shrink-0 z-10 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="transform transition-transform duration-300 hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#B17F4A]">{service.title}</h3>
              <p className="text-sm text-black">{service.description}</p>
            </div>
          );
          return service.link ? (
            <Link to={service.link} key={index}>
              {card}
            </Link>
          ) : (
            card
          );
        })}
      </div>

      {/* Centered button */}
      <div className={`max-w-6xl mx-auto flex justify-center transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`} style={{ transitionDelay: '900ms' }}>
        <Link
          to="/our-services"
          className="inline-block bg-[#B17F4A] text-white font-semibold text-sm px-5 py-2 rounded-md hover:bg-[#a36e3f] transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default Services;