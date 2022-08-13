import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export type IUser = {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
};

const initialState: IUser = {
  uid: null,
  displayName: null,
  email: null,
  emailVerified: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state: IUser, action: PayloadAction<IUser>) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.emailVerified = action.payload.emailVerified;
    },

    removeUser: (state) => {
      state.uid = null;
      state.displayName = null;
      state.email = null;
      state.emailVerified = false;
    },
  },
});

export const { setCurrentUser, removeUser } = userSlice.actions;
export default userSlice.reducer; //for store
