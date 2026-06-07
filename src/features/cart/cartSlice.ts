import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1. Define the item structure
export interface CartItemInterface {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number; // Added to track quantity per item
}

// 2. Define the Slice State structure
interface CartState {
  items: CartItemInterface[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItemInterface, "quantity">>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      state.totalQuantity++;
      state.totalAmount += newItem.price;

      if (!existingItem) {
        // If the item doesn't exist in the cart, add it with a quantity of 1
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      } else {
        // If it already exists, just bump up the quantity
        existingItem.quantity++;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      const existingItem = state.items.find((item) => item.id === idToRemove);

      if (existingItem) {
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;

        if (existingItem.quantity === 1) {
          // If there's only 1 left, completely remove it from the array
          state.items = state.items.filter((item) => item.id !== idToRemove);
        } else {
          // Otherwise, decrease the quantity by 1
          existingItem.quantity--;
        }
      }
    },
    clearCart: (state) => {
      // Bonus: Useful helper utility to reset your cart completely
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;