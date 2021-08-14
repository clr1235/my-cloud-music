import React, { useState } from "react";
import { TabBar } from "antd-mobile";
import loadable from "@loadable/component";

import styles from "./bottomTabBar.module.less";

const Find = loadable(() => import("@/pages/home/find"));
const Boke = loadable(() => import("@/pages/home/boke"));
const Music = loadable(() => import("@/pages/home/music"));
const ksong = loadable(() => import("@/pages/home/ksong"));
const Crowd = loadable(() => import("@/pages/home/crowd"));

function BottomTabBar() {
  const [selectedTab, setSelectedTab] = useState("faxian");
  const onChangeTab = (val) => {
    setSelectedTab(val);
    console.log(val, "selectedTab------");
  };
  const tabs = [
    {
      icon: <i className="iconfont icon-faxian"></i>,
      selectedIcon: <i className="iconfont icon-faxian"></i>,
      title: "发现",
      key: "faxian",
      component: Find,
    },
    {
      icon: <i className="iconfont icon-boke"></i>,
      selectedIcon: <i className="iconfont icon-boke"></i>,
      title: "播客",
      key: "boke",
      component: Boke,
    },
    {
      icon: <i className="iconfont icon-icon-05"></i>,
      selectedIcon: <i className="iconfont icon-icon-05"></i>,
      title: "音乐",
      key: "music",
      component: Music,
    },
    {
      icon: <i className="iconfont icon-ksong"></i>,
      selectedIcon: <i className="iconfont icon-ksong"></i>,
      title: "k歌",
      key: "ksong",
      component: ksong,
    },
    {
      icon: <i className="iconfont icon-toufangcelve-"></i>,
      selectedIcon: <i className="iconfont icon-toufangcelve-"></i>,
      title: "云村",
      key: "crowd",
      component: Crowd,
    },
  ];
  return (
    <TabBar className={styles.tab_bar} tintColor="#f5222d">
      {tabs.map((item) => {
        return (
          <TabBar.Item
            {...item}
            selected={selectedTab === item.key}
            onPress={() => {
              onChangeTab(item.key);
            }}
          >
            <item.component />
          </TabBar.Item>
        );
      })}
    </TabBar>
  );
}

export default BottomTabBar;
