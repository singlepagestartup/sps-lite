import type { IModel as IParentModel } from "@sps/sps-subscription-models-attribute-contracts";
import type { IModel as ITier } from "@sps/sps-subscription-models-tier-contracts";
import type { IModel as IAttributeKey } from "@sps/sps-ecommerce-models-attribute-key-contracts";
import type { IModel as ICurrency } from "@sps/sps-billing-models-currency-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";

export interface IModel extends IParentModel {
  tiers?: ITier[] | null;
  attributeKey?: IAttributeKey | null;
  media?: IFile[] | null;
  currency?: ICurrency | null;
  additionalMedia?: IFile[] | null;
}
