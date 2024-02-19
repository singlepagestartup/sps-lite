import type { IModel as IParentModel } from "@sps/sps-ecommerce-product-contracts";
import type { IModel as IAttribute } from "@sps/sps-ecommerce-attribute-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel extends IParentModel {
  attributes?: IAttribute[] | null;
  media?: IFile[] | null;
}
