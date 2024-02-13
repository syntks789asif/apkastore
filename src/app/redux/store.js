import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import {productSlice} from "./slice/productSlice";
import productSlice from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
