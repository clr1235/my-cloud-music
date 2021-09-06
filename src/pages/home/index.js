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
  console.log(state, "state---store对象");
  // const dispatch = useDispatch();

  return (
    <Fragment>
      <TopNav />
      <BottomTabBar />
    </Fragment>
  );
}

export default Home;
