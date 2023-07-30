import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState,CartItem } from '../../global/types';
import { calculateTotals } from '../../utils';

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
    },
     updateTotals: (state) => {
      calculateTotals(state)
     }
  },
});

export const { addToCart, removeItem, updateTotals } = cartSlice.actions;
export default cartSlice.reducer;
