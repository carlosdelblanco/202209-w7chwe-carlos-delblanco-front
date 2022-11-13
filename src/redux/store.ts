import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { registerReducer } from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: registerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
