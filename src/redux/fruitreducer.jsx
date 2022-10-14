/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// const axios = require("axios");
const fruitThunk = createAsyncThunk("fruitinfo/fruitThunk", async () => {
  try {
    const response = await fetch("https://www.fruityvice.com/api/fruit/all",{method:"GET"});
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});
const initialState = {
  fruit: [],
  loadingStatus: "idel",
};

const fruitReducer = createSlice({
  name: "fruitinfo",
  initialState,
  reducers: {
    selectedFruit: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fruitThunk.fulfilled, (state, { payload }) => {
        state.fruit = payload;
        state.loadingStatus = "success";
      })
      .addCase(fruitThunk.pending, (state) => {
        state.loadingStatus = "pending";
      })
      .addCase(fruitThunk.rejected, (state) => {
        state.loadingStatus = "rejected";
      });
  },
});

const getLoading = (state) => state.fruit.loadingStatus;
const getFruitInfo = (state) => state.fruit.fruit;

export { getLoading, getFruitInfo, fruitThunk };
export default fruitReducer.reducer;
