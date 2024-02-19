import type { IModel as IParentModel } from "@sps/sps-rbac-user-contracts";
import { IModel as ICart } from "@sps/sps-ecommerce-cart-contracts";

export interface IModel extends IParentModel {
  cart?: ICart | null;
}
