import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/modal/populate";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-contracts/lib/models/header-section-block/populate";

const pageBlockPopulate = { ...heroSectionBlockPopulate };

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: pageBlockPopulate,
  },
};
