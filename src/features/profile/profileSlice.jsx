import { createSlice } from "@reduxjs/toolkit";
import {
  getProfileInfo,
  updateProfileInfo,
} from "../../services/auth/authService";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.data = action.payload.profile;
      localStorage.setItem("user", JSON.stringify(action.payload?.profile));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProfileInfo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProfileInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.profile;
      })
      .addCase(getProfileInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(updateProfileInfo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateProfileInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.profile;
      })
      .addCase(updateProfileInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});
export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
