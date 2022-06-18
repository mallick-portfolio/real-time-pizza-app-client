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
    incrementQuantity: (state, action) => {
      const item = state.product.find((pro) => pro._id === action.payload);
      console.log(item);
      if (item) {
        item.quantity = parseInt(item.quantity) + 1;
        item.price = parseInt(item.quantity) * parseInt(item.price);
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.product.find((pro) => pro._id === action.payload);
      console.log(item);
      if (item) {
        if (item.quantity <= 1) {
          const updatedItem = state.product.filter(
            (pro) => pro._id !== action.payload
          );
          state.product = updatedItem;
        } else {
          item.quantity = parseInt(item.quantity) - 1;
        }
      }
    },
  },
});

export const { addproduct, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
