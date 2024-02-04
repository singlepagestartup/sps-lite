import type { IModel as IParentModel } from "@sps/sps-billing-contracts/lib/models/currency/interfaces";
import type { IModel as ITier } from "@sps/sps-subscription-contracts/lib/models/tier/interfaces";

export interface IModel extends IParentModel {
  tiers?: ITier;
}
