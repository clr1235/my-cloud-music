import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "@/api";

const initialState = {
  account: null,
  profile: null,
  msg: "",
};

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
  reducers: {},
  extraReducers: {
    [fetchLoginStatus.fulfilled]: (state, action) => {
      return {
        account: action.payload.account,
        profile: action.payload.profile,
      };
    },
  },
});

// 登录
export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (params) => {
    // 发送异步请求
    const res = await fetchApi.LoginPageApi.login(params);
    console.log(res.data, "data=-=-");
    return res.data;
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  // 处理异步请求结果
  extraReducers: {
    [fetchLogin.fulfilled]: (state, action) => {
      console.log(state, "stateAAAAAA---", action);
      return {
        account: action.payload.account,
        profile: action.payload.profile,
        msg: "登录成功",
      };
    },
    [fetchLogin.rejected]: (state, action) => {
      return {
        account: null,
        profile: null,
        msg: "登录失败",
      };
    },
  },
});

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
  extraReducers: {
    [fetchLogout.fulfilled]: (state, action) => {
      console.log(state, "-=-=-=-=-0000");
      return {
        account: null,
        profile: null,
        msg: "退出登录",
      };
    },
    [fetchLogout.rejected]: (state, action) => {
      console.log(state, "-=-=-=-=-0000");
      return {
        account: null,
        profile: null,
        msg: "退出登录",
      };
    },
  },
  // extraReducers: (builder) => {
  //   console.log(builder, '0-0-0-0-0')
  //   builder.addCase(fetchLogout.fulfilled, (state, action) => {
  //     state.account = {};
  //     state.profile = {};
  //     state.msg = '退出登录了'
  //   })
  // }
});

export default loginStatusSlice.reducer;
