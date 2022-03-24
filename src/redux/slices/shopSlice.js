import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../helpers/auth";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categories: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addToCategories: (state, action) => {
      state.categories = [...state.categories, action.payload];
    },
  },
});

export const { setCategories } = shopSlice.actions;
export const { addToCategories } = shopSlice.actions;

//the following is called at anypoint where categories component is mounted
export const getShopCategories = () => async (dispatch) => {
  const dataFromGet = await getCategories();
  dispatch(setCategories(dataFromGet));
};

export default shopSlice.reducer;
