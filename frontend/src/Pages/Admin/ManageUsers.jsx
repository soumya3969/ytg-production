import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/config";
import "./styles/mUsers.css";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`${BASE_URL}/admin/users`);
      setUsers(res.data.data);
    };
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`/api/v1/admin/users/${id}`);
    setUsers(users.filter((user) => user._id !== id));
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
      <h1>Manage Users</h1>
      <div className="data">
        <table className="table table-sm table-striped table-info text-center">
          <thead className="b bg-light-subtle">
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username}
            {user.email}
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ManageUsers;
