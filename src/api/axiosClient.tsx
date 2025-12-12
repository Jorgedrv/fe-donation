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

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosClient;
