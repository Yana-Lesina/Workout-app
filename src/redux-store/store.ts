import { configureStore } from "@reduxjs/toolkit";
import { startCounterSlice } from "./slices/startCounterSlice";
import { isDataLoadedSlice } from "./slices/isLoadedSlice";

export const store = configureStore({
  reducer: {
    startCounter: startCounterSlice.reducer,
    isDataLoaded: isDataLoadedSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
