import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "@/api";

const initialState = {};
// 退出登录
export const fetchLogout = createAsyncThunk(
  "login/fetchLogout",
  async (params) => {
    const res = await fetchApi.LoginPageApi.logout(params);
    return res.data;
  }
);
export const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogout.fulfilled, (state, action) => {});
  },
});

export default logoutSlice.reducer;
