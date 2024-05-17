import { populate as parentPopulate } from "@sps/sps-website-builder-models-page-contracts";
import { populate as layoutPopulate } from "@sps/sps-website-builder-models-layout-contracts";
import { populate as metatagPopulate } from "@sps/sps-website-builder-models-metatag-contracts";

export const populate = {
  ...parentPopulate,
  layout: {
    populate: layoutPopulate,
  },
  metatag: {
    populate: metatagPopulate,
  },
};
