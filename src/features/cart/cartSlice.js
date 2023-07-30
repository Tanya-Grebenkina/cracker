import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],

  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);
    },
    calculateTotals: (state) => {
      let totalAmount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        totalPrice += item.price;
        totalAmount += 1;
      });
      state.totalAmount = totalAmount;
      state.totalPrice = totalPrice;
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(addToCart, (state, action) => {
      state.cartItems.push(action.payload);
      state.calculateTotals();
    })
    .addCase(removeItem, (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.calculateTotals();
    })
  }
});

export const { addToCart, removeItem, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;