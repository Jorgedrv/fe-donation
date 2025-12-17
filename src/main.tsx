import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage";

import CampaignsPage from "./pages/CampaignsPage";
import CampaignsManagementPage from "./pages/CampaignsManagementPage";

import AboutPage from "./pages/AboutPage";

import DonationPage from "./pages/DonatePage";
import DonationSuccessPage from "./pages/DonationSuccessPage";

import Dashboard from "./pages/DashboardPage";

import RequireAuth from "./components/common/RequireAuth";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

import UsersPage from "./pages/UserPage";

import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/sign-up", element: <SignupPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/reset-password", element: <ResetPasswordPage /> },
  { path: "/error", element: <ErrorPage /> },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },

      { path: "campaigns", element: <CampaignsPage /> },
      { path: "campaigns/:id/donate", element: <DonationPage /> },

      { path: "donate", element: <DonationPage /> },
      { path: "donation/success", element: <DonationSuccessPage /> },

      { path: "about", element: <AboutPage /> },

      // 🔐 PROTECTED ROUTES
      {
        element: <RequireAuth />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "campaigns/manage", element: <CampaignsManagementPage /> },
          { path: "users", element: <UsersPage /> }
        ]
      },

      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
