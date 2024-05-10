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
  async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=4"
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
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
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.error = action.error.message;
    });
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
