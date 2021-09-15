import React from "react";

import Banner from "./banner";

import styles from "./less/index.module.less";

function Find() {
  return (
    <div className={styles.find_page}>
      {/* 上部分 */}
      <div className={styles.main_part}>
        <Banner />
      </div>
      {/* 滚动长列表 */}
    </div>
  );
}

export default Find;
