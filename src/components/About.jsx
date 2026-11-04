import React, { useEffect, useState, useRef } from "react";

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

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="w-full py-12 px-4 sm:px-6 md:px-20 bg-white text-black font-exo">
      <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
      }`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#B17F4A] mb-6 leading-tight">
          About Goju Design Solutions
        </h2>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
          Goju Designs is a dynamic and versatile creative agency focused on delivering high-quality design
          solutions across UI/UX, branding, motion graphics, and animation. Founded to serve corporate brands—
          particularly in the solutions and IT space—Goju Designs leverages a combination of technical expertise,
          spontaneous creativity, and client-centric processes to solve key problems like poor digital presence and
          substandard design performance.
        </p>
      </div>
    </section>
  );
};

export default About;