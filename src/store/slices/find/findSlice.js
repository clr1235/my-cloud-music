import { createSlice } from "@reduxjs/toolkit";

// 定义初始化数据
// status: 'idle' | 'loading' | 'succeeded' | 'failed', 用来标记状态
// error: string | null
const initialState = {
  status: "idle",
  error: null,
  value: 0,
};
export const findSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = findSlice.actions;

export default findSlice.reducer;
