import axiosHttp, { handledGetParams } from "../axiosHttp";

// 获取banner
function getBanner(params) {
  return axiosHttp({
    url: `/banner${handledGetParams(params)}`,
    method: "GET",
    data: params,
  });
}

// 获取jd列表
function getJDList(params) {
  return axiosHttp({
    url: `/dj/program${handledGetParams(params)}`,
    method: "GET",
    data: params,
  });
}

export default {
  getJDList,
  getBanner,
};
