import React, { useState, useEffect } from "react";

const SearchBar = ({ restaurants, setFilteredRestaurants }) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setFilteredRestaurants(
      restaurants.filter(
        (res) =>
          res.name.toLowerCase().includes(keyword.toLowerCase()) ||
          res.rtype.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  }, [keyword, restaurants, setFilteredRestaurants]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  


//   import React, { useState, useEffect } from "react";

// const Search = ({ restaurants, setFilteredRestaurants }) => {
//   const [keyword, setKeyword] = useState("");

//   useEffect(() => {
//     if (keyword === "") {
//       setFilteredRestaurants(restaurants);
//       return;
//     }

//     const result = restaurants.filter((restaurant) => {
//       return (
//         restaurant.title.toLowerCase().includes(keyword.toLowerCase()) ||
//         restaurant.type.toLowerCase().includes(keyword.toLowerCase())
//       );
//     });

//     setFilteredRestaurants(result);
//   }, [keyword, restaurants, setFilteredRestaurants]);

//   const handleChange = (e) => {
//     setKeyword(e.target.value);
//   };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        className="w-full max-w-lg px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for restaurants..."
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
