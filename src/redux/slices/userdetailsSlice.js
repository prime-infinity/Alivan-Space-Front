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
  },
});

export const { setDetails } = userdetailsSlice.actions;

//the following is called after login or register.
//it should also be called by clicking the profile link
export const setUserDetail = (token) => async (dispatch) => {
  const dataFromGet = await getDetails(token);
  dispatch(setDetails(dataFromGet));
};

export default userdetailsSlice.reducer;
