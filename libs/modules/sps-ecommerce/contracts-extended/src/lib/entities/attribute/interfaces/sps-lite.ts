import { IEntity as IParentEntity } from "@sps/sps-ecommerce-contracts/lib/entities/attribute/interfaces";
import { IEntity as IAttributeKey } from "@sps/sps-ecommerce-contracts/lib/entities/attribute-key/interfaces";
import { IEntity as IProduct } from "@sps/sps-ecommerce-contracts/lib/entities/product/interfaces";
import type { IEntity as ICurrency } from "@sps/sps-billing-contracts/lib/entities/currency/interfaces";
import type { IEntity as IFile } from "@sps/sps-file-storage-contracts/lib/entities/file/interfaces";

export interface IEntity extends IParentEntity {
  attributeKey?: IAttributeKey | null;
  products?: IProduct[] | null;
  media?: IFile[] | null;
  currency?: ICurrency | null;
  additionalMedia?: IFile[] | null;
}
