import { populate as parentPopulate } from "@sps/sps-website-builder-models-footer-contracts";
import { populate as footerBlockPopulate } from "@sps/sps-website-builder-models-footer-block-contracts";

const pageBlockPopulate = {
  ...footerBlockPopulate,
};

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: pageBlockPopulate,
  },
};
