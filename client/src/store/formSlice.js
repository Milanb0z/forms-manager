import { apiSlice } from "./apiSlice";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getForm: builder.query({
      query: () => "/form",
      providesTags: ["form"],
      transformResponse: (res) => {
        console.log(res);
        return res;
      },
    }),
    createForm: builder.mutation({
      query: (body) => ({ url: "/form/new", body, method: "POST" }),
      invalidatesTags: ["form"],
      transformResponse: (res) => {
        console.log(res);
        return res;
      },
    }),
  }),
});

export default extendedApiSlice;

export const { useGetFormQuery, useCreateFormMutation } = extendedApiSlice;
