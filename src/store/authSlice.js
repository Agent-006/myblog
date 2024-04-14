import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDate: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userDate = action.payload.userDate;
    },

    logout: (state) => {
      state.userDate = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
