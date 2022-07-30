import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.URL,
  headers: {
    Authorization: process.env.TOKEN as string,
    "Content-Type": "application/json;charset=utf-8",
  },
});
