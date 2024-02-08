import { api as inputApi } from "../../models/input/api/client";
import { api as formApi } from "../../models/form/api/client";
import { api as formRequestApi } from "../../models/form-request/api/client";
import { api as reviewApi } from "../../models/review/api/client";

export const slices = {
  middlewares: [
    inputApi.middleware,
    formApi.middleware,
    formRequestApi.middleware,
    reviewApi.middleware,
  ],
  reducer: {
    [inputApi.reducerPath]: inputApi.reducer,
    [formApi.reducerPath]: formApi.reducer,
    [formRequestApi.reducerPath]: formRequestApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  subscriptions: [],
};
