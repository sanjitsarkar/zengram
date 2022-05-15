import { createSlice } from "@reduxjs/toolkit";
import { notify } from "../../utils";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

export const likePostSlice = createSlice({
  name: "likePost",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(likePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        notify("Post liked successfully", "success");
      })
      .addCase(likePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(dislikePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        notify("Post disliked successfully", "success");
      })
      .addCase(dislikePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});
export const {} = likePostSlice.actions;

export default likePostSlice.reducer;
