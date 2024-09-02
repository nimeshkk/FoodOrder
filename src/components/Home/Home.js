import React from 'react';
import dishImg from '../../assets/images/dish.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      

      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${dishImg})` }} >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Foodie Haven</h1>
          <p className="text-xl mb-8">Order delicious meals online and get them delivered to your doorsteps!</p>
          <a href="/menu" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg">
            View Menu
          </a>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Our Categories</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <CategoryCard title="Pizzas" image="/images/pizza.jpg" />
            <CategoryCard title="Burgers" image="/images/burger.jpg" />
            <CategoryCard title="Sushi" image="/images/sushi.jpg" />
            <CategoryCard title="Desserts" image="/images/dessert.jpg" />
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DishCard title="Margherita Pizza" description="Classic Margherita with fresh mozzarella and basil." price="$12.99" image="/images/dish1.jpg" />
            <DishCard title="Cheeseburger" description="Juicy cheeseburger with cheddar and special sauce." price="$8.99" image="/images/dish2.jpg" />
            <DishCard title="Salmon Sushi" description="Fresh salmon sushi with a hint of wasabi." price="$15.99" image="/images/dish3.jpg" />
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

const CategoryCard = ({ title, image }) => (
  <div className="w-64 h-40 bg-cover bg-center rounded-lg shadow-md flex items-center justify-center" style={{ backgroundImage: `url(${image})` }}>
    <h3 className="text-white text-xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded">{title}</h3>
  </div>
);

const DishCard = ({ title, description, price, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">{price}</span>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Order Now</button>
      </div>
    </div>
  </div>
);

export default HomePage;
