import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/navbar/populate";
import { populate as navbarBlockPopulate } from "@sps/sps-website-builder-contracts/lib/models/navbar-block/populate";

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: { ...navbarBlockPopulate },
  },
};
