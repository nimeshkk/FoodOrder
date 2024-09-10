import React, { useState, useEffect } from "react";
import { Star, Edit, Trash2 } from "lucide-react";
import axios from "axios";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    restaurantName: "",
    foodName: "",
    rating: 0,
    review: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const response = await axios.get("http://localhost:8080/api/reviews");
    setReviews(response.data);
  };

  const handleAddReview = async () => {
    if (
      !newReview.restaurantName ||
      !newReview.foodName ||
      newReview.rating === 0 ||
      !newReview.review
    ) {
      setError("Please fill out all fields");
      return;
    }
    await axios.post("http://localhost:8080/api/reviews", newReview);
    fetchReviews();
    setReviews([...reviews, { ...newReview, id: Date.now() }]);
    setNewReview({ restaurantName: "", foodName: "", rating: 0, review: "" });
    setIsAddDialogOpen(false);
    setError("");
  };

  const handleDeleteReview = async (id) => {
    await axios.delete(`http://localhost:8080/api/reviews/${id}`);
    fetchReviews();
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const handleEditReview = (review) => {
    setEditingReview(review);
  };

  const handleUpdateReview = async () => {
    if (
      !editingReview.restaurantName ||
      !editingReview.foodName ||
      editingReview.rating === 0 ||
      !editingReview.review
    ) {
      setError("Please fill out all fields");
      return;
    }
    await axios.put(
      `http://localhost:8080/api/reviews/${editingReview.id}`,
      editingReview
    );
    fetchReviews();
    setReviews(
      reviews.map((review) =>
        review.id === editingReview.id ? editingReview : review
      )
    );
    setEditingReview(null);
    setError("");
  };

  const StarRating = ({ rating, onRatingChange }) => (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={24}
          onClick={() => onRatingChange(star)}
          fill={star <= rating ? "gold" : "none"}
          stroke={star <= rating ? "gold" : "currentColor"}
          className="cursor-pointer"
        />
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Review List</h1>
      <button
        onClick={() => setIsAddDialogOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Review
      </button>

      {reviews.map((review) => (
        <div key={review.id} className="mb-4 p-4 border rounded">
          <h2 className="text-xl font-bold">{review.restaurantName}</h2>
          <div className="flex items-center">
            <StarRating rating={review.rating} onRatingChange={() => {}} />
            <span className="ml-2">{review.foodName}</span>
          </div>
          <p className="mt-2">{review.review}</p>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={() => handleEditReview(review)}
              className="p-2 bg-yellow-500 text-white rounded"
            >
              <Edit className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleDeleteReview(review.id)}
              className="p-2 bg-red-500 text-white rounded"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}

      {isAddDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-4">Add Review</h2>
            <input
              className="w-full mb-2 p-2 border rounded"
              placeholder="Restaurant Name"
              value={newReview.restaurantName}
              onChange={(e) =>
                setNewReview({ ...newReview, restaurantName: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              placeholder="Food Name"
              value={newReview.foodName}
              onChange={(e) =>
                setNewReview({ ...newReview, foodName: e.target.value })
              }
            />
            <StarRating
              rating={newReview.rating}
              onRatingChange={(rating) =>
                setNewReview({ ...newReview, rating })
              }
            />
            <textarea
              className="w-full mb-2 p-2 border rounded"
              placeholder="Your review"
              value={newReview.review}
              onChange={(e) =>
                setNewReview({ ...newReview, review: e.target.value })
              }
            />
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsAddDialogOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddReview}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}

      {editingReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-4">Edit Review</h2>
            <input
              className="w-full mb-2 p-2 border rounded"
              placeholder="Restaurant Name"
              value={editingReview.restaurantName}
              onChange={(e) =>
                setEditingReview({
                  ...editingReview,
                  restaurantName: e.target.value,
                })
              }
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              placeholder="Food Name"
              value={editingReview.foodName}
              onChange={(e) =>
                setEditingReview({ ...editingReview, foodName: e.target.value })
              }
            />
            <StarRating
              rating={editingReview.rating}
              onRatingChange={(rating) =>
                setEditingReview({ ...editingReview, rating })
              }
            />
            <textarea
              className="w-full mb-2 p-2 border rounded"
              placeholder="Your review"
              value={editingReview.review}
              onChange={(e) =>
                setEditingReview({ ...editingReview, review: e.target.value })
              }
            />
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setEditingReview(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateReview}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Update Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewList;
