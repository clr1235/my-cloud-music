import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "@/api";

const initialState = {};
// 登录
export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (params) => {
    // 发送异步请求
    const res = await fetchApi.LoginPageApi.login(params);
    return res.data;
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  // 处理异步请求结果
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {});
    builder.addMatcher(fetchLogin.rejected, (state, action) => {});
  },
});

export default loginSlice.reducer;
