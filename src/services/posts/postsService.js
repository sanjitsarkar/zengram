import { createAsyncThunk } from "@reduxjs/toolkit";
import { useApi } from "../../hooks/useApi";
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const { callApi } = useApi();
  const response = await callApi("get", "posts");
  return response.data;
});
