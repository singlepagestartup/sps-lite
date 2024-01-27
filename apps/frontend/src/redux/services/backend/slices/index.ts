import { rootSlices as spsWebsiteBuilderRootSlices } from "@sps/sps-website-builder-frontend";
import { slices as apiSlices } from "@sps/api-frontend";

export const slices = {
  middlewares: [
    ...spsWebsiteBuilderRootSlices.middlewares,
    ...apiSlices.middlewares,
  ],
  reducer: {
    ...spsWebsiteBuilderRootSlices.reducer,
    ...apiSlices.reducer,
  },
};
