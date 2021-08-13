import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  // incrementByAmount,
} from "@/store/slices";

function App() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  console.log(state, "");
  return (
    <div className="app">
      哈哈哈哈
      <div>{state.value}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
