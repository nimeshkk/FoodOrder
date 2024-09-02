import React, { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the visibility of the mobile menu

  return (
    <nav className="bg-white p-4 fixed top-0 left-0 w-full z-50"> {/* Make the navbar fixed */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-black text-xl font-bold">Logo</a>

        {/* Nav Items for Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-black hover:text-blue-200">Home</a>
          <a href="/about" className="text-black hover:text-blue-200">About</a>
          <a href="/services" className="text-black hover:text-blue-200">Services</a>
          <a href="/contact" className="text-black hover:text-blue-200">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the mobile menu
          >
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            <a href="/" className="text-black hover:text-blue-200 p-2">Home</a>
            <a href="/about" className="text-black hover:text-blue-200 p-2">About</a>
            <a href="/services" className="text-black hover:text-blue-200 p-2">Services</a>
            <a href="/contact" className="text-black hover:text-blue-200 p-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;


