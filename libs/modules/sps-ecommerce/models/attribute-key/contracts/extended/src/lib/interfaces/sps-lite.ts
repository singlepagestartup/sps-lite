import type { IModel as IParentModel } from "@sps/sps-ecommerce-attribute-key-contracts";
import type { IModel as IAttribute } from "@sps/sps-ecommerce-attribute-contracts";

export interface IModel extends IParentModel {
  attributes?: IAttribute[] | null;
}
