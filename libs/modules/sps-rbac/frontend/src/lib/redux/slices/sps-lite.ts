import { api as roleApi } from "../entities/role/api";
import { api as userApi } from "../entities/user/api";
import { slice as authSlice } from "../auth/slice";

export const slices = {
  middlewares: [roleApi.middleware, userApi.middleware],
  reducer: {
    auth: authSlice.reducer,
    [roleApi.reducerPath]: roleApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
};
