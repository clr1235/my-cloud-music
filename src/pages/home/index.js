import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

// 组件
import TopNav from "./components/topNav";
import BottomTabBar from "./components/bottomTabBar";

import styles from "./index.module.less";

function Home() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  console.log(state, "");
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
