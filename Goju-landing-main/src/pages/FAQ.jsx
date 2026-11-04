// src/pages/FAQ.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Phone, Mail, MessageCircle, Instagram, Twitter, Linkedin } from 'lucide-react';

// Add this after your imports Threads Icon
const ThreadsIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 192 192" 
    className={className}
    fill="currentColor"
    aria-label="Threads"
  >
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.35 61.6848C97.4200 61.6848 97.4876 61.6866 97.5566 61.6879C110.987 61.7443 122.584 70.546 125.696 86.6853C124.427 86.3985 123.143 86.1273 121.846 85.8717C115.94 84.7181 109.446 84.0981 102.593 84.0981C78.3953 84.0981 59.7028 98.4174 59.7028 116.742C59.7028 135.067 78.3953 149.386 102.593 149.386C118.851 149.386 132.132 143.35 140.132 133.344C145.235 126.842 147.597 118.724 147.597 109.961C147.597 104.664 146.24 99.9129 143.813 95.9259C142.958 94.9306 142.026 93.9991 141.024 93.1429C141.188 91.3967 141.537 90.1382 141.537 88.9883Z"/>
  </svg>
);

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleItem = (section, index) => {
    const key = `${section}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqSections = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I start a project with Goju Design Solutions?",
          answer: "Starting a project with us is simple! First, reach out through our contact form or give us a call. We'll schedule a free consultation to discuss your needs, goals, and vision. During this initial meeting, we'll assess your requirements and provide you with a detailed proposal outlining the project scope, timeline, and investment. Once you approve, we'll kick off with a comprehensive discovery phase to ensure we fully understand your brand and objectives."
        },
        {
          question: "What information do you need to provide a quote?",
          answer: "To provide an accurate quote, we typically need information about your project goals, target audience, preferred timeline, budget range, and any specific requirements or features you have in mind. For web projects, we'd like to know about desired functionality, number of pages, and any third-party integrations. For branding projects, we need details about your industry, competitors, and brand personality. The more details you can share, the more precise our quote will be."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on scope and complexity. A basic website typically takes 4-6 weeks, while complex web applications can take 12-16 weeks. Brand identity projects usually require 6-8 weeks, and comprehensive rebranding can take 10-12 weeks. Mobile app development ranges from 12-20 weeks depending on features. We always provide detailed timelines during the proposal phase and keep you updated throughout the project."
        }
      ]
    },
    {
      title: "Services & Pricing",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We offer a comprehensive range of digital services including Brand Identity & Design, Custom Web Design & Development, Mobile App Development, UI/UX Design, Digital Marketing Strategy, AI Agent Building, and Business Consulting. We specialize in creating cohesive digital experiences that align with your business objectives and drive measurable results."
        },
        {
          question: "Do you offer package deals or custom pricing?",
          answer: "We offer both package deals and custom pricing depending on your needs. Our packages are designed for common project types and provide excellent value. For unique or complex requirements, we create custom proposals tailored specifically to your project. We believe in transparent pricing and will always provide detailed breakdowns of costs and deliverables."
        },
        {
          question: "What's included in your maintenance package?",
          answer: "Our maintenance packages include regular security updates, performance monitoring, content updates, backup management, uptime monitoring, and technical support. We offer different tiers from basic maintenance to comprehensive management packages that include SEO monitoring, analytics reporting, and ongoing optimization. All packages include priority support and emergency assistance."
        }
      ]
    },
    {
      title: "Design Process",
      questions: [
        {
          question: "What's your design process like?",
          answer: "Our design process follows a structured approach: Discovery (understanding your needs and goals), Research & Strategy (market analysis and user research), Concept Development (initial designs and wireframes), Design Development (detailed mockups and prototypes), Review & Refinement (collaborative feedback sessions), and Final Delivery (complete assets and documentation). We maintain constant communication throughout each phase."
        },
        {
          question: "How many revisions are included?",
          answer: "Our standard packages include 3 rounds of revisions at each major milestone. This typically covers initial concept feedback, refinement adjustments, and final polish. We find this allows for thorough collaboration while keeping projects on track. Additional revisions can be accommodated if needed, and we're always flexible when it comes to ensuring you're completely satisfied with the final result."
        },
        {
          question: "Can I see examples of your previous work?",
          answer: "Absolutely! You can view our portfolio on our website which showcases a variety of projects across different industries. We're also happy to share case studies and discuss specific projects that are similar to what you're looking for during our consultation. We respect client confidentiality, so some work may be under NDA, but we have plenty of examples we can share publicly."
        }
      ]
    },
    {
      title: "Technical Questions",
      questions: [
        {
          question: "What technologies do you use?",
          answer: "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, and various cloud platforms like AWS and Vercel. For design, we use Figma, Adobe Creative Suite, and Framer. We choose technologies based on project requirements, scalability needs, and long-term maintenance considerations. We stay current with emerging technologies and best practices to ensure your project is built for the future."
        },
        {
          question: "Will my website be mobile-friendly?",
          answer: "Yes, absolutely! All our websites are built with a mobile-first approach and are fully responsive across all devices. We test extensively on various screen sizes and devices to ensure optimal user experience. Mobile optimization is not just about responsive design – we also focus on performance, touch interactions, and mobile-specific user experience considerations."
        },
        {
          question: "Do you provide hosting and domain services?",
          answer: "While we don't directly provide hosting, we work with premium hosting partners and can help you select and set up the best hosting solution for your needs. We can manage the entire process including domain registration, SSL certificates, and hosting setup. We also provide ongoing hosting management as part of our maintenance packages if desired."
        }
      ]
    },
    {
      title: "Support & Maintenance",
      questions: [
        {
          question: "What kind of support do you provide after launch?",
          answer: "We provide comprehensive post-launch support including technical assistance, content updates, security monitoring, and performance optimization. Our support packages range from basic maintenance to full-service management. We're available via email, phone, and our client portal. Emergency support is available for critical issues, and we maintain detailed documentation for all our projects."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "For standard support requests, we typically respond within 24 hours on business days. For maintenance package clients, response times are even faster – usually within 4-8 hours. Emergency issues are addressed immediately, often within 1-2 hours. We understand that your digital presence is crucial to your business, so we prioritize quick response times and effective solutions."
        },
        {
          question: "Can you train me to manage my website?",
          answer: "Yes! We provide comprehensive training for content management systems and basic website management. This includes video tutorials, written documentation, and live training sessions. We believe in empowering our clients to manage day-to-day content updates while we handle the technical aspects. Ongoing training and support are available as needed."
        }
      ]
    }
  ];

  const filteredSections = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(
      q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.questions.length > 0);

  return (
    <div className="min-h-screen bg-white from-white via-[#FDF8F3] to-[#F5E6D3] font-exo-2">
      {/* Header Section */}
      <div className="relative overflow-hidden text-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B17F4A]/5 to-transparent animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className={`transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#B17F4A] to-gray-900 bg-clip-text text-transparent animate-gradient">
              Frequently Asked Questions
            </h1>
          </div>
          <div className={`transition-all duration-1000 delay-300 ease-out ${
            isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our design services, process, and how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className={`relative transition-all duration-1000 delay-500 ease-out ${
          isLoaded ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-8 scale-95'
        }`}>
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#B17F4A]/60 transition-all duration-300" />
          </div>
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-[#B17F4A]/20 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B17F4A]/50 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all duration-300 hover:shadow-xl focus:shadow-xl hover:bg-white focus:bg-white transform hover:scale-[1.02] focus:scale-[1.02]"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#B17F4A]/10 via-transparent to-[#B17F4A]/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredSections.map((section, sectionIndex) => (
          <div 
            key={sectionIndex} 
            className={`mb-12 transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`}
            style={{ transitionDelay: `${700 + sectionIndex * 200}ms` }}
          >
            <div className="group">
              <h2 className="text-2xl font-bold text-[#B17F4A] mb-8 flex items-center gap-3 transition-all duration-300 hover:gap-4">
                <div className="w-2 h-2 bg-[#B17F4A] rounded-full transition-all duration-300 group-hover:w-3 group-hover:h-3 group-hover:animate-pulse"></div>
                <span className="group-hover:text-[#A6723F] transition-colors duration-300">
                  {section.title}
                </span>
              </h2>
            </div>
            
            <div className="space-y-4">
              {section.questions.map((item, index) => {
                const isOpen = openItems[`${section.title}-${index}`];
                return (
                  <div
                    key={index}
                    className={`bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-[#B17F4A]/10 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#B17F4A]/10 group hover:border-[#B17F4A]/30 transform hover:scale-[1.02] ${
                      isOpen ? 'shadow-lg shadow-[#B17F4A]/20 border-[#B17F4A]/30' : ''
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      animation: isOpen ? 'gentle-bounce 0.6s ease-out' : ''
                    }}
                  >
                    <button
                      className="w-full px-6 py-5 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-[#B17F4A]/50 focus:ring-inset relative overflow-hidden"
                      onClick={() => toggleItem(section.title, index)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#B17F4A]/5 via-transparent to-[#B17F4A]/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <span className="text-gray-800 font-medium pr-4 group-hover:text-[#B17F4A] transition-all duration-300 relative z-10">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#B17F4A] transition-all duration-500 flex-shrink-0 relative z-10 group-hover:text-[#A6723F] ${
                          isOpen ? 'transform rotate-180 scale-110' : 'group-hover:scale-110'
                        }`}
                      />
                    </button>
                    
                    <div
                      className={`transition-all duration-700 ease-out overflow-hidden ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-5 pt-0">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#B17F4A]/40 to-transparent mb-4 transform scale-x-0 animate-expand-line"></div>
                        <div className={`transition-all duration-500 delay-200 ${
                          isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                        }`}>
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`} style={{ transitionDelay: '1200ms' }}>
          <h2 className="text-3xl font-bold text-[#B17F4A] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Choose the best way to get in touch. We're always ready to help!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Call Us Card */}
          <div
            className={`bg-white rounded-lg shadow-md p-8 text-center transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 group border border-gray-100 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#B17F4A] to-[#9A6B3D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-800">Call Us</h3>
            <a 
              href="tel:+2347038649237" 
              className="text-[#B17F4A] hover:text-[#9A6B3D] font-semibold text-lg transition-colors duration-200 hover:underline block"
              aria-label="Call us at +234 703 864 9237"
            >
              +234 703 864 9237
            </a>
            <p className="text-gray-500 text-sm mt-2 font-medium">Mon-Fri, 9AM-6PM WAT</p>
          </div>

          {/* Email Card */}
          <div
            className={`bg-white rounded-lg shadow-md p-8 text-center transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 group border border-gray-100 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`}
            style={{ transitionDelay: '1500ms' }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#B17F4A] to-[#9A6B3D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-800">Email Us</h3>
            <a 
              href="mailto:info.gojudesign@gmail.com" 
              className="text-[#B17F4A] hover:text-[#9A6B3D] font-semibold transition-colors duration-200 hover:underline break-all"
              aria-label="Send email to info.gojudesign@gmail.com"
            >
              info.gojudesign@gmail.com
            </a>
            <p className="text-gray-500 text-sm mt-2 font-medium">We respond within 24 hours</p>
          </div>

          {/* Socials Card */}
          <div
            className={`bg-white rounded-lg shadow-md p-8 text-center transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 group border border-gray-100 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
            }`}
            style={{ transitionDelay: '1600ms' }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#B17F4A] to-[#9A6B3D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Instagram className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-800">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.threads.net/@gojudesign" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B17F4A] hover:text-white hover:bg-gradient-to-br hover:from-[#B17F4A] hover:to-[#9A6B3D] p-2 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md"
                aria-label="Follow us on Threads"
                title="Follow us on Threads"
              >
                <ThreadsIcon size={20} />
              </a>
              <a 
                href="https://x.com/gojudesigns?s=21&t=2MmXrfnpHULioIpxUNiLKA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B17F4A] hover:text-white hover:bg-gradient-to-br hover:from-[#B17F4A] hover:to-[#9A6B3D] p-2 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md"
                aria-label="Follow us on Twitter/X"
                title="Follow us on Twitter/X"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/gojudesign?igsh=MWRzM3l5MHp3dnRsNA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B17F4A] hover:text-white hover:bg-gradient-to-br hover:from-[#B17F4A] hover:to-[#9A6B3D] p-2 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md"
                aria-label="Follow us on Instagram"
                title="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/gojudesign/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B17F4A] hover:text-white hover:bg-gradient-to-br hover:from-[#B17F4A] hover:to-[#9A6B3D] p-2 rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md"
                aria-label="Follow us on LinkedIn"
                title="Follow us on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-3 font-medium">Stay updated with our latest work</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes expand-line {
          0% { transform: scale-x-0); }
          100% { transform: scale-x(1); }
        }
        
        @keyframes gentle-bounce {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        
        .animate-expand-line {
          animation: expand-line 0.6s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default FAQ;