import { slice as authSlice } from "./auth/slice";

export const slices = {
  middlewares: [],
  reducer: {
    auth: authSlice.reducer,
  },
};
