import api from "@/api/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: null,
};

// Asenkron oturum açma işlemi
export const signInUser = createAsyncThunk(
  "user/signIn",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", {
        username: credentials.userName,
        password: credentials.password,
      });
      // Token'ı localStorage'a kaydet
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", credentials.email);
      setInterval(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
      }, 10000);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export default signInSlice.reducer;
