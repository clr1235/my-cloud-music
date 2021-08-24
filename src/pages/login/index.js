import React, { useState } from "react";
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
    // 登录 注册 模式
    mode: "login",
  });
  // 表单校验所需方法
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: state,
    reValidateMode: "onChange",
  });

  // 校验 手机号 是否注册
  const checkPhone = async (val) => {
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

  // 发送验证码
  const sendCaptcha = async () => {
    const phone = getValues("phone");
    if (phone) {
      await fetchApi.LoginPageApi.sendCaptcha({
        phone: phone.replace(/\s*/g, ""),
      });
    }
  };
  // 验证验证码
  const captchaVerify = async () => {
    const fetchData = {
      phone: getValues("phone").replace(/\s*/g, ""),
      captcha: getValues("captcha"),
    };
    const { data } = await fetchApi.LoginPageApi.captchaVerify(fetchData);
    return data;
  };
  // 登录
  const login = async () => {
    const { phone, password } = getValues();
    const fetchData = {
      phone: phone.replace(/\s*/g, ""),
      password,
    };
    const res = await fetchApi.LoginPageApi.login(fetchData);
    console.log(res, "res----");
  };
  // 注册
  const handleRegister = async () => {
    const { captcha, phone, password, nickname } = getValues();
    const fetchData = {
      captcha,
      phone: phone.replace(/\s*/g, ""),
      password,
      nickname,
    };
    const res = await fetchApi.LoginPageApi.register(fetchData);
  };

  const onChangeMode = () => {
    setState((prevState) => {
      if (prevState.mode === "login") {
        return {
          ...state,
          mode: "register",
        };
      } else {
        return {
          ...state,
          mode: "login",
        };
      }
    });
    console.log(state.mode, "mode=-=-=-");
  };

  // 表单提交 分注册和登录
  const onSubmit = async (data) => {
    setState({ state: data });
    console.log(data, "data=-=-=-=-=");
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.logo}>
        <i className="iconfont icon-wangyiyun"></i>
      </div>
      <div className={styles.form_box}>
        <form className={styles.form}>
          {/* 昵称 */}
          {state.mode === "register" && (
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
                    error={errors?.phone?.nickname}
                    onErrorClick={() => {
                      Toast.fail(errors?.phone?.nickname, 1);
                    }}
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
                    Toast.fail(errors?.phone?.message, 1);
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
                  error={errors?.phone?.password}
                  onErrorClick={() => {
                    Toast.fail(errors?.phone?.password, 1);
                  }}
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
                  error={errors?.phone?.password}
                  onErrorClick={() => {
                    Toast.fail(errors?.phone?.password, 1);
                  }}
                  moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                ></InputItem>
              )}
            ></Controller>
          </div>
        </form>
        <div className={styles.desc_box}>
          <span>忘记密码？</span>
          <span className={styles.register_btn} onClick={onChangeMode}>
            {state.mode === "login" ? "注册" : "登录"}
          </span>
        </div>
        <Button
          type="primary"
          className={styles.login_btn}
          onClick={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          {state.mode === "login" ? "登录" : "注册"}
        </Button>
      </div>
    </div>
  );
}

export default Login;
