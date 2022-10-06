import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlicer";
import productReducer from "../features/product/productSlicer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});

export default store;
