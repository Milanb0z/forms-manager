import { apiSlice } from "./apiSlice";
import { setCredentials } from "./authSlice";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/user/profile",
      async onQueryStarted(_data, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          dispatch(setCredentials(result.data));
        } catch (error) {
          // nothing to do here
        }
      },
    }),
    getUserByUsername: builder.query({
      query: (username) => `/user/${username}`,
    }),
    login: builder.mutation({
      query: (body) => ({ url: "/user/login", body, method: "POST" }),
    }),
    signUp: builder.mutation({
      query: (body) => ({ url: "/user/signup", body, method: "POST" }),
    }),
    updateUser: builder.mutation({
      query: (body) => {
        return { url: "/user/", body, method: "PATCH" };
      },
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
