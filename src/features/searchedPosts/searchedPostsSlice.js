import { createSlice } from "@reduxjs/toolkit";
import { searchPostsByHashTag } from "../../services/posts/postsService";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

export const searchedPostsSlice = createSlice({
  name: "searchedPosts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(searchPostsByHashTag.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(searchPostsByHashTag.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload?.posts;
    });
    builder.addCase(searchPostsByHashTag.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error;
    });
  },
});

export const {} = searchedPostsSlice.actions;
export default searchedPostsSlice.reducer;
