import { populate as parentPopulate } from "@sps/sps-website-builder-models-theme-contracts";
import { populate as fontPopulate } from "@sps/sps-website-builder-models-font-contracts";

export const populate = {
  ...parentPopulate,
  fonts: {
    populate: fontPopulate,
  },
};
