/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and About */}
        <div className="flex flex-col items-center md:items-start">
          <a href="/" className="text-2xl font-bold text-white mb-2">
            Foodie Haven
          </a>
          <p className="text-center md:text-left text-gray-400">
            Enjoy the best food from your favorite restaurants, delivered fast.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-gray-300">
                Menu
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-gray-400">Email: info@foodiehaven.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <div className="flex space-x-4 mt-2">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-gray-300">
              {/* Facebook Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82V14.706h-3.42v-3.62h3.42V8.413c0-3.377 2.032-5.219 5.092-5.219 1.451 0 2.7.108 3.064.157v3.553l-2.1.001c-1.647 0-1.965.78-1.965 1.927v2.53h3.92l-.51 3.62h-3.41V24h6.696c.733 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              {/* Twitter Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.827.775 4.932 4.932 0 0 0 2.165-2.724c-.949.564-2.003.974-3.127 1.195a4.918 4.918 0 0 0-8.384 4.482A13.939 13.939 0 0 1 1.671 3.149a4.904 4.904 0 0 0-.664 2.475c0 1.708.87 3.216 2.19 4.096a4.903 4.903 0 0 1-2.229-.616c-.054 1.98 1.379 3.828 3.388 4.233a4.935 4.935 0 0 1-2.224.084c.626 1.956 2.444 3.379 4.604 3.419a9.874 9.874 0 0 1-6.102 2.107c-.395 0-.787-.023-1.175-.067a13.944 13.944 0 0 0 7.548 2.212c9.055 0 14.001-7.504 14.001-14.001 0-.213-.005-.425-.015-.636A9.993 9.993 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              {/* Instagram Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.312.975.975 1.249 2.241 1.312 3.607.058 1.268.07 1.648.07 4.851s-.012 3.584-.07 4.85c-.063 1.366-.337 2.633-1.312 3.608-.975.975-2.241 1.249-3.608 1.312-1.267.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.337-3.608-1.312-.975-.975-1.249-2.241-1.312-3.608-.058-1.267-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.337-2.633 1.312-3.608.975-.975 2.241-1.249 3.608-1.312 1.267-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.012-4.947.072-1.55.071-2.891.347-3.95 1.407-1.06 1.059-1.336 2.4-1.407 3.95-.06 1.28-.072 1.689-.072 4.947s.012 3.667.072 4.947c.071 1.55.347 2.891 1.407 3.95 1.059 1.06 2.4 1.336 3.95 1.407 1.28.06 1.689.072 4.947.072s3.667-.012 4.947-.072c1.55-.071 2.891-.347 3.95-1.407 1.06-1.059 1.336-2.4 1.407-3.95.06-1.28.072-1.689.072-4.947s-.012-3.667-.072-4.947c-.071-1.55-.347-2.891-1.407-3.95-1.059-1.06-2.4-1.336-3.95-1.407-1.28-.06-1.689-.072-4.947-.072z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.998 3.998 0 1 1 0-7.996 3.998 3.998 0 0 1 0 7.996zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8 text-center text-gray-400">
        &copy; 2024 Foodie Haven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
