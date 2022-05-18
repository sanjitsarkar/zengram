import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../utils";
export const login = createAsyncThunk("auth/login", async (loginCred) => {
  const { email, password } = loginCred;

  const response = await callApi("post", "auth/login", false, {
    email,
    password,
  });
  return response.data;
});
export const signup = createAsyncThunk("auth/signup", async (signupCred) => {
  const { name, email, password } = signupCred;
  const response = await callApi("post", "auth/signup", false, {
    name,
    email,
    password,
  });
  return response.data;
});

export const getProfileInfo = createAsyncThunk(
  "auth/getProfileInfo",
  async (id) => {
    const response = await callApi("get", `user/profile/${id}`, true);
    return response.data;
  }
);
export const updateProfileInfo = createAsyncThunk(
  "auth/updateProfileInfo",
  async (profileInfo) => {
    const response = await callApi(
      "put",
      `user/profile/${profileInfo.id}`,
      true,
      profileInfo
    );
    return response.data;
  }
);

export const followUser = createAsyncThunk(
  "auth/followUser",
  async (followingId) => {
    const response = await callApi("put", `user/follow/${followingId}`, true);
    return response.data;
  }
);

export const unfollowUser = createAsyncThunk(
  "auth/unfollowUser",
  async (followingId) => {
    const response = await callApi("put", `user/unfollow/${followingId}`, true);
    return response.data;
  }
);

export const getFollowing = createAsyncThunk(
  "auth/getFollowing",
  async (id) => {
    const response = await callApi("get", `user/${id}/following/`, true);
    return response.data;
  }
);

export const getFollowers = createAsyncThunk(
  "auth/getFollowers",
  async (id) => {
    const response = await callApi("get", `user/${id}/followers/`, true);
    return response.data;
  }
);
