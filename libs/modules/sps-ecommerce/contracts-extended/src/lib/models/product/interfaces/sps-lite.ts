import type { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/product/interfaces";
import type { IModel as IAttribute } from "@sps/sps-ecommerce-contracts/lib/models/attribute/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel extends IParentModel {
  attributes?: IAttribute[] | null;
  media?: IFile[] | null;
}
