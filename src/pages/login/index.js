import React, { useState } from "react";
import { InputItem } from "antd-mobile";

import styles from "./index.module.less";

function Login() {
  const [phone, setPhone] = useState("");
  const onChangePhone = (val) => {
    setPhone(val);
  };
  return (
    <div className={styles.login_page}>
      <InputItem
        type="phone"
        value={phone}
        onChange={(val) => {
          onChangePhone(val);
        }}
      ></InputItem>
    </div>
  );
}

export default Login;
