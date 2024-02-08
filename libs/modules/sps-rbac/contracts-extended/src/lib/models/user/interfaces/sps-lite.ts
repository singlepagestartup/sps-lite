import type { IModel as IParentModel } from "@sps/sps-rbac-contracts/lib/models/user/interfaces";
import { IModel as ICart } from "@sps/sps-ecommerce-contracts/lib/models/cart/interfaces";

export interface IModel extends IParentModel {
  cart?: ICart | null;
}
