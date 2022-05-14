import { createSlice } from "@reduxjs/toolkit";
import { fetchStories } from "../../services/stories/storiesService";

const initialState = {
  status: "idle",
  stories: JSON.parse(localStorage?.getItem("user"))?.stories,
  error: null,
};

export const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stories = action.payload;
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export default storiesSlice.reducer;
