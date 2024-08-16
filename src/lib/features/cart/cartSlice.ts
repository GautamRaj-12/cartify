"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

type cartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
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
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, clearCart, updateItemQuantity } =
  cartSlice.actions;
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
export default cartSlice.reducer;
