import { configureStore } from "@reduxjs/toolkit";
import { archivedPostsSlice } from "../features/archivedPosts/archivedPostsSlice";
import authReducer from "../features/auth/authSlice";
import bookmarkedPostsSlice from "../features/bookmarkedPosts/bookmarkedPostsSlice";
import draftPostsSlice from "../features/draftPosts/draftPostsSlice";
import postsReducer from "../features/posts/postsSlice";
import storiesReducer from "../features/stories/storiesSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    stories: storiesReducer,
    archivedPosts: archivedPostsSlice,
    bookmarkedPosts: bookmarkedPostsSlice,
    draftPosts: draftPostsSlice,
  },
});
