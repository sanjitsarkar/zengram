import { createSlice } from "@reduxjs/toolkit";
import { addComment } from "../../services/comments/commentsService";
import { initialState, notify } from "../../utils";

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    clearComments: (state) => {
      state.data = [];
      state.error = null;
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addComment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload?.comments?.comments;
        notify("Comment added successfully");
      })
      .addCase(addComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});
export const { clearComments } = commentSlice.actions;

export default commentSlice.reducer;
