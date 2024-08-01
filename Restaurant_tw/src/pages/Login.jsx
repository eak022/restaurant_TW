import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#22c55e] focus:border-[#22c55e] dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#22c55e] focus:border-[#22c55e] dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#22c55e] text-white rounded-md hover:bg-[#16a34a] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
