// src/pages/privacy.jsx
import React from 'react';
import { Info, Eye, Share2, Shield, FileText, MessageCircle, CreditCard, Users } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white font-exo">
      {/* Header Section */}
      <div className="bg-white pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#B17F4A] mb-4 sm:mb-6">Privacy Policy</h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Your privacy is important to us. This policy explains how Goju Design Solutions Ltd collects, uses, and protects your personal information.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        {/* Our Commitment to Privacy */}
        <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Our Commitment to Privacy</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At Goju Design Solutions Ltd, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you use our services or visit our website.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 bg-[#B17F4A] rounded-full flex items-center justify-center flex-shrink-0">
              <Info className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Information We Collect</h2>
          </div>
          
          <ul className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Personal information you provide when contacting us (name, email, phone number)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Project requirements and business information shared during consultations</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Website usage data through analytics tools</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Communications between you and our team</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Payment and billing information for our services</span>
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 bg-[#B17F4A] rounded-full flex items-center justify-center flex-shrink-0">
              <Eye className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">How We Use Your Information</h2>
          </div>
          
          <ul className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>To provide and improve our design services</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>To communicate about your projects and our services</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>To process payments and manage billing</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>To send important updates about your projects</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>To comply with legal obligations and protect our rights</span>
            </li>
          </ul>
        </section>

        {/* Information Sharing */}
        <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 bg-[#B17F4A] rounded-full flex items-center justify-center flex-shrink-0">
              <Share2 className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Information Sharing</h2>
          </div>
          
          <ul className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>We do not sell or rent your personal information to third parties</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Information may be shared with trusted service providers who assist in our operations</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>We may disclose information when required by law or to protect our rights</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Project information is kept confidential unless you give explicit permission to showcase</span>
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 bg-[#B17F4A] rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Data Security</h2>
          </div>
          
          <ul className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>We implement industry-standard security measures to protect your data</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>All communications are encrypted using SSL/TLS protocols</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Access to your information is limited to authorized personnel only</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Regular security audits and updates to our systems</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span>Secure backup procedures to prevent data loss</span>
            </li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Your Rights</h2>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Access & Control</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                You have the right to access, update, or delete your personal information at any time.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Data Portability</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                You can request a copy of your data in a machine-readable format.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Marketing Communications</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                You can opt out of marketing communications at any time.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Data Retention</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                We retain your data only as long as necessary for our services.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500">
            Last updated: August 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;