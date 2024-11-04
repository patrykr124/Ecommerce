import axios from "axios";

export const makeRequest = axios.create({
  baseURL: process.env.VITE_APP_API_URL,
  headers: {
    Authorization: "Bearer " + process.env.VITE_APP_API_TOKEN,
  },
});
