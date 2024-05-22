import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/admin/manage-tours">Manage Tours</Link></li>
        <li><Link to="/admin/manage-users">Manage Users</Link></li>
        <li><Link to="/admin/manage-bookings">Manage Bookings</Link></li>
        <li><Link to="/admin/manage-reviews">Manage Reviews</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
