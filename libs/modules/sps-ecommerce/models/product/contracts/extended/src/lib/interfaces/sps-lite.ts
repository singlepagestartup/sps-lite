import type { IModel as IParentModel } from "@sps/sps-ecommerce-models-product-contracts";
import type { IModel as IAttribute } from "@sps/sps-ecommerce-models-attribute-contracts";
import type { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";

export interface IModel extends IParentModel {
  attributes?: IAttribute[] | null;
  media?: IFile[] | null;
}
