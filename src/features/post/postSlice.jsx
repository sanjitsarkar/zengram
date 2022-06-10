import { createSlice } from "@reduxjs/toolkit";
import { fetchPostInfo } from "../../services/posts/postsService";
import { initialState } from "../../utils";

export const postSlice = createSlice({
  initialState,
  name: "post",
  extraReducers: {
    [fetchPostInfo.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPostInfo.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload?.post;
    },
    [fetchPostInfo.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
  },
});

export default postSlice.reducer;
