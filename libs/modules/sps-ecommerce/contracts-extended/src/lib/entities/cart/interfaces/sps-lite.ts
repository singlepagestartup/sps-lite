import { IEntity as IParentEntity } from "@sps/sps-ecommerce-contracts/lib/entities/cart/interfaces";
import { IEntity as IOrder } from "@sps/sps-ecommerce-contracts/lib/entities/order/interfaces";
import { IEntity as IUser } from "@sps/sps-rbac-contracts/lib/entities/user/interfaces";

export interface IEntity extends IParentEntity {
  orders?: IOrder[] | null;
  user?: IUser | null;
}
