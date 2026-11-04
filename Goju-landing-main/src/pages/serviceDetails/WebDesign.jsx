// Web Design Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import webDesignImage from '../../assets/services/webdesign.jpg';

export default function WebDesign() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6 h-[416px] flex flex-col justify-center">
            <h1 className="text-5xl font-bold leading-tight text-[#B17F4A]">Web Design</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              We craft stunning and functional websites that not only look great but deliver measurable results. Our designs are tailored to elevate your online presence.
            </p>
            <Link to="/consultation">
              <button className="bg-[#B17F4A] text-white px-8 py-3 rounded-md hover:bg-[#a06f3c] transition-colors font-medium">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={webDesignImage}
              alt="Web Design"
              className="w-[617px] h-[416px] object-cover border-4 border-[#B17F4A] rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* WHAT'S INCLUDED */}
          <div className="bg-white border border-neutral-300 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-[#B17F4A]">What's Included</h2>
            <div className="space-y-4">
              {[
                'Responsive Design',
                'Custom Layouts',
                'CMS Integration',
                'SEO Optimization',
                'Performance Tuning',
                'Accessibility Compliance'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-[#B17F4A]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* OUR PROCESS */}
          <div className="bg-white border border-neutral-300 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-[#B17F4A]">Our Process</h2>
            <div className="space-y-6">
              {[
                { number: '1', text: 'Research & Planning' },
                { number: '2', text: 'Wireframing' },
                { number: '3', text: 'Visual Design' },
                { number: '4', text: 'Development' },
                { number: '5', text: 'Testing & Launch' }
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#B17F4A] text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {step.number}
                  </div>
                  <span className="text-gray-700">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-[#B17F4A]">What You'll Receive</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            A complete website ready to launch with everything from homepage to contact forms, optimized for user experience and performance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '01', title: 'Responsive layout' },
            { number: '02', title: 'Optimized images' },
            { number: '03', title: 'Integrated CMS' },
            { number: '04', title: 'SEO-ready pages' },
            { number: '05', title: 'Analytics setup' },
            { number: '06', title: 'Fast load times' },
            { number: '07', title: 'Cross-browser testing' },
            { number: '08', title: 'Maintenance guide' }
          ].map((item, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-4xl font-light text-[#B17F4A]">{item.number}</div>
              <div className="text-gray-700 text-sm leading-relaxed">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}