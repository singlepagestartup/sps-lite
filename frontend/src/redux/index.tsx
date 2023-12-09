"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
  backendServiceApi,
  frontendServiceApi,
  rtkQueryErrorLogger,
} from "~backend/index";
import { api as currencyApi } from "~redux/services/backend/models/currency/api";
import { api as flyoutApi } from "~redux/services/backend/models/flyout/api";
import { api as footerApi } from "~redux/services/backend/models/footer/api";
import { api as formRequestApi } from "~redux/services/backend/models/form-request/api";
import { api as layoutApi } from "~redux/services/backend/models/layout/api";
import { api as loaderApi } from "~redux/services/backend/models/loader/api";
import { api as modalApi } from "~redux/services/backend/models/modal/api";
import { api as navbarApi } from "~redux/services/backend/models/navbar/api";
import { api as pageApi } from "~redux/services/backend/models/page/api";

const middlewares = [
  backendServiceApi.middleware,
  frontendServiceApi.middleware,
  currencyApi.middleware,
  flyoutApi.middleware,
  footerApi.middleware,
  formRequestApi.middleware,
  layoutApi.middleware,
  loaderApi.middleware,
  modalApi.middleware,
  navbarApi.middleware,
  pageApi.middleware,
  rtkQueryErrorLogger,
];

const store: any = configureStore({
  reducer: {
    [backendServiceApi.reducerPath]: backendServiceApi.reducer,
    [frontendServiceApi.reducerPath]: frontendServiceApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
    [flyoutApi.reducerPath]: flyoutApi.reducer,
    [footerApi.reducerPath]: footerApi.reducer,
    [formRequestApi.reducerPath]: formRequestApi.reducer,
    [layoutApi.reducerPath]: layoutApi.reducer,
    [loaderApi.reducerPath]: loaderApi.reducer,
    [modalApi.reducerPath]: modalApi.reducer,
    [navbarApi.reducerPath]: navbarApi.reducer,
    [pageApi.reducerPath]: pageApi.reducer,
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
