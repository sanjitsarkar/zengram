import { createSlice } from "@reduxjs/toolkit";
import {
  addPostToArchive,
  fetchArchivedPosts,
  removePostFromArchive,
} from "../../services/posts/postsService";
import { notify } from "../../utils";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

export const archivedPostsSlice = createSlice({
  name: "archivedPosts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArchivedPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArchivedPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.posts;
      })
      .addCase(fetchArchivedPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(addPostToArchive.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addPostToArchive.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.unshift(action.payload?.post);
        notify("Post added to archive successfully", "success");
      })
      .addCase(addPostToArchive.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })

      .addCase(removePostFromArchive.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(removePostFromArchive.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (post) => post?._id !== action.payload?.postId
        );
        notify("Post removed from archive successfully", "success");
      })
      .addCase(removePostFromArchive.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export default archivedPostsSlice.reducer;
