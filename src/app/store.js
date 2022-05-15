import { configureStore } from "@reduxjs/toolkit";
import {
  allPostsReducer,
  archivedPostsReducer,
  authReducer,
  bookmarkedPostsReducer,
  draftPostsReducer,
  postsReducer,
  profileReducer,
  storiesReducer,
  userCreatedPostsReducer,
} from "../features";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    stories: storiesReducer,
    archivedPosts: archivedPostsReducer,
    bookmarkedPosts: bookmarkedPostsReducer,
    draftPosts: draftPostsReducer,
    allPosts: allPostsReducer,
    userCreatedPosts: userCreatedPostsReducer,
    profile: profileReducer,
  },
});
