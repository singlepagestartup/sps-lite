import { api as roleApi } from "../../models/role/api/client";
import { api as userApi } from "../../models/user/api/client";
import { slice as authSlice } from "../auth/slice";

export const slices = {
  middlewares: [roleApi.middleware, userApi.middleware],
  reducer: {
    auth: authSlice.reducer,
    [roleApi.reducerPath]: roleApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
};
