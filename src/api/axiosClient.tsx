import axios from "axios";

/**
 * Detect environment automatically:
 * - If running on localhost → use backend local
 * - Else → use backend production
 */
const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8080" // Backend local
    : import.meta.env.VITE_API_URL; // Backend prod

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const errorCode = error.response?.data?.error;
    console.error("API Error:", errorCode);
    if (status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("menus");

      window.location.href = "/login";
      return;
    }
    if (status && status >= 500) {
      window.location.href = "/error";
      return;
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
