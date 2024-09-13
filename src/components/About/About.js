import React from 'react';
import aboutImage from '../../assets/images/Margherita Pizza.jpg';
import NavBar from '../NavBar/NavBar';

const About = () => {
  return (
    <>
    <NavBar/>
    <section className="py-12 bg-gray-100 mt-7">
    <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center ">About Us</h2> 
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
            
          {/* Image */}
          <div className="flex justify-center">
            <img src={aboutImage} alt="About Us" className="rounded-lg shadow-lg w-full h-auto md:max-w-md" />
          </div>
          
          {/* Text Content */}
          <div className="text-left flex flex-col items-center md:items-start"> {/* Added flexbox classes */}
           
            <p className="text-gray-600 text-lg mb-6">
              Welcome to Foodie Haven, your number one source for delicious food from your favorite restaurants delivered fast and fresh. We're dedicated to providing you the very best of online food ordering experience, with an emphasis on quality, customer service, and uniqueness.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              Our mission is to connect people with the best local restaurants. We strive to provide a convenient, reliable, and enjoyable online food ordering experience for our customers while supporting local businesses.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Our vision is to become the leading food delivery platform, known for innovation, excellence, and customer satisfaction. We aim to revolutionize the way people think about food delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;


