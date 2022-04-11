import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userdetailsReducer from "./slices/userdetailsSlice";
import shopReducer from "./slices/shopSlice";
import checkReducer from "./slices/checkSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userdetails: userdetailsReducer,
    shop: shopReducer,
    check: checkReducer,
    order: orderReducer,
  },
});

export default store;
