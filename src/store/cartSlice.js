import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    cartProdsList: [],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    
    removeFromCart(state, action) {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
    increaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;