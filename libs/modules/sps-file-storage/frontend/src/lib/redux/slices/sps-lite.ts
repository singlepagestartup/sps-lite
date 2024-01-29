import { api as fileApi } from "../entities/file";

export const slices = {
  middlewares: [fileApi.middleware],
  reducer: {
    [fileApi.reducerPath]: fileApi.reducer,
  },
};
