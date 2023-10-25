import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface CounterState {
  loading: boolean;
  data: [] ;
  error: string | null;
}

const initialState: CounterState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchProducts = createAsyncThunk("products", async () => {
  return (axios("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.data))
});

 const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action:PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    })
  },
});

export default productsSlice.reducer;