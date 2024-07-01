import ReactDOM from "react-dom/client";
import Home from "../pages/home.jsx";
import Add from "../pages/Add.jsx";
import Edit from "../pages/Edit.jsx";
import { createBrowserRouter } from "react-router-dom";

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
]);

export default router;
