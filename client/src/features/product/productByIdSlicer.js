import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productServices from "./productServices";

const initialState = {
  singleProduct: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getSingleProduct = createAsyncThunk(
  "singleproduct/singleproduct",
  async (id, thunkAPI) => {
    try {
      return await productServices.getproductbyID(id);
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

export const productByIdSlicer = createSlice({
  name: "singleproduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleProduct = action.payload;
        state.isSuccess = true;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.singleProduct = null;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default productByIdSlicer.reducer;
