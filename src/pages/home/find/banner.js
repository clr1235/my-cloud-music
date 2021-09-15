import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Carousel } from "antd-mobile";

import { fetchBanner } from "@/store/slices/find/bannerSlice";
import styles from "./less/banner.module.less";

function Banner() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [data, setData] = useState([]);
  // 组件初始化请求数据
  useEffect(() => {
    console.log(state, "statep[p[-=-=-");
    if (state.banners.length > 0) {
      setData(state.banners);
    } else {
      async function getBanner() {
        const resultAction = await dispatch(fetchBanner());
        const originalPromiseResult = unwrapResult(resultAction);
        setData(originalPromiseResult);
      }
      getBanner();
    }
  }, []);

  return (
    <div className={styles.banner_box}>
      <Carousel autoplay={true} infinite>
        {data.map((item) => (
          <img
            key={item.bannerId}
            src={item.pic}
            alt=""
            className={styles.img}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
