import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Flex } from "antd-mobile";

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
    <Flex className={styles.main} direction="column" justify="between">
      <TopNav />
      <BottomTabBar />
    </Flex>
  );
}

export default Home;
