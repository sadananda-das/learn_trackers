import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Type from "./components/Type.js";
import Login from "./components/Login.js";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/visit",
    element: <Type />,
  },
  {
    path: "/teacher",
    element: <Login heading="Hello Friends!" />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
reportWebVitals();
