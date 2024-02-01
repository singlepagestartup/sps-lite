import { api as buttonApi } from "../button/api/client";
import { api as buttonsArrayApi } from "../buttons-array/api/client";
import { api as featureApi } from "../feature/api/client";
import { api as logotypeApi } from "../logotype/api/client";

export const slices = {
  middlewares: [
    buttonApi.middleware,
    buttonsArrayApi.middleware,
    featureApi.middleware,
    logotypeApi.middleware,
  ],
  reducer: {
    [buttonApi.reducerPath]: buttonApi.reducer,
    [buttonsArrayApi.reducerPath]: buttonsArrayApi.reducer,
    [featureApi.reducerPath]: featureApi.reducer,
    [logotypeApi.reducerPath]: logotypeApi.reducer,
  },
};
