import { rootSlices as spsLiteRootSlices } from "./sps-lite";
import { rootSlices as startupRootSlices } from "./startup";

export const rootSlices = {
  middlewares: [
    ...spsLiteRootSlices.middlewares,
    ...startupRootSlices.middlewares,
  ],
  reducer: {
    ...spsLiteRootSlices.reducer,
    ...startupRootSlices.reducer,
  },
};
