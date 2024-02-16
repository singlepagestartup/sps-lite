"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { api, subscription } from "./api/client";
import {
  createPassToGlobalActionsStoreMiddleware,
  globalActionsStore,
} from "@sps/store";

const name = `sps-file-storage/${api.reducerPath}`;
const middlewares = [api.middleware];
const passToGlobalActionsStoreMiddleware =
  createPassToGlobalActionsStoreMiddleware({ name });

const store: any = configureStore({
  devTools: {
    name,
  },
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(passToGlobalActionsStoreMiddleware.middleware)
      .concat(middlewares),
});

globalActionsStore.getState().addStore({
  name,
  actions: [],
});

if (typeof subscription === "function") {
  subscription(store);
}

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
