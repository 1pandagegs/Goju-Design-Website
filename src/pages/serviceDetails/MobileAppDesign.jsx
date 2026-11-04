// Mobile App Design Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mobileAppImage from '../../assets/services/mobile.jpg';

export default function MobileAppDesign() {
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
              Mobile App Design
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              We design sleek, intuitive, and functional mobile app interfaces tailored for iOS and Android. Our team ensures your app is both user-centric and visually appealing, making every interaction count.
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
              alt="Mobile App Design"
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
                'Cross-Platform Design',
                'User Flow Mapping',
                'Prototyping',
                'Interaction Design',
                'UI Kits',
                'Handoff for Development'
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
                { number: '1', text: 'Requirement Gathering' },
                { number: '2', text: 'User Flow Creation' },
                { number: '3', text: 'Wireframes & UI Mockups' },
                { number: '4', text: 'Interactive Prototypes' },
                { number: '5', text: 'Design Handoff' }
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
            A full mobile design package optimized for development, including prototypes and final UI assets.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '01', title: 'User Flows' },
            { number: '02', title: 'Wireframes' },
            { number: '03', title: 'UI Screens' },
            { number: '04', title: 'Prototypes' },
            { number: '05', title: 'Design Assets' },
            { number: '06', title: 'Style Guides' },
            { number: '07', title: 'Developer Handoff' },
            { number: '08', title: 'Responsive Layouts' }
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