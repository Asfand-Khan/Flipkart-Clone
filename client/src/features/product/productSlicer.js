import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productServices from "./productServices";

const initialState = {
  products: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const fetchProducts = createAsyncThunk(
  "product/fetch",
  async (p = 1, thunkAPI) => {
    try {
      return await productServices.fetchProducts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products = [];
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default productSlice.reducer;
