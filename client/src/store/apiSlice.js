import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.DEV
      ? "http://localhost:3000/api"
      : "https://formr.onrender.com/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("token", token);
      }
      return headers;
    },
  }),
  tagTypes: ["form", "auth"],
  endpoints: () => ({}),
});
