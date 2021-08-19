import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// 组件
import TopNav from "./components/topNav";
import BottomTabBar from "./components/bottomTabBar";

import fetchApi from "@/api";

function Home() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({});

  // useEffect 获取登录状态
  useEffect(() => {
    const getLoginStatus = async () => {
      const res = await fetchApi.LoginPageApi.getLoginStatus();
      setLoginData(res.data);
    };
    getLoginStatus();
  }, []);

  return (
    <Fragment>
      <TopNav />
      <BottomTabBar />
    </Fragment>
  );
}

export default Home;
