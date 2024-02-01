import { api as buttonApi } from "../button/api";
import { api as buttonsArrayApi } from "../buttons-array/api";
import { api as featureApi } from "../feature/api";
import { api as logotypeApi } from "../logotype/api";

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
