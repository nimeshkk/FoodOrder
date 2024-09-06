import React, { useState } from 'react';
import { PlusCircle, Home, CreditCard, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import NavBar from '../NavBar/NavBar';

const ServiceCard = ({ icon, title, description, onClick }) => (
  <div 
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    onClick={onClick}
  >
    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-500 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Dashboard = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const services = [
    { 
      icon: <PlusCircle size={32} />, 
      title: "Add New Food", 
      description: "Expand your menu with new delicious items",
      action: () => navigate("/add-food"), // Add navigation action
    },
    { 
      icon: <Home size={32} />, 
      title: "Add Restaurant", 
      description: "Register your restaurant to our platform",
      action: () => setSelectedService("Add Restaurant") 
    },
    { 
      icon: <CreditCard size={32} />, 
      title: "Payment", 
      description: "Manage your transactions and earnings",
      action: () => navigate("/cart"), 
    },
    { 
      icon: <Star size={32} />, 
      title: "Add Review", 
      description: "Share your dining experience with others",
      action: () => setSelectedService("Add Review") 
    },
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <NavBar />
      <div className="container mx-auto mt-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Food Service Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            onClick={service.action} // Use action to handle clicks
          />
        ))}
      </div>
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h2 className="text-2xl font-semibold mb-4">{selectedService}</h2>
            <p className="mb-4">You've selected the {selectedService} service. This is where you would implement the functionality for this service.</p>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Dashboard;
