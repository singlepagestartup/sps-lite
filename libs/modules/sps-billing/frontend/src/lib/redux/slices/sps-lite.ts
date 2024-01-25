import { api as currencyApi } from "../entities/currency/api";
import { api as invoiceApi } from "../entities/invoice/api";

export const slices = {
  middlewares: [currencyApi.middleware, invoiceApi.middleware],
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [invoiceApi.reducerPath]: invoiceApi.reducer,
  },
};
