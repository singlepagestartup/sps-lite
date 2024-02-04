"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// import { rtkQueryErrorLogger } from "./rtk-query-error-logger";
import { slices } from "./slices";

const middlewares = [...slices.middlewares];

const store: any = configureStore({
  devTools: {
    name: "sps-elements",
  },
  reducer: {
    ...slices.reducer,
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
