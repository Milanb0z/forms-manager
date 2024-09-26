import { apiSlice } from "./apiSlice";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteInvite: builder.mutation({
      query: (id) => ({ url: `/invite/${id}`, method: "DELETE" }),
      invalidatesTags: (_result, _error, { _id: id }) => {
        return [{ type: "form", id }];
      },
    }),

    fetchForm: builder.query({
      query: (id) => `/invite/${id}`,
      providesTags: (_result, _error, { _id: id }) => [{ type: "form", id }],
    }),

    resendInvite: builder.mutation({
      query: (id) => `/invite/resend/${id}`,
      invalidatesTags: (_result, _error, { _id: id }) => {
        return [{ type: "form", id }];
      },
    }),

    addInvite: builder.mutation({
      query: ({ formId, body }) => ({
        url: `/invite/${formId}`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_result, _error, { _id: id }) => {
        return [{ type: "form", id }];
      },
    }),
  }),
});

export default extendedApiSlice;

export const {
  useDeleteInviteMutation,
  useFetchFormQuery,
  useResendInviteMutation,
  useAddInviteMutation,
} = extendedApiSlice;
