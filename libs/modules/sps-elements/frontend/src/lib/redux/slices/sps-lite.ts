import { api as buttonApi } from "../../models/button/api/client";
import { api as buttonsArrayApi } from "../../models/buttons-array/api/client";
import { api as flyoutApi } from "../../models/flyout/api/client";

export const slices = {
  middlewares: [
    buttonApi.middleware,
    buttonsArrayApi.middleware,
    flyoutApi.middleware,
  ],
  reducer: {
    [buttonApi.reducerPath]: buttonApi.reducer,
    [buttonsArrayApi.reducerPath]: buttonsArrayApi.reducer,
    [flyoutApi.reducerPath]: flyoutApi.reducer,
  },
};
