import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type propsType = {
  message: string;
  handleOccurs?:
    | {
        handleText: string;
        handleFunc: any;
      }
    | undefined;
};

const initialState = {
  value: "",
  hidden: true,
  handleText: "",
  handleFunc: undefined,
};

export const modalWindowSlice = createSlice({
  name: "ModalMessage",
  initialState,
  reducers: {
    callModalWindow: (state, action: PayloadAction<propsType>) => {
      const payload = action.payload;
      state.value = payload.message;

      if (payload.handleOccurs !== undefined) {
        state.handleText = payload.handleOccurs.handleText;
        state.handleFunc = payload.handleOccurs.handleFunc;
      }

      state.hidden = false;
      console.log("state.hidden: ", state.hidden);
    },
    setHidden: (state, action: PayloadAction<boolean>) => {
      state.hidden = action.payload;
    },
  },
});

export const { callModalWindow, setHidden } = modalWindowSlice.actions; //for component where we want to use slice
export default modalWindowSlice.reducer; //for store
