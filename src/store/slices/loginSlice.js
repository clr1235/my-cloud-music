import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "@/api";

const initialState = {};

// 获取登录状态
export const fetchLoginStatus = createAsyncThunk(
  "login/fetchLoginStatus",
  async () => {
    const res = await fetchApi.LoginPageApi.getLoginStatus();
    return res.data.data;
  }
);

export const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLoginStatus.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default loginStatusSlice.reducer;
