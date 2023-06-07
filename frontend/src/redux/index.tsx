"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
  backendServiceApi,
  frontendServiceApi,
  rtkQueryErrorLogger,
} from "~backend/index";

const middlewares = [
  backendServiceApi.middleware,
  frontendServiceApi.middleware,
  rtkQueryErrorLogger,
];

const store: any = configureStore({
  reducer: {
    [backendServiceApi.reducerPath]: backendServiceApi.reducer,
    [frontendServiceApi.reducerPath]: frontendServiceApi.reducer,
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
