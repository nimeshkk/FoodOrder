import React, { useState } from 'react';

const FoodEntryForm = () => {
  const [food, setFood] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood(prevFood => ({ ...prevFood, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Food item submitted:', food);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full space-y-6">
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 p-2 border-2"
            />
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 p-2 border-2"
            />
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 p-2 border-2"
            />
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 p-2 border-2"
            />
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 p-2 border-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          Add Food Item
        </button>
      </form>
    </div>
  );
};

export default FoodEntryForm;