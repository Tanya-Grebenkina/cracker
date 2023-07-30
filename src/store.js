import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// export type RootState = ReturnType<type store.getState>;
// export type AppDispatch = typeof store.dispatch