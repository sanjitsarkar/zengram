import allPostsReducer from "../features/allPosts/allPosts";
import archivedPostsReducer from "../features/archivedPosts/archivedPostsSlice";
import authReducer from "../features/auth/authSlice";
import bookmarkedPostsReducer from "../features/bookmarkedPosts/bookmarkedPostsSlice";
import draftPostsReducer from "../features/draftPosts/draftPostsSlice";
import postsReducer from "../features/posts/postsSlice";
import storiesReducer from "../features/stories/storiesSlice";
import userCreatedPostsReducer from "../features/userCreatedPosts/userCreatedPostsSlice";

export {
  archivedPostsReducer,
  authReducer,
  bookmarkedPostsReducer,
  draftPostsReducer,
  postsReducer,
  storiesReducer,
  userCreatedPostsReducer,
  allPostsReducer,
};
