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
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Dish List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div key={dish.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{dish.name}</h3>
              <p className="text-gray-600 mb-2">LKR {dish.price}</p>
              <p className="text-gray-700 flex-grow">{dish.description}</p>
            </div>
            <div className="p-4 flex justify-between border-t border-gray-300">
              <button
                onClick={() => handleEdit(dish)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(dish.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Edit Dish</h3>
            {editingDish && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={editingDish.name}
                    onChange={(e) => setEditingDish({ ...editingDish, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    id="price"
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={editingDish.price}
                    onChange={(e) => setEditingDish({ ...editingDish, price: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    id="description"
                    rows="3"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={editingDish.description}
                    onChange={(e) => setEditingDish({ ...editingDish, description: e.target.value })}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
                  <input
                    id="image"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={editingDish.image}
                    onChange={(e) => setEditingDish({ ...editingDish, image: e.target.value })}
                  />
                </div>
              </div>
            )}
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateDish}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
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
