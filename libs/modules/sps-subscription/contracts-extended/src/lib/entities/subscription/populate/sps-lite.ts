import { populate as parentPopulate } from "@sps/sps-subscription-contracts/lib/entities/subscription/populate";
import { populate as tierPopulate } from "@sps/sps-subscription-contracts/lib/entities/tier/populate";
import { populate as invoicePopulate } from "@sps/sps-billing-contracts/lib/entities/invoice/populate";
import { populate as userPopulate } from "@sps/sps-rbac-contracts/lib/entities/user/populate";

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
