import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.cartItems.push(action.payload);
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (items) => items.id !== action.payload
      );
    },
  },
});

export const { add, remove } = cartSlicer.actions;
export default cartSlicer.reducer;
