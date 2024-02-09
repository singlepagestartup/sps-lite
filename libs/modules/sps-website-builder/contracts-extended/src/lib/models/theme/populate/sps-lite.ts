import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/theme/populate";
import { populate as fontPopulate } from "@sps/sps-website-builder-contracts/lib/models/font/populate";

export const populate = {
  ...parentPopulate,
  fonts: {
    populate: fontPopulate,
  },
};
