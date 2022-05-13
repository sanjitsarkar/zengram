import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../../services/auth/authService";
import { notify } from "../../utils";

const initialState = {
  status: "idle",
  user: JSON.parse(localStorage?.getItem("user")),
  error: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      notify(`You have been logged out`, "success");
      state.status = "loggedOut";
      state.user = null;
      state.error = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      notify(`Welcome, ${state.user.user.name}`);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error;
      notify("Email or Password is wrong", "error");
    });
    builder.addCase(signup.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      notify(`Welcome, ${state.user.user.name}`);
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error;
      notify("Email is already taken", "error");
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
