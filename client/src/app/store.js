import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlicer";
import productByIdReducer from "../features/product/productByIdSlicer";
import productReducer from "../features/product/productSlicer";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    singleproduct: productByIdReducer,
    cart: cartReducer,
  },
});

export default store;
