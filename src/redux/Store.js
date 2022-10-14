/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import fruitreducer from "./fruitreducer";

const store = configureStore({
  reducer: {
    fruit: fruitreducer,
  },
});

export default store;
