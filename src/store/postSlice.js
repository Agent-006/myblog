import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPostData: [],
  userPostData: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    //TODO: kuch hoga yaha
    allPosts: (state, action) => {
      state.allPostData = state.action.allPostData;
    },
    userPosts: (state, action) => {
      state.userPostData = state.action.userPostData;
    },
  },
});

export const { allPosts, userPosts } = postSlice.actions;

export default postSlice.reducer;
