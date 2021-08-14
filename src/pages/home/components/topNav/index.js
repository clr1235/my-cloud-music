import React, { useState } from "react";
import { NavBar, Icon, InputItem } from "antd-mobile";

import styles from "./topNav.module.less";

function TopNav() {
  const [searchText, setSearchText] = useState("");

  const onChangeSearchText = (val) => {
    setSearchText(val);
  };
  return (
    <NavBar
      mode="light"
      icon={<i className="iconfont icon-mianbaoxie"></i>}
      onLeftClick={() => console.log("onLeftClick")}
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
  );
}

export default TopNav;
