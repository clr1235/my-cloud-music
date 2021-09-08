import { combineReducers } from "@reduxjs/toolkit";

import loginStatusReducer from "./login/loginStatusSlice";

/**
 * 这告诉 Redux 我们希望我们的根部 state 对象内部有名为 find 和 login 的字段，
 * 并且 state.find 的所有数据都将在 dispatch action 时由 findReducer 函数更新。
 * 并且 state.login 的所有数据都将在 dispatch action 时由 loginReducer 函数更新。
 */
const rootReducers = combineReducers({
  loginData: loginStatusReducer,
});

export default rootReducers;
