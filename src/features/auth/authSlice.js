import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  errors: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {},
    signup: (state, action) => {},
    logout: (state, action) => {},
    getUserInfo: (state, action) => {},
  },
});

export const { login, signup, logout, getUserInfo } = authSlice.actions;

export default authSlice.reducer;
