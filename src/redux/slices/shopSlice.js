import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getArrivals } from "../../helpers/auth";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categories: null,
    newArrivals: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addToCategories: (state, action) => {
      state.categories = [...state.categories, action.payload];
    },
    setNewArrivals: (state, action) => {
      state.newArrivals = action.payload;
    },
  },
});

export const { setCategories } = shopSlice.actions;
export const { addToCategories } = shopSlice.actions;
export const { setNewArrivals } = shopSlice.actions;

//the following is called at anypoint where categories component is mounted
export const getShopCategories = () => async (dispatch) => {
  const dataFromGet = await getCategories();
  dispatch(setCategories(dataFromGet));
};

//the following is called when the new arrivals component is called
export const getNewArrivals = () => async (dispatch) => {
  const dataFromGet = await getArrivals();
  dispatch(setNewArrivals(dataFromGet));
};

export default shopSlice.reducer;
