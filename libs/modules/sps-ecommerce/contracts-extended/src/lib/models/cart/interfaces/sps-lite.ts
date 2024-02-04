import { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/cart/interfaces";
import { IModel as IOrder } from "@sps/sps-ecommerce-contracts/lib/models/order/interfaces";
import { IModel as IUser } from "@sps/sps-rbac-contracts/lib/models/user/interfaces";

export interface IModel extends IParentModel {
  orders?: IOrder[] | null;
  user?: IUser | null;
}
