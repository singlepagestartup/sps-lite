import { rootSlices as spsWebsiteBuilderRootSlices } from "@sps/sps-website-builder-frontend";

export const slices = {
  middlewares: [...spsWebsiteBuilderRootSlices.middlewares],
  reducer: {
    ...spsWebsiteBuilderRootSlices.reducer,
  },
};
