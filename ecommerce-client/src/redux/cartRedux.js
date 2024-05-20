import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.totalQuantity += 1;
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
