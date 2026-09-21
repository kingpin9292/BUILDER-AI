import axios from "axios";

const configuredBaseUrl = import.meta.env.VITE_BASE_URL?.trim();
const baseURL = configuredBaseUrl?.replace(/^(?:"|')+|(?:"|')+$/g, "").replace(/\/$/, "") || "";

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
