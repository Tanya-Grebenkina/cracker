import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],

  cornProduct: 0,
  wheatProduct: 0,
  quinoaProduct: 0,
  autoFillProduct: 0,

  productPrice: 0,
  productWeight: 2,

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
    resetValues: (state) => {
      state.cornProduct = 0;
      state.wheatProduct = 0;
      state.quinoaProduct = 0;
      state.autoFillProduct = 0;

      state.productPrice = 0;
    },
    updateCorn:(state, { payload }) => {
      state.cornProduct = payload;
    },
    updateWheat:(state, { payload }) => {
      state.wheatProduct = payload;
    },
    updateQuinoa:(state, { payload }) => {
      state.quinoaProduct = payload;
    },
    updateAutoFill:(state, { payload }) => {
      state.autoFillProduct = payload;
    },

    updateProductPrice: (state, { payload }) => {
      state.productPrice = payload;
    },
    updateProductWeight: (state, { payload }) => {
      state.productWeight = payload;
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

export const { updateCorn, updateWheat, updateQuinoa, updateAutoFill, updateProductPrice, updateProductWeight, addToCart, removeItem, resetValues, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;