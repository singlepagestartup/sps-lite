import { populate as pricingBlockPopulate } from "../tiers-list-block/populate";
import { populate as editSubscriptionBlockPopulate } from "../edit-subscription-block/populate";

export const populate = {
  ...pricingBlockPopulate,
  ...editSubscriptionBlockPopulate,
};
