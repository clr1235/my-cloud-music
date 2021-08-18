import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

// 组件
import TopNav from "./components/topNav";
import BottomTabBar from "./components/bottomTabBar";

import findPageApi from "@/api/find";

import styles from "./index.module.less";

function Home() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const data = findPageApi.getList({ rid: 336355127 });
  console.log(data, "");
  return (
    // <div className={styles.main} direction="column" justify="between">
    //   <TopNav />
    //   <BottomTabBar />
    // </div>
    <Fragment>
      <TopNav />
      <BottomTabBar />
    </Fragment>
  );
}

export default Home;
