import { CartState } from "./global/types";

export const calculateTotals = (state: CartState) => {
  const { cartItems } = state;
  let totalAmount = 0;
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price;
    totalAmount += 1;
  });
  state.totalAmount = totalAmount;
  state.totalPrice = totalPrice;
};





