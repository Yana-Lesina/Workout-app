import { configureStore } from "@reduxjs/toolkit";
import { workoutsArraySlice } from "./slices/WorkoutsArraySlice";
import { isDataLoadedSlice } from "./slices/isLoadedSlice";
import { userSlice } from "./slices/userSlice";
import { ErrorSlice } from "./slices/ErrorSlice";

export const store = configureStore({
  reducer: {
    workoutsArray: workoutsArraySlice.reducer,
    isDataLoaded: isDataLoadedSlice.reducer,
    ErrorMessage: ErrorSlice.reducer,
    user: userSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
