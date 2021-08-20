import React, { useState } from "react";
import { Button, InputItem } from "antd-mobile";
import { createForm } from "rc-form";

import styles from "./index.module.less";

// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: (e) => e.preventDefault(),
  };
}

function Login() {
  const [state, setState] = useState({
    phone: "",
    verification_code: "",
  });
  const onChange = (val, type) => {
    if (type === "phone") {
      setState({
        ...state,
        phone: val,
      });
    }
    if (type === "code") {
      setState({
        ...state,
        verification_code: val,
      });
    }
  };
  return (
    <div className={styles.login_page}>
      <div className={styles.logo}>
        <i className="iconfont icon-wangyiyun"></i>
      </div>
      <div className={styles.form}>
        <div className={styles.formItem}>
          <i className="iconfont icon-shouji"></i>
          <InputItem
            type="phone"
            value={state.phone}
            onChange={(val) => {
              onChange(val, "phone");
            }}
            placeholder="请输入手机号"
            className={styles.phone}
            clear
            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          ></InputItem>
        </div>
        <div className={styles.formItem}>
          <i className="iconfont icon-yanzhengma"></i>
          <InputItem
            type="phone"
            value={state.verification_code}
            onChange={(val) => {
              onChange(val, "code");
            }}
            placeholder="请输入验证码"
            className={styles.verification_code}
            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            extra={
              <Button className={styles.verification_code_btn}>
                获取验证码
              </Button>
            }
          ></InputItem>
        </div>
        <Button className={styles.login_btn}>登录/注册</Button>
      </div>
    </div>
  );
}

export default createForm()(Login);
