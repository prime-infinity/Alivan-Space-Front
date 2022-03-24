import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userdetailsReducer from "./slices/userdetailsSlice";
import shopReducer from "./slices/shopSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userdetails: userdetailsReducer,
    shop: shopReducer,
  },
});

export default store;
