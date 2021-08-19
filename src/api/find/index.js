import axiosHttp, { handledGetParams } from "../axiosHttp";

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
};
