import { IModel as IParentModel } from "@sps/sps-ecommerce-models-cart-contracts";
import { IModel as IOrder } from "@sps/sps-ecommerce-models-order-contracts";
import { IModel as IUser } from "@sps/sps-rbac-models-user-contracts";

export interface IModel extends IParentModel {
  orders?: IOrder[] | null;
  user?: IUser | null;
}
