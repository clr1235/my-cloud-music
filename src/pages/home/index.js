import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// 组件
import TopNav from "./components/topNav";
import BottomTabBar from "./components/bottomTabBar";

import fetchApi from "@/api";
import { fetchLoginStatus } from "@/store/slices/loginSlice";

function Home(props) {
  const state = useSelector((state) => {
    return state;
  });
  console.log(props, "state---store对象");
  // const dispatch = useDispatch();

  // const [loginData, setLoginData] = useState({});
  // const status = useSelector(state => state.login.status)
  // useEffect 获取登录状态

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchLoginStatus())
  //   }
  // }, [status, dispatch])

  return (
    <Fragment>
      <TopNav />
      <BottomTabBar />
    </Fragment>
  );
}

export default Home;
