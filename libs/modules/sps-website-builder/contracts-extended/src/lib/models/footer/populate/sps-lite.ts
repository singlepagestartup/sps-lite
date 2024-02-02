import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/footer/populate";
import { populate as pageBlockPopulate } from "@sps/sps-subscription-contracts/lib/models/populate";

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: pageBlockPopulate,
  },
};
