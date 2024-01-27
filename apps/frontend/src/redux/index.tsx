"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { slices as backendSlices } from "./slices";

const middlewares = [...backendSlices.middlewares];

const store: any = configureStore({
  reducer: {
    ...backendSlices.reducer,
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
