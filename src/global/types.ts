export interface CartItem {
  id: string;
  corn: number;
  wheat: number;
  quinoa: number;
  autoFillValue: number;
  price: number;
  weight: number;
}

 export interface CartState {
  cartItems: CartItem[];
  totalAmount: number;
  totalPrice: number;
}

export interface PendingProduct {
  corn: number;
  wheat: number;
  quinoa: number;
  autoFillValue: number;
  price: number;
  weight: number;
}
