import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { fetchBanner } from "@/store/slices/find/bannerSlice";

function Banner() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // 组件初始化请求数据
  useEffect(() => {
    async function getBanner() {
      const resultAction = await dispatch(fetchBanner());
      const originalPromiseResult = unwrapResult(resultAction);
      const banners = originalPromiseResult.banners || [];
      console.log(originalPromiseResult, "originalPromiseResult-=-=AAA");
      setData(banners);
    }
    getBanner();
  }, [dispatch]);

  return <div className="find">这是banner部分</div>;
}

export default Banner;
