import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home.jsx';
import Add from '../pages/Add.jsx';
import Edit from '../pages/Edit.jsx';
import Login from '../pages/Login.jsx'; 
import Register from '../pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/Edit/:id",
    element: <Edit />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

export default router;
