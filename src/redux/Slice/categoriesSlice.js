import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  error: null,
  loading: false,
  categoryProducts: [],
};

export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const fetchCategoryProducts = createAsyncThunk(
  "categories/fetchCategoryProducts",
  async (category) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        const newCategories = action.payload;
        newCategories.forEach((newCategory) => {
          if (!state.categories.includes(newCategory.category)) {
            state.categories.push(newCategory.category);
          }
        });
        state.error = null;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryProducts = action.payload;
        state.error = null;
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
