"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// import { rtkQueryErrorLogger } from "./rtk-query-error-logger";
import { slices } from "./slices";
import { slice as authSlice } from "./auth/slice";

const middlewares = [...slices.middlewares];

const store: any = configureStore({
  devTools: {
    name: "sps-rbac",
  },
  reducer: {
    ...slices.reducer,
    auth: authSlice.reducer,
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
