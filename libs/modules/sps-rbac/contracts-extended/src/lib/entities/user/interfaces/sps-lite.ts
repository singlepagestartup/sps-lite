import type { IEntity as IParentEntity } from "@sps/sps-rbac-contracts/lib/entities/user/interfaces";
import { IEntity as ICart } from "@sps/sps-ecommerce-contracts/lib/entities/cart/interfaces";

export interface IEntity extends IParentEntity {
  cart?: ICart | null;
}
