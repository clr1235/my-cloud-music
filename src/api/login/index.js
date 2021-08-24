import axiosHttp, { handledGetParams } from "../axiosHttp";

// 获取登录状态
function getLoginStatus(params) {
  return axiosHttp({
    url: `/login/status${handledGetParams(params)}`,
    method: "GET",
  });
}

// 检查手机号是否已经注册过
function checkPhone(params) {
  return axiosHttp({
    url: `/cellphone/existence/check`,
    method: "POST",
    data: params,
  });
}

// 发送验证码
function sendCaptcha(params) {
  return axiosHttp({
    url: `/captcha/sent${handledGetParams(params)}`,
    method: "GET",
    data: params,
  });
}

// 验证验证码
function captchaVerify(params) {
  params.timestamp = new Date().valueOf();
  return axiosHttp({
    url: `/captcha/verify`,
    method: "POST",
    data: params,
  });
}

// 注册
function register(params) {
  return axiosHttp({
    url: `/register/cellphone`,
    method: "POST",
    data: params,
  });
}

// 登录
function login(params) {
  return axiosHttp({
    url: `/login/cellphone`,
    method: "POST",
    data: params,
  });
}

export default {
  getLoginStatus,
  checkPhone,
  sendCaptcha,
  captchaVerify,
  register,
  login,
};
