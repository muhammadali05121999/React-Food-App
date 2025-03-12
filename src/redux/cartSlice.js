import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    Additem: (state, action) => {
      let existItem = state.find((item) => item.id === action.payload.id);
      if (existItem) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.push(action.payload);
      }
    },

    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementqty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementqty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { Additem, RemoveItem, incrementqty, decrementqty, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
