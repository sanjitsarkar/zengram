import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../utils";
export const addComment = createAsyncThunk(
  "comments/addComment",
  async (comment) => {
    const response = await callApi(
      "put",
      `posts/${comment.postId}/comments/add`,
      true,
      comment
    );
    return response.data;
  }
);
export const removeComment = createAsyncThunk(
  "comments/removeComment",
  async (comment) => {
    const response = await callApi(
      "put",
      `posts/${comment.postId}/comments/remove`,
      comment
    );
    return response.data;
  }
);
