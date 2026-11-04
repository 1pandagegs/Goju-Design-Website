import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import Obinna from "../assets/testimonials/obinna.jpg";
import SarahJohnson from "../assets/testimonials/sarah.jpg";
import TariroMoyo from "../assets/testimonials/tariro.jpg";
import EmekaDaniels from "../assets/testimonials/emeka.jpg";
import LindaMensah from "../assets/testimonials/linda.jpg";
import JideOkonkwo from "../assets/testimonials/jide.jpg";

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

const testimonials = [
  {
    id: 1,
    name: "Obinna",
    role: "Founder of Lumos Tech",
    rating: 5,
    content: "Working with Goju Design Agency was a transformative experience. They truly understood our vision and brought it to life with exceptional creativity and attention to detail.",
    avatar: Obinna,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO of TechFlow",
    rating: 5,
    content: "Outstanding work! The team delivered beyond our expectations with innovative solutions and professional service throughout the entire project.",
    avatar: SarahJohnson,
  },
  {
    id: 3,
    name: "Tariro Moyo",
    role: "Product Lead at Zedware",
    rating: 4,
    content: "Goju brought clarity to our messy ideas. The final product was clean, effective, and on-brand.",
    avatar: TariroMoyo,
  },
  {
    id: 4,
    name: "Emeka Daniels",
    role: "CTO, NovaStack",
    rating: 5,
    content: "From UI to UX, everything was polished. Couldn't have asked for a better partner.",
    avatar: EmekaDaniels,
  },
  {
    id: 5,
    name: "Linda Mensah",
    role: "Founder of HealthPro",
    rating: 4,
    content: "Timely delivery and clean design. Goju's team just gets it.",
    avatar: LindaMensah,
  },
  {
    id: 6,
    name: "Jide Okonkwo",
    role: "Marketing Lead at Apex Fintech",
    rating: 5,
    content: "Sharp branding and user flows. Our conversions went up in weeks.",
    avatar: JideOkonkwo,
  },
];

const TestimonialsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[currentTestimonial];

  return (
    <section ref={ref} className="py-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text Side */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#B17F4A] mb-4">
            Voices of Trust and Satisfaction
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8">
            Real stories from clients who've experienced the Goju Design difference.
          </p>

          <div className="flex space-x-3">
            <button
              onClick={prevTestimonial}
              className="p-3 sm:p-4 bg-[#f4eee8] rounded-full hover:bg-[#e2d5c7] transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#B17F4A]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 sm:p-4 bg-[#f4eee8] rounded-full hover:bg-[#e2d5c7] transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#B17F4A]" />
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className={`bg-[#f9f5f2] rounded-3xl p-6 sm:p-8 shadow-lg border border-[#e2d5c7] relative transition-all duration-1000 ease-out hover:scale-105 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
        }`}>
          <div className="absolute top-3 right-4 text-5xl sm:text-6xl text-[#f4eee8] font-serif select-none">"</div>

          <div className="flex items-start space-x-4 mb-5">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-[#B17F4A] transition-transform duration-300 hover:scale-110"
            />

            <div>
              <h4 className="font-bold text-gray-800 text-base sm:text-lg">{t.name}</h4>
              <p className="text-gray-600 text-sm">{t.role}</p>
              <div className="flex space-x-1 mt-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B17F4A] text-[#B17F4A]" />
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{t.content}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;