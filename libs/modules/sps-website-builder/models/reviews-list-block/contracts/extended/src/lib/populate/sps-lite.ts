import { populate as parentPopulate } from "@sps/sps-website-builder-models-reviews-list-block-contracts";
import { populate as reviewPopulate } from "@sps/sps-crm-models-review-contracts";

export const populate = {
  ...parentPopulate,
  reviews: {
    populate: reviewPopulate,
  },
};
