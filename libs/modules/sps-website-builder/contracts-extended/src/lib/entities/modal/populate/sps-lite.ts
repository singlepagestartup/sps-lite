import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/entities/modal/populate";
import { populate as pageBlockPopulate } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/populate";

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: pageBlockPopulate,
  },
};
