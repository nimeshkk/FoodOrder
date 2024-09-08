import React, { useState } from "react";
import { Star } from "lucide-react";


const AddReviewForm = () => {
  const [restorentName, setRestorentName] = useState("");
  const [foodName, setFoodName] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!restorentName || !foodName || rating === 0 || !review) {
      setError("Please fill out all fields");
      return;
    }
    // Here you would typically send the review data to your backend
    console.log({ restorentName, foodName, rating, review });
    setError("");
    // Reset form
    setFoodName("");
    setRestorentName("");
    setRating(0);
    setReview("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="restorentName"
            className="block text-sm font-medium text-gray-700"
          >
            Restorent Name
          </label>
          <input
            type="text"
            id="restorentName"
            value={restorentName}
            onChange={(e) => setRestorentName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="foodName"
            className="block text-sm font-medium text-gray-700"
          >
            Food Name
          </label>
          <input
            type="text"
            id="foodName"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <div className="flex items-center mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={24}
                onClick={() => setRating(star)}
                fill={star <= rating ? "gold" : "none"}
                stroke={star <= rating ? "gold" : "currentColor"}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="review"
            className="block text-sm font-medium text-gray-700"
          >
            Review
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          ></textarea>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReviewForm;
