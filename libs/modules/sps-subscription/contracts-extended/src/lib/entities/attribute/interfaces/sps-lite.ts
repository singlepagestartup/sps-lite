import type { IEntity as IParentEntity } from "@sps/sps-subscription-contracts/lib/entities/attribute/interfaces";
import type { IEntity as ITier } from "@sps/sps-subscription-contracts/lib/entities/tier/interfaces";
import type { IEntity as IAttributeKey } from "@sps/sps-subscription-contracts/lib/entities/attribute-key/interfaces";
import type { IEntity as ICurrency } from "@sps/sps-billing-contracts/lib/entities/currency/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IEntity extends IParentEntity {
  tiers?: ITier[] | null;
  attributeKey?: IAttributeKey | null;
  media?: IFile[] | null;
  currency?: ICurrency | null;
  additionalMedia?: IFile[] | null;
}
