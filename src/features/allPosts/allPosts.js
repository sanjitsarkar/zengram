import { createSlice } from "@reduxjs/toolkit";
import {
  deletePost,
  fetchAllPosts,
  fetchAllTrendingPosts,
} from "../../services/posts/postsService";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

export const allPostsSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.posts;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(fetchAllTrendingPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllTrendingPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.posts;
      })
      .addCase(fetchAllTrendingPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(deletePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (post) => post?._id !== action.payload?.post._id
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export default allPostsSlice.reducer;
