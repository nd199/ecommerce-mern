import { createSlice } from "@reduxjs/toolkit";

export const ProductRedux = createSlice({
  name: "product",
  initialState: {
    products: [],
    fetching: false,
    error: false,
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.fetching = true;
      state.error = false;
    },
    fetchProductsSuccess: (state, action) => {
      state.fetching = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state) => {
      state.fetching = false;
      state.error = true;
    },
    deleteProductsStart: (state) => {
      state.fetching = true;
      state.error = false;
    },
    deleteProductsSuccess: (state, action) => {
      state.fetching = false;
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },

    deleteProductsFailure: (state) => {
      state.fetching = false;
      state.error = true;
    },
    updateProductsStart: (state) => {
      state.fetching = true;
      state.error = false;
    },
    updateProductsSuccess: (state, action) => {
      state.fetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductsFailure: (state) => {
      state.fetching = false;
      state.error = true;
    },
    addProductsStart: (state) => {
      state.fetching = true;
      state.error = false;
    },
    addProductsSuccess: (state, action) => {
      state.fetching = false;
      state.products.push(action.payload);
    },
    addProductsFailure: (state) => {
      state.fetching = false;
      state.error = true;
    },
  },
});

export const {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
  deleteProductsStart,
  deleteProductsSuccess,
  deleteProductsFailure,
  updateProductsStart,
  updateProductsSuccess,
  updateProductsFailure,
  addProductsStart,
  addProductsSuccess,
  addProductsFailure,
} = ProductRedux.actions;
export default ProductRedux.reducer;
