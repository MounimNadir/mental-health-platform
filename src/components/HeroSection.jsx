import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 text-gray-900 py-16 md:py-32">
      {/* Background Container */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-400 via-blue-500 to-purple-600 opacity-50"></div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white mb-4">
          Take the First Step Towards Healing
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-white opacity-80 mb-6 max-w-xl mx-auto">
          Connect with licensed therapists, access wellness resources, and find a supportive community—whenever you need it.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-6">
          <Link to="/signup">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white py-3 px-8 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105">
              Login
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
