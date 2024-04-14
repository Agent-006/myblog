import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postData: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    //TODO: kuch hoga yaha
    post: (state, action) => {
      state.postData = state.action.postData;
    },
  },
});

export const { post } = postSlice.actions;

export default postSlice.reducer;
