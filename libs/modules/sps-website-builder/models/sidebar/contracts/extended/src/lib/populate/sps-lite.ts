import { populate as parentPopulate } from "@sps/sps-website-builder-models-sidebar-contracts";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-models-hero-section-block-contracts";

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: { ...heroSectionBlockPopulate },
  },
};
