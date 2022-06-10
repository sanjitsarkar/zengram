import { createSlice } from "@reduxjs/toolkit";
import { getFollowing } from "../../services/auth/authService";
import { initialState } from "../../utils";

export const followingSlice = createSlice({
  name: "following",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFollowing.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getFollowing.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.following?.following;
      })
      .addCase(getFollowing.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export default followingSlice.reducer;
