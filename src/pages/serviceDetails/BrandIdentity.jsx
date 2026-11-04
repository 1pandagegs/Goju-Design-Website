// Brand Identity Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import brandImage from '../../assets/services/brandidentitydesign.jpg';

export default function BrandIdentity() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6 h-[416px] flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
              Brand Identity
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We shape visual identities that reflect your values and stand out. From logos to brand books, we build systems that scale with your business.
            </p>
            <Link to="/consultation">
              <button className="bg-primary text-white px-6 py-3 rounded-md font-medium">
                Get Started
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={brandImage}
              alt="Brand Identity Design"
              className="w-[617px] h-[416px] object-cover border-4 border-primary rounded-xl"
            />
          </div>
        </div>

        {/* What's Included & Our Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* What's Included */}
          <div className="bg-white border border-neutral-300 rounded-lg p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">What's Included</h2>
            <div className="space-y-4">
              {[
                'Logo Design',
                'Typography System',
                'Color Palette',
                'Visual Guidelines',
                'Social Media Branding',
                'Stationery Design'
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
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">Our Process</h2>
            <div className="space-y-6">
              {[
                { number: '1', text: 'Discovery & Strategy' },
                { number: '2', text: 'Concept Creation' },
                { number: '3', text: 'Feedback & Refinement' },
                { number: '4', text: 'Finalization & Handoff' }
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
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">What You'll Receive</h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            A full branding package including logo files, brand book, and digital assets ready for print and online use.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: '01', title: 'Primary logo' },
            { number: '02', title: 'Logo variations' },
            { number: '03', title: 'Color palette' },
            { number: '04', title: 'Typography guide' },
            { number: '05', title: 'Brand guidelines PDF' },
            { number: '06', title: 'Stationery files' },
            { number: '07', title: 'Mockups' },
            { number: '08', title: 'Social assets' }
          ].map((item, index) => (
            <div key={index} className="text-center space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-4xl font-light text-primary">{item.number}</div>
              <div className="text-gray-700 text-sm leading-relaxed">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}