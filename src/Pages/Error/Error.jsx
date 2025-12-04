import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { FaHome } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../Components/Navbar/Navbar';

const Error = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-[60%] bg-white-50 flex items-center justify-center px-5">
        <div
          className=" rounded-2xl  text-center animate-fadeIn"
          data-aos="fade-up"
        >
          {/* Illustration */}
          <img
            src="https://i.ibb.co.com/sphn5vY3/Screenshot-2025-12-04-161519.png"
            alt="Error Illustration"
            className="w-full h-[500px] mx-auto "
          />

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-500 mb-6">
            The page you are looking for doesn't exist or has been moved. Please
            check the URL or return to the homepage.
          </p>

          {/* Button */}
          <Link to="/" className="">
            <button className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg transition-all">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
