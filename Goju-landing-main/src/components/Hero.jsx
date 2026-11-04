import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import videoBg from "../assets/gojudemo.mp4";

const Hero = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, experience: 0 });
  const statsRef = useRef(null);
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  // Counter animation function
  const animateCount = (start, end, duration, callback) => {
    const startTime = Date.now();
    const step = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      callback(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for stats counting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStartedCounting) {
          setHasStartedCounting(true);
          
          // Start counting animations with different durations
          setTimeout(() => {
            animateCount(0, 80, 2000, (value) => 
              setCounts(prev => ({ ...prev, projects: value }))
            );
          }, 800);

          setTimeout(() => {
            animateCount(0, 98, 2200, (value) => 
              setCounts(prev => ({ ...prev, satisfaction: value }))
            );
          }, 1000);

          setTimeout(() => {
            animateCount(0, 8, 1800, (value) => 
              setCounts(prev => ({ ...prev, experience: value }))
            );
          }, 1200);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasStartedCounting]);

  return (
    <section className="w-full min-h-screen pb-20 relative overflow-hidden text-white font-exo">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        width="1920"
        height="1080"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ aspectRatio: '16/9' }}
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-40 sm:pt-36 md:pt-40 space-y-6 sm:space-y-10 overflow-y-auto text-center">
        {/* Headline + Subtext */}
        <div className={`space-y-4 sm:space-y-6 max-w-4xl transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-extrabold leading-tight">
            Crafting Designs That Speak Your{" "}
            <span className="text-[#B17F4A]">Story</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 sm:px-6">
            We help founders and businesses transform ideas into stunning brands
            and seamless digital experiences. Crafting exceptional digital
            experiences through innovative design and strategic thinking.
            Your brand deserves extraordinary.
          </p>

          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto transform transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button
              onClick={() => navigate("/consultation")}
              className="bg-[#B17F4A] text-white px-5 py-3 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 rounded-md w-full sm:w-auto hover:bg-[#9d6939] transition-colors duration-300"
            >
              Book A Free Consultation <FaArrowRight />
            </button>
            <button
              onClick={() => navigate("/our-services")}
              className="border border-white px-5 py-3 text-sm font-semibold tracking-wide text-white bg-transparent flex items-center justify-center gap-3 rounded-md w-full sm:w-auto hover:bg-white hover:text-black transition-colors duration-300"
            >
              <FaPlay className="text-white group-hover:text-black transition-colors duration-300" />
              Learn More
            </button>
          </div>
        </div>

        {/* Stats Boxes */}
        <div 
          ref={statsRef}
          className={`flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-center pt-4 flex-wrap w-full transform transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {[
            { label: "Projects Completed", value: counts.projects, suffix: "+" },
            { label: "Clients Satisfaction", value: counts.satisfaction, suffix: "%" },
            { label: "Years Experience", value: counts.experience, suffix: "+" },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-white bg-opacity-5 border border-white border-opacity-10 px-8 py-6 rounded-2xl shadow-md w-full max-w-xs transition-all duration-1000 ease-out cursor-pointer hover:scale-105 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + i * 150}ms` }}
            >
              <h3 className="text-3xl font-extrabold text-[#B17F4A]">
                {item.value}{item.suffix}
              </h3>
              <p className="text-sm text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll to Explore */}
        <div
          className={`flex flex-col items-center gap-1 mt-6 cursor-pointer group transform transition-all duration-1000 ease-out delay-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          onClick={() => {
            const section = document.getElementById("our-services");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p className="text-sm text-gray-300">Scroll</p>
          <div className="w-[2px] h-14 bg-primary animate-blink" />
        </div>
      </div>
    </section>
  );
};

export default Hero;