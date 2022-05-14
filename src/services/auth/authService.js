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
