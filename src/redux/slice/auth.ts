import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      userId: null,
      username: null,
      email: null,
      accessToken: null,
      refreshToken: null,
    },
    message: "",
    messages: [],
  },
  reducers: {
    setUser(state, action) {
      console.log(action);
      return {
        ...state,
        user: action.payload.data,
      };
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
