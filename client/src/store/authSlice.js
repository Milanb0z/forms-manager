import { apiSlice } from "./apiSlice";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/user/profile",
      providesTags: ["auth"],
      transformResponse: ({ user }) => {
        return user;
      },
    }),
    login: builder.mutation({
      query: (body) => ({ url: "/user/login", body, method: "POST" }),
      providesTags: ["auth"],
      transformResponse: ({ token, user }) => {
        localStorage.setItem("token", token);
        return user;
      },
    }),
    signUp: builder.mutation({
      query: (body) => ({ url: "/user/signup", body, method: "POST" }),
      providesTags: ["auth"],
      transformResponse: ({ token, user }) => {
        localStorage.setItem("token", token);
        return user;
      },
    }),
  }),
});

export default extendedApiSlice;

export const { useGetProfileQuery, useLoginMutation, useSignUpMutation } =
  extendedApiSlice;
