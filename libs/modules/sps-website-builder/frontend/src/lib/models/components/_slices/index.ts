import { slices as spsLiteSlices } from "./sps-lite";
import { slices as startupSlices } from "./startup";

export const slices = {
  middlewares: [...spsLiteSlices.middlewares, ...startupSlices.middlewares],
  reducer: {
    ...spsLiteSlices.reducer,
    ...startupSlices.reducer,
  },
};
