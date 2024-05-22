import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/config";
// import { BASE_URL } from "../../utils/config";

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
      <h1>Manage Bookings</h1>
      <table className="table table-bordered">
        <tr>
          <th>ID</th>
          <th>Booking Date</th>
          <th>Tour Name</th>
          <th>Guest Size</th>
          <th>Full Name</th>
          <th>User Email</th>
          <th>Phone</th>
          <th>Delete</th>
        </tr>
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
                className="btn btn-outline-danger"
                onClick={() => deleteBooking(booking._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ManageBookings;
