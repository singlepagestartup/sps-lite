import { populate as parentPopulate } from "@sps/sps-crm-contracts/lib/models/reviews-list-block/populate";
import { populate as reviewPopulate } from "@sps/sps-crm-contracts/lib/models/review/populate";

export const populate = {
  ...parentPopulate,
  reviews: {
    populate: reviewPopulate,
  },
};
