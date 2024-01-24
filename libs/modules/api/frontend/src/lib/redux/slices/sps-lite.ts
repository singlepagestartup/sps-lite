import { api as localeApi } from "../entities/locale/api";

export const slices = {
  middlewares: [localeApi.middleware],
  reducer: {
    [localeApi.reducerPath]: localeApi.reducer,
  },
};
