import React, { Fragment } from "react";
import { List, Card, WhiteSpace, Button, WingBlank } from "antd-mobile";

import styles from "./index.module.less";

function Sidebar() {
  const userCenterList = [
    {
      id: "owner",
      name: "",
      list: [
        {
          id: "myMsg",
          count: 0,
          name: "我的消息",
          icon: "",
        },
        {
          id: "creatorCenter",
          name: "创作者中心",
          icon: "",
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
          icon: "",
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
          icon: "",
        },
        {
          id: "isDark",
          name: "夜间模式",
          icon: "",
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
          icon: "",
        },
        {
          id: "myCustomerService",
          name: "我的订单",
          icon: "",
        },
        {
          id: "about",
          name: "关于",
          icon: "",
        },
      ],
    },
  ];
  return (
    <div className={styles.sidebar_box}>
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
                            HTMLFormControlsCollection.log(item.name);
                          }}
                        >
                          <span className={styles.title}>
                            <i className="iconfont icon-icon-05"></i>
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
          <Button className={styles.btn}>退出登录/关闭</Button>
          <WhiteSpace size="lg" />
        </List>
        <WhiteSpace size="lg" />
      </WingBlank>
    </div>
  );
}

export default Sidebar;
