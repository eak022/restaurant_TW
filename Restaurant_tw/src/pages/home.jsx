import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";
import Nav from "../components/Nav";

const Restaurant = () => {
  const [resData, setResData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurant")
      .then((res) => res.json())
      .then((response) => {
        setResData(response);
        setFilteredRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      <SearchBar
        restaurants={resData}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="restaurant">
        <div className="flex flex-wrap justify-center">
          {filteredRestaurants &&
            filteredRestaurants.map((item) => (
              <RestaurantCard key={item.id} {...item} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
