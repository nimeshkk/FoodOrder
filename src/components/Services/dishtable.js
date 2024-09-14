import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DishTable = ({ refreshTrigger }) => {
  const [dishes, setDishes] = useState([]);
  const [editingDish, setEditingDish] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetchDishes();
  }, [refreshTrigger]);

  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:8083/api/v/dish/getDish');
      setDishes(response.data);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  const handleEdit = (dish) => {
    setEditingDish(dish);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const dishToDelete = dishes.find((dish) => dish.id === id);
      await axios.delete(`http://localhost:8083/api/v/dish/deleteDish`, {
        data: dishToDelete,
      });
      fetchDishes(); // Refresh the dish list
    } catch (error) {
      console.error('Error deleting dish:', error);
    }
  };

  const handleUpdateDish = async () => {
    try {
      await axios.put('http://localhost:8083/api/v/dish/updateDish', editingDish);
      setIsEditModalOpen(false);
      fetchDishes(); // Refresh the dish list
    } catch (error) {
      console.error('Error updating dish:', error);
    }
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
                <td className="px-6 py-4 whitespace-nowrap">LKR{dish.price}</td>
                <td className="px-6 py-4">{dish.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={dish.image} alt={dish.name} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(dish)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(dish.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Edit Dish</h3>
            {editingDish && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={editingDish.name}
                    onChange={(e) => setEditingDish({ ...editingDish, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    id="price"
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={editingDish.price}
                    onChange={(e) => setEditingDish({ ...editingDish, price: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    id="description"
                    rows="3"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={editingDish.description}
                    onChange={(e) => setEditingDish({ ...editingDish, description: e.target.value })}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
                  <input
                    id="image"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={editingDish.image}
                    onChange={(e) => setEditingDish({ ...editingDish, image: e.target.value })}
                  />
                </div>
              </div>
            )}
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateDish}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DishTable;