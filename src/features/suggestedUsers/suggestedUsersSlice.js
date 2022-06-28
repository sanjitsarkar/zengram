import { createSlice } from "@reduxjs/toolkit";
import { searchUsers } from "../../services/auth/authService";
import { initialState } from "../../utils";

export const suggestedUsersSlice = createSlice({
  name: "suggestedUsers",
  initialState,
  reducers: {
    clearSuggestedUsers: (state) => {
      state.data = [];
    },
    updateSuggestedUsers: (state, action) => {
     
        state.data = state?.data?.filter(
          (user) => user?._id !== action.payload?.followingId
        );
     
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(searchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = [...state?.data, ...action.payload?.users];
    });
    builder.addCase(searchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error;
    });
  },
});
export const { clearSuggestedUsers, updateSuggestedUsers } =
  suggestedUsersSlice.actions;
export default suggestedUsersSlice.reducer;
