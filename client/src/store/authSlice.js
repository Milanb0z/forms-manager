import { apiSlice } from "./apiSlice";

const setCookie = ({ token, user }) => {
  if (token) {
    localStorage.setItem("token", token);
  }
  return user;
};

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/user/profile",
      providesTags: ["auth"],
      transformResponse: setCookie,
    }),
    getUserByUsername: builder.query({
      query: (username) => `/user/${username}`,
    }),
    login: builder.mutation({
      query: (body) => ({ url: "/user/login", body, method: "POST" }),
      providesTags: ["auth"],
      transformResponse: setCookie,
    }),
    signUp: builder.mutation({
      query: (body) => ({ url: "/user/signup", body, method: "POST" }),
      providesTags: ["auth"],
      transformResponse: setCookie,
    }),
    updateUser: builder.mutation({
      query: (body) => {
        return { url: "/user/", body, method: "PATCH" };
      },
      invalidatesTags: ["auth"],
      transformResponse: setCookie,
    }),
  }),
});

export default extendedApiSlice;

export const {
  useGetProfileQuery,
  useLoginMutation,
  useSignUpMutation,
  useUpdateUserMutation,
  useGetUserByUsernameQuery,
} = extendedApiSlice;
