import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateAllPosts } from "../../features/allPosts/allPosts";
import { updateArchivedPosts } from "../../features/archivedPosts/archivedPostsSlice";
import { updateBookmarkedPosts } from "../../features/bookmarkedPosts/bookmarkedPostsSlice";
import { updateDraftPosts } from "../../features/draftPosts/draftPostsSlice";
import { updateUserCreatedPosts } from "../../features/userCreatedPosts/userCreatedPostsSlice";
import { callApi } from "../../utils";
export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    const response = await callApi("get", "posts");
    return response.data;
  }
);
export const fetchUserFeedPosts = createAsyncThunk(
  "posts/fetchUserFeedPosts",
  async (id) => {
    const response = await callApi("get", `user/${id}/posts`, true);
    return response.data;
  }
);
export const fetchUserCreatedPosts = createAsyncThunk(
  "posts/fetchUserCreatedPosts",
  async (id) => {
    const response = await callApi("get", `user/posts?postedBy=${id}`, true);

    return response.data;
  }
);
export const fetchBookmarkedPosts = createAsyncThunk(
  "posts/fetchBookmarkedPosts",
  async (id) => {
    const response = await callApi("get", `user/${id}/posts/bookmarked`, true);
    return response.data;
  }
);
export const fetchDraftPosts = createAsyncThunk(
  "posts/fetchDraftPosts",
  async (id) => {
    const response = await callApi("get", `user/${id}/posts/draft`, true);
    return response.data;
  }
);
export const fetchArchivedPosts = createAsyncThunk(
  "posts/fetchArchivedPosts",
  async (id) => {
    const response = await callApi("get", `user/${id}/posts/archived`, true);
    return response.data;
  }
);

export const fetchUserFeedTrendingPosts = createAsyncThunk(
  "posts/fetchUserFeedTrendingPosts",
  async (postedBy) => {
    const response = await callApi(
      "get",
      `user/${postedBy}/posts/trending`,
      true
    );
    return response.data;
  }
);
export const fetchAllTrendingPosts = createAsyncThunk(
  "posts/fetchAllTrendingPosts",
  async () => {
    const response = await callApi("get", "posts/trending");
    return response.data;
  }
);
export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  const response = await callApi("post", `posts`, true, {
    ...post,
  });
  return response.data;
});
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (post, { dispatch }) => {
    const response = await callApi(
      "delete",
      `posts/${post.postId}/${post.postedBy}`,
      true
    );
    dispatch(updateAllPosts(response?.data));
    dispatch(updateArchivedPosts(response?.data));
    dispatch(updateBookmarkedPosts(response?.data));
    dispatch(updateUserCreatedPosts(response?.data));
    dispatch(updateDraftPosts(response?.data));
    return response.data;
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (post, { dispatch }) => {
    const response = await callApi("put", `posts/${post.postId}`, true, {
      ...post,
    });
    dispatch(updateAllPosts(response?.data));
    dispatch(updateArchivedPosts(response?.data));
    dispatch(updateBookmarkedPosts(response?.data));
    dispatch(updateUserCreatedPosts(response?.data));
    dispatch(updateDraftPosts(response?.data));
    return response.data;
  }
);

export const bookmarkPost = createAsyncThunk(
  "posts/bookmarkPost",
  async (post) => {
    const response = await callApi(
      "put",
      `user/${post.postedBy}/posts/bookmarked`,
      true,
      { ...post }
    );
    return response.data;
  }
);

export const unBookmarkPost = createAsyncThunk(
  "posts/unBookmarkPost",
  async (post) => {
    const response = await callApi(
      "delete",
      `user/${post.postedBy}/posts/bookmarked/${post.postId}/`,
      true
    );
    return response.data;
  }
);

export const addPostToArchive = createAsyncThunk(
  "posts/addPostToArchive",
  async (post) => {
    const response = await callApi(
      "put",
      `user/${post.postedBy}/posts/archived/`,
      true,
      {
        ...post,
      }
    );
    return response.data;
  }
);
export const removePostFromArchive = createAsyncThunk(
  "posts/removePostFromArchive",
  async (post) => {
    const response = await callApi(
      "delete",
      `user/${post.postedBy}/posts/archived/${post.postId}`,
      true
    );
    return response.data;
  }
);
export const addPostToDraft = createAsyncThunk(
  "posts/addPostToDraft",
  async (post, { dispatch }) => {
    const response = await callApi(
      "put",
      `user/${post.postedBy}/posts/draft`,
      true,
      { ...post }
    );
    dispatch(updateAllPosts(response?.data));
    dispatch(updateArchivedPosts(response?.data));
    dispatch(updateBookmarkedPosts(response?.data));
    dispatch(updateUserCreatedPosts(response?.data));
    dispatch(updateDraftPosts(response?.data));
    return response.data;
  }
);
export const removePostFromDraft = createAsyncThunk(
  "posts/removePostFromDraft",
  async (post) => {
    const response = await callApi(
      "delete",
      `user/${post.postedBy}/posts/draft/${post.postId}`,
      true
    );
    return response.data;
  }
);

export const searchPostsByHashTag = createAsyncThunk(
  "posts/searchPostsByHashTag",
  async (hashTag) => {
    const response = await callApi("get", `posts/hashtag/${hashTag}`);
    return response.data;
  }
);
