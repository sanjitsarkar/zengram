import { createAsyncThunk } from "@reduxjs/toolkit";
import { useApi } from "../../hooks/useApi";
export const login = createAsyncThunk("auth/login", async (loginCred) => {
  const { email, password } = loginCred;
  const { callApi } = useApi();
  const response = await callApi("post", "auth/login", false, {
    email,
    password,
  });

  return response.data;
});
export const signup = createAsyncThunk("auth/signup", async (signupCred) => {
  const { name, email, password } = signupCred;
  const { callApi } = useApi();
  const response = await callApi("post", "auth/signup", false, {
    name,
    email,
    password,
  });
  return response.data;
});
