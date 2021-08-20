import React, { useState } from "react";
import { Button, InputItem, Toast } from "antd-mobile";
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

function Login(props) {
  // 定义state
  const [state, setState] = useState({
    phone: "",
    verification_code: "",
  });
  // 表单校验所需方法
  const { getFieldProps, getFieldError } = props.form;
  // 表单提交
  const onSubmit = () => {
    props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(props.form.getFieldsValue(), "hshshshsshsh");
      } else {
        console.log("Validation failed");
      }
    });
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
            {...getFieldProps("phone", {
              initialValue: state.phone,
              rules: [{ required: true }],
            })}
            error={!!getFieldError("phone")}
            onErrorClick={() => {
              Toast.info(getFieldError("phone"), 1);
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
            {...getFieldProps("verification_code", {
              initialValue: state.verification_code,
              rules: [{ required: true }],
            })}
            error={!!getFieldError("verification_code")}
            onErrorClick={() => {
              Toast.info(getFieldError("verification_code"), 1);
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
        <Button
          className={styles.login_btn}
          onClick={() => {
            onSubmit();
          }}
        >
          登录/注册
        </Button>
      </div>
    </div>
  );
}

export default createForm()(Login);
