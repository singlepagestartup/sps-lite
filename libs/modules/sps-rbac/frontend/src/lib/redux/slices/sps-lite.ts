import { api as roleApi } from "../entities/role/api";
import { api as userApi } from "../entities/user/api";

export const slices = {
  middlewares: [roleApi.middleware, userApi.middleware],
  reducer: {
    [roleApi.reducerPath]: roleApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
};
