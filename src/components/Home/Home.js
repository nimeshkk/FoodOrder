import React, { useEffect, useState } from "react";
import axios from 'axios';
import dishImg from '../../assets/images/dish.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const [dishes, setDishes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  // Fetch data from APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dishResponse = await axios.get('http://localhost:8083/api/v/dish/getDish');
        setDishes(dishResponse.data); // Adjust based on actual data structure

        const restaurantResponse = await axios.get('http://localhost:8080/api/v1/restaurant/getRestaurant');
        setRestaurants(restaurantResponse.data); // Adjust based on actual data structure

      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to fetch data.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${dishImg})` }}>
        <div className="bg-black bg-opacity-60 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Foodie Haven</h1>
          <p className="text-xl mb-8">Order delicious meals online and get them delivered to your doorsteps!</p>
          <a href="/restaurant" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg">
            View Menu
          </a>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Our Restaurants</h2>
          
          {/* Responsive Flex Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {restaurants.map((restaurant) => (
              <CategoryCard key={restaurant.id} title={restaurant.name} image={restaurant.imageUrl} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish) => (
              <DishCard
                key={dish.id}
                title={dish.name}
                description={dish.description}
                price={`LKR ${dish.price}`}
                image={dish.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      <ToastContainer />
    </div>
  );
};

const CategoryCard = ({ title, image }) => (
  <div className="w-64 h-40 bg-cover bg-center rounded-lg shadow-md flex items-center justify-center" style={{ backgroundImage: `url(${image})` }}>
    <h3 className="text-white text-xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded">{title}</h3>
  </div>
);

const DishCard = ({ title, description, price, image }) => {
  const handleAddToCart = () => {
    toast.success(`${title} has been added to your cart!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2 flex-grow">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold">{price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


export default HomePage;
