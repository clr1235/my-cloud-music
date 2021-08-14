import React from "react";
import { List } from "antd-mobile";

import styles from "./index.module.less";

function Sidebar() {
  return (
    <div className={styles.sidebar_box}>
      <List>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
          (i, index) => {
            if (index === 0) {
              return (
                <List.Item
                  key={index}
                  thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                  multipleLine
                >
                  Category
                </List.Item>
              );
            }
            return (
              <List.Item
                key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              >
                Category{index}
              </List.Item>
            );
          }
        )}
      </List>
    </div>
  );
}

export default Sidebar;
