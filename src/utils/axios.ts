import axios, { AxiosInstance } from "axios";

const AxiosConfig: AxiosInstance = axios.create({
  baseURL: `https://dev.sogus.vn/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { AxiosConfig };
