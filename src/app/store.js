import { configureStore } from "@reduxjs/toolkit";
import {
  allPostsReducer,
  archivedPostsReducer,
  authReducer,
  bookmarkedPostsReducer,
  commentsReducer,
  draftPostsReducer,
  followersReducer,
  followingReducer,
  postsReducer,
  profileReducer,
  repliesReducer,
  searchedPostsReducer,
  searchedUsersReducer,
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
    comments: commentsReducer,
    replies: repliesReducer,
    following: followingReducer,
    followers: followersReducer,
    searchedUsers: searchedUsersReducer,
    searchedPosts: searchedPostsReducer,
  },
});
