import { populate as parentPopulate } from "@sps/sps-subscription-models-subscription-contracts";
import { populate as tierPopulate } from "@sps/sps-subscription-models-tier-contracts";
import { populate as invoicePopulate } from "@sps/sps-billing-models-invoice-contracts";
import { populate as userPopulate } from "@sps/sps-rbac-models-user-contracts";

export const populate = {
  ...parentPopulate,
  tier: {
    populate: tierPopulate,
  },
  invoice: {
    populate: invoicePopulate,
  },
  user: {
    populate: userPopulate,
  },
};
