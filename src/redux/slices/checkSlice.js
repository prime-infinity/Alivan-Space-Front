import { createSlice } from "@reduxjs/toolkit";

export const checkSlice = createSlice({
  name: "check",
  initialState: {
    address: null,
    delivery: null,
    payment: null,
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setDelivery: (state, action) => {
      state.delivery = action.payload;
    },
    setPayment: (state, action) => {
      state.delivery = action.payload;
    },
  },
});

export const { setAddress } = checkSlice.actions;
export const { setDelivery } = checkSlice.actions;
export const { setPayment } = checkSlice.actions;

export default checkSlice.reducer;
