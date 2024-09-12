import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingCart as ShoppingCartIcon } from 'lucide-react';

import mangoJuiceImage from '../../assets/images/mango-juice.jpg';
import margheritaPizzaImage from '../../assets/images/Margherita Pizza.jpg';

// Component to render each item in the cart
const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="flex items-center justify-between p-4 border-b">
    <div className="flex items-center space-x-4">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-500">${item.price.toFixed(2)}</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
        <Minus size={16} />
      </button>
      <span className="w-8 text-center">{item.quantity}</span>
      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
        <Plus size={16} />
      </button>
      <button onClick={() => onRemove(item.id)} className="p-1 rounded-full bg-red-200 hover:bg-red-300 ml-2">
        <Trash2 size={16} className="text-red-500" />
      </button>
    </div>
  </div>
);

// Main component for the shopping cart page
const ShoppingCartPage = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Margherita Pizza", price: 12.99, quantity: 2, image: margheritaPizzaImage },
    { id: 2, name: "Mango Juice", price: 4.99, quantity: 1, image: mangoJuiceImage },
  ]);

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Calculate the total price of items in the cart
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


  // Retun function
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <ShoppingCartIcon size={32} className="text-orange-500" />
          <h2 className="text-3xl font-bold text-orange-700">Your Cart</h2>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}

            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Total:</span>
                <span className="text-2xl font-bold text-orange-600">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;