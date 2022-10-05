import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlicer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
