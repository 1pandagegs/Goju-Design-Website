import React, { useState, useEffect } from 'react';
import { User, Calendar, X, ExternalLink, Globe, Palette } from 'lucide-react';

// Import portfolio images
import realEstatePlatform from '../assets/portfolio/real-estate-platform.jpg';
import budgetManagement from '../assets/portfolio/budget-management.jpg';
import floodAlert from '../assets/portfolio/floodaid.png';
import dataCollection from '../assets/portfolio/data-collection.jpg';
import healthTech from '../assets/portfolio/health-tech.jpg';
import learningManagement from '../assets/portfolio/learning-management.jpg';
import fashionEcommerce from '../assets/portfolio/fashion-ecommerce.jpg';
import restaurantBooking from '../assets/portfolio/restaurant-booking.jpg';
import financialDashboard from '../assets/portfolio/financial-dashboard.jpg';
import smartHome from '../assets/portfolio/smart-home.jpg';
import corporateIdentity from '../assets/portfolio/corporate-identity.jpg';
import aiContent from '../assets/portfolio/ai-content.jpg';

// Import expanded images
import realEstateExpanded from '../assets/portfolioexpand/real-estate-platform.jpg';
import budgetManagementExpanded from '../assets/portfolioexpand/budget-management.jpg';
import floodAlertExpanded from '../assets/portfolioexpand/flood-alert.jpg';
import dataCollectionExpanded from '../assets/portfolioexpand/data-collection.jpg';
import healthTechExpanded from '../assets/portfolioexpand/health-tech.jpg';
import learningManagementExpanded from '../assets/portfolioexpand/learning-management.jpg';
import fashionEcommerceExpanded from '../assets/portfolioexpand/fashion-ecommerce.jpg';
import restaurantBookingExpanded from '../assets/portfolioexpand/restaurant-booking.jpg';
import financialDashboardExpanded from '../assets/portfolioexpand/financial-dashboard.jpg';
import smartHomeExpanded from '../assets/portfolioexpand/smart-home.jpg';
import corporateIdentityExpanded from '../assets/portfolioexpand/corporate-identity.jpg';
import aiContentExpanded from '../assets/portfolioexpand/ai-content.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Real Estate Listing Platform",
      description: "Property search platform UI for real estate companies.",
      image: realEstatePlatform,
      category: "Web Design",
      client: "Home & Abroad",
      year: "2024",
      tags: ["Logo Design", "Brand Guidelines", "Web Design"],
      expandedImage: realEstateExpanded,
      fullDescription: "A comprehensive real estate platform designed to streamline property search and listing management. The platform features advanced filtering capabilities, interactive maps, virtual tours, and seamless integration with CRM systems. Built with modern web technologies to ensure optimal performance across all devices.",
      features: [
        "Advanced property search with multiple filters",
        "Interactive map integration with property pins",
        "Virtual tour functionality",
        "CRM integration for lead management",
        "Mobile-responsive design",
        "Real-time property updates"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      projectUrl: "#",
      duration: "3 months"
    },
    {
      id: 2,
      title: "Budget Management System",
      description: "Expense tracking dashboard for financial planning tool.",
      image: budgetManagement,
      category: "Web Design",
      client: "BMS",
      year: "2024",
      tags: ["UI/UX", "Web Design", "Prototype"],
      expandedImage: budgetManagementExpanded,
      fullDescription: "A comprehensive budget management system that helps users track expenses, set financial goals, and manage their personal finances. The platform features intuitive dashboards, spending analytics, budget categories, and automated expense tracking with bank integration.",
      features: [
        "Real-time expense tracking and categorization",
        "Interactive budget planning tools",
        "Financial goal setting and progress tracking",
        "Bank account integration and synchronization",
        "Spending analytics and insights",
        "Bill reminders and notifications"
      ],
      technologies: ["Vue.js", "Chart.js", "Node.js", "PostgreSQL", "Stripe API"],
      projectUrl: "#",
      duration: "2 months"
    },
    {
      id: 3,
      title: "Flood Emergency Alert",
      description: "Mobile app UI for emergency alerts and flood response.",
      image: floodAlert,
      category: "Mobile App",
      client: "FloodAid",
      year: "2024",
      tags: ["Mobile App", "Prototype", "UI/UX"],
      expandedImage: floodAlertExpanded,
      fullDescription: "A critical emergency response mobile application designed to provide real-time flood alerts and emergency response coordination. The app integrates with weather services, local authorities, and community networks to deliver timely warnings and evacuation guidance.",
      features: [
        "Real-time flood warning notifications",
        "GPS-based location tracking and alerts",
        "Emergency contact integration",
        "Evacuation route planning",
        "Community reporting system",
        "Offline emergency information access"
      ],
      technologies: ["React Native", "Firebase", "Google Maps API", "Weather API", "Push Notifications"],
      projectUrl: "#",
      duration: "4 months"
    },
    {
      id: 4,
      title: "Data Collection App (Redesign)",
      description: "Complete branding package for upscale dining experience.",
      image: dataCollection,
      category: "Mobile App",
      client: "MCIT",
      year: "2024",
      tags: ["Brand Identity", "Logo Design", "Photography"],
      expandedImage: dataCollectionExpanded,
      fullDescription: "A comprehensive redesign of a data collection application for field research and surveys. The app streamlines data gathering processes with intuitive forms, offline capabilities, and seamless data synchronization for research teams and organizations.",
      features: [
        "Customizable survey forms and questionnaires",
        "Offline data collection capabilities",
        "Photo and audio recording integration",
        "GPS location tagging",
        "Data validation and quality checks",
        "Cloud synchronization and backup"
      ],
      technologies: ["Flutter", "SQLite", "Firebase", "Google Cloud", "Camera API"],
      projectUrl: "#",
      duration: "3 months"
    },
    {
      id: 5,
      title: "Health Tech Platform",
      description: "Healthcare management platform with patient portal.",
      image: healthTech,
      category: "Web Design",
      client: "Hema Trackr",
      year: "2024",
      tags: ["Healthcare", "Platform", "Accessibility"],
      expandedImage: healthTechExpanded,
      fullDescription: "A comprehensive healthcare management platform designed to connect patients, healthcare providers, and medical institutions. The platform includes patient portals, appointment scheduling, medical records management, and telemedicine capabilities with full HIPAA compliance.",
      features: [
        "Patient portal with medical history access",
        "Appointment scheduling and management",
        "Telemedicine video consultation",
        "Prescription management and refills",
        "Lab results and medical imaging viewer",
        "HIPAA-compliant secure messaging"
      ],
      technologies: ["Angular", "Node.js", "MongoDB", "WebRTC", "HIPAA Security"],
      projectUrl: "#",
      duration: "6 months"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Gamified course and test interface for edtech startup.",
      image: learningManagement,
      category: "Web Design",
      client: "SYDAAR",
      year: "2024",
      tags: ["conversion", "Mobile", "LMS"],
      expandedImage: learningManagementExpanded,
      fullDescription: "An innovative learning management system with gamification elements designed to enhance student engagement and learning outcomes. The platform includes interactive courses, progress tracking, assessments, and social learning features.",
      features: [
        "Gamified learning paths with achievements",
        "Interactive course content and quizzes",
        "Progress tracking and analytics",
        "Social learning and discussion forums",
        "Mobile-responsive design",
        "Multi-media content support"
      ],
      technologies: ["React", "Redux", "Node.js", "MySQL", "WebSocket"],
      projectUrl: "#",
      duration: "5 months"
    },
    {
      id: 7,
      title: "E-commerce Fashion Store",
      description: "Modern online store with seamless shopping experience.",
      image: fashionEcommerce,
      category: "Web Design",
      client: "StyleHub",
      year: "2024",
      tags: ["E-commerce", "UI/UX", "Mobile Responsive"],
      expandedImage: fashionEcommerceExpanded,
      fullDescription: "A modern e-commerce platform specializing in fashion retail with advanced product filtering, virtual try-on features, and personalized shopping experiences. The platform includes inventory management, payment processing, and customer relationship management.",
      features: [
        "Advanced product filtering and search",
        "Virtual try-on and size recommendation",
        "Personalized product recommendations",
        "Multiple payment gateway integration",
        "Order tracking and management",
        "Customer reviews and ratings system"
      ],
      technologies: ["Next.js", "Shopify API", "Stripe", "PostgreSQL", "Redis"],
      projectUrl: "#",
      duration: "4 months"
    },
    {
      id: 8,
      title: "Restaurant Booking App",
      description: "Table reservation system with real-time availability.",
      image: restaurantBooking,
      category: "Mobile App",
      client: "DineEasy",
      year: "2024",
      tags: ["Mobile App", "Booking System", "Real-time"],
      expandedImage: restaurantBookingExpanded,
      fullDescription: "A comprehensive restaurant booking application that connects diners with restaurants for seamless table reservations. The app features real-time availability, menu browsing, special offers, and integrated payment processing.",
      features: [
        "Real-time table availability checking",
        "Restaurant discovery and filtering",
        "Menu browsing and pre-ordering",
        "Special offers and loyalty rewards",
        "Integrated payment processing",
        "Booking confirmation and reminders"
      ],
      technologies: ["React Native", "Node.js", "Socket.io", "MongoDB", "PayPal API"],
      projectUrl: "#",
      duration: "3 months"
    },
    {
      id: 9,
      title: "Financial Dashboard",
      description: "Investment tracking platform for portfolio management.",
      image: financialDashboard,
      category: "Web Design",
      client: "InvestPro",
      year: "2024",
      tags: ["Dashboard", "Analytics", "Finance"],
      expandedImage: financialDashboardExpanded,
      fullDescription: "A sophisticated financial dashboard for investment portfolio management and market analysis. The platform provides real-time market data, portfolio tracking, risk assessment, and advanced analytics for professional investors and financial advisors.",
      features: [
        "Real-time portfolio tracking and valuation",
        "Market data and stock analysis",
        "Risk assessment and diversification tools",
        "Investment performance analytics",
        "Automated reporting and alerts",
        "Multi-currency and asset class support"
      ],
      technologies: ["React", "D3.js", "Python", "PostgreSQL", "Financial APIs"],
      projectUrl: "#",
      duration: "5 months"
    },
    {
      id: 10,
      title: "Smart Home Control",
      description: "IoT device management app with automation features.",
      image: smartHome,
      category: "Mobile App",
      client: "HomeAI",
      year: "2024",
      tags: ["IoT", "Automation", "Smart Home"],
      expandedImage: smartHomeExpanded,
      fullDescription: "An intelligent home automation application that connects and controls various IoT devices throughout the home. The app features device management, automation routines, energy monitoring, and voice control integration.",
      features: [
        "Multi-device connectivity and control",
        "Automated routines and scheduling",
        "Energy consumption monitoring",
        "Voice control integration",
        "Security system integration",
        "Remote access and notifications"
      ],
      technologies: ["Flutter", "IoT Protocols", "AWS IoT", "Machine Learning", "Voice API"],
      projectUrl: "#",
      duration: "4 months"
    },
    {
      id: 11,
      title: "Corporate Identity System",
      description: "Complete brand identity for tech consulting firm.",
      image: corporateIdentity,
      category: "Branding",
      client: "TechConsult",
      year: "2024",
      tags: ["Brand Identity", "Logo Design", "Corporate"],
      expandedImage: corporateIdentityExpanded,
      fullDescription: "A comprehensive corporate identity system developed for a technology consulting firm. The project included brand strategy, logo design, visual identity guidelines, marketing materials, and digital brand implementation across all touchpoints.",
      features: [
        "Complete brand strategy and positioning",
        "Logo design and brand mark creation",
        "Comprehensive brand guidelines",
        "Marketing collateral design",
        "Digital brand implementation",
        "Brand consistency across all platforms"
      ],
      technologies: ["Adobe Creative Suite", "Figma", "Brand Guidelines", "Print Design"],
      projectUrl: "#",
      duration: "2 months"
    },
    {
      id: 12,
      title: "AI Content Generator",
      description: "Content creation platform powered by artificial intelligence.",
      image: aiContent,
      category: "AI Automation",
      client: "ContentAI",
      year: "2024",
      tags: ["AI", "Content Generation", "Automation"],
      expandedImage: aiContentExpanded,
      fullDescription: "An advanced AI-powered content generation platform that helps businesses create high-quality written content, images, and marketing materials. The platform utilizes machine learning algorithms to generate personalized content across various formats and industries.",
      features: [
        "Multi-format content generation",
        "Industry-specific content templates",
        "AI-powered writing assistance",
        "Content optimization and SEO",
        "Bulk content generation capabilities",
        "Integration with marketing platforms"
      ],
      technologies: ["Python", "TensorFlow", "OpenAI API", "React", "MongoDB"],
      projectUrl: "#",
      duration: "6 months"
    }
  ];

  const filters = ['All', 'Branding', 'Web Design', 'Mobile App', 'Graphic Design', 'AI Automation'];

  const handleCardClick = (item) => {
    setSelectedProject(item);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 font-exo">
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }
        .stagger-9 { animation-delay: 0.9s; }
        .stagger-10 { animation-delay: 1.0s; }
        .stagger-11 { animation-delay: 1.1s; }
        .stagger-12 { animation-delay: 1.2s; }
      `}</style>

      {/* Header Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 md:px-20 bg-white">
        <div className={`text-center mb-8 sm:mb-12 max-w-4xl mx-auto ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-8 sm:mb-10 bg-gradient-to-r from-gray-900 via-[#B17F4A] to-gray-900 bg-clip-text text-transparent animate-gradient">
            Our Portfolio</h1>
          <p className={`text-gray-600 text-base sm:text-lg mb-2 px-4 ${isLoaded ? 'animate-fadeInUp stagger-2' : 'opacity-0'}`}>
            Discover some of our recent projects that showcase our design expertise and commitment to excellence.
          </p>
          <p className={`text-gray-600 text-sm sm:text-base px-4 ${isLoaded ? 'animate-fadeInUp stagger-3' : 'opacity-0'}`}>
            Each project represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 ${isLoaded ? 'animate-fadeInUp stagger-4' : 'opacity-0'}`}>
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-[#B17F4A] text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-[#B17F4A] hover:shadow-md'
              }`}
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 sm:px-6 md:px-20 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-[#B17F4A]/20 transform hover:-translate-y-2 hover:scale-105 ${
                item.featured ? 'ring-2 ring-[#B17F4A] ring-opacity-50' : ''
              } ${isLoaded ? 'animate-scaleIn' : 'opacity-0'}`}
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => handleCardClick(item)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/B17F4A/white?text=' + encodeURIComponent(item.title);
                  }}
                />
                <span className="absolute top-3 left-3 bg-[#B17F4A] text-white text-xs px-2.5 py-1 rounded-full font-medium transition-transform duration-300 group-hover:scale-110">
                  {item.category}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 sm:p-5 lg:p-6">
                {/* Client and Year */}
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 text-xs sm:text-sm text-[#B17F4A]">
                  <div className="flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                    <User size={12} className="sm:w-3.5 sm:h-3.5 text-[#B17F4A]" />
                    <span>{item.client}</span>
                  </div>
                  <div className="flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1" style={{transitionDelay: '50ms'}}>
                    <Calendar size={12} className="sm:w-3.5 sm:h-3.5 text-[#B17F4A]" />
                    <span>{item.year}</span>
                  </div>
                </div>
                
                {/* Title and Description */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-[#B17F4A] transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed">{item.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-[#B17F4A] bg-opacity-10 text-[#B17F4A] text-xs px-2 py-1 rounded-md font-medium transition-transform duration-300 hover:scale-105"
                      style={{transitionDelay: `${i * 50}ms`}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-75 transition-opacity duration-300 animate-fadeInUp"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X size={20} className="text-gray-600" />
            </button>

            {/* Project Image */}
            <div className="relative">
              <img 
                src={selectedProject.expandedImage || selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 sm:h-80 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x400/B17F4A/white?text=' + encodeURIComponent(selectedProject.title);
                }}
              />
              <div className="absolute bottom-4 left-4 bg-[#B17F4A] text-white px-3 py-1 rounded-full text-sm font-medium animate-fadeInLeft">
                {selectedProject.category}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 animate-fadeInUp">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1 animate-fadeInLeft stagger-1">
                      <User size={16} />
                      <span>{selectedProject.client}</span>
                    </div>
                    <div className="flex items-center gap-1 animate-fadeInLeft stagger-2">
                      <Calendar size={16} />
                      <span>{selectedProject.year}</span>
                    </div>
                    {selectedProject.duration && (
                      <div className="flex items-center gap-1 animate-fadeInLeft stagger-3">
                        <Calendar size={16} />
                        <span>{selectedProject.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {selectedProject.projectUrl && selectedProject.projectUrl !== '#' && (
                  <a 
                    href={selectedProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#B17F4A] text-white px-4 py-2 rounded-lg hover:bg-[#9a6d3e] transition-all duration-300 hover:scale-105 animate-fadeInRight"
                  >
                    <ExternalLink size={16} />
                    <span>View Live</span>
                  </a>
                )}
              </div>

              {/* Description */}
              <div className="mb-6 animate-fadeInUp stagger-2">
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
              </div>

              {/* Features */}
              {selectedProject.features && (
                <div className="mb-6 animate-fadeInUp stagger-3">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Palette size={18} />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-2 animate-fadeInLeft"
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        <div className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {selectedProject.technologies && (
                <div className="mb-6 animate-fadeInUp stagger-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Globe size={18} />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-105 animate-fadeInUp"
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="animate-fadeInUp stagger-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#B17F4A] bg-opacity-10 text-[#B17F4A] px-3 py-1 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-105 animate-fadeInUp"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;