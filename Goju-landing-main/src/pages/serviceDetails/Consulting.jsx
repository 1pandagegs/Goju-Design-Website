// Consulting Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import consultingImage from '../../assets/services/consulting.jpg';

export default function Consulting() {
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
            <h1 className="text-5xl font-bold text-primary leading-tight">Consulting</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              We offer strategic guidance to help align your digital goals with practical execution. From product strategy to UX audits, we help you move forward with clarity.
            </p>
            <Link to="/consultation">
              <button className="bg-primary text-white px-8 py-3 rounded-md font-medium">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={consultingImage}
              alt="Consulting"
              className="w-[617px] h-[416px] object-cover border-4 border-primary rounded-xl"
            />
          </div>
        </div>

        {/* What's Included and Our Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-neutral-300 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">What's Included</h2>
            <div className="space-y-4">
              {[
                'Product Strategy',
                'UX Audits',
                'Design Reviews',
                'Technology Planning',
                'Roadmap Creation',
                'One-on-One Sessions'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-primary">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-neutral-300 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">Our Process</h2>
            <div className="space-y-6">
              {[
                { number: '1', text: 'Initial Consultation' },
                { number: '2', text: 'Needs Assessment' },
                { number: '3', text: 'Strategy Development' },
                { number: '4', text: 'Implementation Roadmap' },
                { number: '5', text: 'Follow-up & Support' }
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
            A strategic action plan customized to your business needs, along with session notes, recommendations, and prioritized next steps.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '01', title: 'Strategy deck' },
            { number: '02', title: 'Session recordings' },
            { number: '03', title: 'UX audit summary' },
            { number: '04', title: 'Design critiques' },
            { number: '05', title: 'Growth roadmap' },
            { number: '06', title: 'Team recommendations' },
            { number: '07', title: 'Priority actions' },
            { number: '08', title: 'Follow-up schedule' }
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