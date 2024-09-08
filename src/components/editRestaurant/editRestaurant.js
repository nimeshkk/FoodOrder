import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const EditRestaurantForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/restaurant/getRestaurant/${id}`);
        setFormData({
          id: response.data.id,
          name: response.data.name,
          address: response.data.address,
          phone: response.data.phone,
          email: response.data.email,
          description: response.data.description,
          imageUrl: response.data.imageUrl
        });
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchRestaurant();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting form data:', { ...formData }); // Log form data

    try {
      const response = await axios.put(`http://localhost:8080/api/v1/restaurant/updateRestaurant/${formData.id}`, { ...formData });
      console.log('Update response:', response); // Log the response
      alert('Restaurant updated successfully!');
      navigate('/restaurant'); // Redirect to the main page or the previous page
    } catch (error) {
      console.error('Error updating restaurant:', error);
      alert(`Failed to update restaurant. ${error.response?.data?.message || 'Please try again later.'}`);
    }
  };

  return (
    <>
      <NavBar />
      <div className=" mt-8 min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-4 max-w-2xl w-full space-y-4 "
        >
          <h2 className="text-2xl font-bold text-orange-700 text-center mb-4">Edit Restaurant</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">Restaurant ID</label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="Enter restaurant ID"
                className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Restaurant Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter restaurant name"
                className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200"
                required
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                rows={4}
                className="mt-1 block w-full rounded-md p-1 border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200"
                required
              ></textarea>
            </div>
            <div className="col-span-2">
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="Enter image URL"
                className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default EditRestaurantForm;
