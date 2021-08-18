import axiosHttp from "./axiosHttp";
const qs = require("qs");

// 获取列表
function getList(url, params) {
  return axiosHttp({
    url,
    data: params,
    transformRequest: function (data) {
      return qs.stringify(data);
    },
  });
}

export default {
  getList,
};
