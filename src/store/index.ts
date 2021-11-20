import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import logger from "redux-logger";

import articleReducer from "../features/article/articleSlice";

export const store = configureStore({
  reducer: {
    article: articleReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
