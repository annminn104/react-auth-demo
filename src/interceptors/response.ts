import { AxiosConfig } from "../utils/axios";
import { AxiosError, AxiosResponse } from "axios";

AxiosConfig.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    return error.message;
  }
);
