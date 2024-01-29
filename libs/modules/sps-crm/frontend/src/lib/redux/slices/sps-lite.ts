import { api as formApi } from "../entities/form";
import { api as formRequestApi } from "../entities/form-request";
import { api as reviewApi } from "../entities/review";

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
