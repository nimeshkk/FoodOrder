import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios'; // Import axios

const AddRestaurantForm = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    id: '', // Added id field
    name: '',
    address: '',
    phone: '',
    email: '',
    description: '',
    imageUrl: ''
  });

  // Handler to update state with form input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler to manage form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      // Send POST request to the API
      const response = await axios.post('http://localhost:8080/api/v1/restaurant/saveRestaurant', formData);
      console.log('Response:', response.data);

      // Display success message as a popup alert
      alert('Restaurant added successfully!');

      // Clear the form after submission
      setFormData({
        id: '', // Clear id field
        name: '',
        address: '',
        phone: '',
        email: '',
        description: '',
        imageUrl: ''
      });
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      // Optionally handle errors here
    }
  };

  return (
    <>
      <NavBar />
      <div className="max-w-2xl mx-auto p-2 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-center mt-8">Add Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="id" className="block text-gray-700 font-bold mb-2">ID</label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            {/* Single column for description */}
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                rows="4"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="imageUrl" className="block text-gray-700 font-bold mb-2">Image URL</label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRestaurantForm;
