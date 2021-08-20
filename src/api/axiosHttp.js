import axios from "axios";
import { Toast } from "antd-mobile";

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
  // 添加请求拦截器
  service.interceptors.request.use(
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
  service.interceptors.response.use(
    function (response) {
      // 对响应数据做点什么
      if (response.data.code !== 200) {
        Toast.fail(response.data.message, 3);
      }
      return response;
    },
    function (error) {
      // 统一错误处理
      if (error && error.response) {
        Toast.fail(error.response.data.message, 3);
      }
      return Promise.resolve(error.response.data);
    }
  );
  return service(axiosConfig);
}

export default axiosHttp;
