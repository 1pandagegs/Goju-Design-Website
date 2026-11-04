import React, { useState, useEffect } from "react";
import badImage from "../assets/services/brandidentitydesign.jpg";
import uiImage from "../assets/services/uiux.jpg";
import webImage from "../assets/services/webdesign.jpg";
import mobileImage from "../assets/services/mobile.jpg";
import marketingImage from "../assets/services/marketing.jpg";
import consultingImage from "../assets/services/consulting.jpg";
import aiImage from "../assets/services/ai.jpg";

// Mock Link component for demonstration - replace with actual react-router-dom Link in your project
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

const ServiceCard = ({
  id,
  title,
  description,
  features,
  image,
  badge,
  isActive,
  onClick,
  index,
  isVisible,
}) => (
  <article
    className={`w-full bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:scale-105 ${
      isActive ? "ring-2 ring-[#B17F4A]" : ""
    } max-w-[500px] mx-auto transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}
    onClick={onClick}
    style={{ 
      transitionDelay: `${index * 150}ms`,
      animationDelay: `${index * 150}ms`
    }}
  >
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={`Preview of ${title} service`}
        className="w-full h-40 sm:h-80 object-cover transform hover:scale-110 transition-transform duration-700"
      />
      {badge && (
        <span className="absolute top-4 right-4 bg-[#B17F4A] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg hover:scale-110 transition-transform duration-300">
          {badge}
        </span>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3 transform hover:text-[#B17F4A] transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-800 mb-3 text-primary">
          What's Included:
        </h4>
        <ul className="space-y-2">
          {features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center text-sm text-gray-600 transform hover:translate-x-2 transition-transform duration-300"
            >
              <div className="w-1.5 h-1.5 bg-[#B17F4A] rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 mt-6">
        <Link to={`/services/${id}`} className="flex-[1.5]">
          <button className="w-full bg-[#B17F4A] text-white py-2 px-4 rounded font-medium hover:bg-[#9c6f3f] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Learn More
          </button>
        </Link>
        <Link to={`/contact?service=${encodeURIComponent(title)}`} className="flex-1">
          <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
            Get Quote
          </button>
        </Link>
      </div>
    </div>
  </article>
);

const ServicesPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: "brand-identity",
      title: <h1 className="text-md text-primary">Brand Identity</h1>,
      description:
        "Creating cohesive and memorable brand identities that resonate with your target audience and reflect your values.",
      features: ["Logo Design", "Typography", "Color Palette", "Brand Guidelines"],
      image: badImage,
      badge: "Brand",
    },
    {
      id: "ui-ux-design",
      title: <h1 className="text-md text-primary">UI/UX Design</h1>,
      description:
        "Designing seamless and intuitive interfaces to enhance user experience across all digital platforms.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      image: uiImage,
      badge: "Design",
    },
    {
      id: "web-design",
      title: <h1 className="text-md text-primary">Web Design</h1>,
      description:
        "Crafting responsive and engaging websites that blend aesthetics with functionality for a compelling web presence.",
      features: ["Responsive Layouts", "CMS Setup", "Landing Pages", "SEO Basics"],
      image: webImage,
      badge: "Web",
    },
    {
      id: "mobile-apps",
      title: <h1 className="text-md text-primary">Mobile Apps</h1>,
      description:
        "Building mobile applications that are both visually stunning and highly functional for iOS and Android.",
      features: ["Cross-Platform", "Smooth UX", "Fast Performance", "Notifications"],
      image: mobileImage,
      badge: "Mobile",
    },
    {
      id: "digital-marketing",
      title: <h1 className="text-md text-primary">Digital Marketing</h1>,
      description:
        "Driving traffic and increasing visibility through strategic online marketing tailored to your audience.",
      features: ["SEO", "Social Campaigns", "Content Strategy", "Analytics"],
      image: marketingImage,
      badge: "Marketing",
    },
    {
      id: "consulting",
      title: <h1 className="text-md text-primary">Consulting</h1>,
      description:
        "Offering expert advice and tailored strategies to help your business navigate the digital landscape with confidence.",
      features: ["Strategy Sessions", "Design Audits", "Optimization", "Roadmaps"],
      image: consultingImage,
      badge: "Consulting",
    },
    {
      id: "ai-agent-building",
      title: <h1 className="text-md text-primary">AI Agent Building</h1>,
      description:
        "We design intelligent, goal-driven AI agents that automate workflows. Improve customer interactions and enhance operational efficiency.",
      features: ["Intent & Workflow Design", "Custom AI Personalities", "Multilingual Support", "Perform Integration and Deployment"],
      image: aiImage,
      badge: "AI-Agent",
    },
  ];

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div 
        id="header" 
        data-animate 
        className={`bg-gradient-to-br from-white to-white py-12 sm:py-16 transition-all duration-1000 ${
          isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* "Our Services" Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-8 sm:mb-10 bg-gradient-to-r from-gray-900 via-[#B17F4A] to-gray-900 bg-clip-text text-transparent animate-gradient">
            Our Services
          </h1>

          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive design solutions to help your business stand
            out in a competitive digital world. Our services are tailored to
            meet the unique needs of your brand and audience.
          </p>

          <Link to="/consultation">
            <button className="bg-[#B17F4A] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-[#9c6f3f] transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl">
              Book A Free Consultation
            </button>
          </Link>
        </div>
        <style jsx>{`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            
            .animate-gradient {
              background-size: 200% 200%;
              animation: gradient 6s ease infinite;
            }
          `}</style>
      </div>

      {/* Services Grid */}
      <div 
        id="services-grid" 
        data-animate 
        className={`max-w-7xl mx-auto px-4 py-12 sm:py-16 transition-all duration-1000 delay-300 ${
          isVisible['services-grid'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              badge={service.badge}
              isActive={activeCard === service.id}
              onClick={() => handleCardClick(service.id)}
              index={index}
              isVisible={isVisible['services-grid']}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;