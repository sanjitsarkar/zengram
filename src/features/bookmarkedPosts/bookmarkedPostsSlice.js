import { createSlice } from "@reduxjs/toolkit";
import {
  bookmarkPost,
  fetchBookmarkedPosts,
  unBookmarkPost,
} from "../../services/posts/postsService";
import { notify } from "../../utils";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

export const bookmarkedPostsSlice = createSlice({
  name: "bookmarkedPosts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBookmarkedPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBookmarkedPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.posts;
      })
      .addCase(fetchBookmarkedPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(bookmarkPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(bookmarkPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.unshift(action.payload.post);
        notify("Post added to bookmark successfully", "success");
      })
      .addCase(bookmarkPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(unBookmarkPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(unBookmarkPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (post) => post?._id !== action.payload.postId
        );
        notify("Post removed from bookmark successfully", "success");
      })
      .addCase(unBookmarkPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
        
      });
  },
});

export default bookmarkedPostsSlice.reducer;
