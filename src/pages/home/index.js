import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

// 组件
import TopNav from "./components/topNav";
import BottomTabBar from "./components/bottomTabBar";

function Home() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  return (
    <Fragment>
      <TopNav />
      <BottomTabBar />
    </Fragment>
  );
}

export default Home;
