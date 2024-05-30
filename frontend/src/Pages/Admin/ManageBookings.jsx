import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/config";
import { Link } from "react-router-dom";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios.get(`${BASE_URL}/admin/bookings`);
      // console.log(res);
      setBookings(res.data.data);
    };
    fetchBookings();
  }, []);

  const deleteBooking = async (id) => {
    await axios.delete(`${BASE_URL}/admin/bookings/?id=${id}`);
    setBookings(bookings.filter((booking) => booking._id !== id));
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
      <h1>Manage Bookings</h1>
      <div className="data">
        <table className="table table-striped table-success text-center">
          <thead>
            <th>ID</th>
            <th>Booking Date</th>
            <th>Tour Name</th>
            <th>Guest Size</th>
            <th>Full Name</th>
            <th>User Email</th>
            <th>Phone</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{booking.bookAt}</td>
                <td>{booking.tourName}</td>
                <td>{booking.guestSize}</td>
                <td>{booking.fullName}</td>
                <td>{booking.userEmail}</td>
                <td>{booking.phone}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteBooking(booking._id)}
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

export default ManageBookings;
