import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postsReducer from "../features/posts/postsSlice";
import storiesReducer from "../features/stories/storiesSlice";
export const store = configureStore({
  reducer: { auth: authReducer, posts: postsReducer, stories: storiesReducer },
});
