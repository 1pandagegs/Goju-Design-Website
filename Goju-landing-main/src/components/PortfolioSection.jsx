import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import realEstateImg from "../assets/portfolioSection/real-estate-listing-platform.png";
import budgetImg from "../assets/portfolioSection/budget-management-system.png";
import floodAlertImg from "../assets/portfolioSection/flood-emergency-alert.png";
import dataCollectionImg from "../assets/portfolioSection/data-collection-app.png";
import healthTechImg from "../assets/portfolioSection/health-tech-platform.png";
import lmsImg from "../assets/portfolioSection/learning-management-system.png";

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

const PortfolioSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const portfolioSectionItems = [
    {
      id: 1,
      title: "Real Estate Listing Platform",
      description: "Property search platform UI for real estate companies.",
      image: realEstateImg,
      category: "Product Design",
      tags: ["Logo Design", "Brand Guidelines", "Web Design"]
    },
    {
      id: 2,
      title: "Budget Management System",
      description: "Expense tracking dashboard for financial planning tool.",
      image: budgetImg,
      category: "SaaS",
      tags: ["UI/UX", "Web Design", "Prototype"]
    },
    {
      id: 3,
      title: "Flood Emergency Alert",
      description: "Mobile app UI for emergency alerts and flood response.",
      image: floodAlertImg,
      category: "Mobile App",
      tags: ["Mobile App", "Prototype", "UI/UX"]
    },
    {
      id: 4,
      title: "Data Collection App (Redesign)",
      description: "Reimagined data entry interface for field researchers.",
      image: dataCollectionImg,
      category: "Mobile App",
      tags: ["Brand Identity", "Logo Design", "Photography"]
    },
    {
      id: 5,
      title: "Health Tech Platform",
      description: "UI redesign for hospital blood tracking and analytics.",
      image: healthTechImg,
      category: "Web Design",
      tags: ["Healthcare", "Platform", "Accessibility"]
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Gamified course and test interface for edtech startup.",
      image: lmsImg,
      category: "Product Design",
      tags: ["Conversion", "Mobile", "LMS"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-exo">
      {/* Portfolio Section */}
      <section ref={ref} className="py-16 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className={`text-center mb-10 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#B17F4A] mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Discover some of our recent projects that showcase our design expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioSectionItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-700 ease-out hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  width="400"
                  height="192"
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  style={{ aspectRatio: '400/192' }}
                />
                <span className="absolute top-3 left-3 bg-[#B17F4A] text-white text-xs px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full transition-colors duration-300 hover:bg-[#B17F4A] hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`max-w-6xl mx-auto flex justify-center sm:justify-md mt-8 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '900ms' }}>
          <Link
            to="/portfolio"
            className="inline-block bg-[#B17F4A] text-white font-semibold text-sm px-6 py-2 rounded-md hover:bg-[#a36e3f] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;