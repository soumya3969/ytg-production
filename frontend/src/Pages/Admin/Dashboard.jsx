import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>

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
  );
};

export default Dashboard;
