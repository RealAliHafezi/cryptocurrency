import { configureStore } from "@reduxjs/toolkit";
//
import CoinSliceReducer from "./CoinSlice";
export const store = configureStore({
  reducer: {
    Coin: CoinSliceReducer,
  },
});
