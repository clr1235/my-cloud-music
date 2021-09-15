import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "@/api";

const initialState = [];

export const fetchBanner = createAsyncThunk("find/fetchBanner", async () => {
  const fetchData = {
    type: 2,
  };
  const { data } = await fetchApi.FindPageApi.getBanner(fetchData);
  return data.banners;
});

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBanner.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addMatcher(fetchBanner.rejected, (state, action) => {});
  },
});

export default bannerSlice.reducer;
