import { populate as parentPopulate } from "@sps/sps-elements-contracts/lib/models/flyout/populate";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-contracts/lib/models/hero-section-block/populate";

const pageBlockPopulate = { ...heroSectionBlockPopulate };

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: pageBlockPopulate,
  },
};
