import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "@/api";

const initialState = {};

// 获取登录状态
export const fetchLoginStatus = createAsyncThunk(
  "login/fetchLoginStatus",
  async () => {
    const res = await fetchApi.LoginPageApi.getLoginStatus();
    const obj = {
      account: res.data.data.account,
      profile: res.data.data.profile,
    };
    return obj;
  }
);

export const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    saveLoginData(state, action) {
      console.log(action, "action-=-=-=-");
      return {
        ...action.payload,
      };
    },
    clearLoginData(state, action) {
      return {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginStatus.fulfilled, (state, action) => {
      return {
        ...action.payload,
      };
    });
  },
});
export const { saveLoginData, clearLoginData } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;
