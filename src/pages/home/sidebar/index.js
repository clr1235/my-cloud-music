import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import classname from "classname";
import { List, Card, WhiteSpace, Button, WingBlank, Toast } from "antd-mobile";

import { fetchLogout } from "@/store/slices/login/logoutSlice";
import { clearLoginData } from "@/store/slices/login/loginStatusSlice";

import styles from "./index.module.less";

function Sidebar(props) {
  const dispatch = useDispatch();
  // 获取账户信息
  const loginData = useSelector((state) => state.login);
  const userCenterList = [
    {
      id: "owner",
      name: "",
      list: [
        {
          id: "myMsg",
          count: 0,
          name: "我的消息",
          icon: "icon-email",
        },
        {
          id: "creatorCenter",
          name: "创作者中心",
          icon: "icon-email",
        },
      ],
    },
    {
      id: "musicServer",
      name: "音乐服务",
      list: [
        {
          id: "store",
          name: "商城",
          icon: "icon-gouwuche",
        },
      ],
    },
    {
      id: "others",
      name: "其他",
      list: [
        {
          id: "setting",
          name: "设置",
          icon: "icon-setting",
        },
        {
          id: "isDark",
          name: "夜间模式",
          icon: "icon-iconset0454",
        },
      ],
    },
    {
      id: "server",
      name: "",
      list: [
        {
          id: "myOrder",
          name: "我的订单",
          icon: "icon-file",
        },
        {
          id: "myCustomerService",
          name: "我的客服",
          icon: "icon-erji",
        },
        {
          id: "about",
          name: "关于",
          icon: "icon-prompt",
        },
      ],
    },
  ];
  const history = useHistory();
  const handleClick = () => {
    if (!Cookies.get("MUSIC_U")) {
      history.push("/login");
    }
  };

  // 退出登录
  const handleLogout = async () => {
    const resultAction = await dispatch(fetchLogout());
    const originalPromiseResult = unwrapResult(resultAction);
    if (originalPromiseResult?.code === 200) {
      Toast.success("退出成功!");
      dispatch(clearLoginData());
      props.changeDrawerOpen();
    }
  };

  return (
    <div className={styles.sidebar_box}>
      <div className={styles.person_info}>
        <div className={styles.box} onClick={handleClick}>
          <div className={styles.left}>
            <i className="iconfont icon-Iconly-Bulk-Profile"></i>
            <span>
              {Cookies.get("MUSIC_U")
                ? loginData?.profile?.nickname
                : "立即登录"}
            </span>
          </div>
          <div className={styles.right}>
            <i className="iconfont icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <List>
          {userCenterList.map((card) => {
            return (
              <Fragment key={card.id}>
                <Card>
                  {card.name && <Card.Header title={card.name} />}
                  <Card.Body>
                    {card.list?.map((item) => {
                      return (
                        <List.Item
                          key={item.id}
                          arrow="horizontal"
                          onClick={() => {
                            console.log(item.name);
                          }}
                        >
                          <span className={styles.title}>
                            <i
                              className={classname(["iconfont", item.icon])}
                            ></i>
                            <span>{item.name}</span>
                          </span>
                        </List.Item>
                      );
                    })}
                  </Card.Body>
                </Card>
                <WhiteSpace size="lg" />
              </Fragment>
            );
          })}
          <Button className={styles.btn} onClick={handleLogout}>
            退出登录
          </Button>
          <WhiteSpace size="lg" />
        </List>
        <WhiteSpace size="lg" />
      </WingBlank>
    </div>
  );
}

export default Sidebar;
