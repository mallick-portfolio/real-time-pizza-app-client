import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addproduct: (state, action) => {
      const item = state.product.find((pro) => pro._id === action.payload._id);
      if (item) {
        item.quantity = parseInt(item.quantity) + 1;
      } else {
        state.product.push(action.payload);
      }
    },
  },
});

export const { addproduct } = cartSlice.actions;

export default cartSlice.reducer;
