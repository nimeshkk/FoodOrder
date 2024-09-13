import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dishImg from '../../assets/images/dish.jpg'; // Ensure the image path is correct

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/v1/register', formData);
      console.log('Signup successful:', response.data);
      setSuccess('User registered successfully!');
      setError(''); // Clear any previous error
      navigate('/signin'); // Automatically navigate to Sign In page after signup
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Failed to register. Please try again.');
      setSuccess(''); // Clear any previous success message
    }
  };

  const handleSignInClick = () => {
    navigate('/signin'); // Navigate to Sign In page when "Sign In" button is clicked
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background image with opacity */}
      <div className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${dishImg})`,
          opacity: 0.5, // Adjust opacity as needed
        }}
      ></div>
      
      {/* Signup form container */}
      <div className="relative z-10 bg-white rounded shadow-lg w-3/5 flex">
        {/* Left side: Solid Color */}
        <div className="w-2/5 bg-orange-500 flex items-center justify-center text-white p-10 rounded-l">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Platform!</h2>
            <p className="text-lg">Create an account to enjoy our services.</p>
            <p className="text-lg mt-2">Sign up to explore more!</p>
          </div>
        </div>

        {/* Right side: Sign-up form */}
        <div className="w-3/5 p-10 flex flex-col justify-center">
          <h2 className="text-3xl mb-6 text-center">Sign Up</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={handleSignInClick}
              className="w-full bg-gray-500 text-white py-3 rounded hover:bg-gray-600 mt-4"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
