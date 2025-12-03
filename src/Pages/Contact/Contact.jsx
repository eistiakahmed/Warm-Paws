import React from 'react';
import { Mail, Phone, MapPin, PawPrint } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 bg-linear-to-b from-blue-50 to-white min-h-screen">
      {/* HEADER */}
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Contact <span className="text-blue-600">WarmPaws</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-lg">
          Have questions or need help? We're here to support you and your furry
          friends — especially during winter.
        </p>
      </div>

      <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-10 py-10">
        {/* CONTACT FORM */}
        <div className="bg-white shadow-xl rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="bg-blue-600 text-white shadow-xl rounded-3xl p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">
            Get in Touch <PawPrint className="inline-block ml-2" size={32} />
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail size={28} />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-white/80">support@warmpaws.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={28} />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-white/80">+880 1234 567 890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={28} />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-white/80">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="w-11/12 mx-auto pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Find Us on the Map
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <iframe
            title="WarmPaws Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9037759550464!2d90.39124567468262!3d23.750885993688494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5655ba3a81%3A0x85031c30eda12406!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
