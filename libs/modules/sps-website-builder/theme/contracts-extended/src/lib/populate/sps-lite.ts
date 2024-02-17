import { populate as parentPopulate } from "@sps/sps-website-builder-theme-contracts";
import { populate as fontPopulate } from "@sps/sps-website-builder-font-contracts";

export const populate = {
  ...parentPopulate,
  fonts: {
    populate: fontPopulate,
  },
};
