import { createAsyncThunk } from "@reduxjs/toolkit";
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
  async () => {
    const response = await callApi("get", "user/posts", true);
    return response.data;
  }
);
export const fetchBookmarkedPosts = createAsyncThunk(
  "posts/fetchBookmarkedPosts",
  async () => {
    const response = await callApi("get", "user/posts/bookmarked", true);
    return response.data;
  }
);
export const fetchDraftPosts = createAsyncThunk(
  "posts/fetchDraftPosts",
  async () => {
    const response = await callApi("get", "user/posts/draft", true);
    return response.data;
  }
);
export const fetchArchivedPosts = createAsyncThunk(
  "posts/fetchArchivedPosts",
  async () => {
    const response = await callApi("get", "user/posts/archived", true);
    return response.data;
  }
);
export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  const response = await callApi("post", "posts", true, {
    ...post,
  });
  return response.data;
});
export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const response = await callApi("delete", `posts/${id}`, true);

  return response.data;
});

export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  const response = await callApi("put", `posts/${post.id}`, true, {
    post,
  });
  return response.data;
});

export const bookmarkPost = createAsyncThunk(
  "posts/bookmarkPost",
  async (id) => {
    const response = await callApi("put", `user/posts/bookmarked/${id}`, true);
    return response.data;
  }
);

export const unBookmarkPost = createAsyncThunk(
  "posts/unBookmarkPost",
  async (id) => {
    const response = await callApi(
      "delete",
      `user/posts/bookmarked/${id}`,
      true
    );
    return response.data;
  }
);

export const addPostToArchive = createAsyncThunk(
  "posts/addPostToArchive",
  async (id) => {
    const response = await callApi("put", `user/posts/archived/${id}`, true);
    return response.data;
  }
);
export const removePostFromArchive = createAsyncThunk(
  "posts/removePostFromArchive",
  async (id) => {
    const response = await callApi("delete", `user/posts/archived/${id}`, true);
    return response.data;
  }
);
export const addPostToDraft = createAsyncThunk(
  "posts/addPostToDraft",
  async (id) => {
    const response = await callApi("put", `user/posts/draft/${id}`, true);
    return response.data;
  }
);
export const removePostFromDraft = createAsyncThunk(
  "posts/removePostFromDraft",
  async (id) => {
    const response = await callApi("delete", `user/posts/draft/${id}`, true);
    return response.data;
  }
);
