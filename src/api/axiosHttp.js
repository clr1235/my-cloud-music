import axios from "axios";

export function handledGetParams(params) {
  let arr = [];
  if (Object.prototype.toString.call(params) !== "[object Object]") {
    return "";
  }
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

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// 处理baseURL
function getBaseURL(env) {
  let baseMap = {
    production: "/",
    development: "http://localhost:3000",
    test: "http://localhost:3001",
  };
  if (!env) {
    return "/";
  }
  return baseMap[env];
}

// 创建axios的实例
function axiosHttp(axiosConfig) {
  const service = axios.create({
    baseURL: "/api",
    timeout: 30000,
    ...axiosConfig,
  });
  return service(axiosConfig);
}

export default axiosHttp;
