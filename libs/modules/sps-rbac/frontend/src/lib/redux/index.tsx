"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { rtkQueryErrorLogger } from "./rtk-query-error-logger";
import { slice as authSlice } from "./auth/slice";
import { slices } from "./slices";
import { useEffect } from "react";
// import { api as userApi } from "../models/user/api/client";
// import { useEffect } from "react";
// import { globalStore, persistentMessageQuery } from "@sps/store";

const middlewares = [...slices.middlewares];

const store: any = configureStore({
  devTools: {
    name: "sps-rbac",
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
  return (
    <Provider store={store}>
      <AuthWrapper>{children}</AuthWrapper>
    </Provider>
  );
}

function AuthWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    store.dispatch(authSlice.actions.setAnonymusUsername());
  }, []);

  return <>{children}</>;
}
