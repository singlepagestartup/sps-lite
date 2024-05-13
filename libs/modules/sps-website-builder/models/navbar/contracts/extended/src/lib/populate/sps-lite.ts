import { populate as parentPopulate } from "@sps/sps-website-builder-models-navbar-contracts";
import { populate as navbarBlockPopulate } from "@sps/sps-website-builder-models-navbar-block-contracts";

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: { ...navbarBlockPopulate },
  },
};
