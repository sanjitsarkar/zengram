import { configureStore } from "@reduxjs/toolkit";
import archivedPostsReducer from "../features/archivedPosts/archivedPostsSlice";
import authReducer from "../features/auth/authSlice";
import bookmarkedPostsReducer from "../features/bookmarkedPosts/bookmarkedPostsSlice";
import draftPostsReducer from "../features/draftPosts/draftPostsSlice";
import postsReducer from "../features/posts/postsSlice";
import storiesReducer from "../features/stories/storiesSlice";
import userCreatedPostsReducer from "../features/userCreatedPosts/userCreatedPostsSlice";
import allPostsReducer from "../features/allPosts/allPosts";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    stories: storiesReducer,
    archivedPosts: archivedPostsReducer,
    bookmarkedPosts: bookmarkedPostsReducer,
    draftPosts: draftPostsReducer,
    allPosts:allPostsReducer,
    userCreatedPosts: userCreatedPostsReducer,
  },
});
