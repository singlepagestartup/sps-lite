import { IModel as IParentModel } from "@sps/sps-ecommerce-attribute-contracts";
import { IModel as IAttributeKey } from "@sps/sps-ecommerce-attribute-key-contracts";
import { IModel as IProduct } from "@sps/sps-ecommerce-product-contracts";
import type { IModel as ICurrency } from "@sps/sps-billing-currency-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-file-contracts";

export interface IModel extends IParentModel {
  attributeKey?: IAttributeKey | null;
  products?: IProduct[] | null;
  media?: IFile[] | null;
  currency?: ICurrency | null;
  additionalMedia?: IFile[] | null;
}
