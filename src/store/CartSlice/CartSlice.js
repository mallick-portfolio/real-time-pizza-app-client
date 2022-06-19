import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addproduct: (state, action) => {
      const item = state.product.find(
        (pro) => pro.productId === action.payload.productId
      );
      if (item) {
        item.quantity = parseInt(item.quantity) + 1;
        item.totalprice = parseFloat(item.price) * parseInt(item.quantity);
      } else {
        state.product.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.product.find(
        (pro) => pro.productId === action.payload
      );
      if (item) {
        item.quantity = parseInt(item.quantity) + 1;
        item.totalprice = parseFloat(item.price) * parseInt(item.quantity);
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.product.find(
        (pro) => pro.productId === action.payload
      );
      if (item) {
        if (item.quantity <= 1) {
          const updatedItem = state.product.filter(
            (pro) => pro.productId !== action.payload
          );
          state.product = updatedItem;
        } else {
          item.quantity = parseInt(item.quantity) - 1;
          item.totalprice = parseFloat(item.totalprice) - parseInt(item.price);
        }
      }
    },
  },
});

export const { addproduct, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
