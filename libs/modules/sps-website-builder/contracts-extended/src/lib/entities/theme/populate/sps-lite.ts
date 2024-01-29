import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/entities/theme/populate";
import { populate as fontPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/font/populate";

export const populate = {
  ...parentPopulate,
  fonts: {
    populate: fontPopulate,
  },
};
