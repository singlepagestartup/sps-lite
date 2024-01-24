import { api as formApi } from "../entities/form/api";
import { api as formRequestApi } from "../entities/form-request/api";
import { api as reviewApi } from "../entities/review/api";

export const slices = {
  middlewares: [
    formApi.middleware,
    formRequestApi.middleware,
    reviewApi.middleware,
  ],
  reducer: {
    [formApi.reducerPath]: formApi.reducer,
    [formRequestApi.reducerPath]: formRequestApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
};
