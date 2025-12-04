import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, PawPrint } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="pt-20 bg-linear-to-b from-blue-50 to-white min-h-screen">
      {/* HEADER */}
      <div className="text-center py-10" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 animate__animated animate__fadeInDown">
          Contact{' '}
          <span className="leading-tight text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">
            WarmPaws
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-lg animate__animated animate__fadeIn">
          Have questions or need help? We're here to support you and your furry
          friends — especially during winter.
        </p>
      </div>

      <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-10 py-10">
        {/* CONTACT FORM */}
        <div
          className="bg-white shadow-xl rounded-3xl p-8"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 animate__animated animate__fadeInLeft">
            Send Us a Message
          </h2>

          <form className="space-y-5 animate__animated animate__fadeInLeft animate__delay-1s">
            <div>
              <label className="text-gray-700 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition duration-300 hover:scale-105"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition duration-300 hover:scale-105"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition duration-300 hover:scale-105"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold text-lg transition transform duration-300 hover:scale-105 animate__animated animate__pulse"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div
          className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-xl rounded-3xl p-8 flex flex-col justify-center items-center"
          data-aos="fade-left"
        >
          <h2 className="text-3xl font-bold mb-6 animate__animated animate__fadeInDown">
            Get in Touch <PawPrint className="inline-block ml-2" size={32} />
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: <Mail size={28} />,
                title: 'Email',
                text: 'support@warmpaws.com',
              },
              {
                icon: <Phone size={28} />,
                title: 'Phone',
                text: '+880 1234 567 890',
              },
              {
                icon: <MapPin size={28} />,
                title: 'Location',
                text: 'Dhaka, Bangladesh',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 animate__animated animate__fadeInUp"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                {item.icon}
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-white/80">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="w-11/12 mx-auto pb-16" data-aos="zoom-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 animate__animated animate__fadeIn">
          Find Us on the Map
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-xl animate__animated animate__fadeInUp">
          <iframe
            title="WarmPaws Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9037759550464!2d90.39124567468262!3d23.750885993688494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5655ba3a81%3A0x85031c30eda12406!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="transition-transform duration-500 hover:scale-105"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
