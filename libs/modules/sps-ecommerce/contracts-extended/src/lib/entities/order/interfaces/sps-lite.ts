import type { IEntity as IParentEntity } from "@sps/sps-ecommerce-contracts/lib/entities/order/interfaces";
import type { IEntity as ICart } from "@sps/sps-ecommerce-contracts/lib/entities/cart/interfaces";
import type { IEntity as IOrderProduct } from "@sps/sps-ecommerce-contracts/lib/entities/order-product/interfaces";
import type { IEntity as IUser } from "@sps/sps-rbac-contracts/lib/entities/user/interfaces";

export interface IEntity extends IParentEntity {
  user?: IUser;
  cart?: ICart | null;
  orderProducts?: IOrderProduct[] | null;
}
