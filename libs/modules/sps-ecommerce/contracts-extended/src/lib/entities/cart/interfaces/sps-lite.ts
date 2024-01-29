import { IEntity as IParentEntity } from "@sps/sps-ecommerce-contracts/lib/entities/cart/interfaces";
import { IEntity as IUser } from "@sps/sps-rbac-contracts/lib/entities/user/interfaces";

export interface IEntity extends IParentEntity {
  user?: IUser | null;
}
