import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/attribute/interfaces";
import type { IModel as ITier } from "@sps/sps-subscription-contracts/lib/models/tier/interfaces";
import type { IModel as IAttributeKey } from "@sps/sps-subscription-contracts/lib/models/attribute-key/interfaces";
import type { IModel as ICurrency } from "@sps/sps-billing-contracts/lib/models/currency/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel extends IParentModel {
  tiers?: ITier[] | null;
  attributeKey?: IAttributeKey | null;
  media?: IFile[] | null;
  currency?: ICurrency | null;
  additionalMedia?: IFile[] | null;
}
