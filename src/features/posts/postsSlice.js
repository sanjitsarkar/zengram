import { createSlice } from "@reduxjs/toolkit";
import {
  createPost,
  deletePost,
  fetchPosts,
  updatePost,
} from "../../services/posts/postsService";
import { notify } from "../../utils";

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
        state.data = action.payload?.posts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.unshift(action.payload?.post);
        notify("Post added successfully", "success");
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (post) => post?._id !== action.payload?.post._id
        );
        notify("Post deleted successfully", "success");
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
          if (post?._id === action.payload?.post._id) {
            return action.payload.post;
          }
          return post;
        });
        notify("Post updated successfully", "success");
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export default postsSlice.reducer;
