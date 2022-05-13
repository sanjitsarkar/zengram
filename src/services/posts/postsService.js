import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../utils";
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await callApi("get", "posts");
  return response.data;
});
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
