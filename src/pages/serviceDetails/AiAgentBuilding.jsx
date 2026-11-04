// AI Agent Building Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import aiImage from '../../assets/services/ai.jpg';

export default function AiAgentBuilding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white p-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6 h-[416px] flex flex-col justify-center">
            <h1 className="text-5xl font-bold leading-tight text-[#B17F4A]">AI Agent Building</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              We design intelligent, goal-driven AI agents that automate workflows, improve customer interactions, and enhance operational efficiency through advanced machine learning and NLP.
            </p>
            <Link to="/consultation">
              <button className="bg-[#B17F4A] text-white px-8 py-3 rounded-md hover:bg-[#a06f3c] transition-colors font-medium">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={aiImage}
              alt="AI Agent Building"
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
                'Intent & Workflow Design',
                'Custom AI Personalities',
                'Multilingual Support',
                'Integration & Deployment',
                'Conversation Design',
                'Analytics & Improvements'
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
                { number: '1', text: 'Needs Assessment' },
                { number: '2', text: 'AI Agent Architecture' },
                { number: '3', text: 'Natural Language Training' },
                { number: '4', text: 'Integration & Testing' },
                { number: '5', text: 'Launch & Optimization' }
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
            A fully functional AI agent tailored to your business goals, ready to automate tasks, handle queries, and continuously improve through intelligent learning.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '01', title: 'Smart Workflows' },
            { number: '02', title: 'Natural Language Understanding' },
            { number: '03', title: 'Real-Time Responses' },
            { number: '04', title: 'CRM & API Integration' },
            { number: '05', title: 'Multi-Platform Support' },
            { number: '06', title: 'Usage Analytics' },
            { number: '07', title: 'Ongoing Improvements' },
            { number: '08', title: 'Support Documentation' }
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