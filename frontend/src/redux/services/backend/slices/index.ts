import { slices as spsLiteSlices } from "./sps-lite";

export const slices = {
  middlewares: [...spsLiteSlices.middlewares],
  reducer: {
    ...spsLiteSlices.reducer,
  },
};
