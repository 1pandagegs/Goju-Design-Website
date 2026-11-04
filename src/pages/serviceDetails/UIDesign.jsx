// Mobile App Design Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mobileAppImage from '../../assets/services/uiux.jpg';

export default function UIDesign() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6 h-[416px] flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-[#B17F4A] leading-tight">
              UI/UX Design
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              We craft intuitive and user-friendly interfaces that enhance user satisfaction and improve usability. From wireframes to high-fidelity designs, we prioritize your user's experience.
            </p>
            <Link to="/consultation">
              <button className="bg-[#B17F4A] text-white px-8 py-3 rounded-md font-medium">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={mobileAppImage}
              alt="UI/UX Design Hero"
              className="w-[617px] h-[416px] object-cover border-4 border-[#B17F4A] rounded-xl"
            />
          </div>
        </div>

        {/* What's Included & Our Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* What's Included */}
          <div className="bg-white border border-neutral-300 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#B17F4A] mb-6">What's Included</h2>
            <div className="space-y-4">
              {[
                 'User Research',
                'Wireframing & Prototyping',
                'Visual Design',
                'Accessibility Design',
                'Design Systems',
                'Usability Testing'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-[#B17F4A]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Process */}
          <div className="bg-white border border-neutral-300 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#B17F4A] mb-6">Our Process</h2>
            <div className="space-y-6">
              {[
                 { number: '1', text: 'Discovery & Research' },
                { number: '2', text: 'User Journey Mapping' },
                { number: '3', text: 'Wireframes & Mockups' },
                { number: '4', text: 'Prototyping' },
                { number: '5', text: 'Feedback & Iteration' }
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

        {/* What You'll Receive */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#B17F4A] mb-4">What You'll Receive</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
             You'll receive a complete design package, including all deliverables and source files ready for development.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '01', title: 'Persona Research' },
            { number: '02', title: 'Wireframes' },
            { number: '03', title: 'UI Mockups' },
            { number: '04', title: 'Prototypes' },
            { number: '05', title: 'Style Guide' },
            { number: '06', title: 'Accessibility Specs' },
            { number: '07', title: 'Feedback Reports' },
            { number: '08', title: 'Design Assets' }
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