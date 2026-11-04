// Digital Marketing Design Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import marketingImg from '../../assets/services/marketing.jpg';

export default function DigitalMarketingDesign() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6 h-[416px] flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-primary leading-tight">
              Digital Marketing Design
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our digital marketing design services help you create compelling campaigns that resonate with your target audience. We develop cohesive visual strategies across all digital touchpoints.
            </p>
            <Link to="/consultation">
              <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={marketingImg}
              alt="Digital Marketing Visual"
              className="w-[617px] h-[416px] object-cover border-4 border-primary rounded-xl"
            />
          </div>
        </div>

        {/* What's Included and Our Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* What's Included */}
          <div className="bg-white border border-neutral-300 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">What's Included</h2>
            <div className="space-y-4">
              {[
                'Social Media Graphics',
                'Email Campaign Design',
                'Digital Advertising',
                'Content Strategy',
                'Brand Photography',
                'Video Content',
                'Landing Page Design',
                'Campaign Analytics'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-primary">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Process */}
          <div className="bg-white border border-neutral-300 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">Our Process</h2>
            <div className="space-y-6">
              {[
                { number: '1', text: 'Strategy Development' },
                { number: '2', text: 'Creative Concepts' },
                { number: '3', text: 'Asset Creation' },
                { number: '4', text: 'Campaign Launch' },
                { number: '5', text: 'Performance Analysis' }
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
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
          <h2 className="text-3xl font-semibold text-primary mb-4">What You'll Receive</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Upon project completion, you'll receive all the deliverables needed to implement and maintain your new design.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '01', title: 'Social media templates' },
            { number: '02', title: 'Email campaign designs' },
            { number: '03', title: 'Ad creative variations' },
            { number: '04', title: 'Landing page design' },
            { number: '05', title: 'Brand photography' },
            { number: '06', title: 'Video content' },
            { number: '07', title: 'Campaign guidelines' },
            { number: '08', title: 'Performance reports' }
          ].map((item, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-4xl font-light text-primary">{item.number}</div>
              <div className="text-gray-700 text-sm leading-relaxed">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}