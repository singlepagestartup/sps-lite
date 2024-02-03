import { api as currencyApi } from "../../models/currency";
import { api as invoiceApi } from "../../models/invoice";

export const slices = {
  middlewares: [currencyApi.middleware, invoiceApi.middleware],
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [invoiceApi.reducerPath]: invoiceApi.reducer,
  },
};
