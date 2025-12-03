import React from 'react';
import { Mail, Phone, MessageCircle, HelpCircle, PawPrint } from 'lucide-react';

const Support = () => {
  return (
    <div className="min-h-screen bg-[#F6F9FC] pt-32 pb-20 px-4">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-3">
          <PawPrint className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Support Center
        </h1>
        <p className="text-gray-600 text-lg">
          We’re here to help! Reach out anytime and our Warm Paws team will
          assist you.
        </p>
      </div>

      {/* Support Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email Support */}
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
          <div className="flex justify-center mb-4">
            <Mail className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-center text-gray-800 mb-3">
            Email Support
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Get fast help from our support team through email.
          </p>
          <p className="text-center font-medium text-blue-600">
            support@warmpaws.com
          </p>
        </div>

        {/* Phone Support */}
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
          <div className="flex justify-center mb-4">
            <Phone className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-xl font-bold text-center text-gray-800 mb-3">
            Phone Support
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Speak directly with our support specialists.
          </p>
          <p className="text-center font-medium text-green-600">
            +880 1234 567 890
          </p>
        </div>

        {/* Live Chat */}
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all">
          <div className="flex justify-center mb-4">
            <MessageCircle className="w-12 h-12 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-center text-gray-800 mb-3">
            Live Chat
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Chat with our team anytime for instant help.
          </p>
          <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all">
            Start Chat
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm ">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  How do I book a winter pet care service?
                </h3>
                <p className="text-gray-600 mt-2">
                  Simply browse services on the platform, select your preferred
                  option, and proceed with booking.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm ">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Can I talk to a pet expert?
                </h3>
                <p className="text-gray-600 mt-2">
                  Yes! Warm Paws has certified winter pet care experts you can
                  consult with.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm ">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Are all services available in winter?
                </h3>
                <p className="text-gray-600 mt-2">
                  Yes, all services are optimized specifically for winter safety
                  and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
