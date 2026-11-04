import React, { useEffect, useState, useRef } from "react";
import davidImg from "../assets/meetourteam/david.png";
import tobiImg from "../assets/meetourteam/tobi.png";
import gegeImg from "../assets/meetourteam/gege.png";

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

const team = [
  {
    name: "Tobi Akerele",
    role: "Senior Product Designer",
    desc: "Passionate about creating user-centred digital experiences",
    img: tobiImg,
  },
  {
    name: "David Abraham",
    role: "Front-end Developer",
    desc: "Front-end developer specializing in modern web technologies.",
    img: davidImg,
  },
  {
    name: "Ayo Gegeoju",
    role: "AI Agent Builder",
    desc: "Passionate about building smart, user-focused AI solutions",
    img: gegeImg,
  },
];

const MeetOurTeam = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="py-12 px-4 sm:px-6 md:px-20 bg-white text-center font-exo">
      <div className={`transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B17F4A] mb-10">
          Meet Our Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {team.map((person, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 shadow-sm rounded-xl p-5 sm:p-6 transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full border-4 border-[#B17F4A] overflow-hidden transition-transform duration-300 hover:scale-110">
              <img
                src={person.img}
                alt={person.name}
                width="112"
                height="112"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
            <h3 className="text-[#B17F4A] text-lg sm:text-xl font-semibold mb-1">
              {person.name}
            </h3>
            <p className="text-sm text-gray-800 font-medium mb-1">{person.role}</p>
            <p className="text-xs text-gray-600 px-2">{person.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;