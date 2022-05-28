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
  DataFilter: [],
  Favorite: [],
  Top: [],
  Bottom: [],
  BiggestGainers: [],
  MarketRank: [],
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
    SearchResult: (state, action) => {
      let data;
      if (action.payload.Data == null) {
        data = state.MarketRank.filter((item) =>
          item.name.toLowerCase().includes(action.payload.txt.toLowerCase())
        );
      } else {
        data = action.payload.Data.filter((item) =>
          item.name.toLowerCase().includes(action.payload.txt.toLowerCase())
        );
      }
      state.DataFilter = data;
      if (action.payload.txt.length <= 0) {
        // when we have not txt , we should show all data and wich data ? that one i sleceted in droprown ( select and option )
        if (action.payload.Data == null) {
          state.DataFilter = state.MarketRank;
        } else {
          state.DataFilter = action.payload.Data;
        }
      }
    },
    HomeFilter: (state, action) => {
      // for dropdown
      state.DataFilter = action.payload.Data;
    },
  },
  extraReducers: {
    [CoinSliceFun.fulfilled]: (state, action) => {
      state.Data = action.payload;
      state.Top = action.payload
        .sort((a, b) => b.current_price - a.current_price)
        .slice(0, action.payload.length);
      state.Bottom = action.payload
        .sort(
          (a, b) =>
            a.price_change_percentage_24h - b.price_change_percentage_24h
        )
        .slice(0, action.payload.length);
      state.BiggestGainers = action.payload
        .sort(
          (a, b) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h
        )
        .slice(0, action.payload.legth);
      state.MarketRank = action.payload
        .sort((a, b) => a.market_cap_rank - b.market_cap_rank)
        .slice(0, action.payload.legth);
      state.DataFilter = state.MarketRank;
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
export const { AddToFavorite, HomeFilter, SearchResult } = CoinSlice.actions;
export default CoinSlice.reducer;
