import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DishTable = ({ refreshTrigger }) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchDishes();
  }, [refreshTrigger]); // Re-fetch dishes when refreshTrigger changes

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v/dish/getDish');
      setDishes(response.data);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log('Edit dish with id:', id);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log('Delete dish with id:', id);
  };

  return (
    <div className="container mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Dish List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dishes.map((dish) => (
              <tr key={dish.id}>
                <td className="px-6 py-4 whitespace-nowrap">{dish.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dish.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">${dish.price}</td>
                <td className="px-6 py-4">{dish.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={dish.image} alt={dish.name} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(dish.id)}
                    className="px-3 py-1 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(dish.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DishTable;