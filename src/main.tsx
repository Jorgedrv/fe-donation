import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import LandingPage from "./pages/LandingPage";
import MainLayout from "./layouts/MainLayout";

import CampaignsPage from "./pages/CampaignsPage";
import CampaignsManagementPage from "./pages/CampaignsManagementPage";

import AboutPage from "./pages/AboutPage";

import DonationPage from "./pages/DonatePage";
import DonationSuccessPage from "./pages/DonationSuccessPage";

import Dashboard from "./pages/DashboardPage";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

import UsersPage from "./pages/UserPage";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/sign-up", element: <SignupPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/reset-password", element: <ResetPasswordPage /> },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Page not found</div>,
    children: [
      { path: "/", element: <LandingPage /> },

      { path: "campaigns", element: <CampaignsPage /> },
      { path: "/campaigns/:id/donate", element: <DonationPage /> },

      { path: "donate", element: <DonationPage /> },
      { path: "/donation/success", element: <DonationSuccessPage /> },

      { path: "/dashboard", element: <Dashboard /> },
      { path: "/campaigns/manage", element: <CampaignsManagementPage /> },
      { path: "/users", element: <UsersPage /> },

      { path: "about", element: <AboutPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
