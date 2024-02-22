import { populate as parentPopulate } from "@sps/sps-website-builder-models-modal-contracts";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-models-hero-section-block-contracts";

const pageBlockPopulate = { ...heroSectionBlockPopulate };

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: pageBlockPopulate,
  },
};
