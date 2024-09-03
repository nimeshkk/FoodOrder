import React from 'react';
import { FaPlus } from 'react-icons/fa';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

const RestaurantSection = () => {
  // Sample data for restaurants with additional details
  const restaurants = [
    {
      id: 1,
      name: "The Spicy Grill",
      address: "123 Flavor St, Spice Town",
      phone: "+123 456 7890",
      email: "contact@thespicygrill.com",
      description: "A haven for lovers of bold flavors and exotic spices. Enjoy our diverse range of Indian delicacies.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/00/53/e9/unique-architecture.jpg?w=600&h=400&s=1", // Use actual URL for images
    },
    {
      id: 2,
      name: "Pasta Palace",
      address: "456 Noodle Ave, Pasta City",
      phone: "+987 654 3210",
      email: "info@pastapalace.com",
      description: "Experience the taste of authentic Italian pasta made from the finest ingredients and traditional recipes.",
      image: "https://c.myholidays.com/blog/blog/content/images/2021/10/The-Curry-Leaf.webp",
    },
    {
      id: 3,
      name: "Sushi Central",
      address: "789 Sushi Blvd, Tokyo Town",
      phone: "+123 555 6789",
      email: "hello@sushicentral.com",
      description: "A delightful journey through the best of Japanese cuisine, featuring fresh sushi and sashimi.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/2c/6d/38/beautiful-scenery-of.jpg?w=600&h=400&s=1",
    },
    {
      id: 4,
      name: "Burger Bistro",
      address: "101 Burger Lane, Foodie City",
      phone: "+321 654 9870",
      email: "burgerbistro@example.com",
      description: "Serving the juiciest burgers made from locally sourced ingredients in a cozy and casual atmosphere.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/45/bc/5c/capital-bar-grill.jpg?w=600&h=-1&s=1",
    },
  ];

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
                  src={restaurant.image}
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

