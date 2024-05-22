import React, { useEffect, useState } from "react";
import axios from "axios";

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
