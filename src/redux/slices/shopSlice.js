import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getArrivals, getWishFb } from "../../helpers/auth";
import { cartFromLocal, cartToLocal } from "../../helpers/controlStorage";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categories: null,
    newArrivals: null,
    isUploading: false,
    cart: [],
    wish: null,
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
    setIsUploading: (state, action) => {
      state.isUploading = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setWish: (state, action) => {
      state.wish = action.payload;
    },
  },
});

export const { setCategories } = shopSlice.actions;
export const { addToCategories } = shopSlice.actions;
export const { setNewArrivals } = shopSlice.actions;
export const { setIsUploading } = shopSlice.actions;
export const { setCart } = shopSlice.actions;
export const { setWish } = shopSlice.actions;

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

//the following is called at the init of the app
export const getCart = () => async (dispatch) => {
  const data = await cartFromLocal();
  dispatch(setCart(data));
  console.log("is getting cart");
};

export const saveCartToLocal = () => (dispatch, getState) => {
  cartToLocal(getState().shop.cart);
};

export const getWish = (token) => async (dispatch) => {
  const data = await getWishFb(token);
  dispatch(setWish(data));
};

export default shopSlice.reducer;
