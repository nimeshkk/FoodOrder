import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../NavBar/NavBar';
import dishImg from '../../assets/images/dish.jpg'; 

const ContactUs = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_jyxz8ue', 'template_v8nw2ek', form.current, '3gIyFAu7beYJEJHV5');
      setIsMessageSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${dishImg})` }} 
      >
        <div className="bg-black bg-opacity-70 h-full flex flex-col justify-center items-center">
          <section className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Message</h2>
            {isMessageSent ? (
              <p className="text-green-600 font-semibold">Message sent successfully!</p>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                  name="to_name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  name="from_name"
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
                <button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
