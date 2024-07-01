import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [restaurant, setRestaurant] = useState({
    name: "",
    img: "",
    rtype: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/restaurant/`+id)
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const restaurantData = {
      name: restaurant.name,
      img: restaurant.img,
      rtype: restaurant.rtype,
    };
    fetch(`http://localhost:3000/restaurant/` + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurantData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Saved successfully");
          navigate("/");
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="container mx-auto mt-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-5 rounded shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="img"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            id="img"
            name="img"
            value={restaurant.img}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Image URL"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rtype"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Restaurant Type
          </label>
          <input
            type="text"
            id="rtype"
            name="rtype"
            value={restaurant.rtype}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Restaurant Type"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
          <Link
            to="/"
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
