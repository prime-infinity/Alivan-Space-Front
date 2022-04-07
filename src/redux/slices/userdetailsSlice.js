import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "../../helpers/auth";

export const userdetailsSlice = createSlice({
  name: "userdetails",
  initialState: {
    details: null,
  },
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    updateDetails: (state, action) => {
      state.details[0] = action.payload;
    },

    updateAddress: (state, action) => {
      state.details[1] = action.payload;
    },
  },
});

export const { updateDetails } = userdetailsSlice.actions;
export const { updateAddress } = userdetailsSlice.actions;
export const { setDetails } = userdetailsSlice.actions;

//the following is called after login or register.
//it should also be called by clicking the profile link
export const setUserDetail = (token) => async (dispatch) => {
  const dataFromGet = await getDetails(token);
  dispatch(setDetails(dataFromGet));
};

export default userdetailsSlice.reducer;
