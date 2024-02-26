import type { IModel as IParentModel } from "@sps/sps-billing-models-currency-contracts";
import type { IModel as ITier } from "@sps/sps-subscription-models-tier-contracts";

export interface IModel extends IParentModel {
  tiers?: ITier;
}
