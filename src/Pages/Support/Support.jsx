import React, { useEffect, useState } from 'react';
import { Mail, Phone, MessageCircle, HelpCircle, PawPrint } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const faqsData = [
  {
    question: 'How do I book a winter pet care service?',
    answer:
      'Simply browse services on the platform, select your preferred option, and proceed with booking.',
  },
  {
    question: 'Can I talk to a pet expert?',
    answer:
      'Yes! Warm Paws has certified winter pet care experts you can consult with.',
  },
  {
    question: 'Are all services available in winter?',
    answer:
      'Yes, all services are optimized specifically for winter safety and comfort.',
  },
];

const Support = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC] pt-32 pb-20 px-4">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-3 animate__animated animate__bounceIn">
          <PawPrint className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3 animate__animated animate__fadeInDown">
          Support Center
        </h1>
        <p className="text-gray-600 text-lg animate__animated animate__fadeIn">
          We’re here to help! Reach out anytime and our Warm Paws team will
          assist you.
        </p>
      </div>

      {/* Support Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email Support */}
        <div
          className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <div className="flex justify-center mb-4">
            <Mail className="w-12 h-12 text-blue-600 animate__animated animate__pulse" />
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
        <div
          className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex justify-center mb-4">
            <Phone className="w-12 h-12 text-green-600 animate__animated animate__pulse" />
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
        <div
          className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex justify-center mb-4">
            <MessageCircle className="w-12 h-12 text-purple-600 animate__animated animate__pulse" />
          </div>
          <h2 className="text-xl font-bold text-center text-gray-800 mb-3">
            Live Chat
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Chat with our team anytime for instant help.
          </p>
          <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-transform duration-300 hover:scale-105">
            Start Chat
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer"
              data-aos="fade-right"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {activeFAQ === index && (
                    <p className="text-gray-600 mt-2 animate__animated animate__fadeIn">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
