import React, { useEffect, useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import NavBar from '../NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RestaurantSection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/restaurant/getRestaurant');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants data:', error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this restaurant?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/restaurant/deleteRestaurant/${id}`);
        alert('Restaurant deleted successfully');
        setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
      } catch (error) {
        console.error('Error deleting restaurant:', error);
        alert('Failed to delete restaurant.');
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/editrestaurant/${id}`);
  };

  return (
    <>
      <NavBar />
      <section className="py-12 mt-5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Our Restaurants</h2>
            <Link to="/addrestaurant" className="inline-block">
              <button className="flex items-center bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                <FaPlus className="mr-2" />
                Add Restaurant
              </button>
            </Link>
          </div>

          {/* Restaurant Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img
                  src={restaurant.imageUrl}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
                  <p className="text-gray-600"><strong>Address:</strong> {restaurant.address}</p>
                  <p className="text-gray-600"><strong>Phone:</strong> {restaurant.phone}</p>
                  <p className="text-gray-600"><strong>Email:</strong> {restaurant.email}</p>
                  <p className="text-gray-600 mt-2">{restaurant.description}</p>
                </div>
                <div className="flex justify-between p-6 bg-gray-100">
                  <button
                    onClick={() => handleEdit(restaurant.id)}
                    className="flex items-center bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
                  >
                    <FaEdit className="mr-2" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(restaurant.id)}
                    className="flex items-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                  >
                    <FaTrash className="mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantSection;
