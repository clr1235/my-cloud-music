import axiosHttp from "../axiosHttp";

function handledGetParams(params) {
  let arr = [];
  const keys = Object.keys(params);
  if (keys.length === 0) {
    return "";
  }
  for (let key of keys) {
    let item = `${key}=${params[key]}`;
    if (!arr.includes(item)) {
      arr.push(item);
    }
  }
  return `?${arr.join("&")}`;
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
};
