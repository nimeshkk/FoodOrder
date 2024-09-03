import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

const RestaurantSection = () => {
  // State to store restaurants data
  const [restaurants, setRestaurants] = useState([]);

  // Fetch restaurants data when the component mounts
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

  return (
    <>
      <NavBar />
      <section className="py-12 mt-5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Our Restaurants</h2>
            <Link to="/addrestaurant" className="inline-block">
              <button className="flex items-center bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                <FaPlus className="mr-2" /> {/* Plus icon */}
                Add Restaurant
              </button>
            </Link>
          </div>

          {/* Restaurant Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={restaurant.imageUrl}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
                  <p className="text-gray-600"><strong>Address:</strong> {restaurant.address}</p>
                  <p className="text-gray-600"><strong>Phone:</strong> {restaurant.phone}</p>
                  <p className="text-gray-600"><strong>Email:</strong> {restaurant.email}</p>
                  <p className="text-gray-600 mt-2">{restaurant.description}</p>
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    View Details
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
