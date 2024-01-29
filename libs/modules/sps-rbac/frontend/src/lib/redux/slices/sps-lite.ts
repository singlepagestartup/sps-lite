import { api as roleApi } from "../entities/role";
import { api as userApi } from "../entities/user";
import { slice as authSlice } from "../auth/slice";

export const slices = {
  middlewares: [roleApi.middleware, userApi.middleware],
  reducer: {
    auth: authSlice.reducer,
    [roleApi.reducerPath]: roleApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
};
