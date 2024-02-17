import { populate as parentPopulate } from "@sps/sps-website-builder-flyout-contracts";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-hero-section-block-contracts";

const pageBlockPopulate = { ...heroSectionBlockPopulate };

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: pageBlockPopulate,
  },
};
