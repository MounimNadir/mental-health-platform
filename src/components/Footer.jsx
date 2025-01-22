import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              We provide resources and support to help individuals improve their mental health through expert therapy, guidance, and community.
            </p>
            <p className="text-gray-400">© 2025 Mental Health Platform. All rights reserved.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white mb-2 block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white mb-2 block">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white mb-2 block">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white mb-2 block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media and Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-400 hover:text-white text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-400 hover:text-white text-2xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-400 hover:text-white text-2xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-400 hover:text-white text-2xl" />
              </a>
            </div>

            <div className="mt-6">
              <p className="text-gray-400">Email: contact@mentalhealthplatform.com</p>
              <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
