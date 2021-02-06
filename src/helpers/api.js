import axios from "axios";

// default axios end-points requests
const api = axios.create({
  baseURL: "http://localhost:3003/api/v1/grac/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
