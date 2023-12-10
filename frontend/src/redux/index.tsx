"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { rtkQueryErrorLogger } from "~redux/rtk-query-error-logger";
import { backend } from "./services/backend";

const middlewares = [...backend.middlewares, rtkQueryErrorLogger];

const store: any = configureStore({
  reducer: {
    ...backend.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
