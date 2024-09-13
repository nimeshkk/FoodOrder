import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="bg-white p-4 fixed top-0 left-0 w-full z-50"> 
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-7 h-8" /> 
        </Link>

        {/* Nav Items for Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-black hover:text-green-500">Home</Link>
          <Link to="/restaurant" className="text-black hover:text-green-500">Restaurant</Link>
          <Link to="/about" className="text-black hover:text-green-500">About</Link>
          <Link to="/services" className="text-black hover:text-green-500">Services</Link>
          <Link to="/signin" className="text-black hover:text-green-500">Sign In</Link>
          <Link to="/contact" className="text-black hover:text-green-500">Contact</Link>

          {/* Cart Icon */}
          <Link to="/cart" className="text-black hover:text-green-500 relative">
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
                d="M3 3h2l.4 2M7 13h10l1-4H6L5.4 5H3m4 16a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"
              ></path>
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
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
            <Link to="/" className="text-black hover:text-green-500">Home</Link>
            <Link to="/restaurant" className="text-black hover:text-green-500">Restaurant</Link>
            <Link to="/about" className="text-black hover:text-green-500">About</Link>
            <Link to="/services" className="text-black hover:text-green-500">Services</Link>
            <Link to="/contact" className="text-black hover:text-green-500">Contact</Link>
            <Link to="/cart" className="text-black hover:text-green-500">Cart</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;


