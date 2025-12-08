import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Page not found</div>,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "login", element: <div>Login Page</div> },
      { path: "campaigns", element: <div>Campaigns Page</div> },
      { path: "donate", element: <div>Donate Page</div> },
      { path: "about", element: <div>About Page</div> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
