"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { api } from "@sps/sps-website-builder-shopping-cart-block-api";
import {
  createPassToGlobalActionsStoreMiddleware,
  globalActionsStore,
} from "@sps/store";

const name = `sps-website-builder/${api.client.reducerPath}`;
const middlewares = [api.client.middleware];
const passToGlobalActionsStoreMiddleware =
  createPassToGlobalActionsStoreMiddleware({ name });

const store: any = configureStore({
  devTools: {
    name,
  },
  reducer: {
    [api.client.reducerPath]: api.client.reducer,
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

if (typeof api.subscription === "function") {
  api.subscription(store);
}

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
