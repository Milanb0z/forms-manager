import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, isLoading: false },
  reducers: {
    setLoading: (state, payload) => {
      state.isLoading = payload;
    },
    setCredentials: (state, action) => {
      console.log(action.payload);
      const { user, token, isLoading } = action.payload;
      state.user = user;
      state.token = token;

      localStorage.setItem("token", token);
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut, setLoading } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
