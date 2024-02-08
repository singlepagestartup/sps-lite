import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/slide-over/populate";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-contracts/lib/models/header-section-block/populate";

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: {
      ...heroSectionBlockPopulate,
    },
  },
};
