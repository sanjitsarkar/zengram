import allPostsReducer from "./allPosts/allPosts";
import archivedPostsReducer from "./archivedPosts/archivedPostsSlice";
import authReducer from "./auth/authSlice";
import bookmarkedPostsReducer from "./bookmarkedPosts/bookmarkedPostsSlice";
import draftPostsReducer from "./draftPosts/draftPostsSlice";
import postsReducer from "./posts/postsSlice";
import profileReducer from "./profile/profileSlice";
import storiesReducer from "./stories/storiesSlice";
import userCreatedPostsReducer from "./userCreatedPosts/userCreatedPostsSlice";
export {
  archivedPostsReducer,
  authReducer,
  bookmarkedPostsReducer,
  draftPostsReducer,
  postsReducer,
  storiesReducer,
  userCreatedPostsReducer,
  allPostsReducer,
  profileReducer,
};
