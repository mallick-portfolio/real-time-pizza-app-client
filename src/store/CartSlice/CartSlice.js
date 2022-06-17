import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addproduct: (state, action) => {
      state.product = [...state.product, action.payload];
    },
  },
});

export const { addproduct } = cartSlice.actions;

export default cartSlice.reducer;
