import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

      const [isMenuOpen, setIsMenuOpen] = React.useState(false);
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      }

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link to="/" className="text-white text-2xl font-semibold">
          MentalHealthPlatform
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/chatbot" className="text-white hover:text-gray-300">Chatbot</Link>
          <Link to="/therapists" className="text-white hover:text-gray-300">Therapists</Link>
          <Link to="/video-call" className="text-white hover:text-gray-300">Video Call</Link>
          <Link to="/payment" className="text-white hover:text-gray-300">Payment</Link>
        </div>

        {/* User Authentication */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700">Login</Link>
          <Link to="/signup" className="text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-700">Sign Up</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none" >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
              

      </div>
        

      {/* Mobile Navigation Menu */}
      { isMenuOpen && (
      <div className="md:hidden mt-4 space-y-4">
        <Link to="/" className="block text-white text-center">Home</Link>
        <Link to="/chatbot" className="block text-white text-center">Chatbot</Link>
        <Link to="/therapists" className="block text-white text-center">Therapists</Link>
        <Link to="/video-call" className="block text-white text-center">Video Call</Link>
        <Link to="/payment" className="block text-white text-center">Payment</Link>
        <div className="space-x-4 text-center">
          <Link to="/login" className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700">Login</Link>
          <Link to="/signup" className="text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-700">Sign Up</Link>
        </div>
      </div> 
      )}
    </nav>
  );
};

export default Navbar;
