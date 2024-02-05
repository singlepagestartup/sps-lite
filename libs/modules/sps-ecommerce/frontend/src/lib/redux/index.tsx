"use client";

import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { rtkQueryErrorLogger } from "./rtk-query-error-logger";
import { slices } from "./slices";
import { RtkAction, globalActionsStore } from "@sps/store";

const middlewares = [...slices.middlewares];

const passToGlobalActionsStoreMiddleware = createListenerMiddleware();
passToGlobalActionsStoreMiddleware.startListening({
  predicate: (action) => {
    if (action.type.includes("fulfilled")) {
      return true;
    }

    return false;
  },
  effect: async (action: any) => {
    action.module = "sps-ecommerce";
    globalActionsStore.getState().addAction(action as RtkAction);
  },
});

const store: any = configureStore({
  devTools: {
    name: "sps-ecommerce",
  },
  reducer: {
    ...slices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(passToGlobalActionsStoreMiddleware.middleware)
      .concat(middlewares),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
