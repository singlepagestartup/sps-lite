import type { IModel as IParentModel } from "@sps/sps-subscription-attribute-contracts";
import type { IModel as ITier } from "@sps/sps-subscription-tier-contracts";
import type { IModel as IAttributeKey } from "@sps/sps-ecommerce-attribute-key-contracts";
import type { IModel as ICurrency } from "@sps/sps-billing-models-currency-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-file-contracts";

export interface IModel extends IParentModel {
  tiers?: ITier[] | null;
  attributeKey?: IAttributeKey | null;
  media?: IFile[] | null;
  currency?: ICurrency | null;
  additionalMedia?: IFile[] | null;
}
