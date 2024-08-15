"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type cartItem = {
  id: number;
  title: string;
  price: number;
};

type cartState = {
  items: cartItem[];
};

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [] as cartItem[],
  } as cartState,

  reducers: {
    addItem: (state, action: PayloadAction<cartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
