import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  email: string | null;
  uid: string | null;
}

const initialState: IUser = {
  email: null,
  uid: null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<IUser>) => {
      console.log("action.payload.email", action.payload.email);
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },

    removeUser: (state) => {
      // console.log("removeUser before", state.email);
      state.email = null;
      state.uid = null;
      // console.log("removeUser after", state.email);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentUser, removeUser } = userSlice.actions;

export default userSlice.reducer; //for store
