import type { IModel as IParentModel } from "@sps/sps-billing-currency-contracts";
import type { IModel as ITier } from "@sps/sps-subscription-tier-contracts";

export interface IModel extends IParentModel {
  tiers?: ITier;
}
