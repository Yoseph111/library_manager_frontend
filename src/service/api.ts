
// src/service/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const setupApiInterceptors = (getState: () => any) => {
  api.interceptors.request.use((config) => {
    const token = getState()?.auth?.token;
    if (token) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    }
    return config;
  });
};

export default api;


