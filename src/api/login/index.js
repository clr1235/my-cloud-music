import axiosHttp, { handledGetParams } from "../axiosHttp";

// 获取登录状态
function getLoginStatus(params) {
  return axiosHttp({
    url: `/login/status${handledGetParams(params)}`,
    method: "GET",
    data: params,
  });
}

export default {
  getLoginStatus,
};
