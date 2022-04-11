import { createSlice } from "@reduxjs/toolkit";
import { getUserOrders, getAllUserOrders } from "../../helpers/auth";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: null,
    allOrder: null,
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    updateOrders: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    setAllOrders: (state, action) => {
      state.allOrder = action.payload;
    },
    updateAllOrders: (state, action) => {
      state.allOrder = [...state.allOrder, action.payload];
    },
  },
});

export const { setOrders } = orderSlice.actions;
export const { updateOrders } = orderSlice.actions;
export const { setAllOrders } = orderSlice.actions;
export const { updateAllOrders } = orderSlice.actions;

export const getOrders = (token) => async (dispatch) => {
  const data = await getUserOrders(token);
  dispatch(setOrders(data));
};

export const getAllOrders = (token) => async (dispatch) => {
  const data = await getAllUserOrders(token);
  dispatch(setAllOrders(data));
};

export default orderSlice.reducer;
