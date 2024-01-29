import { api as currencyApi } from "../entities/currency";
import { api as invoiceApi } from "../entities/invoice";

export const slices = {
  middlewares: [currencyApi.middleware, invoiceApi.middleware],
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [invoiceApi.reducerPath]: invoiceApi.reducer,
  },
};
