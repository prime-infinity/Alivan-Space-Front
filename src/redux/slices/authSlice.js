import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocal, saveToLocal } from "../../helpers/controlStorage";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const getAuth = () => async (dispatch) => {
  const dataFromGet = await loadFromLocal();
  dispatch(setAuth(dataFromGet));
};

export const saveAuthToLocal = () => (dispatch, getState) => {
  saveToLocal(getState().auth.auth);
};

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
