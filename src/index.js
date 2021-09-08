// 第三方库
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "lib-flexible";
// store
import configureAppStore from "./store";
// 路由
import Router from "./router";
// reportWebVitals
import reportWebVitals from "./reportWebVitals";
// 引入全局样式
import "@/assets/less/global.less";
import { fetchLoginStatus } from "./store/slices/loginSlice";

/**
 * StrictMode 是一个用来检查项目中潜在问题的工具, 不会渲染任何可见的 UI。
 * 它为其后代元素触发额外的检查和警告。
 * 严格模式检查仅在开发模式下运行；它们不会影响生产构建。
 * */

const store = configureAppStore();

(async function () {
  // 获取登录状态，并将其存储到store中
  await store.dispatch(fetchLoginStatus());
})();

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);

reportWebVitals();
