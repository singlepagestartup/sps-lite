import type { IModel as IParentModel } from "@sps/sps-rbac-models-user-contracts";
import { IModel as ICart } from "@sps/sps-ecommerce-models-cart-contracts";

export interface IModel extends IParentModel {
  cart?: ICart | null;
}
