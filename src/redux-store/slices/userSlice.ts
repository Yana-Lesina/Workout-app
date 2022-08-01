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
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },

    removeUser: (state) => {
      state.email = null;
      state.uid = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentUser, removeUser } = userSlice.actions;

export default userSlice.reducer; //for store
