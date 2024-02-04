import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/sidebar/populate";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-contracts/lib/models/hero-section-block/populate";

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: { ...heroSectionBlockPopulate },
  },
};
