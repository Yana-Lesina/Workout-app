import { configureStore } from "@reduxjs/toolkit";

import workoutsArraySlice from "./slices/workoutsArraySlice";
import isDataLoadedSlice from "./slices/isLoadedSlice";
import userSlice from "./slices/userSlice";
import ErrorSlice from "./slices/ErrorSlice";
import loadersSlice from "./slices/loadersSlice";
import modalWindowSlice from "./slices/modalWindowSlice";
import disableButtonSlice from "./slices/disableButtonSlice";

export const store = configureStore({
  reducer: {
    isButtonDisabled: disableButtonSlice,
    loaders: loadersSlice,
    modalWindow: modalWindowSlice,
    workoutsArray: workoutsArraySlice,
    isDataLoaded: isDataLoadedSlice,
    errorMessage: ErrorSlice,
    user: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
