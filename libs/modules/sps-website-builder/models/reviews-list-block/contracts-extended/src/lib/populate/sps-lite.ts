import { populate as parentPopulate } from "@sps/sps-website-builder-reviews-list-block-contracts";
import { populate as reviewPopulate } from "libs/modules/sps-crm/models/review/contracts/src/lib/populate";

export const populate = {
  ...parentPopulate,
  reviews: {
    populate: reviewPopulate,
  },
};
