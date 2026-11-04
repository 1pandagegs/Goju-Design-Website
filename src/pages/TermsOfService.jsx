import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white font-exo">
      {/* Header */}
      <div className="bg-white pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-[#B17F4A] mb-4">Terms of Service</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These terms and conditions govern your use of our services and establish the legal relationship between 
            you and Goju Design Solutions Ltd.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Agreement Overview */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Agreement Overview</h2>
          <p className="text-gray-600 mb-4">
            Welcome to Goju Design Solutions Ltd. These Terms of Service ("Terms") govern your use of our website and services. 
            By accessing our website or engaging our services, you agree to be bound by these Terms.
          </p>
          <p className="text-gray-600">
            We reserve the right to update these Terms at any time. Continued use of our services after changes indicates your 
            acceptance of the new Terms.
          </p>
        </div>

        {/* Service Agreement */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#B17F4A] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Service Agreement</h2>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              These terms govern your use of Goju Design Solutions Ltd services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              By engaging our services, you agree to these terms and conditions
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Services include but are not limited to web design, branding, and digital marketing
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              All projects begin with a signed agreement and approved scope of work
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Changes to project scope may result in additional fees and timeline adjustments
            </li>
          </ul>
        </div>

        {/* Client Responsibilities */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#B17F4A] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Client Responsibilities</h2>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Provide accurate and complete information for your project
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Supply all necessary content, images, and materials in a timely manner
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Respond to requests for feedback and approvals within agreed timeframes
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Ensure all provided content is original or properly licensed
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Make payments according to the agreed schedule and terms
            </li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#B17F4A] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Intellectual Property</h2>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Final designs and deliverables become your property upon full payment
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              We retain the right to showcase completed work in our portfolio
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Source files and working documents remain our property unless otherwise agreed
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You are responsible for ensuring proper licensing of any third-party assets
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              We retain rights to any proprietary techniques or methodologies developed
            </li>
          </ul>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-[#B17F4A] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
              4
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Limitation of Liability</h2>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Our liability is limited to the total amount paid for services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              We are not responsible for indirect or consequential damages
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Client is responsible for backing up and maintaining their data
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              We provide no warranty for third-party services or platforms
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Force majeure events may affect project timelines without penalty
            </li>
          </ul>
        </div>

        {/* Payment Terms */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Terms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Schedule</h3>
              <p className="text-gray-600">
                Projects typically require a 50% deposit to begin, 
                with the remainder due upon completion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Refund Policy</h3>
              <p className="text-gray-600">
                Refunds are considered on a case-by-case basis for 
                work not yet completed.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Currency</h3>
              <p className="text-gray-600">
                All fees are quoted and payable in NGN unless 
                otherwise specified.
              </p>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Termination</h2>
          <p className="text-gray-600 mb-4">
            Either party may terminate services with written notice. Upon termination:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Payment is due for all work completed to date
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Completed deliverables will be provided upon payment
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#B17F4A] rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Work-in-progress files remain our property until paid
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Last updated: August 2025</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;