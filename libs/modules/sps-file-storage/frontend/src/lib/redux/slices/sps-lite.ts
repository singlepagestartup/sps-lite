import { api as fileApi } from "../../models/file/api/client";

export const slices = {
  middlewares: [fileApi.middleware],
  reducer: {
    [fileApi.reducerPath]: fileApi.reducer,
  },
  subscriptions: [],
};
