import React, { useState, useEffect } from "react";

import fetchApi from "@/api";

function Find() {
  const [data, setData] = useState({});
  // 组件初始化请求数据
  useEffect(() => {
    const getJDList = async () => {
      const res = await fetchApi.FindPageApi.getJDList({ rid: 336355127 });
      console.log(res.data, " res");
      setData(res.data);
    };
    getJDList();
    console.log(data, "data----");
  }, []);
  return (
    <div className="find">
      {data?.programs?.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}

export default Find;
