import axios from "axios";

// axios.defaults.baseURL = 'https://vercel.com/'
// 创建axios的实例
function axiosHttp(axiosConfig) {
  const service = axios.create({
    // baseURL: 'my-cloud-music/netease-cloud-music-api/',
    timeout: 30000,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return service(axiosConfig);
}

export default axiosHttp;
