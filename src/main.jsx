import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout /> ,
    children: [
      {
        path: "/",
        element: <Home /> ,
      },
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
