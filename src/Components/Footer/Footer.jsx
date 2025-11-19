import React from 'react';
import { Link } from 'react-router';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="w-11/12 mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">
            WarmPaws
          </h2>
          <p className="mt-2 text-gray-300 max-w-sm">
            Cozy winter companion platform for pet owners to keep their furry
            friends safe, healthy, and warm during cold seasons.
          </p>
          <div className="flex gap-4 mt-4 text-gray-300">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:text-blue-500 transition-colors"
              >
                Services
              </Link>
            </li>
            <li className="hover:text-blue-500 transition-colors">About</li>
            <li className="hover:text-blue-500 transition-colors">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">123 WarmPaws Street, Pet City</p>
          <p className="text-gray-300 mt-1">Email: info@warmpaws.com</p>
          <p className="text-gray-300 mt-1">Phone: +880 123 456 789</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} WarmPaws. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
