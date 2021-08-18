import axiosHttp from "../axiosHttp";

const getList = function (params) {
  return axiosHttp({
    url: "/dj/program",
    method: "get",
    data: params,
  });
};

const findPageApi = {
  getList,
};

export default findPageApi;
