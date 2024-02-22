import { populate as parentPopulate } from "@sps/sps-subscription-subscription-contracts";
import { populate as tierPopulate } from "@sps/sps-subscription-tier-contracts";
import { populate as invoicePopulate } from "@sps/sps-billing-models-invoice-contracts";
import { populate as userPopulate } from "@sps/sps-rbac-user-contracts";

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
