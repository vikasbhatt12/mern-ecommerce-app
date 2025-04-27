import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const isExist = state.products.find((product) => product._id === productToAdd._id);

      if (isExist) {
        isExist.quantity += 1;
      } else {
        state.products.push({ ...productToAdd, quantity: 1 });
      }

      updateCart(state);
    },
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const product = state.products.find((product) => product._id === id);
      if (product) {
        if (type === 'increment') {
          product.quantity += 1;
        } else if (type === 'decrement' && product.quantity > 1) {
          product.quantity -= 1;
        }
      }

      updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((product) => product._id !== action.payload.id);

      updateCart(state);
    },
    clearCart: (state) => {
      state.products = [];
      updateCart(state);
    },
  },
});

const updateCart = (state) => {
  state.selectedItems = selectSelectedItems(state);
  state.totalPrice = selectTotalPrice(state);
  state.tax = selectTax(state);
  state.grandTotal = selectGrandTotal(state);
};

export const selectSelectedItems = (state) =>
  state.products.reduce((total, product) => total + product.quantity, 0);

export const selectTotalPrice = (state) =>
  state.products.reduce((total, product) => total + product.quantity * product.price, 0);

export const selectTax = (state) => selectTotalPrice(state) * state.taxRate;

export const selectGrandTotal = (state) =>
  selectTotalPrice(state) + selectTotalPrice(state) * state.taxRate;

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
