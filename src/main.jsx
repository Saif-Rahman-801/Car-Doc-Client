import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home/Home/Home.jsx";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout /> ,
    children: [
      {
        path: "/",
        element: <Home /> ,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <div className="container mx-auto">
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 </div>
);
