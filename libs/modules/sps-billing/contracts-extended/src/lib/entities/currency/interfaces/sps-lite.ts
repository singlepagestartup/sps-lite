import type { IEntity as IParentEntity } from "@sps/sps-billing-contracts/lib/entities/currency/interfaces";
import type { IEntity as ITier } from "@sps/sps-subscription-contracts/lib/entities/tier/interfaces";

export interface IEntity extends IParentEntity {
  tiers?: ITier;
}
