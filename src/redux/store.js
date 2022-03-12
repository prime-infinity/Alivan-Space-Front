import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userdetailsReducer from "./slices/userdetailsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userdetails: userdetailsReducer,
  },
});

export default store;
