import React, { useState, useEffect } from "react";
import "./App.css";

const Restaurant = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/restaurant")
      .then((res) => res.json())
      .then((response) => {
        setResData(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="title">
        <h1> Grab restaurant</h1>
      </div>
      <div className="searchbar">
        <input
          type="text"
          className="w-full px-4 py-2 outline-none border"
          placeholder="Search..."
        />
      </div>
      <div className="restaurant">
        <div className="flex flex-wrap justify-center">
          {resData &&
            resData.map((item) => {
              const { id, name, img, rtype } = item;
              return (
                <article className="menu-item" key={id}>
                  <div className="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img className="rounded-t-lg" src={img} alt={name} />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {name}
                        </h3>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {rtype}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Order now
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
