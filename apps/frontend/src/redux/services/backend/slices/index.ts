import { slices as spsLiteSlices } from "./sps-lite";
import { slices as startupSlices } from "./startup";
import { slices as spsWebsiteBuilderSlices } from "@sps/sps-website-builder";

export const slices = {
  middlewares: [
    ...spsLiteSlices.middlewares,
    ...spsWebsiteBuilderSlices.middlewares,
    ...startupSlices.middlewares,
  ],
  reducer: {
    ...spsLiteSlices.reducer,
    ...spsWebsiteBuilderSlices.reducer,
    ...startupSlices.reducer,
  },
};
