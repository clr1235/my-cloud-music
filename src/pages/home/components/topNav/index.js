import React, { useState } from "react";
import { NavBar, InputItem, Drawer } from "antd-mobile";

import Sidebar from "../../sidebar";

import styles from "./topNav.module.less";

function TopNav() {
  const [searchText, setSearchText] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onChangeSearchText = (val) => {
    setSearchText(val);
  };
  // 抽屉开关
  const changeDrawerOpen = () => {
    setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen);
  };
  return (
    <div className={styles.nav_box}>
      <NavBar
        mode="light"
        icon={<i className="iconfont icon-mianbaoxie"></i>}
        onLeftClick={changeDrawerOpen}
        rightContent={<i className="iconfont icon-huatong"></i>}
        className={styles.nav}
      >
        <div className={styles.top_nav_center}>
          <i className="iconfont icon-search"></i>
          <InputItem
            className="search_box"
            value={searchText}
            maxLength={32}
            placeholder="输入关键字进行搜索"
            onChange={onChangeSearchText}
          />
        </div>
      </NavBar>
      <Drawer
        className={styles.my_drawer}
        style={{
          minHeight: `${document.documentElement.clientHeight - 146}px`,
        }}
        enableDragHandle
        contentStyle={{ display: "none" }}
        sidebarStyle={{ width: "80%" }}
        sidebar={<Sidebar />}
        open={drawerOpen}
        onOpenChange={changeDrawerOpen}
      >
        <div></div>
      </Drawer>
    </div>
  );
}

export default TopNav;
