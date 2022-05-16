import { createSlice } from "@reduxjs/toolkit";
import { fetchUserCreatedPosts } from "../../services/posts/postsService";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

export const userCreatedPostsSlice = createSlice({
  name: "userCreatedPosts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserCreatedPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUserCreatedPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.posts;
      })
      .addCase(fetchUserCreatedPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export default userCreatedPostsSlice.reducer;
