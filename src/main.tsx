import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";
import CampaignsPage from "./pages/CampaignsPage";
import AboutPage from "./pages/AboutPage";
import DonationPage from "./pages/DonatePage";
import DonationSuccessPage from "./pages/DonationSuccessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Page not found</div>,
    children: [
      { path: "/", element: <LandingPage /> },

      { path: "login", element: <div>Login Page</div> },

      { path: "campaigns", element: <CampaignsPage /> },
      { path: "/campaigns/:id/donate", element: <DonationPage /> },

      { path: "donate", element: <DonationPage /> },
      { path: "/donation/success", element: <DonationSuccessPage /> },

      { path: "about", element: <AboutPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
