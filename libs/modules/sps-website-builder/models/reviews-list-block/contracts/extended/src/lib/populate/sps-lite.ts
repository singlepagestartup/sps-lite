import { populate as parentPopulate } from "@sps/sps-website-builder-reviews-list-block-contracts";
import { populate as reviewPopulate } from "@sps/sps-crm-review-contracts";

export const populate = {
  ...parentPopulate,
  reviews: {
    populate: reviewPopulate,
  },
};
