import React, { useState } from "react";
import { Button, InputItem, Toast } from "antd-mobile";
import { createForm } from "rc-form";

import fetchApi from "@/api";

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
    captcha: "",
    codeBtnLoading: false,
  });
  // onchange
  const onChange = (val, type) => {
    if (type === "phone") {
      setState({ ...state, phone: val });
    }
    if (type === "captcha") {
      setState({ ...state, captcha: val });
    }
  };
  // 表单校验所需方法
  const { getFieldProps, getFieldError } = props.form;
  // 发送验证码
  const sendCaptcha = async () => {
    if (state.phone) {
      setState({ ...state, codeBtnLoading: true });
      await fetchApi.LoginPageApi.sendCaptcha({
        phone: state.phone.replace(/\s*/g, ""),
      });
      setState({ ...state, codeBtnLoading: false });
    }
  };
  // 验证验证码
  const captchaVerify = async () => {
    const fetchData = {
      phone: state.phone.replace(/\s*/g, ""),
      captcha: state.captcha,
    };
    const data = await fetchApi.LoginPageApi.captchaVerify(fetchData);
    if (data) {
      console.log(data, "-=-=-=-");
    }
  };
  // 表单提交
  const onSubmit = () => {
    props.form.validateFields({ force: true }, async (error) => {
      if (!error) {
        const { phone, captcha } = props.form.getFieldsValue();
        const phoneTemp = phone.replace(/\s*/g, "");
        // 如果有验证码的话 先验证验证码
        let captchaVerifyResult = null;
        if (captcha) {
          captchaVerifyResult = await captchaVerify();
        }

        if (captchaVerifyResult) {
        }
        const { data } = await fetchApi.LoginPageApi.checkPhone({
          phone: phoneTemp,
        });
        // 手机号未被注册的话，进行注册
        if (data.exist === -1) {
        } else {
          // 手机号注册过的，直接登录
        }
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
            {...getFieldProps("captcha", {
              initialValue: state.captcha,
              rules: [{ required: true }],
            })}
            error={!!getFieldError("captcha")}
            onErrorClick={() => {
              Toast.info(getFieldError("captcha"), 1);
            }}
            onChange={(val) => {
              onChange(val, "captcha");
            }}
            placeholder="请输入验证码"
            className={styles.captcha}
            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            extra={
              <Button
                loading={state.codeBtnLoading}
                className={styles.captcha_btn}
                onClick={sendCaptcha}
              >
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
