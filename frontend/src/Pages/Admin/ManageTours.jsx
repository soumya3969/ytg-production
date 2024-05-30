import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageTours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      const res = await axios.get("/api/v1/admin/tours");
      setTours(res.data.data);
    };
    fetchTours();
  }, []);

  const deleteTour = async (id) => {
    await axios.delete(`/api/v1/admin/tours/${id}`);
    setTours(tours.filter((tour) => tour._id !== id));
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
      <h1>Manage Tours</h1>
      <ul>
        {tours.map((tour) => (
          <li key={tour._id}>
            {tour.title}
            <button onClick={() => deleteTour(tour._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageTours;
