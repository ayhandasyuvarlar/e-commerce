import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const initialState = {
  topSellers: [],
  error: null,
  loading: false,
  allProducts: [],
};

export const fetchTopSellers = createAsyncThunk(
  "products/fetchTopSellers",
  () => {
    return axios.get('https://fakestoreapi.com/products?limit=4').then((response) => response.data);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTopSellers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTopSellers.fulfilled, (state, action) => {
      state.loading = false;
      state.topSellers = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTopSellers.rejected, (state, action) => {
      state.loading = false;
      state.topSellers = [];
      state.error = action.error.message;
    });
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
