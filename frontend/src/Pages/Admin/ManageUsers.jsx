import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("/api/v1/admin/users");
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
      <h1>Manage Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username}
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
