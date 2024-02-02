import { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/attribute/interfaces";
import { IModel as IAttributeKey } from "@sps/sps-ecommerce-contracts/lib/models/attribute-key/interfaces";
import { IModel as IProduct } from "@sps/sps-ecommerce-contracts/lib/models/product/interfaces";
import type { IModel as ICurrency } from "@sps/sps-billing-contracts/lib/models/currency/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel extends IParentModel {
  attributeKey?: IAttributeKey | null;
  products?: IProduct[] | null;
  media?: IFile[] | null;
  currency?: ICurrency | null;
  additionalMedia?: IFile[] | null;
}
