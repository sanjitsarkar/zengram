import { createSlice } from "@reduxjs/toolkit";
import {
  createPost,
  deletePost,
  fetchPosts,
  updatePost,
} from "../../services/posts/postsService";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.posts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(createPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.unshift(action.payload.post);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(deletePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(updatePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          }
          return post;
        });
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export default postsSlice.reducer;
