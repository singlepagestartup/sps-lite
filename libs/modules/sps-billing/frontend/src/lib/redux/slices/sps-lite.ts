import { api as currencyApi } from "../../models/currency/api/client";
import { api as invoiceApi } from "../../models/invoice/api/client";

export const slices = {
  middlewares: [currencyApi.middleware, invoiceApi.middleware],
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [invoiceApi.reducerPath]: invoiceApi.reducer,
  },
  subscriptions: [],
};
