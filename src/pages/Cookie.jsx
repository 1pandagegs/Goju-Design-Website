// src/pages/cookie.jsx
import React, { useState } from 'react';
import { Shield, BarChart3, Settings, AlertTriangle } from 'lucide-react';

const Cookie = () => {
  const [essentialEnabled, setEssentialEnabled] = useState(true);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [functionalEnabled, setFunctionalEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-white font-exo">
      {/* Header Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#B17F4A] mb-4">Cookie Policy</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn about how we use cookies and similar technologies to improve your experience on our website and provide better services.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* What Are Cookies Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What Are Cookies?</h2>
          <p className="text-gray-600 mb-4">
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.
          </p>
          <p className="text-gray-600">
            This Cookie Policy explains what cookies are, how we use them, and how you can control them on the Goju Design Solutions website.
          </p>
        </section>

        {/* Cookie Types */}
        <div className="space-y-6">
          {/* Essential Cookies */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#B17F4A] rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Essential Cookies</h3>
                  <p className="text-sm text-gray-500">Required for basic website functionality</p>
                </div>
              </div>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Required</span>
            </div>
            
            <p className="text-gray-600 mb-4">Examples include:</p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Session management</li>
              <li>• Security tokens</li>
              <li>• Cookie consent preferences</li>
              <li>• Form submission data</li>
            </ul>
          </div>

          {/* Analytics Cookies */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#B17F4A] rounded-full flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Analytics Cookies</h3>
                  <p className="text-sm text-gray-500">Help us understand how visitors interact with our website</p>
                </div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Optional</span>
            </div>
            
            <p className="text-gray-600 mb-4">Examples include:</p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Google Analytics</li>
              <li>• Page view tracking</li>
              <li>• User behavior analysis</li>
              <li>• Traffic source information</li>
            </ul>
          </div>

          {/* Functional Cookies */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#B17F4A] rounded-full flex items-center justify-center">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Functional Cookies</h3>
                  <p className="text-sm text-gray-500">Enable enhanced functionality and personalization</p>
                </div>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Optional</span>
            </div>
            
            <p className="text-gray-600 mb-4">Examples include:</p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Language preferences</li>
              <li>• Theme settings</li>
              <li>• Form auto-fill data</li>
              <li>• Chat widget functionality</li>
            </ul>
          </div>
        </div>

        {/* Third-Party Services */}
        <section className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Services</h2>
          <p className="text-gray-600 mb-6">
            We use several third-party services that may set their own cookies. These services help us provide better functionality and analyze website performance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Calendly</h4>
              <p className="text-sm text-gray-600">
                Scheduling and managing appointments and meetings.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Contact Forms</h4>
              <p className="text-sm text-gray-600">
                Temporary cookies to prevent spam and ensure proper form submission.
              </p>
            </div>
          </div>
        </section>

        {/* Managing Cookie Preferences */}
        <section className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Managing Your Cookie Preferences</h2>
          <p className="text-gray-600 mb-6">
            You have several options for managing cookies on our website:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Browser Settings</h4>
              <p className="text-sm text-gray-600 mb-2">
                You can configure your browser to block or delete cookies.
              </p>
              <p className="text-xs text-gray-500">
                However, this may affect website functionality.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Cookie Banner</h4>
              <p className="text-sm text-gray-600">
                Use our cookie consent banner to choose which types of cookies you want to accept.
              </p>
            </div>
          </div>

          {/* Warning Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-yellow-800">
                <span className="font-medium">Note:</span> Disabling certain cookies may impact your browsing experience and prevent some features from working properly.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Last updated: August 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookie;