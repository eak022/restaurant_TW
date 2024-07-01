import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();

  const [restaurantData, setRestaurantData] = useState({
    name: "",
    img: "",
    rtype: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({ ...restaurantData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurantData = {
      name: restaurantData.name,
      img: restaurantData.img,
      rtype: restaurantData.rtype,
    };

    fetch("http://localhost:3000/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurantData),
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

    console.log("Submitted:", newRestaurantData);

    setRestaurantData({
      name: "",
      img: "",
      rtype: "",
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
            value={restaurantData.name}
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
            value={restaurantData.img}
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
            value={restaurantData.rtype}
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
            Add Restaurant
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
