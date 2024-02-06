"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { rtkQueryErrorLogger } from "./rtk-query-error-logger";
import { slices } from "./slices";
// import { createPassToGlobalActionsStoreMiddleware } from "@sps/store";

const module = "sps-elements";
const middlewares = [...slices.middlewares];
// const passToGlobalActionsStoreMiddleware =
//   createPassToGlobalActionsStoreMiddleware({ module });

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

// slices.subscriptions.forEach((subscription: any) => {
//   if (typeof subscription === "function") {
//     subscription(store);
//   }
// });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
