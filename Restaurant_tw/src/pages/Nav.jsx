import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import LoginButton from "../components/LoginButton";
import RegisterButton from "../components/RegisterButton";
import { useAuthContext } from "../context/AuthContext";

const Nav = () => {
  const { user } = useAuthContext();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 w-full">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-full">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#22c55e]">
            Grab Restaurant
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:flex md:items-center md:justify-center md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 md:p-0 rounded ${isActive("/") ? "text-[#22c55e]" : "text-black"} hover:text-[#22c55e]`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/add"
                className={`block py-2 px-3 md:p-0 rounded ${isActive("/add") ? "text-[#22c55e]" : "text-black"} hover:text-[#22c55e]`}
              >
                Add
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:items-center">
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <span className="text-gray-900 dark:text-white">
                  Welcome, <span className="text-red-500">{user.username}</span>
                </span>
                {user.roles.map((role, index) => (
                  <div key={index} className="badge text-xs badge-accent">
                    {role}
                  </div>
                ))}
              </div>
              <UserProfile />
            </>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/register"
                className="py-2 px-4 bg-[#22c55e] text-white rounded hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2 transition duration-300"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="py-2 px-4 bg-[#22c55e] text-white rounded hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2 transition duration-300"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
