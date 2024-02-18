import { populate as parentPopulate } from "@sps/sps-subscription-contracts/lib/models/subscription/populate";
import { populate as tierPopulate } from "@sps/sps-subscription-contracts/lib/models/tier/populate";
import { populate as invoicePopulate } from "@sps/sps-billing-invoice-contracts";
import { populate as userPopulate } from "@sps/sps-rbac-contracts/lib/models/user/populate";

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
