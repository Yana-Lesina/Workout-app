import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export interface IUser {
  value: User | null;
}

const initialState: IUser = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },

    removeUser: (state) => {
      state.value = null;
    },
  },
});

export const { setCurrentUser, removeUser } = userSlice.actions;
export default userSlice.reducer; //for store
