import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";
import Nav from "./Nav";
import RestuarantService from '../services/restaurant.service'; // Assuming this is how you import your service
import Swal from 'sweetalert2'; // Ensure SweetAlert is imported

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const response = await RestuarantService.getAllrestaurant();
        if (response.status === 200) {
          setRestaurants(response.data);
          setFilteredRestaurants(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };
    getRestaurant();
  }, []);

  return (
    <>
      <div className="container flex flex-col items-center p-4 mx-auto space-y-6">
        <Header />
        <SearchBar
          restaurants={restaurants}
          setFilteredRestaurants={setFilteredRestaurants}
        />
        <div className="restaurant">
          <div className="flex flex-wrap justify-center">
            {filteredRestaurants.map((item) => (
              <RestaurantCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
