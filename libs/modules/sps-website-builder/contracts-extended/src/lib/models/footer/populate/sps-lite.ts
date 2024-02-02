import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/footer/populate";
import { populate as footerBlockPopulate } from "@sps/sps-website-builder-contracts/lib/models/footer-block/populate";

const pageBlockPopulate = {
  ...footerBlockPopulate,
};

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: pageBlockPopulate,
  },
};
