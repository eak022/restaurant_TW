import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import Swal from 'sweetalert2';

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthService.register(user.username, user.email, user.password);
      console.log('Registration successful:', response);

      Swal.fire({
        title: 'Success!',
        text: 'Registration successful. Please log in.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      console.error('Registration failed:', error);

      Swal.fire({
        title: 'Error!',
        text: 'Registration failed. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });

      setError("Registration failed. Please try again.");
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#22c55e] focus:border-[#22c55e] dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              required
              placeholder="Username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#22c55e] focus:border-[#22c55e] dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
              placeholder="Password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#22c55e] focus:border-[#22c55e] dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#22c55e] text-white rounded-md hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2 transition duration-300"
            >
              Register
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full py-2 px-4 ml-4 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
