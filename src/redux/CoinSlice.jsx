import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const CoinSliceFun = createAsyncThunk("CoinSlice/data", async () => {
  const response = await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .catch((error) => console.log(error));
  return response.data;
});
const initialState = {
  Data: [],
  Favorite: [],
  ThreeTop: [],
  ThreeBottom: [],
  BiggestGainers: [],
  pending: false,
  rejected: false,
  rejectedMsg: "",
  full: false,
};
const CoinSlice = createSlice({
  name: "CoinSlice",
  initialState,
  reducers: {
    AddToFavorite: (state, action) => {},
  },
  extraReducers: {
    [CoinSliceFun.fulfilled]: (state, action) => {
      state.Data = action.payload;
      state.ThreeTop = action.payload
        .sort((a, b) => b.current_price - a.current_price)
        .slice(0, 3);
      state.ThreeBottom = action.payload
        .sort(
          (a, b) =>
            a.price_change_percentage_24h - b.price_change_percentage_24h
        )
        .slice(0, 3);
      state.BiggestGainers = action.payload
        .sort(
          (a, b) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h
        )
        .slice(0, 3);
      state.pending = false;
      state.rejected = false;
      state.full = true;
    },
    [CoinSliceFun.pending]: (state) => {
      state.pending = true;
      state.rejected = false;
      state.full = false;
    },
    [CoinSliceFun.rejected]: (state, action) => {
      state.pending = false;
      state.rejected = true;
      state.full = false;
      state.rejectedMsg = action.payload;
    },
  },
});
export const { AddToFavorite } = CoinSlice.actions;
export default CoinSlice.reducer;
