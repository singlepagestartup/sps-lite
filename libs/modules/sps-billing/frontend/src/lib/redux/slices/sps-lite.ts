import { api as currencyApi } from "../entites/currency/api";
import { api as invoiceApi } from "../entites/invoice/api";

export const slices = {
  middlewares: [currencyApi.middleware, invoiceApi.middleware],
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [invoiceApi.reducerPath]: invoiceApi.reducer,
  },
};
