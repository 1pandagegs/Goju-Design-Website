import React, { useState, useEffect } from 'react';
import { Award, Users, Lightbulb, Heart, CheckCircle, Clock, Star } from 'lucide-react';
import davidImg from "../assets/meetourteam/david.png"; // Fixed: David's image
import tobiImg from "../assets/meetourteam/tobi.png";   // Fixed: Tobi's image
import gegeImg from "../assets/meetourteam/gege.png";
import femiImg from "../assets/meetourteam/femi.png";

// Mock Link component for demonstration - replace with actual react-router-dom Link in your project
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({ satisfaction: 0, projects: 0, experience: 0 });

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

  useEffect(() => {
    const animateCounters = () => {
      const targets = { satisfaction: 98, projects: 60, experience: 8 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      Object.keys(targets).forEach(key => {
        let current = 0;
        const target = targets[key];
        const step = target / steps;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, increment);
      });
    };

    if (isVisible.achievements) {
      animateCounters();
    }
  }, [isVisible.achievements]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        id="hero" 
        data-animate 
        className={`py-16 sm:py-20 px-4 text-center transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-8 sm:mb-10 bg-gradient-to-r from-gray-900 via-[#B17F4A] to-gray-900 bg-clip-text text-transparent animate-gradient"> 
            About Goju Design Solutions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            We are a passionate team of designers, strategists, and developers dedicated to creating exceptional 
            brand experiences that drive business growth and meaningful connections.
          </p>
          <Link to="/Consultation">
            <button className="bg-[#B17F4A] hover:bg-[#9c6f3f] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Work With Us
            </button>
          </Link>
        </div>
      </section>
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

      {/* Our Story Section */}
      <section 
        id="story" 
        data-animate 
        className={`py-12 sm:py-16 px-4 transition-all duration-1000 delay-200 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#B17F4A] mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  Born from a simple yet powerful vision: solving through creativity. Goju Design was 
                  founded to help brands take control of their digital identity. From clunky interfaces to 
                  inconsistent branding, we saw too many businesses struggling to make the right 
                  impression. So we set out to change that.
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  We're not just designers — we're strategists, consultants, and creative partners. Our 
                  approach is a bit of UX, graphic design, and motion graphics, but our ambition runs 
                  deeper: to redefine how brands communicate visually across every platform.
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  We started with a simple mission: to give every brand, big or small, the power to 
                  stand out with purpose and confidence. Today, our work spans across industries — 
                  from tech startups and enterprise software companies to local brands ready to level 
                  up their presence.
                </p>
                <p className="transform hover:translate-x-2 transition-transform duration-300">
                  Whether you're launching a new product, rebranding a company, or simply need 
                  better design — Goju Design is your creative advantage.
                </p>
              </div>
              <Link to="/portfolio">
                <button className="mt-6 sm:mt-8 bg-[#B17F4A] hover:bg-[#9c6f3f] text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  View Our Work
                </button>
              </Link>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration and creative process" 
                className="w-full max-w-md md:max-w-none h-64 sm:h-80 md:h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section 
        id="values" 
        data-animate 
        className={`py-12 sm:py-16 px-4 bg-white transition-all duration-1000 delay-300 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#B17F4A] mb-4">Our Values</h2>
          <p className="text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
            These core values guide everything we do and shape how we work with clients and each other.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[{ icon: <Award />, title: 'Excellence', text: 'We strive for perfection in every project we undertake, never settling for good enough when great is possible.' },
              { icon: <Users />, title: 'Collaboration', text: 'We work closely with our clients as true partners, ensuring transparency and reflecting while adding our expertise.' },
              { icon: <Lightbulb />, title: 'Innovation', text: 'We embrace new technologies and creative solutions, staying ahead of trends to deliver cutting-edge designs.' },
              { icon: <Heart />, title: 'Passion', text: 'We love what we do and it shows in our work. Our enthusiasm and dedication to creativity is what truly makes a difference.' }].map((value, i) => (
              <div key={i} className="text-center group transform hover:scale-105 transition-all duration-300 p-4">
                <div className="w-16 h-16 bg-[#F4E2D0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B17F4A] group-hover:shadow-lg transition-all duration-300">
                  {React.cloneElement(value.icon, { className: 'w-8 h-8 text-[#B17F4A] group-hover:text-white transition-colors duration-300' })}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#B17F4A] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section 
        id="achievements" 
        data-animate 
        className={`py-12 sm:py-16 px-4 transition-all duration-1000 delay-400 ${isVisible.achievements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#B17F4A] mb-4">Our Achievements</h2>
          <p className="text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base px-4">
            Numbers that reflect our commitment to excellence and client success
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[{ icon: <CheckCircle />, stat: counters.satisfaction, suffix: '%', title: 'Client Satisfaction', desc: 'Clients who would recommend us to others.' },
              { icon: <Clock />, stat: counters.projects, suffix: '+', title: 'Projects Completed', desc: 'Successful projects delivered on time.' },
              { icon: <Star />, stat: counters.experience, suffix: '+', title: 'Years Experience', desc: 'Combined team experience in design.' }].map((item, i) => (
              <div key={i} className="text-center group transform hover:scale-105 transition-all duration-300 p-4">
                <div className="w-16 h-16 bg-[#F4E2D0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B17F4A] group-hover:shadow-lg transition-all duration-300">
                  {React.cloneElement(item.icon, { className: 'w-8 h-8 text-[#B17F4A] group-hover:text-white transition-colors duration-300' })}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#B17F4A] mb-2">{item.stat}{item.suffix}</div>
                <div className="text-base sm:text-lg font-semibold text-gray-700 mb-1">{item.title}</div>
                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section - FIXED */}
      <section 
        id="team" 
        data-animate 
        className={`py-12 sm:py-16 px-4 bg-white transition-all duration-1000 delay-500 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#B17F4A] mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
            The talented individuals behind every successful project, bringing diverse skills and perspectives to 
            create exceptional results.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[{
              name: "Ayo Gegeoju",
              role: "AI Agent Builder",
              desc: "Ayo designs and develops intelligent AI agents that automate workflows, enhance customer experiences, and solve complex business challenges through cutting-edge machine learning technologies.",
              skills: ['AI Agent Development', 'Machine Learning', 'Process Automation', 'NLP & Chatbots'],
              img: gegeImg // Using correct variable name
            }, {
              name: 'David Abraham',
              role: 'Front-End Developer',
              desc: 'David bridges the gap between design and development, ensuring that every pixel is perfectly placed and every interaction is smooth and efficient. He specializes in modern web technologies and performance optimization.',
              skills: ['Frontend Development', 'React/Next.js', 'Performance Optimization'],
              img: davidImg, // Using correct variable name
            }, {
              name: 'Femi Johnson',
              role: 'Full-Stack Developer',
              desc: 'Femi transforms business requirements into powerful web applications, handling everything from user interfaces to server infrastructure. He delivers complete digital solutions that scale with your business.',
              skills: ['Full-Stack Development', 'MERN/MEAN Stack', 'DevOps & Deployment', 'System Architecture'],
              img: femiImg, // Using correct variable name
            }, {
              name: 'Tobi Akerele',
              role: 'Senior Product Designer',
              desc: 'Tobi is passionate about creating user-centered digital experiences that deliver real value. His keen eye for detail and deep understanding of user behavior helps him understand and create intuitive interfaces.',
              skills: ['Brand Design', 'UI Design', 'UX Design'],
              img: tobiImg, // Using correct variable name
            },
            ].map((person, i) => (
              <div key={i} className="text-center group transform hover:scale-105 transition-all duration-300 p-4">
                <img 
                  src={person.img} // FIXED: Changed from person.image to person.img
                  alt={person.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#F4E2D0] mx-auto mb-4 object-cover group-hover:border-[#B17F4A] transition-colors duration-300 shadow-lg group-hover:shadow-xl"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.src = "https://via.placeholder.com/150x150/B17F4A/FFFFFF?text=" + person.name.split(' ').map(n => n[0]).join('');
                  }}
                />
                <h3 className="text-lg sm:text-xl font-bold text-[#B17F4A] mb-1">{person.name}</h3>
                <p className="text-[#B17F4A] font-medium mb-3 text-sm sm:text-base">{person.role}</p>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">{person.desc}</p>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                    {person.skills.map((skill, j) => (
                      <span key={j} className="px-2 sm:px-3 py-1 bg-[#F4E2D0] text-[#B17F4A] text-xs rounded-full hover:bg-[#B17F4A] hover:text-white transition-colors duration-300">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;