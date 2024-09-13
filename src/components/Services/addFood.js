import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import DishTable from './dishtable';

const FoodEntryForm = () => {
  const [food, setFood] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [refreshTable, setRefreshTable] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const validateForm = () => {
    let newErrors = {};
    if (!food.id.trim()) newErrors.id = "ID is required";
    if (!food.name.trim()) newErrors.name = "Name is required";
    if (!food.price.trim()) newErrors.price = "Price is required";
    else if (isNaN(parseFloat(food.price))) newErrors.price = "Price must be a number";
    if (!food.image.trim()) newErrors.image = "Image URL is required";
    if (!food.description.trim()) newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood(prevFood => ({ ...prevFood, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const apiUrl = 'http://localhost:8083/api/v/dish/addDish';
      const formData = { ...food };

      // Log the form data being sent for debugging
      console.log('Submitting form data:', formData);

      axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log('Food item added:', response.data);
          // Clear form fields
          setFood({
            id: '',
            name: '',
            price: '',
            image: '',
            description: ''
          });
          // Trigger table refresh
          setRefreshTable(prev => !prev);
          // Set success message
          setSubmitMessage({ type: 'success', text: 'Food item added successfully!' });
          // Clear message after 5 seconds
          setTimeout(() => setSubmitMessage(null), 5000);
        })
        .catch(error => {
          if (error.response) {
            // Server responded with a status other than 2xx
            console.error('Error response:', error.response.data);
          } else if (error.request) {
            // Request was made but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request
            console.error('Error setting up request:', error.message);
          }
          // Set error message
          setSubmitMessage({ type: 'error', text: 'Failed to add food item. Please try again.' });
          // Clear message after 5 seconds
          setTimeout(() => setSubmitMessage(null), 5000);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex flex-col items-center p-4">
      <NavBar />
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-4 max-w-4xl w-full space-y-6 mt-12">
        <div className="flex items-center space-x-4 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="2" x2="6" y2="4"></line>
            <line x1="10" y1="2" x2="10" y2="4"></line>
            <line x1="14" y1="2" x2="14" y2="4"></line>
          </svg>
          <h2 className="text-3xl font-bold text-orange-700">Add Delicious Dish</h2>
        </div>

        {submitMessage && (
          <div className={`p-4 rounded-md ${submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {submitMessage.text}
          </div>
        )}

        <div className="grid grid-cols-2 gap-10">
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">Food ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={food.id}
              onChange={handleChange}
              placeholder="Enter unique ID"
              className={`mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 p-2 border-2 ${errors.id ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-orange-300 focus:ring-orange-200'}`}
            />
            {errors.id && <p className="mt-1 text-sm text-red-500">{errors.id}</p>}
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Food Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={food.name}
              onChange={handleChange}
              placeholder="Enter food name"
              className={`mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 p-2 border-2 ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-orange-300 focus:ring-orange-200'}`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={food.price}
              onChange={handleChange}
              placeholder="Enter price"
              className={`mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 p-2 border-2 ${errors.price ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-orange-300 focus:ring-orange-200'}`}
            />
            {errors.price && <p className="mt-1 text-sm text-red-500">{errors.price}</p>}
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={food.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className={`mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 p-2 border-2 ${errors.image ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-orange-300 focus:ring-orange-200'}`}
            />
            {errors.image && <p className="mt-1 text-sm text-red-500">{errors.image}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={food.description}
            onChange={handleChange}
            placeholder="Describe your delicious dish..."
            rows={4}
            className={`mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 p-2 border-2 ${errors.description ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-orange-300 focus:ring-orange-200'}`}
          ></textarea>
          {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          Add Dish
        </button>
      </form>

      <DishTable refresh={refreshTable} />
    </div>
  );
};

export default FoodEntryForm;
