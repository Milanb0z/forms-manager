import { apiSlice } from "./apiSlice";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getForm: builder.query({
      query: () => "/form",
      providesTags: ["form"],
    }),

    getFormById: builder.query({
      query: (id) => `/form/${id}`,
      providesTags: ["form"],
    }),
    createForm: builder.mutation({
      query: (body) => ({ url: "/form/new", body, method: "POST" }),
      invalidatesTags: ["form"],
    }),
    editForm: builder.mutation({
      query: ({ formId, data }) => ({
        url: `/form/${formId}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: ["form", "auth"],
    }),
    deleteForm: builder.mutation({
      query: (id) => ({ url: `/form/${id}`, method: "DELETE" }),
      invalidatesTags: ["form", "auth"],
    }),
  }),
});

export default extendedApiSlice;

export const {
  useGetFormQuery,
  useCreateFormMutation,
  useDeleteFormMutation,
  useEditFormMutation,
  useGetFormByIdQuery,
} = extendedApiSlice;
