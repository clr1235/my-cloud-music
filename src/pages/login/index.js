import React, { useState, useEffect } from "react";
import { Button, InputItem, Toast } from "antd-mobile";
import { useForm, Controller } from "react-hook-form";

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
    // 手机号
    phone: "",
    // 验证码
    captcha: "",
    // 密码
    password: "",
    // 昵称
    nickname: "",
    // 手机号是否被注册
    phoneUnRegister: false,
    codeBtnLoading: false,
  });

  // 手机号输入框失去焦点时校验 手机号
  const onBlur = async (val) => {
    const { data } = await fetchApi.LoginPageApi.checkPhone({
      phone: state.phone.replace(/\s*/g, ""),
    });
    // 手机号未被注册的话，进行注册
    if (data.exist === -1) {
      setState({ ...state, phoneUnRegister: true });
    } else {
      setState({ ...state, phoneUnRegister: false });
      // 手机号注册过的，直接登录
    }
  };
  // 表单校验所需方法
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: state,
    reValidateMode: "onChange",
  });

  // 自定义密码规则校验
  const validateRePassword = (rule, value, callback) => {
    if (value && value === state.password) {
      callback();
    } else if (value.length === 0) {
      callback(new Error("请再次输入密码"));
    } else {
      callback(new Error("两次输入密码不一致"));
    }
  };
  const validatePassword = (rule, value, callback) => {
    if (value && value.length >= 8) {
      callback();
    } else if (value.length === 0) {
      callback(new Error("请输入密码"));
    } else {
      callback(new Error("请输入至少8位密码"));
    }
  };
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
    const { data } = await fetchApi.LoginPageApi.captchaVerify(fetchData);
    return data;
  };
  // 登录
  const login = async () => {
    const { phone, password } = state;
    const fetchData = {
      phone: phone.replace(/\s*/g, ""),
      password,
    };
    const res = await fetchApi.LoginPageApi.login(fetchData);
    console.log(res, "res----");
  };
  // 注册
  const handleRegister = async () => {
    const { captcha, phone, password, nickname } = state;
    const fetchData = {
      captcha,
      phone: phone.replace(/\s*/g, ""),
      password,
      nickname,
    };
    const res = await fetchApi.LoginPageApi.register(fetchData);
  };

  // 表单提交 分注册和登录
  const onSubmit = async (data) => {
    console.log(data, "data=-=-=-=-=");
  };

  const toastFn = (msg) => {
    return Toast.fail(msg, 3);
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.logo}>
        <i className="iconfont icon-wangyiyun"></i>
      </div>
      <form className={styles.form}>
        {/* 昵称 */}
        {state.phoneUnRegister && (
          <div className={styles.formItem}>
            <i className="iconfont icon-nicheng"></i>
            <Controller
              control={control}
              name="nickname"
              rules={{ required: true }}
              render={({ field }) => (
                <InputItem
                  {...field}
                  placeholder="请输入昵称"
                  className={styles.phone}
                  clear
                  moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                ></InputItem>
              )}
            ></Controller>
          </div>
        )}
        {/* 手机号 */}
        <div className={styles.formItem}>
          <i className="iconfont icon-phone"></i>
          <Controller
            control={control}
            name="phone"
            rules={{
              required: "请输入手机号",
            }}
            render={({ field }) => (
              <InputItem
                type="phone"
                {...field}
                placeholder="请输入手机号"
                className={styles.phone}
                clear
                error={errors?.phone?.message}
                onErrorClick={() => {
                  Toast.fail(errors?.phone?.message, 2);
                }}
                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
              ></InputItem>
            )}
          ></Controller>
        </div>
        {/* 验证码 */}
        <div className={styles.formItem}>
          <i className="iconfont icon-yanzhengma"></i>
          <Controller
            control={control}
            name="captcha"
            rules={{ required: true }}
            render={({ field }) => (
              <InputItem
                {...field}
                placeholder="请输入验证码"
                className={styles.captcha}
                clear
                extra={
                  <Button
                    loading={state.codeBtnLoading}
                    className={styles.captcha_btn}
                    onClick={sendCaptcha}
                  >
                    获取验证码
                  </Button>
                }
                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
              ></InputItem>
            )}
          ></Controller>
        </div>
        {/* 密码 */}
        <div className={styles.formItem}>
          <i className="iconfont icon-mima"></i>
          <Controller
            control={control}
            name="password"
            rules={{ required: true }}
            render={({ field }) => (
              <InputItem
                type="password"
                {...field}
                placeholder="请输入密码"
                className={styles.phone}
                clear
                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
              ></InputItem>
            )}
          ></Controller>
        </div>
        <Button
          className={styles.login_btn}
          onClick={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          {state.phoneUnRegister ? "注册" : "登录"}
        </Button>
      </form>
    </div>
  );
}

export default Login;
