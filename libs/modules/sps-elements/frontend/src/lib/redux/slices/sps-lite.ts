import { api as buttonApi } from "../../models/button/api/client";
import { api as buttonsArrayApi } from "../../models/buttons-array/api/client";
import { api as flyoutApi } from "../../models/flyout/api/client";
import { api as checkoutFormBlockApi } from "../../models/checkout-form-block/api/client";

export const slices = {
  middlewares: [
    buttonApi.middleware,
    buttonsArrayApi.middleware,
    flyoutApi.middleware,
    checkoutFormBlockApi.middleware,
  ],
  reducer: {
    [buttonApi.reducerPath]: buttonApi.reducer,
    [buttonsArrayApi.reducerPath]: buttonsArrayApi.reducer,
    [flyoutApi.reducerPath]: flyoutApi.reducer,
    [checkoutFormBlockApi.reducerPath]: checkoutFormBlockApi.reducer,
  },
  subscriptions: [],
};
