"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rtk } from "@sps/sps-website-builder/models/hero-section-block/frontend/api/client";
import {
  createPassToGlobalActionsStoreMiddleware,
  globalActionsStore,
} from "@sps/shared-store";
import { rtkQueryErrorLogger } from "@sps/ui-adapter";

const name = `sps-website-builder/${rtk.api.reducerPath}`;
const middlewares = [rtk.api.middleware];
const passToGlobalActionsStoreMiddleware =
  createPassToGlobalActionsStoreMiddleware({ name });

const store: any = configureStore({
  devTools: {
    name,
  },
  reducer: {
    [rtk.api.reducerPath]: rtk.api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(passToGlobalActionsStoreMiddleware.middleware)
      .concat(middlewares)
      .concat(rtkQueryErrorLogger),
});

if (typeof window !== "undefined") {
  globalActionsStore.getState().addStore({
    name,
    actions: [],
  });

  // if (typeof subscription === "function") {
  //   subscription(store);
  // }
}

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
