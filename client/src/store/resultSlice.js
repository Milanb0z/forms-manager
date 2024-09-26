import { apiSlice } from "./apiSlice";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResult: builder.query({
      query: (id) => `/response/${id}`,
    }),
  }),
});

export default extendedApiSlice;

export const { useGetResultQuery } = extendedApiSlice;
