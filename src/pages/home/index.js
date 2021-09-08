import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// 组件
import TopNav from "./components/topNav";
import BottomTabBar from "./components/bottomTabBar";

function Home(props) {
  return (
    <Fragment>
      <TopNav />
      <BottomTabBar />
    </Fragment>
  );
}

export default Home;
