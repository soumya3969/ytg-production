import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await axios.get("/api/v1/tours"); // Assuming reviews are fetched along with tours
      setReviews(res.data.data.flatMap((tour) => tour.reviews));
    };
    fetchReviews();
  }, []);

  const deleteReview = async (id) => {
    // Add the corresponding backend route for deleting a review
    await axios.delete(`/api/v1/admin/reviews/${id}`);
    setReviews(reviews.filter((review) => review._id !== id));
  };

  return (
    <div>
      <div className="navbar w-100">
        <ul className="d-flex text-center justify-content-center align-items-center gap-5 w-100">
          <li>
            <Link
              className=" btn btn-warning text-light text-decoration-none"
              to="/admin/manage-tours"
            >
              Manage Tours
            </Link>
          </li>
          <li>
            <Link
              className=" btn btn-warning text-light text-decoration-none"
              to="/admin/manage-users"
            >
              Manage Users
            </Link>
          </li>
          <li>
            <Link
              className=" btn btn-warning text-light text-decoration-none"
              to="/admin/manage-bookings"
            >
              Manage Bookings
            </Link>
          </li>
          <li>
            <Link
              className=" btn btn-warning text-light text-decoration-none"
              to="/admin/manage-reviews"
            >
              Manage Reviews
            </Link>
          </li>
        </ul>
      </div>
      <h1>Manage Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            {review.reviewText}
            <button onClick={() => deleteReview(review._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageReviews;
